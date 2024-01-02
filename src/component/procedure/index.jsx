import React from 'react'
import procedures from "../asset/image/quytrinh.png"
import tay from "../asset/image/tay1.png"
import "./style.scss"
export default function Procedure() {
    return (
            <div className="container procedure">
                <div className='procedure-img'>
                    <img src={tay} alt="" />
                </div>
                <div className='procedure-item'>
                    <h2>Quy trình vay tiền nhanh</h2>
                    <p>Vay dễ dàng với 4 bước đơn giản</p>

                    <div>
                        <div className='d-flex'>
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Chọn sản phẩm vay</p>
                        </div>
                        <span>Chọn sản phẩm vay online phù hợp với nhu cầu tài chính của bản thân.</span>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <i class="fa-solid fa-circle-check"></i>
                            <p>
                                Đăng ký hồ sơ vay</p>
                        </div>
                        <span>Điền đầy đủ thông tin đăng ký & chụp hình cá nhân cùng với CMND/ CCCD của bạn.</span>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Xét duyệt khoản vay</p>
                        </div>
                        <span>Nhận thông báo kết quả duyệt vay thông qua SMS hoặc Email nhanh chóng trong vài phút.</span>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Giải ngân khoản vay</p>
                        </div>
                        <span>Sau khi hồ sơ vay được duyệt, số tiền sẽ được chuyển qua tài khoản ngân hàng mà bạn đăng ký.</span>
                    </div>
                </div>
            </div>
    )
}
