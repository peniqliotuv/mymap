import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { Text } from 'react-native';

import TimelineEventGroup from '../../timeline/components/TimelineEventGroup';
import TimelineEvent from '../../timeline/components/TimelineEvent';

chai.use(chaiEnzyme());

describe('<TimelineEventGroup />', () => {
  const handleTimelineEventPressMock = () => {

  };

  context('when passed in a data object with no events', () => {
    it('no timeline events render', () => {
      const timelineEventGroup = shallow(<TimelineEventGroup data={{}} handleTimelineEventPress={handleTimelineEventPressMock}/>);
      expect(timelineEventGroup.find(TimelineEvent).length).to.equal(0);
    });
  });

  context('when passed in a data object with a list of events', () => {
    const data = {
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
    };

    it('the date correctly renders', () => {
      const date = data.date.toUpperCase();
      const timelineEventGroup = shallow(<TimelineEventGroup data={data} handleTimelineEventPress={handleTimelineEventPressMock}/>);
      expect(timelineEventGroup.find(Text).first().children()).to.contain(date);
    });

    it('correctly renders a list of <TimelineEvent />s', () => {

      const timelineEventGroup = shallow(<TimelineEventGroup data={data} handleTimelineEventPress={handleTimelineEventPressMock}/>);
      const posts = timelineEventGroup.find(TimelineEvent);

      expect(posts.length).to.equal(4);

      posts.forEach((post, index) => {
        const eventData = data.events[index];
        expect(post).to.have.props({
          appName: eventData.appName,
          timestamp: eventData.timestamp,
          body: eventData.body,
        });

        expect(post.key()).to.equal(String(index));
      });
    });
  });
});
