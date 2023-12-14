import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import GalleryPage from './cardPage/GalleryPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <GalleryPage />
    </div>
  );
}

export default App;
