import NewsCard from "../NewsCard/NewsCard";

const MainNews = ({ info: { mainClass, newsInfo } }) => {
  let news = newsInfo.map((info, index) => {
    return (<NewsCard data={info} key={index} />);
  }); 

  return (
    <div className={mainClass}>
      {news}
    </div>
  );
};

export default MainNews;