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
import CancerBaseSDK from 'cancerbase-sdk';
import PropTypes from 'prop-types';
import ScrollToTop from '../../components/ScrollToTop';
import TimelineEventGroup from '../../components/TimelineEventGroup';
import TimelineEventModal from '../../components/TimelineEventModal';
import MainDrawer from '../../components/MainDrawer';
import { toggleEvent, fetchTimelineEvents } from '../../actions';
import s from './styles';
import colors from '~/App/styles/colors';
// import { transformCancerBaseSDKEvents } from '../../../utils/cancerBaseSDKHelper';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const HEADER_STICKYEXTRA_HEIGHT = 60;

class TimelineList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    toggleEvent: PropTypes.func.isRequired,
    fetchTimelineEvents: PropTypes.func.isRequired,
    events: PropTypes.array,
  }

  state = {
    modalVisible: false,
    modalData: null,
    scrollY: new Animated.Value(0),
    fontLoaded: false,
  };

  componentDidMount() {
    // CancerBaseSDK.timeline.get()
    //   .then((events) => {
    //     this.setState({ events: transformCancerBaseSDKEvents(events) });
    //   })
    //   .catch((err) => {});
    this.props.fetchTimelineEvents();
    Font.loadAsync({
      'SF-Pro-Text-LightItalic': require('../../../assets/fonts/SF-Pro-Text-LightItalic.otf'),
      'SF-Pro-Text-SemiboldItalic': require('../../../assets/fonts/SF-Pro-Text-SemiboldItalic.otf'),
    }).then(() => {
      this.setState({ fontLoaded: true });
    }).catch((e) => {

    });
  }

  handleScrollToTop = () => {
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
  }

  openControlPanel = () => {
    this.drawer.open();
  }

  gotoSettings = () => {
    this.props.navigation.navigate('SettingsNavigator');
  }

  filterApps = (obj, data = []) => {
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
  }

  modifyColor = (obj, apps) => {
    const newApps = apps.slice();
    newApps.forEach((item) => {
      if (obj.activeApps.includes(item.name)) {
        item.backgroundColor = item.color;
      }
    });
    return newApps;
  }

  renderEvents = (filteredEvents) => {
    const eventComponents = filteredEvents.map((item, index) => (
      <TimelineEventGroup
        data={item}
        key={index}
        handleTimelineEventPress={this.handleTimelineEventPress}
      />
    ));
    console.log(eventComponents)
    return eventComponents;
  }

  render() {
    const user = {
      name: 'Jane Doe',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
    };

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
    const data = [
      {
        date: 'Sunday November 12th, 2017',
        events: [
          {
            appName: 'medmind',
            timestamp: '10:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
          {
            appName: 'side effect',
            timestamp: '10:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
          {
            appName: 'infusion',
            timestamp: '10:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
          {
            appName: 'side effect',
            timestamp: '10:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
        ],
      },
      {
        date: 'Monday November 13th, 2017',
        events: [
          {
            appName: 'side effect',
            timestamp: '5:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
          {
            appName: 'infusion',
            timestamp: '6:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
          {
            appName: 'side effect',
            timestamp: '7:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
          {
            appName: 'medmind',
            timestamp: '9:51PM',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
          },
        ],
      },
    ];

    const { activeApps } = this.props;
    const filteredEvents = this.filterApps(activeApps, this.props.events);
    const filteredApps = this.modifyColor(activeApps, apps);
    
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
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
          <Animated.View style={[
            s.scrollToTop,
            { transform: [{ translateY: scrollToTopTranslate }] },
          ]}
          >
            <ScrollToTop handlePress={this.handleScrollToTop} />
          </Animated.View>
          <ScrollView
            style={s.scrollView}
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }])}
            ref={(ref) => this.scrollView = ref}
          >
            <View marginTop={HEADER_MAX_HEIGHT + HEADER_STICKYEXTRA_HEIGHT}>
              { this.renderEvents(filteredEvents) }
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
                source={{ uri: user.imageUrl }}
              />
              <View style={s.buffer} />
            </View>
            <View style={s.bar}>
              <TouchableOpacity onPress={this.openControlPanel}>
                <Image style={s.menuIcon} source={require('~/App/assets/menu-bars.png')} />
              </TouchableOpacity>
              {
                this.state.fontLoaded && (
                  <Animated.View style={[
                      s.titleWrapper,
                      { transform: [{ scale: titleScale }, { translateY: titleTranslate }] },
                    ]}
                  >
                    <Text style={[s.title, { fontFamily: 'SF-Pro-Text-LightItalic' }]}>my</Text>
                    <Text style={[s.title, { fontFamily: 'SF-Pro-Text-SemiboldItalic' }]}>map</Text>
                  </Animated.View>
                )
              }
              <TouchableOpacity onPress={this.gotoSettings}>
                <Image source={require('~/App/assets/settings-circles.png')} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          {
            this.state.modalVisible && (
              <TimelineEventModal
                data={this.state.modalData}
                hideModal={this.hideModal}
              />
            )
          }
        </View>
      </Drawer>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { activeApps, events } = state.timeline;
  return {
    activeApps: { activeApps },
    events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEvent: (appName) => dispatch(toggleEvent(appName)),
    fetchTimelineEvents: () => dispatch(fetchTimelineEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineList);
