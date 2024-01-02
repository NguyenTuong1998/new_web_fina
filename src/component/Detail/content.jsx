import React from 'react'
import "./style.scss"
export default function Content({ Product }) {
    console.log(Product);
    return (
        <div className='content-box'>
            <p>{`Trong thời đại số hóa ngày nay, việc vay tiền không còn giới hạn ở các ngân hàng hay tổ chức tài chính truyền thống. ${Product.nameProduct} đang đứng đầu trong việc cung cấp dịch vụ vay tiền online, giúp hàng ngàn người dễ dàng tiếp cận các gói vay một cách an toàn và minh bạch.`}</p>
            <div className='about'>
                <h2>{`${Product.nameProduct} là gì?`}</h2>
                <span>{`
                    ${Product.nameProduct} là một dịch vụ trực tuyến giúp người dùng Việt Nam vay tiền một cách dễ dàng chỉ với căn cước công dân và thẻ ATM. Được thành lập với mục đích giúp người dân có nhu cầu vay vốn tiếp cận các giải pháp tài chính chuyên nghiệp, minh bạch và đáng tin cậy.

                    ${Product.nameProduct} không phải là một tổ chức tài chính hay ngân hàng. Thay vào đó, ${Product.nameProduct} hoạt động như một trung gian, sử dụng công nghệ hiện đại để kết nối người vay với các công ty tài chính uy tín.
                    `}
                </span>
            </div>

            <div className='uunhuoc'>
                <h2>{`Ưu điểm của dịch vụ vay tiền online ${Product.nameProduct}`}</h2>
                <h4>Thủ Tục Đơn Giản</h4>
                <span>{`
                    ${Product.nameProduct} là một dịch vụ trực tuyến giúp người dùng Việt Nam vay tiền một cách dễ dàng chỉ với căn cước công dân và thẻ ATM. Được thành lập với mục đích giúp người dân có nhu cầu vay vốn tiếp cận các giải pháp tài chính chuyên nghiệp, minh bạch và đáng tin cậy.

                    ${Product.nameProduct} không phải là một tổ chức tài chính hay ngân hàng. Thay vào đó, ${Product.nameProduct} hoạt động như một trung gian, sử dụng công nghệ hiện đại để kết nối người vay với các công ty tài chính uy tín.
                `}
                </span>

                <h4>Lãi Suất Cạnh Tranh</h4>
                <span>
                    {`Một trong những ưu điểm nổi bật của ${Product.nameProduct} là lãi suất hợp lý và cạnh tranh, với mức lãi suất từ 12% đến 20% mỗi năm. Điều này giúp bạn tiết kiệm được một lượng lớn tiền khi phải vay vốn.`}
                </span>

                <h4>An Toàn và Bảo Mật</h4>
                <span>
                    {`${Product.nameProduct} đặt vấn đề an toàn và bảo mật thông tin cá nhân của khách hàng lên hàng đầu. Tất cả các thông tin cá nhân đều được mã hóa và bảo mật tuyệt đối, không bị tiết lộ cho bên thứ ba.`}
                </span>

                <h4>Hỗ Trợ Khách Hàng 24/7</h4>
                <span>
                    {`Đội ngũ chăm sóc khách hàng của ${Product.nameProduct} sẵn sàng hỗ trợ bạn 24/7, giúp bạn giải quyết mọi vấn đề và thắc mắc một cách nhanh chóng và hiệu quả.`}
                </span>

            </div>


            <div className='dieukien'>
                <h2>{`Điều Kiện vay tiền ${Product.nameProduct}.`}</h2>
                <ul>
                    <li>{`Công dân Việt Nam trong độ tuổi từ ${Product.condition}`}</li>
                    <li>Có thu nhập ổn định hàng tháng.</li>
                    <li>Sinh sống và làm việc tại Việt Nam, đặc biệt là các thành phố lớn như Hồ Chí Minh, Hà Nội, và Đà Nẵng.</li>
                </ul>
            </div>

            <div className='quitrinh'>
                <h2>{`Quy Trình đăng ký vay tiền ${Product.nameProduct}`}</h2>
                <ul>                
                    <li>{`Truy cập trang chủ: Đầu tiên, bạn cần truy cập trang chủ ${Product.nameProduct} và nhấn vào nút “Đăng ký vay”`}.</li>
                    <li>{`Điền thông tin: Tiếp theo, bạn sẽ cần điền các thông tin cá nhân cần thiết như tên, số điện thoại, Email…`}</li>
                    <li>{`Nhận đề xuất: ${Product.nameProduct} sẽ phân tích thông tin và đề xuất các gói vay phù hợp.`}</li>
                    
                </ul>
            </div>

            <div className='kq'>
                <h2>Kết luận</h2>
                <span>{`${Product.nameProduct} không chỉ là một lựa chọn tài chính tốt cho những ai cần vay tiền nhanh chóng và tiện lợi,
                     mà còn là một đối tác tài chính đáng tin cậy, giúp bạn đối mặt với các thách thức tài chính trong cuộc sống.
                      Với sự linh hoạt trong các gói vay, lãi suất cạnh tranh, và đội ngũ hỗ trợ khách hàng chuyên nghiệp, 
                      ${Product.nameProduct} đang khẳng định mình là một trong những nền tảng vay tiền online hàng đầu tại Việt Nam.`}</span>
            </div>
        </div>
    )
}
