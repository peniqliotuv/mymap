import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import mockery from 'mockery';

mockery.enable();
mockery.registerMock('../../../assets/arrowLeft-small.png');
mockery.registerMock('../../../assets/arrowRight-small.png');
mockery.registerMock('../../../assets/profile-small.png');
mockery.registerMock('../../../assets/notifications-small.png');

import SettingsPage from '../../settings/scenes/SettingsPage';

chai.use(chaiEnzyme());

describe('<SettingsPage />', () => {

  context('when the Settings Page renders', () => {
    it('renders menu items for edit profile and edit notifications', () => {
        const settingsPage = mount(<SettingsPage />);

        expect(settingsPage.find('[title="Settings"]').length).to.equal(1);
        expect(settingsPage.find('[title="Edit notification"]').length).to.equal(1);
        expect(settingsPage.find('[title="Edit profile"]').length).to.equal(1);
        expect(settingsPage.find('[title="Log out"]').length).to.equal(1);
    });
  });
});
