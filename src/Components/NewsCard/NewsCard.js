const NewsCard = ({ data:{ imageUrl, newsCategory, newsDescription, newsDate } }) => {
  return (
    <a href="#">
      <div className="card">
        <img src={imageUrl} />
        <div className="card-info">
          <p className="news-category">{newsCategory}</p>
          <h2 className="news-description">{newsDescription}</h2>
          <p className="news-date">{newsDate}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;