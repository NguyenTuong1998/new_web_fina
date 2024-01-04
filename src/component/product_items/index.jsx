import React, { useState, useEffect } from 'react'
import './style.scss'
import { listProducts } from '../../utils/listproduct'
import { Link } from 'react-router-dom'
import image from '../asset/image/2laisuat-2.png'

const limit = 3
export default function ProductItem() {
    const [limitList, setLimitList] = useState(limit)
    const [listProduct, setListProduce] = useState([])
    const [statusProduct, setStatusProduct] = useState(true)
    useEffect(() => {
        setListProduce(listProducts.slice(0, limitList))
    }, [limitList])

    const loadProduct = () => {
        if(limitList + limitList >= listProduct.length){
            setStatusProduct(false)
        }else setStatusProduct(true)
        setLimitList(limitList + limit)
    }
    const hideProduct = () => setLimitList(5)
    return (
        <>
            <div class="large-12">
                <h2 className='top-text text-center'>TOP NHỮNG GÓI VAY TIÊU DÙNG ĐƯỢC GIẢI NGÂN NHANH NHẤT</h2>
                <div className='customer'>
                    <p>{Math.floor(Math.random() * (300 - 100 + 1) + 100)} khách hàng đang được app giải ngân</p>
                </div>

                <div className='list-box'>
                    {listProduct.map((item) => (
                        <>
                            <div key={item.id} className='col-inner '>
                                <Link style={{ textDecoration: "none", color: '#000' }} to={`detail/${item.id}`}>
                                    <img className='laisuat' src={image} alt="#" />
                                </Link>
                                <div className='box-vay'>
                                    <Link style={{ textDecoration: "none", color: '#000' }} to={`detail/${item.id}`}>
                                        <div className='logo-vay text-center'>
                                            <img src={item.imageProduct}></img>
                                        </div>
                                    </Link>
                                    <Link style={{ textDecoration: "none", color: '#000' }} to={`detail/${item.id}`}><h1 className='title-vay text-center'>{item.nameProduct}</h1></Link>
                                    <Link style={{ textDecoration: "none", color: '#000' }} to={`detail/${item.id}`}>

                                        {/* {item.descProduct.split(",").map((items, index) => { */}

                                        <div class="info-offer">
                                            <div className='d-flex mt-4' style={{color: "#eb0406"}}>
                                                <i class="fa-solid fa-fire pt-1 pr-2"></i>
                                                <p>Ưu đãi 0% lãi suất với khoản vay đầu tiên của khách hàng</p>
                                            </div>
                                            <div class="infor flex-custom">
                                                <div class="field-name">
                                                    <i class="fa-solid fa-money-check-dollar"></i>
                                                    <span>Hạn mức</span>
                                                </div>
                                                <div class="field-value">
                                                    <span>1.000.000 - 17.000.000đ</span>
                                                    {/* <span>{items}</span> */}
                                                </div>
                                            </div>
                                            <div class="infor flex-custom">
                                                <div class="field-name">
                                                    <i class="fa-regular fa-calendar"></i>
                                                    <span>Kỳ hạn</span>
                                                </div>
                                                <div class="field-value">
                                                    <span>91-182 ngày</span>
                                                </div>
                                            </div>
                                            <div class="infor flex-custom">
                                                <div class="field-name">
                                                    <i class="fa fa-usd"></i>
                                                    <span>Lãi suất</span>
                                                </div>
                                                <div class="field-value">
                                                    <span>18%/năm</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* })} */}
                                    </Link>
                                    <div class="btn-vay">
                                        <a href={item.linkProduct}><button>ĐĂNG KÝ NGAY</button></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            {/* {statusProduct ?  */}
                <>
                 <div  style={{ cursor:"pointer", fontWeight: 500 ,textAlign: "center", textDecoration: "underline", textDecorationColor: "#04a927"}} className='d-block my-3 load_data' onClick={loadProduct}>Xem thêm gói vay</div>
                </>
                {/* :
                <>
                 <div  style={{ cursor:"pointer", fontWeight: 500 ,textAlign: "center", textDecoration: "underline", textDecorationColor: "#04a927"}} className='d-block my-3 load_data' onClick={hideProduct}>Thu gọn</div>
                </>
            } */}
        </>

    )
}



// <div className='text'>
//     <h2 style={{ fontSize: "1.6rem", letterSpacing: "0,84px", textAlign: "center", paddingTop: "3rem" }}>TOP NHỮNG GÓI VAY TIÊU DÙNG ĐƯỢC GIẢI NGÂN NHANH NHẤT</h2>
//     <div className='list-card'>
//         {listProduct.map((item) => (
//             <div class="card">
//                 <div>
//                 <img src={item.imgage} />
//                 </div>
//                     <p>{item.name}</p>
//                     <div className='mb-3'>
//                         {item.desc.split(",").map((items) => (
//                             <div className='d-flex my-2'>
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                     width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                     <path d="M12 1.99951C6.49 1.99951 2 6.48951 2 11.9995C2 17.5095 6.49 21.9995 12 21.9995C17.51 21.9995 22 17.5095 22 11.9995C22 6.48951 17.51 1.99951 12 1.99951ZM16.78 9.69951L11.11 15.3695C10.9694 15.51 10.7788 15.5889 10.58 15.5889C10.3812 15.5889 10.1906 15.51 10.05 15.3695L7.22 12.5395C7.08052 12.3984 7.0023 12.2079 7.0023 12.0095C7.0023 11.8111 7.08052 11.6206 7.22 11.4795C7.51 11.1895 7.99 11.1895 8.28 11.4795L10.58 13.7795L15.72 8.63951C16.01 8.34951 16.49 8.34951 16.78 8.63951C17.07 8.92951 17.07 9.39951 16.78 9.69951Z" fill="#FACACC"></path><path d="M16.7797 9.69962L11.1097 15.3696C10.969 15.5101 10.7784 15.589 10.5797 15.589C10.3809 15.589 10.1903 15.5101 10.0497 15.3696L7.21965 12.5396C7.08017 12.3985 7.00195 12.208 7.00195 12.0096C7.00195 11.8112 7.08017 11.6208 7.21965 11.4796C7.50965 11.1896 7.98965 11.1896 8.27965 11.4796L10.5797 13.7796L15.7197 8.63962C16.0097 8.34962 16.4897 8.34962 16.7797 8.63962C17.0697 8.92962 17.0697 9.39962 16.7797 9.69962Z" fill="#E11E31">
//                                     </path>
//                                 </svg>
//                                     <span className='pl-2'>{items}</span>
//                             </div>
//                         ))}

//                     </div>
//                     {/* <p class="card-footer">{item.desc}</p> */}
//                     <div className='list-but'>
//                         <NavLink to="/Detail">
//                             <button class="button-30" role="button">Tìm hiểu thêm</button>
//                         </NavLink>
//                         <a href={item.link}>
//                             <button class="button-30" role="button" onclick="location.href=`{}`">Vay ngay</button>
//                         </a>
//                     </div>

//                 </div>
//         ))}
//     </div>
// </div>
