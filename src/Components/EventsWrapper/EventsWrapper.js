import EventCard from "../EventCard/EventCard";
import NewsLink from "../NewsLink/NewsLink";
import './EventsWrapperStyle.css'

const EventsWrapper = () => {
  const eventInfoObj = {
    day: '4',
    month: 'Rug',
    eventLocation: 'Online',
    eventDescription: 'Intro: Dirbtinis intelektas ir Duomenų mokslas'
  };

  return (
    <div className="events-wrapper">
      <img 
      src="https://codeacademy.lt/wp-content/uploads/2022/10/279056133_5029178327168536_4126724437953769972_n-1.png"
      alt="event-image"
      />
      <EventCard data={eventInfoObj} />
      <EventCard data={eventInfoObj} />
      <EventCard data={eventInfoObj} />
      <EventCard data={eventInfoObj} />
      <NewsLink text="Daugiau" />
    </div>
  );
};

export default EventsWrapper;