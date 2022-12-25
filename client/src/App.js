import KatalogContent from './pages/Katalog/Katalog-Main.js';
import Auth from './pages/Katalog/Auth.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {createBrowserHistory} from "history"
import './App.css';

function App() {
  const history = createBrowserHistory({ forceRefresh: true });
  return (
    <KatalogContent />
  );
}

export default App;
