import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
