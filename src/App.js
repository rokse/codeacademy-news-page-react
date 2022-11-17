import './App.css';
import Header from './Components/Header/Header';
import { ReactComponent as FacebookSvg } from './Components/Images/Facebook.svg';
import { ReactComponent as InstagramSvg } from './Components/Images/Instagram.svg';
import { ReactComponent as LinkedInSvg } from './Components/Images/LinkedIn.svg';
import SiteContainer from './Components/SiteContainer/SiteContainer';
import SiteFooter from './Components/SiteFooter/SiteFooter';

function App() {
  const footerData = {
    listIconsObj: {
      listItems: [
        {
          title: <InstagramSvg />,
          url: 'http://instagram.com'
        },
        {
          title: <FacebookSvg />,
          url: 'http://facebook.com'
        },
        {
          title: <LinkedInSvg />,
          url: 'http://linkedin.com'
        },
      ]
    },
    listItemsObj: {
      listItems: [
        {
          title: 'Saulėtakio al. 15, Vilnius',
          url: '#'
        },
        {
          title: 'Antakalnio g. 17, Vilnius',
          url: '#'
        },
      ],
      liClassName: 'just', 
      ulClassName: 'just'
    },
    footerMenuItems: {
      listItems: [
        {
          title: 'Studentams',
          url: '#'
        },
        {
          title: 'Jei galiu as - gali ir tu!',
          url: '#'
        },
        {
          title: 'Verslui',
          url: '#'
        },
        {
          title: 'Programos',
          url: '#'
        },
        {
          title: 'Nemokamos studijos',
          url: '#'
        },
        {
          title: 'UZT kursai',
          url: '#'
        },
        {
          title: 'Programavimo kalbos',
          url: '#'
        },
        {
          title: 'Apie mus',
          url: '#'
        },
        {
          title: 'Naujienos',
          url: '#'
        },
        {
          title: 'Karjera - We are hiring!',
          url: '#'
        },
        {
          title: 'ES parama',
          url: '#'
        },
        {
          title: 'Kontaktai',
          url: '#'
        }],
      liClassName: 'menu-item'
    }
  };

  return (
    <div className="App">
      <Header />
      <SiteContainer />
      <SiteFooter data={footerData} />
    </div>
  );
}

export default App;
