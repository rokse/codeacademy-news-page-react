import './EventCardStyle.css';

const EventCard = ({ data: { day, month, eventLocation, eventDescription } }) => {
  return (
    <div className="event-card">
      <div className="event-date-floatter">
        <div className="day">{day}</div>
        <div className="month">{month}</div>
      </div>
      <p>{eventLocation}</p>
      <h2>{eventDescription}</h2>
    </div>
  );
};

export default EventCard;