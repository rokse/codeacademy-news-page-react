import MainNews from "../MainNews/MainNews";
import NewsLink from "../NewsLink/NewsLink";

const NewsWrapper = ({ data:{ mainNewsInfo, secondaryNewsInfo } }) => {
  return (
    <div className="news-wrapper">
      <h1>Naujienos</h1>
      <MainNews info={mainNewsInfo} />
      <MainNews info={secondaryNewsInfo} />
      <NewsLink text="Visos naujienos" />
    </div>
  );
};

export default NewsWrapper;