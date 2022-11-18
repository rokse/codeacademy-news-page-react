import UlListComponent from '../UlListComponent/UlListComponent';
import './Header.css';

const Header = () => {
  const menuItemsObj =
  {
    listItems: [{
      title: 'Verslui',
      url: '#'
    },
    {
      title: 'Studentams',
      url: '#'
    },
    {
      title: 'Programos',
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
      title: 'IT testas',
      url: '#'
    },
    {
      title: 'Kontaktai',
      url: '#'
    }],
    liClassName: 'menu-item',
    ulClassName: 'main-menu'
  };

  return (
    <header className="main-header">
      <div className="logo-wrapper">
        <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" alt="CodeAcademy Black Logo" />
      </div>
      <nav className="main-navigation">
        <UlListComponent data={menuItemsObj}/>
        <a href="+37066366555" className="button">Skambinti</a>
      </nav>
    </header>
  );
};

export default Header;