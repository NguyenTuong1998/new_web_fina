import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import "./style.scss";
import { listATM} from '../../utils/listATM';


const IOS = 'IOS'
const ANDROID = 'ANDROID'
const limit = 2


const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return ANDROID;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return IOS;
    }

    return "unknown";
}

const ATM = () => {
    const [device, setDevice] = useState('')
    const [limitList, setLimitList] = useState(limit)
    const [listProduct, setListProduce] = useState([])
    // useEffect(() => {
    //     const check = getMobileOperatingSystem()
    //     setDevice(check)
    // }, [])
    useEffect(() => {
        setListProduce(listATM.slice(0, limitList))
    }, [limitList])

    const loadProduct = () => {
        // if(limitList + limitList >= listProduct.length){
        //     setStatusProduct(false)
        // }else setStatusProduct(true)
        setLimitList(limitList + limit)
    }

    return (
        <div>
            <div className="container">
                <h2 className='top-text text-center'>MỞ THẺ NGÂN HÀNG SỐ ĐẸP </h2>
                <div className="list_box">
                    {listProduct.map((atm) => (
                        <div id={atm.id} className='col-inner '>
                            <div className='box-vay'>
                                <Link style={{ textDecoration: "none"}} to={`mo-tai-khoan/${atm.id}`}>
                                    <img src={atm.linkImg} alt="icon-ngan-hàng" />
                                    <div className="content">
                                        <h1 className='title-vay'>{atm.name}</h1>
                                    </div>
                                </Link>
                                <Link to={`mo-tai-khoan/${atm.id}`} class="info-offer">
                                    <div className='d-flex mt-4'>
                                        <i class="fa-solid fa-fire pt-1 pr-2"></i>
                                        <p>Ưu đãi 0% phí thường niên.</p>
                                    </div>
                                    <div className='d-flex'>
                                        <i class="fa-solid fa-fire pt-1 pr-2"></i>
                                        <p>Chọn số đẹp miễn phí.</p>
                                    </div>
                                    <div className='d-flex'>
                                        <i class="fa-solid fa-fire pt-1 pr-2"></i>
                                        <p>Tặng ngay 100.000 sau khi đăng kí thành công.</p>
                                    </div>
                                </Link>
                                {/* style={atm.status === 'disabled' ? {cursor: "not-allowed", backgroundColor: "red"} : ''} */}
                                <div  class='btn-vay'>
                                    <a href={getMobileOperatingSystem() === IOS ? atm.linkIO : atm.linkA}><button style={atm.status === 'disabled' ? {cursor: "not-allowed", boxShadow: "0 4px 0 0 #eeeeee" ,backgroundColor: "#eeeeee"} : {}}>ĐĂNG KÝ NGAY</button></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <>
                 <div  style={{ cursor:"pointer", fontWeight: 500 ,textAlign: "center", textDecoration: "underline", textDecorationColor: "#04a927"}} className='d-block my-3 load_data' onClick={loadProduct}>Xem thêm thẻ ngân hàng khác</div>
                </>
            </div>
        </div>
    );
};

export default ATM;