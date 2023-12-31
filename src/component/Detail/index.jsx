import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { listProducts } from '../../utils/listproduct';
import { Link } from 'react-router-dom';
import image from "../asset/image/2laisuat-2.png"
import "./style.scss"
import Content from './content';

export default function Detail() {
  const params = useParams();
  const [product, setProduct] = useState(listProducts.find(obj => obj.id === Number(params.id)))

  useEffect(() => {

  }, [])
  return (
    <div className='container'>
      <div className='detail_item'>
        <div className='box-vay-item'>
          
          <div className='col-inner '>
            <Link style={{ textDecoration: "none", color: '#000' }}>
              <img className='laisuat' src={image} alt="#" />
            </Link>
            <div className='box-vay'>
              <Link style={{ textDecoration: "none", color: '#000' }}>
                <div className='logo-vay text-center'>
                  <img src={product.imageProduct}></img>
                </div>
              </Link>
              <Link style={{ textDecoration: "none", color: '#000' }}><h1 className='title-vay text-center'>{product.nameProduct}</h1></Link>
              <Link style={{ textDecoration: "none", color: '#000' }}>

                {/* {product.descProduct.split(",").map((items, index) => { */}

                <div class="info-offer">
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
                <a href={product.linkProduct}><button>ĐĂNG KÝ NGAY</button></a>
              </div>
            </div>
          </div>
        <div className='content'>
          <Content Product = {product} />
        </div>
        </div>
      </div>
    </div>
  )
}
