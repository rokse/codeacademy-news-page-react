import podcastsImage from '../Images/podcastsImage.png';

const PodcastsCard = (props) => {
  return (
    <div className="podcasts-card">
      <img src={podcastsImage} />
      <div className="podcasts-card-description">
        <h2>{props.headingInfo}</h2>
        <p className="news-date">{props.date}</p>
      </div>
    </div>
  );
};

export default PodcastsCard;