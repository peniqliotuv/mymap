import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
/*
I'm just leaving these comments in here so it's easy to remove and add in
the cancerbase SDK in case we have issues with testing hitting routes
*/
import CancerBaseSDK from '../../../../../platform/sdk/react-native/cancerbase-sdk';
import PropTypes from 'prop-types';
import ScrollToTop from '../../components/ScrollToTop';
import TimelineEventGroup from '../../components/TimelineEventGroup';
import TimelineEventModal from '../../components/TimelineEventModal';
import MainDrawer from '../../components/MainDrawer';
import { toggleEvent } from '../../actions';
import s from './styles';
import colors from '../../../styles/colors';
import { transformCancerBaseSDKEvents } from '../../../utils/cancerBaseSDKHelper';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const HEADER_STICKYEXTRA_HEIGHT = 60;

class TimelineList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    toggleEvent: PropTypes.func.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

  state = {
    modalVisible: false,
    modalData: null,
    scrollY: new Animated.Value(0),
    fontLoaded: false,
    events: [],
    name: CancerBaseSDK.user.firstName,
    imageUrl: this.props.imageUrl,
    nameVisible: true,
  };

  componentDidMount() {
    CancerBaseSDK.timeline
      .get()
      .then((events) => {
        this.setState({ events: transformCancerBaseSDKEvents(events) });
      })
      .catch((err) => {});
    Font.loadAsync({
      'SF-Pro-Text-LightItalic': require('../../../assets/fonts/SF-Pro-Text-LightItalic.otf'),
      'SF-Pro-Text-SemiboldItalic': require('../../../assets/fonts/SF-Pro-Text-SemiboldItalic.otf'),
    }).then(() => this.setState({ fontLoaded: true }));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ imageUrl: nextProps.imageUrl });
  }

  handleScrollToTop = () => {
    this.setState({ nameVisible: false });
    this.scrollView.scrollTo({
      y: HEADER_SCROLL_DISTANCE,
      animated: true,
    });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  handleTimelineEventPress = (data) => {
    this.setState({ modalVisible: true, modalData: data });
  };

  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  gotoSettings = () => {
    this.props.navigation.navigate('SettingsNavigator');
  };

  filterApps = (obj, data) => {
    const newData = [];
    if (obj.activeApps.length > 0) {
      data.map((item) => {
        const arr = item.events.filter((event) => {
          return obj.activeApps.includes(event.appName);
        });
        if (arr.length > 0) {
          newData.push({
            date: item.date,
            events: arr,
          });
        }
      });
      return newData;
    }
    return data;
  };

  modifyColor = (obj, apps) => {
    const newApps = apps.slice();
    newApps.forEach((item) => {
      if (obj.activeApps.includes(item.name)) {
        item.backgroundColor = item.color;
      }
    });
    return newApps;
  };

  render() {
    const apps = [
      {
        name: 'side effect',
        color: '#5EFFAB',
        backgroundColor: '#0000FE',
      },
      {
        name: 'infusion',
        color: '#FDF885',
        backgroundColor: '#0000FE',
      },
      {
        name: 'medmind',
        color: '#6BC5FF',
        backgroundColor: '#0000FE',
      },
    ];

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT - 80, -8],
      extrapolate: 'clamp',
    });
    const scrollToTopTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const { activeApps } = this.props;
    const filteredEvents = this.filterApps(activeApps, this.state.events);
    const filteredApps = this.modifyColor(activeApps, apps);

    return (
      <Drawer
        ref={(ref) => (this.drawer = ref)}
        content={
          <MainDrawer
            apps={filteredApps}
            onPress={this.closeControlPanel}
            toggleEvent={this.props.toggleEvent}
          />
        }
        openDrawerOffset={0.3}
        type="displace"
        tapToClose
      >
        <View style={s.outerView}>
          <Animated.View
            style={[
              s.scrollToTop,
              { transform: [{ translateY: scrollToTopTranslate }] },
            ]}
          >
            <ScrollToTop handlePress={this.handleScrollToTop} />
          </Animated.View>
          <ScrollView
            style={s.scrollView}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
            ])}
            onMomentumScrollBegin={() => {
              if (!this.state.nameVisible) {
                this.setState({ nameVisible: true });
              }
            }}
            onMomentumScrollEnd={() => console.log('moment scroll end')}
            ref={(ref) => (this.scrollView = ref)}
          >
            <View marginTop={HEADER_MAX_HEIGHT + HEADER_STICKYEXTRA_HEIGHT}>
              {filteredEvents.map((item, index) => (
                <TimelineEventGroup
                  data={item}
                  key={index}
                  handleTimelineEventPress={this.handleTimelineEventPress}
                />
              ))}
            </View>
          </ScrollView>
          <Animated.View style={[s.header, { height: headerHeight }]}>
            <View>
              <Animated.Image
                style={[
                  s.backgroundImage,
                  {
                    opacity: imageOpacity,
                    transform: [{ translateY: imageTranslate }],
                    height: HEADER_MAX_HEIGHT,
                  },
                ]}
                source={{ uri: this.state.imageUrl }}
              />
              <View style={s.buffer} />
            </View>
            <View style={s.bar}>
              <TouchableOpacity onPress={this.openControlPanel}>
                <Image
                  style={s.menuIcon}
                  source={require('../../../assets/menu-bars.png')}
                />
              </TouchableOpacity>
              {this.state.nameVisible && (
                <View style={s.welcome}>
                  <Text style={s.welcomeText}>Welcome {this.state.name}!</Text>
                </View>
              )}
              {this.state.fontLoaded && (
                <Animated.View
                  style={[
                    s.titleWrapper,
                    {
                      transform: [
                        { scale: titleScale },
                        { translateY: titleTranslate },
                      ],
                    },
                  ]}
                >
                  <Text
                    style={[s.title, { fontFamily: 'SF-Pro-Text-LightItalic' }]}
                  >
                    my
                  </Text>
                  <Text
                    style={[
                      s.title,
                      { fontFamily: 'SF-Pro-Text-SemiboldItalic' },
                    ]}
                  >
                    map
                  </Text>
                </Animated.View>
              )}
              <TouchableOpacity onPress={this.gotoSettings}>
                <Image
                  source={require('../../../assets/settings-circles.png')}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
          {this.state.modalVisible && (
            <TimelineEventModal
              data={this.state.modalData}
              hideModal={this.hideModal}
            />
          )}
        </View>
      </Drawer>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { activeApps, imageUrl } = state.timeline;
  return {
    activeApps: { activeApps },
    imageUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEvent: (appName) => dispatch(toggleEvent(appName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineList);
