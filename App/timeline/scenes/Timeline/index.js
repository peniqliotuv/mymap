import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Alert } from 'react-native';
// import CancerBaseSDK, { LoginButton } from 'cancerbase-sdk';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScrollToTop from '../../components/ScrollToTop';
import TimelineEventGroup from '../../components/TimelineEventGroup';
import TimelineHeader from '../../components/TimelineHeader';
import ParallaxHeader from '../../components/ParallaxHeader';
import s from './styles';
import colors from '~/App/styles/colors';


const MY_APP_SCOPES = [
  'cb.appData.read',
  'cb.profile',
  'cb.timeline'
];

class TimelineList extends Component {

  state = {
    isParallaxHeaderVisible: true,
  };

  PARALLAX_HEADER_HEIGHT = 120;

  onError = (error) => {
    console.log('there was an error');
    console.log(error);
  };

  // callback for login success
  onLogin = async () => {
    // if (CancerBaseSDK.isLoggedIn()) {
      // console.log(CancerBaseSDK.user.details);
    // }
  };

  handleScrollToTop = () => {
    // Scroll to y = 120 because that is how tall our header is
    this.parallaxScrollView.scrollTo({
      y: 120,
      animated: true,
    });
  };

  handleScroll = (e) => {
    const { y } = e.nativeEvent.contentOffset;
    /*
    Check if we are within a y-offset of 10 of the parallax header height
    We have to do this because handleScroll is called at set interval, meaning that
    it might not ever equal PARALLAX_HEADER_HEIGHT.
    */
    if (y >= this.PARALLAX_HEADER_HEIGHT - 10 && y <= this.PARALLAX_HEADER_HEIGHT + 10
      && this.state.isParallaxHeaderVisible) {
      console.log('FALSE');
      this.setState({ isParallaxHeaderVisible: false });
    } else if (y <= this.PARALLAX_HEADER_HEIGHT && !this.state.isParallaxHeaderVisible) {
      console.log('TRUE');
      this.setState({ isParallaxHeaderVisible: true });
    }
  };

  componentDidCatch(err, info) {
    console.log('did catch');
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

    // const loginButton = (
    //   <LoginButton
    //     scope={MY_APP_SCOPES}
    //     onLogin={this.onLogin}
    //     onError={this.onError}
    //   />
    // );

    return (
      <View style={{ flex: 1 }}>
        <TimelineHeader />
        {
          !this.state.isParallaxHeaderVisible &&
          <ScrollToTop
            handlePress={this.handleScrollToTop}
            isFixed={true}
          />
        }
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
          onScroll={this.handleScroll}
          ref={(ref) => this.parallaxScrollView = ref}
        >
          {
            this.state.isParallaxHeaderVisible &&
            <ScrollToTop
              handlePress={this.handleScrollToTop}
              isFixed={false}
            />
          }
          {data.map((item, index) => {
            return <TimelineEventGroup data={item} key={index} />;
          })}
        </ParallaxScrollView>
      </View>
    );
  }
}

export default TimelineList;

