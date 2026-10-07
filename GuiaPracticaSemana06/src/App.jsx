import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import List from './pages/List.jsx';
import Form from './pages/Form.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guias" element={<List />} />
          <Route path="/reservar" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
