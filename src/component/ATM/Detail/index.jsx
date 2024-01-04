import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { listATM } from '../../../utils/listATM'
import "./style.scss"


const IOS = 'IOS'
const ANDROID = 'ANDROID'

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

export default function DetailATM() {
    const params = useParams();
    const [atm, setATM] = useState(listATM.find(obj => obj.id === params.id))

    return (
    <div>
        <div className="container">
            <div className='Detail'>
                <div id={atm.id} className='col-inner '>
                                <div className='box-vay'>
                                    <div>
                                        <img src={atm.linkImg} alt="icon-ngan-hàng" />
                                        <div className="content">
                                            <h1 className='title-vay'>{atm.name}</h1>
                                        </div>
                                    </div>
                                    <div class="info-offer">
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
                                            <p>Tặng ngay 30.000 sau khi đăng kí thành công.</p>
                                        </div>
                                    </div>
                                    {/* style={atm.status === 'disabled' ? {cursor: "not-allowed", backgroundColor: "red"} : ''} */}
                                    <div  class='btn-vay'>
                                        <a href={getMobileOperatingSystem() === IOS ? atm.linkIO : atm.linkA}><button style={atm.status === 'disabled' ? {cursor: "not-allowed", boxShadow: "0 4px 0 0 #eeeeee" ,backgroundColor: "#eeeeee"} : {}}>ĐĂNG KÝ NGAY</button></a>
                                    </div>
                                </div>
                </div>
                <div className='content-box'>
                    {atm.desc.map((item) => (
                        <p dangerouslySetInnerHTML={{ __html: item }}></p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
