import React from 'react'
import "./style.scss"
import logo from "../asset/banner/logo2.png"
import { Link } from 'react-router-dom'
import zalo from '../asset/image/zalo1.png'
import fb from '../asset/image/fb1.png'
import ins from '../asset/image/yu.png'
export default function Footer() {
    return (
        <div className='all-foot'>
            {/* <div className='footer'>
                <div className='logo col-12 col-md-6'>
                    <img src={logo} alt="#334343" />
                </div>
                <div className='social col-12 col-md-6'>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-solid fa-share-from-square"></i>
                    
                </div>
            </div> */}
            <div className='about container'>
                <div className='list_product'>
                    <div className='logo'>
                        <img src={logo} alt="#334343" />
                    </div>
                    <p className='info'>
                        <span style={{ fontWeight: "bold", fontSize: "16px" }}>Tài chính số</span> là website kết nối khách hàng có nhu cầu mở thẻ thanh toán ATM, thẻ tín dụng hay vay tiền online nhanh trong ngày với các sản phẩm vay tốt nhất hiện nay
                    </p>
                    <div className='icon'>
                        <img src={zalo} alt="" />
                        <img src={fb} alt="" />
                        <img src={ins} alt="" />
                    </div>
                </div>

                <div className='list_product'>
                    <h2>Sản phẩm</h2>
                    <p><Link to='danh-sach-atm' className='link'>Mở thẻ thanh toán</Link></p>
                    <p><Link to='danh-sach-atm' className='link'>Mở thẻ tín dụng</Link></p>
                    <p><Link to='/danh-sach-khoan-vay' className='link'>Vay tiền mặt </Link></p>
                </div>

                <div className='list_product'>
                    <h2>Thông tin khác</h2>
                    <Link className='link'> <p>Về Tài Chính Số</p></Link>
                    <Link className='link'> <p>Quy tắc bảo mật</p></Link>
                    <Link className='link'> <p>Chính sách bảo vệ Dữ liệu và Quyền riêng tư</p></Link>
                </div>
                {/* <p>Vaytot là dịch vụ hỗ trợ vay tiền online siêu tốc giải ngân nhanh trong ngày chỉ cần CMND (thẻ CCCD), nhận tiền qua tài khoản ngân hàng không cần gặp mặt. 
                    vaytot không phải là bên cho vay và không cung cấp dịch vụ cho vay. Chúng tôi tập hợp các khoản vay có hạn mức từ 500,000 đồng tới 20,000,000 đồng, thời gian thanh toán khoản vay tối thiểu 90 ngày và tối đa 180 ngày, 
                    lãi suất phần trăm hàng năm (APR) từ 12% và đến 20%/năm (chưa bao gồm các khoản phí tư vấn, phí dịch vụ) từ các đơn vị cho vay uy tín đã được cấp phép hoạt động và đề xuất khoản vay có lợi nhất với khách hàng. 
                    Trong trường hợp số tiền vay không được thanh toán đúng hạn như hợp đồng vay quy định, các khoản phí phạt sẽ được áp dụng. Thông tin chi tiết về lãi suất (APR) và các khoản phí phạt sẽ được thông báo tới khác hàng trước khi hợp đồng vay được ký kết.
                    Ví dụ khoản vay: Số tiền vay: 3,000,000 đồng, thời gian vay: 92 ngày. lãi suất APR (12%/năm): 60,199 đồng, phí dịch vụ: 1,404,000 đồng. Tổng số tiền khách hàng thanh toán là: 4,464,199 đồng.
                     Dịch vụ của vaytot hoàn toàn miễn phí, chúng tôi không thu bất kỳ khoản phí nào từ người đi vay.
                      Mọi chi tiết xin liên hệ Hotline (+84) 34 940 1877, Email hotro@vaytot hoặc địa chỉ 29, Đường Đ. Lê Duẩn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.</p> */}
            </div>
            <div><p className="pt-2 mb-0" style={{ textAlign: "center", color: "999999", fontSize: "13px" }}>Copyright 2024 © Tài Chính Số</p></div>
        </div>

    )
}
