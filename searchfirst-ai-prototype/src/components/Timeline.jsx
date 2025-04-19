import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">
            {event.date}
          </div>
          <div className="timeline-content">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            {event.status && (
              <div className={`timeline-status status-${event.status}`}>
                {event.statusText}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string,
      statusText: PropTypes.string
    })
  ).isRequired
};

export default Timeline;