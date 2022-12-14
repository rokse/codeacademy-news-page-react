import NewsWrapper from '../../Components/NewsWrapper/NewsWrapper';
import SideContent from '../../Components/SideContent/SideContent';
import './SiteContainerStyle.css'

const SiteContainer = () => {
  const newsCardData = {
    mainNewsInfo: {
      mainClass: 'main-news',
      newsInfo: [
        {
          imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-2048x1988.jpg',
          newsCategory: 'Naujienos',
          newsDescription: 'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti',
          newsDate: '2022-03-23'
        },
        {
          imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-2048x1988.jpg',
          newsCategory: 'Senienos',
          newsDescription: 'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti',
          newsDate: '2022-03-23'
        }
      ]
    },
    secondaryNewsInfo: {
      mainClass: 'secondary-news',
      newsInfo: [
        {
          imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
          newsCategory: 'Technologijų ritmu',
          newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
          newsDate: '2022-03-23'
        },
        {
          imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
          newsCategory: 'Inovaciju ritmu',
          newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
          newsDate: '2022-05-25'
        },
        {
          imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
          newsCategory: 'Dirbtinis intelektas',
          newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
          newsDate: '2022-06-26'
        },
        {
          imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
          newsCategory: 'Technologijų ritmu',
          newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
          newsDate: '2022-03-23'
        }
      ]
    }
  };

  return (
    <div className="wrap">  
      <div className="site-wrapper">
        <NewsWrapper data={newsCardData} />
        <SideContent />
      </div>
    </div>
  );
}; 

export default SiteContainer;