import React from 'react'
import "./style.scss"
import logo from "../asset/banner/logo1.png"
export default function Footer() {
    return (
        <div className='all-foot'>
            <div className='footer'>
                <div className='logo col-12 col-md-6'>
                    <img src={logo} alt="#334343" />
                </div>
                <div className='social col-12 col-md-6'>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-solid fa-share-from-square"></i>
                    
                </div>
            </div>
            <div className='about container'>
                <p>Vaytot là dịch vụ hỗ trợ vay tiền online siêu tốc giải ngân nhanh trong ngày chỉ cần CMND (thẻ CCCD), nhận tiền qua tài khoản ngân hàng không cần gặp mặt. vaytot không phải là bên cho vay và không cung cấp dịch vụ cho vay. Chúng tôi tập hợp các khoản vay có hạn mức từ 500,000 đồng tới 20,000,000 đồng, thời gian thanh toán khoản vay tối thiểu 90 ngày và tối đa 180 ngày, lãi suất phần trăm hàng năm (APR) từ 12% và đến 20%/năm (chưa bao gồm các khoản phí tư vấn, phí dịch vụ) từ các đơn vị cho vay uy tín đã được cấp phép hoạt động và đề xuất khoản vay có lợi nhất với khách hàng. Trong trường hợp số tiền vay không được thanh toán đúng hạn như hợp đồng vay quy định, các khoản phí phạt sẽ được áp dụng. Thông tin chi tiết về lãi suất (APR) và các khoản phí phạt sẽ được thông báo tới khác hàng trước khi hợp đồng vay được ký kết.
                    Ví dụ khoản vay: Số tiền vay: 3,000,000 đồng, thời gian vay: 92 ngày. lãi suất APR (12%/năm): 60,199 đồng, phí dịch vụ: 1,404,000 đồng. Tổng số tiền khách hàng thanh toán là: 4,464,199 đồng. Dịch vụ của vaytot hoàn toàn miễn phí, chúng tôi không thu bất kỳ khoản phí nào từ người đi vay. Mọi chi tiết xin liên hệ Hotline (+84) 34 940 1877, Email hotro@vaytot hoặc địa chỉ 29, Đường Đ. Lê Duẩn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.</p>
            </div>
            <div><p className="pt-5 mb-0" style={{ textAlign: "center", color: "999999", fontSize: "13px" }}>Copyright 2023 © vaytot</p></div>
        </div>

    )
}
