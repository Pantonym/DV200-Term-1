import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Timeline from './pages/timeline';
import Compare from './pages/compare';
import BasicNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicNavbar />
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/compare' element={<Compare />} />
      </Routes>
    </div>
  );
}

export default App;