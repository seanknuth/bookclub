
import OneBook from './components/OneBook';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import UpdateBook from './components/UpdateBook';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/book/:id" element={<OneBook/>} />
          <Route path="/book/edit/:id" element={<UpdateBook/>} />
      
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
