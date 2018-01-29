import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { Text } from 'react-native';

import TimelineEventModal from '../../timeline/components/TimelineEventModal';

chai.use(chaiEnzyme());

describe('<TimelineEventModal />', () => {
  context('when passed in a data object with appName, timestamp, and body', () => {
    const data = {
      appName: 'side effect',
      timestamp: '5:51 PM',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus nec consequat rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque tortor ut bibendum sagittis. Vivamus volutpat massa et molestie gravida. Integer sapien diam, vulputate eget elit eu, interdum sagittis nisi. Maecenas interdum, metus ut consequat fringilla, tortor libero mattis risus, in varius mi felis quis felis. Nunc congue quis odio sit amet consectetur. Fusce ac leo vulputate, bibendum ex ut, maximus elit. Mauris sodales rhoncus nulla, vel sollicitudin metus condimentum posuere. Fusce ullamcorper blandit augue ac malesuada. Phasellus placerat turpis sagittis lacus ultricies efficitur. Nulla ac dolor venenatis, luctus justo vitae, sodales est. Pellentesque facilisis mauris id felis molestie ultrices.'
    };

    const hideModalMock = () => {};

    it('the app name correctly renders', () => {
      const timelineEventModal = shallow(<TimelineEventModal data={data} hideModal={hideModalMock}/>);
      expect(timelineEventModal.find('#appName').first().children()).to.contain(data.appName);
    });

    it('the timestamp correctly renders', () => {      
      const timelineEventModal = shallow(<TimelineEventModal data={data} hideModal={hideModalMock}/>);
      expect(timelineEventModal.find('#timestamp').first().children()).to.contain(data.timestamp);
    });

    it('the body correctly renders', () => {
      const timelineEventModal = shallow(<TimelineEventModal data={data} hideModal={hideModalMock}/>);
      expect(timelineEventModal.find('#body').first().children()).to.contain(data.body);
    });

    it('should call hideModal() when dimmed overlay is pressed', () => {
      const hideModalSpy = sinon.spy();
      const timelineEventModal = shallow(<TimelineEventModal data={data} hideModal={hideModalSpy}/>);
      timelineEventModal.find('#overlay').simulate('press');
      expect(hideModalSpy).to.have.property('callCount', 1);
    });
  });
});
