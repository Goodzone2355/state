import './App.css';
import Album from './components/music';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <Album
        img = '/img/ram.jpeg'
        nameAlbum = 'Made in Germany 1995–2011'
        nameGroup = 'Rammstein'
        year = {2011}
      />

      <Portfolio
        img = '/img/ава1.jpg'
        name = 'Чульский Владимир Вадимович'
        telephone = '8-800-555-35-35'
        email = 'volodenka2355@gmail.com'
        town = 'Донецк'
        experiences = {['2024-2028 - обучение в бакалавриате ЮФУ на кафедре "Прикладная математика и информатика"', '2028-2030 - обучение в магистратуре ЮФУ на кафедре "Прикладная математика и информатика"']}
      />
    </div>
  );
}

export default App;
