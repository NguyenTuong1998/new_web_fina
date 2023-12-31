import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from "../asset/banner/banner1.png"
import banner2 from "../asset/banner/banner2.png"
import banner3 from "../asset/banner/banner3.png"

export default function Banner() {
    return (
        <div style={{ minHeight: "200px" }} >
            <Carousel controls={false} indicators={false} interval={3000}>
                <Carousel.Item  >
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel></div>
    )
}
