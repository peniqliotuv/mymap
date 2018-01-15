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

class TimelineList extends Component {

  PARALLAX_HEADER_HEIGHT = 120;

  handleScrollToTop = () => {
    // Scroll to y = 120 because that is how tall our header is
    this.parallaxScrollView.scrollTo({
      y: this.PARALLAX_HEADER_HEIGHT,
      animated: true,
    });
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

    return (
      <View style={{ flex: 1 }}>
        <TimelineHeader />
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
          renderStickyHeader={() => <ScrollToTop
            handlePress={this.handleScrollToTop}
          />}
          backgroundColor='transparent'
          fadeOutForeground={false}
          ref={(ref) => this.parallaxScrollView = ref}
        >
          {data.map((item, index) => {
            return <TimelineEventGroup data={item} key={index} />;
          })}
        </ParallaxScrollView>
      </View>
    );
  }
}

export default TimelineList;

