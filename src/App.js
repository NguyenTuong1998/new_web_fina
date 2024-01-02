import './App.scss';
import Header from './component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './component/Detail';
import { Routes, Route } from 'react-router-dom';
import Headers from './component/header';
import Footer from './component/footer';


function App() {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
