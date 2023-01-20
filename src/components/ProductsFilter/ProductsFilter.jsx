import React, {useContext, useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import card from '../../assets/images/card.png'
import {BsCart3} from 'react-icons/bs'
import { Autoplay } from "swiper";
import Title from "../Title/Title";
import {CustomContext} from "../../utils/Context";


const ProductsFilter = ({title}) => {

    const {products, getAllProducts} = useContext(CustomContext);

    useEffect(() => {
        getAllProducts()
    },[])


    return (
        <div className="products__filter">
            <Title title={title}/>
            <div className="products__filter-sliders">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        products.map((item) => (
                            <SwiperSlide>
                                <div className="products__card">
                                    <img src={item.image} alt="" className="products__card-img"/>
                                    <div className="products__card-info">
                                        <div className="products__card-name">
                                            <h3 className="products__card-title">
                                                {item.title}
                                            </h3>
                                            <p className="products__card-weight">
                                                Вес: {item.weight} г
                                            </p>
                                        </div>
                                        <p className="products__card-desc">
                                            {item.description}
                                        </p>
                                        <div className="products__card-buy">
                                            <p className="products__card-price">
                                                {item.price} ₽
                                            </p>
                                            <button className="products__card-btn header__btn">
                                                В корзину
                                                <BsCart3 size={20}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default ProductsFilter;