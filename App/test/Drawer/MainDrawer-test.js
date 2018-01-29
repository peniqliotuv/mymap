import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { View } from 'react-native';
import mockery from 'mockery';
import MainDrawer from '../../timeline/components/MainDrawer';

mockery.enable();
mockery.registerMock('../../../assets/x-button.png', 'hi');
chai.use(chaiEnzyme());

describe('<MainDrawer />', () => {
  context('when passed in an empty apps array', () => {
    it('no filters render', () => {
      const drawer = shallow(<MainDrawer apps={[]}/>);
      expect(drawer.children().length).to.equal(1);
    });
    context('when passed in a populated apps array', () => {
      const apps = [
        {
          name: 'side effect',
          color: '#5EFFAB',
        },
        {
          name: 'infusion',
          color: '#FDF885',
        },
        {
          name: 'medmind',
          color: '#6BC5FF',
        },
      ];

      it('one filter is rendered for each element in the array', () => {
        const drawer = shallow(<MainDrawer apps={apps}/>);
        expect(drawer.children().length).to.equal(4);
      });
    });
  });


});
