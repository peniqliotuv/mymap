import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { dateToDayMonthDateYearString, dateToTimeString } from '../../utils/dateHelper';

chai.use(chaiEnzyme());

describe('dateToDayMonthDateYearString', () => {
  const date = new Date(2018, 10, 12);
  context('when passed a date', () => {
    it('returns a formatted string', () => {
      const result = 'Monday November 12, 2018';
      expect(dateToDayMonthDateYearString(date)).to.equal(result);
    });
  });
});

describe('dateToTimeString', () => {
  context('when passed a Date with time set before 12:00PM', () => {
    const date = new Date(2018, 10, 12, 3, 11);
    it('returns a formatted string', () => {
      const result = '3:11 AM';
      expect(dateToTimeString(date)).to.equal(result);
    });
  });

  context('when passed a Date with time set after 12:00PM', () => {
    const date = new Date(2018, 10, 12, 15, 15);
    it('returns a formatted string', () => {
      const result = '3:15 PM';
      expect(dateToTimeString(date)).to.equal(result);
    });
  });

  context('when passed a Date with time set to 12:00AM', () => {
    const date = new Date(2018, 10, 12, 0, 0);
    it('returns a formatted string', () => {
      const result = '12:00 AM';
      expect(dateToTimeString(date)).to.equal(result);
    });
  });
});
