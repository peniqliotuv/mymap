import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { checkCancerBaseSDKEvent, transformCancerBaseSDKEvents } from '../../utils/cancerBaseSDKHelper';

chai.use(chaiEnzyme());

describe('checkCancerBaseSDKEvent', () => {
  context('when passed a valid event', () => {
    const event = {
      category: 'infusion',
      data: 'data-1',
      date: '2018-02-01T10:02:00.000Z',
    };
    it('returns true', () => {
      expect(checkCancerBaseSDKEvent(event)).to.equal(true);
    });
  });

  context('when passed an event with an unsupported app category', () => {
    const event = {
      category: 'unsupported',
      data: 'data-1',
      date: '2018-02-01T10:02:00.000Z',
    };
    it('returns false', () => {
      expect(checkCancerBaseSDKEvent(event)).to.equal(false);
    });
  });

  context('when passed an event with bad date formatting', () => {
    const event = {
      category: 'infusion',
      data: 'data-1',
      date: 'bad formatting',
    };
    it('returns false', () => {
      expect(checkCancerBaseSDKEvent(event)).to.equal(false);
    });
  });
});

describe('transformCancerBaseSDKEvents', () => {
  context('when passed empty data', () => {
    it('returns an empty result', () => {
      const result = transformCancerBaseSDKEvents([]);
      expect(result).to.have.lengthOf(0);
    });
  });

  context('when passed data', () => {
    const events = [
      {
        category: 'infusion',
        data: 'data-1',
        date: new Date(2018, 1, 1, 2, 2).toISOString(),
      },
      {
        category: 'medmind',
        data: 'data-2',
        date: new Date(2018, 1, 7, 2, 2).toISOString(),
      },
      {
        category: 'side effect',
        data: 'data-3',
        date: new Date(2018, 1, 1, 2, 3).toISOString(),
      },
    ];
    it('returns a formatted result', () => {
      const result = transformCancerBaseSDKEvents(events);
      expect(result).to.deep.equal([
        {
          date: 'Thursday February 1, 2018',
          events: [
            {
              appName: 'infusion',
              body: 'data-1',
              timestamp: '2:02 AM',
            },
            {
              appName: 'side effect',
              body: 'data-3',
              timestamp: '2:03 AM',
            },
          ],
        },
        {
          date: 'Wednesday February 7, 2018',
          events: [
            {
              appName: 'medmind',
              body: 'data-2',
              timestamp: '2:02 AM',
            },
          ],
        },
      ]);
    });
  });

  context('when passed data with malformed events', () => {
    const events = [
      {
        category: 'infusion',
        data: 'data-1',
        date: new Date(2018, 1, 1, 2, 2).toISOString(),
      },
      {
        category: 'medmind',
        data: 'data-2',
        date: new Date(2018, 1, 7, 2, 2).toISOString(),
      },
      {
        category: 'bad category',
        data: 'data-3',
        date: new Date(2018, 1, 1, 2, 3).toISOString(),
      },
    ];
    it('skips adding malformed events to the result', () => {
      const result = transformCancerBaseSDKEvents(events);
      expect(result).to.deep.equal([
        {
          date: 'Thursday February 1, 2018',
          events: [
            {
              appName: 'infusion',
              body: 'data-1',
              timestamp: '2:02 AM',
            },
          ],
        },
        {
          date: 'Wednesday February 7, 2018',
          events: [
            {
              appName: 'medmind',
              body: 'data-2',
              timestamp: '2:02 AM',
            },
          ],
        },
      ]);
    });
  });
});
