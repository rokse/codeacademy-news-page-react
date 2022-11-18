import UlListComponent from "../UlListComponent/UlListComponent";
import { ReactComponent as FooterSvg } from '../Images/footer.svg';
import { ReactComponent as LogoSvg } from '../Images/codeacademy-white.svg';
import { ReactComponent as SertikaSvg } from '../Images/sertika.svg';
import './SiteFooterStyle.css';

const SiteFooter = ({ data: { footerMenuItems, listItemsObj, listIconsObj } }) => {
  return (
    <footer className="site-footer">
      <div className="footer-container wrap">
        <div className="footer-logo">
            <LogoSvg />
        </div>
        <div className="footer-widgets">
            <div className="footer-widget-left">
              <UlListComponent data={footerMenuItems} />
            </div>
            <div className="footer-widget-center">
              <h2>Vilnius</h2>
              <UlListComponent data={listItemsObj} />
            </div>
            <div className="footer-widget-right">
              <UlListComponent data={listIconsObj} />
            </div>
        </div>
        <div className="footer-info">
            <div className="copyright">
                © By UAB Programuok | CodeAcademy šeimos narys -   
                <a href="#"> CodeAcademy Kids</a>
            </div>
            <div className="privacy-policy">
                <a href="#">Privatumo politika</a>
            </div>
        </div>
        <div className="footer-certificates">
            <SertikaSvg />
        </div>
        <div className="footer-decoration">
        <FooterSvg />
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;