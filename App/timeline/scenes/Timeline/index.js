import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    Modal,
    Button,
    Animated,
    Image,
    TouchableOpacity,
    Alert 
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
import { toggleEvent } from '../../actions';
import s from './styles';
import colors from '~/App/styles/colors';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const HEADER_STICKYEXTRA_HEIGHT = 60;

class TimelineList extends Component {

  state = {
    modalVisible: false,
    modalData: null,
    scrollY: new Animated.Value(0),
    fontLoaded: false,
    events: [],
  };

  async componentDidMount() {

    const apps = [
      'medmind',
      'infusion',
      'side effect',
    ]
    for (let i = 0; i < 1; ++i) {
    
      CancerBaseSDK.timeline.create({
        date: new Date(2018, 2, 1, 2, 2),
        category: apps[i],
        data: 'dummy GET route data',
        tags: ['abcde', '12345'],
      })
      .then(event => {
        console.log(event);
        this.setState({ eventId: event.eventId });
      })
      .catch(err => console.log(err));
    }

    CancerBaseSDK.timeline.get()
      .then((events) => {
        this.setState({ events: this.transformCancerBaseSDKEvents(events) });
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Profile not found');
      });
    await Font.loadAsync({
      'SF-Pro-Text-LightItalic': require('../../../assets/fonts/SF-Pro-Text-LightItalic.otf'),
      'SF-Pro-Text-SemiboldItalic': require('../../../assets/fonts/SF-Pro-Text-SemiboldItalic.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  // transforms the event data received from CancerBaseSDK.timeline.get()
  transformCancerBaseSDKEvents = (events) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];

    // sort the events by ISO date (can be done lexicographically)
    const sortedEvents = events.sort((a, b) => {
      return (a.date > b.date);
    });

    let tempDate;
    const result = [];
    for (let i = 0; i < sortedEvents.length; i++) {
      const event = sortedEvents[i];
      const date = new Date(event.date);

      // make a new object representing one day
      if (result.length === 0 || this.daysBetweenDates(tempDate, date) > 0) {
        tempDate = date;
        const dayString = days[date.getDay()];
        const monthString = months[date.getMonth()];
        const dateString = `${dayString} ${monthString} ${date.getDate()}, ${date.getFullYear()}`;
        result.push({
          date: dateString,
          events: [],
        });
      }

      // append the event
      const hour = date.getHours();
      const minute = date.getMinutes();
      const hourString = (hour === 0 || hour === 12 ? '12' : parseInt(hour % 12, 10));
      const minuteString = (minute < 10 ? `0${parseInt(minute, 10)}` : `${parseInt(minute, 10)}`);
      const timeString = `${hourString}:${minuteString} ${(hour >= 12 ? 'AM' : 'PM')}`;
      result[result.length - 1].events.push({
        appName: event.category,
        timestamp: timeString,
        body: event.data,
      });
    }
    
    return result;
  }

  // helper to calculate how many days separate two Dates
  daysBetweenDates = (dateA, dateB) => {
    const millisPerDay = 1000 * 60 * 60 * 24;
    const millisDifference = dateB.getTime() - dateA.getTime();
    return Math.round(millisDifference / millisPerDay);
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

  componentDidCatch(err, info) {
    console.log('did catch');
  }

  closeControlPanel = () => {
    this.drawer.close()
  }

  openControlPanel = () => {
    this.drawer.open()
  }

  gotoSettings = () => {
      this.props.navigation.navigate('SettingsNavigator');
  }

  filterApps = (obj, data) => {
    const newData = [];
    if (obj.activeApps.length > 0) {
      data.map((item, index) => {
        const arr = item.events.filter(event => {
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
    newApps.forEach(item => {
      if (obj.activeApps.includes(item.name)) {
        item.backgroundColor = item.color;
      }
    });
    return newApps;
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
        outputRange: [HEADER_MAX_HEIGHT-80, -8],
        extrapolate: 'clamp',
    });
    const scrollToTopTranslate = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    })

    const { activeApps } = this.props;
    const filteredEvents = this.filterApps(activeApps, this.state.events);
    const filteredApps = this.modifyColor(activeApps, apps);

    /*
      Same here: I'm leaving this in here so we can just add it in the render() function if we want to test
      the cancerbase SDK login functionality.
    */
    // const loginButton = (
    //   <LoginButton
    //     scopes={[
    //       'cb.appData.read',
    //       'cb.profile',
    //       'cb.timeline'
    //     ]}
    //     onLogin={() => {
    //       CancerBaseSDK.user.getProfile()
    //         .then(profile => {
    //           console.log(profile);
    //          })
    //         .catch(e => console.error(e));
    //     }}
    //     onError={err => console.log(err)}
    //   />
    // );

    return (
        <Drawer
            ref={(ref) => this.drawer = ref}
            content={ <MainDrawer
                        apps={filteredApps}
                        onPress={this.closeControlPanel}
                        toggleEvent={this.props.toggleEvent}
                        />
                    }
            openDrawerOffset={0.3}
            type='displace'
            tapToClose
            >
            <View style={s.outerView}>
                <Animated.View style={[s.scrollToTop,
                    {transform: [{translateY: scrollToTopTranslate}], }
                ]}>
                    <ScrollToTop
                        handlePress={this.handleScrollToTop}
                    />
                </Animated.View>
                <ScrollView style={s.scrollView}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY} }}] )}
                    ref={(ref) => this.scrollView = ref}
                    >
                    <View marginTop={HEADER_MAX_HEIGHT+HEADER_STICKYEXTRA_HEIGHT}>
                        {
                          filteredEvents.map((item, index) => {
                            return <TimelineEventGroup
                                        data={item}
                                        key={index}
                                        handleTimelineEventPress={this.handleTimelineEventPress}
                                    />
                          })
                        }
                    </View>
                </ScrollView>
                <Animated.View style={[s.header, {height: headerHeight}]}>
                    <Animated.Image
                        style={[
                          s.backgroundImage,
                          {
                              opacity: imageOpacity,
                              transform: [{ translateY: imageTranslate }],
                              height: HEADER_MAX_HEIGHT
                          },
                        ]}
                        source={{ uri: user.imageUrl }}
                    />
                    <View style={s.bar}>
                        <TouchableOpacity onPress={this.openControlPanel}>
  	                         <Image source={require('~/App/assets/menu-bars.png')} />
                        </TouchableOpacity>
                        {
                            this.state.fontLoaded && (
                                <Animated.View style={[
                                    s.titleWrapper,
                                    {transform: [{ scale: titleScale }, { translateY: titleTranslate },],},
                                ]}>
                                    <Text style={[s.title, {fontFamily: 'SF-Pro-Text-LightItalic'} ]}>my</Text>
                                    <Text style={[s.title, {fontFamily: 'SF-Pro-Text-SemiboldItalic'}]}>map</Text>
                                    </Animated.View>
                            )
                        }
                        <TouchableOpacity onPress={this.gotoSettings}>
  	                         <Image source={require('~/App/assets/settings-circles.png')} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                {this.state.modalVisible && <TimelineEventModal data={this.state.modalData} hideModal={this.hideModal}/>}
            </View>
        </Drawer>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { activeApps } = state.timeline;
  return {
    activeApps: { activeApps },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEvent: (appName) => dispatch(toggleEvent(appName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineList);
