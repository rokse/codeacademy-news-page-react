import { Link } from "react-router-dom";

const UlListComponent = ({ data:{ listItems, liClassName, ulClassName } }) => {

  let liElements = listItems.map((item, index) => {
    return (
    <li className={liClassName} key={index}>
      <Link to={item.url}>{item.title}</Link>
    </li>
    );
  });

  return (
    <ul className={ulClassName}>
      {liElements}
    </ul>
  );
};

export default UlListComponent;