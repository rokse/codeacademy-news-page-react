import './App.css';
import Header from './Components/Header/Header';
import { ReactComponent as FacebookSvg } from './Components/Images/Facebook.svg';
import { ReactComponent as InstagramSvg } from './Components/Images/Instagram.svg';
import { ReactComponent as LinkedInSvg } from './Components/Images/LinkedIn.svg';
import ProgramsSiteContainer from './Pages/ProgramsSiteContainer/ProgramsSiteContainer';
import HomePage from './Pages/HomePage/HomePage';
import SiteContainer from './Pages/SiteContainer/SiteContainer';
import SiteFooter from './Components/SiteFooter/SiteFooter';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';

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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programos" element={<ProgramsSiteContainer />} />
        <Route path="/naujienos" element={<SiteContainer />} />
      </Routes>

      <SiteFooter data={footerData} />
    </div>
  );
}

export default App;
