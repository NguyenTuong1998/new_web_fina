import React from 'react'
import "./style.scss"

export default function Need() {
  return (
    <div className='need'>
        <div className='container'>
            <h2>Vay Tiền Online, Bạn Cần?</h2>
            <div className='list-box'>
                <div className="box">
                    <div className='img'>
                        <img src="https://vaytotnhat.vn/wp-content/uploads/2021/04/driving-license.png" alt="" />
                    </div>
                    <div className='content'>
                        <p>CMND/ Thẻ CCCD còn thời hạn, dễ nhìn, không mờ số.</p>
                    </div>
                </div>
                <div className="box">
                    <div className='img'>
                        <img src="https://vaytotnhat.vn/wp-content/uploads/2021/04/driving-license.png" alt="" />
                    </div>
                    <div className='content'>
                        <p>Công dân Việt Nam, có công việc mang lại thu nhập ổn định.</p>
                    </div>
                </div>
                <div className="box">
                    <div className='img'>
                        <img src="https://vaytotnhat.vn/wp-content/uploads/2021/04/driving-license.png" alt="" />
                    </div>
                    <div className='content'>
                        <p>Về độ tuổi, bạn phải ít nhất 18 tuổi trở lên, phù hợp nhận khoản vay.</p>
                    </div>
                </div>
                <div className="box">
                    <div className='img'>
                        <img src="https://vaytotnhat.vn/wp-content/uploads/2021/04/driving-license.png" alt="" />
                    </div>
                    <div className='content'>
                        <p>Tài khoản ngân hàng mang tên bạn.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
