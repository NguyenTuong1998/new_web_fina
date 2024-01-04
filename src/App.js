import './App.scss';
import Header from './component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './component/Detail';
import { Routes, Route } from 'react-router-dom';
import Headers from './component/header';
import Footer from './component/footer';
import DetailATM from './component/ATM/Detail';
import ListATM from './component/LIST_ATM';
import ListCredit from './component/LIST_CREDIT';
import ProductItem from './component/product_items';


function App() {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='/' element={<Header/>}/>      
      <Route path='/mo-tai-khoan/:id' element={<DetailATM/>}/>

      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='danh-sach-khoan-vay/detail/:id' element={<Detail/>}/>

      <Route path='/danh-sach-atm' element={<ListATM/>}/>
      <Route path='danh-sach-atm/mo-tai-khoan/:id' element={<DetailATM/>}/>

      <Route path='/danh-sach-khoan-vay' element={<ProductItem/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
