import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TimelineEvent from '../TimelineEvent';
import s from './styles';


const TimelineEventGroup = ({ data }) => {

  const { events = [], date = '' } = data;


  return (
    <View style={s.timelineEventGroup}>
      <View style={s.dateContainer}>
        <Text style={s.date}>{ date.toUpperCase() }</Text>
      </View>
      {
        events.map((item, index) => {
          return (
            <TimelineEvent
              key={index}
              appName={item.appName}
              timestamp={item.timestamp}
              body={item.body}
            />
          );
        })
      }

      <View style={s.lineBreak}/>
    </View>
  );
};

TimelineEventGroup.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      appName: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })),
  }),
};

export default TimelineEventGroup;
