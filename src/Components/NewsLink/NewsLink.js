import './NewsLinkStyle.css';

const NewsLink = (props) => {
  return (
    <a href="#">
      <div className="news-link">
        <p>{props.text}</p>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='33'%3E%3Cpath d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fill-rule='evenodd'/%3E%3C/svg%3E" alt="arrow" />
      </div>
    </a>
  );
};

export default NewsLink;