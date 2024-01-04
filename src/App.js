import './App.scss';
import Header from './component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './component/Detail';
import { Routes, Route } from 'react-router-dom';
import Headers from './component/header';
import Footer from './component/footer';
import DetailATM from './component/ATM/Detail';


function App() {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='/' element={<Header/>}/>      
      <Route path='/mo-tai-khoan/:id' element={<DetailATM/>}/>      
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
