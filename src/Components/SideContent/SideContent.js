import EventsWrapper from "../EventsWrapper/EventsWrapper";
import PodcastsWrapper from "../PodcastsWrapper/PodcastsWrapper";
import './SideContent.css'

const SideContent = () => {
  return (
    <div className="side-content">
      <h1>Podcastai ir radijo laidos</h1>
      <PodcastsWrapper />
      <h1>Renginiai</h1>
      <EventsWrapper />
    </div>
  );
};

export default SideContent;