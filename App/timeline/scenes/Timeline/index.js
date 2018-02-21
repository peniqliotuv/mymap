import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Alert, Modal, TouchableWithoutFeedback, Button } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
/*
I'm just leaving these comments in here so it's easy to remove and add in
the cancerbase SDK in case we have issues with testing hitting routes
*/
// import CancerBaseSDK, { LoginButton } from 'cancerbase-sdk';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScrollToTop from '../../components/ScrollToTop';
import TimelineEventGroup from '../../components/TimelineEventGroup';
import TimelineEventModal from '../../components/TimelineEventModal';
import TimelineHeader from '../../components/TimelineHeader';
import ParallaxHeader from '../../components/ParallaxHeader';
import MainDrawer from '../../components/MainDrawer';
import { toggleEvent } from '../../actions';
import s from './styles';
import colors from '~/App/styles/colors';

class TimelineList extends Component {

  state = {
    modalVisible: false,
    modalData: null,
  };

  PARALLAX_HEADER_HEIGHT = 120;

  handleScrollToTop = () => {
    // Scroll to y = 120 because that is how tall our header is
    this.parallaxScrollView.scrollTo({
      y: this.PARALLAX_HEADER_HEIGHT,
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

    const user = {
      name: 'Jane Doe',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
    };

    const apps = [
      {
        name: 'side effect',
        color: '#5EFFAB',
        backgroundColor: '#6665ff',
      },
      {
        name: 'infusion',
        color: '#FDF885',
        backgroundColor: '#6665ff',
      },
      {
        name: 'medmind',
        color: '#6BC5FF',
        backgroundColor: '#6665ff',
      },
    ];

    const { activeApps } = this.props;
    const filteredEvents = this.filterApps(activeApps, data);
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
        content={<MainDrawer apps={filteredApps} onPress={this.closeControlPanel} toggleEvent={this.props.toggleEvent}/>}
        openDrawerOffset={0.3}
        type='displace'
        tapToClose
      >
        <View style={s.outerView}>
          <TimelineHeader onPress={this.openControlPanel} />
          <ParallaxScrollView
            style={s.scrollView}
            parallaxHeaderHeight={this.PARALLAX_HEADER_HEIGHT}
            renderBackground={() => (
              <View
                key='background'
                style={{backgroundColor: colors.purple, height: 150}}
              >
              </View>
            )}
            renderForeground={() => <ParallaxHeader user={user} />}
            stickyHeaderHeight={50}
            renderStickyHeader={() => <ScrollToTop handlePress={this.handleScrollToTop} />}
            backgroundColor='transparent'
            fadeOutForeground={false}
            ref={(ref) => this.parallaxScrollView = ref}
          >
            {
              filteredEvents.map((item, index) => {
                return <TimelineEventGroup data={item} key={index} handleTimelineEventPress={this.handleTimelineEventPress}/>
              })
            }
          </ParallaxScrollView>

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
