import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import card from '../../assets/images/card.png'
import {BsCart3} from 'react-icons/bs'
import { Autoplay } from "swiper";
const ProductsFilter = () => {
    return (
        <div className="products__filter">
            <h2 className="products__filter-title">
                <span>ХОЛОДНЫЕ ЗАКУСКИ</span>
            </h2>
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
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src={card} alt="" className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-name">
                                    <h3 className="products__card-title">
                                        Индейка
                                    </h3>
                                    <p className="products__card-weight">
                                        Вес: 225 г
                                    </p>
                                </div>
                                <p className="products__card-desc">
                                    Фаршированный гречневой кашей,
                                    курагой, апельсином и зеленым яблоком
                                </p>
                                <div className="products__card-buy">
                                    <p className="products__card-price">
                                        450 ₽
                                    </p>
                                    <button className="products__card-btn header__btn">
                                        В корзину
                                        <BsCart3 size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default ProductsFilter;