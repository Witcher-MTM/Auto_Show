import Katalog_Header from './pages/Katalog/Katalog-Header.js';
import Katalog_ToolBar from './pages/Katalog/Katalog-ToolBar';
import KatalogNav from './pages/Katalog/KatalogNav.js';
import KatalogContent from './pages/Katalog/Katalog-Main.js';
import './App.css';

function App() {
  return (
    <>
      <Katalog_Header />
      <Katalog_ToolBar />
     
      <KatalogNav />
      <KatalogContent />
    </>
  );
}

export default App;
