import ProgramItTestImg from '../../Components/Images/ProgramsSiteLinkImg.png';
import ProgramsMainContent from '../../Components/ProgramsMainContent/ProgramsMainContent';
import ProgramsSearchSideWrap from '../../Components/ProgramsSearchSideWrap/ProgramsSearchSideWrap';

const ProgramsSiteContainer = () => {
  return (
    <div className="wrap">
        <h1>Programos</h1>
        <div className="top-image-link">
          <img src={ProgramItTestImg} alt="IT-test-link" />
        </div>
        <div className="content-wrap">
            <ProgramsSearchSideWrap />
            <ProgramsMainContent />
        </div>
      </div>
  );
};

export default ProgramsSiteContainer;
