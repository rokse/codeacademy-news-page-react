const ProgramsCourseCard = ({ courseLabel, courseTitle, courseText, capIcon, sunIcon }) => {
  return (
    <div className="course-card">
      <span className="course-card-label">{courseLabel}</span>
      <img src="https://codeacademy.lt/wp-content/uploads/2021/03/Fron-End_dark-1.svg" alt="course-logo" />
        <h2 className="course-card-header">{courseTitle}</h2>
        <p className="course-card-description">
          {courseText}
        </p>
        <ul className="course-card-features">
          <li className="icon-cap">
            {capIcon}
            <p>Lygis</p>
          </li>
          <li className="icon-sun">
            {sunIcon}
            <p>Dienomis</p>
          </li>
        </ul>
    </div>
  );
};

export default ProgramsCourseCard;