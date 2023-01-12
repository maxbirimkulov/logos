import React from 'react';

import {BiMap, BiPhoneCall} from 'react-icons/bi'
import {CiSearch} from 'react-icons/ci'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__right">
                        <h1 className="header__title">
                            LOGOS
                        </h1>
                        <div className="header__content">
                            <div className="header__search">
                            <span className="header__search-map">
                                <BiMap size={20}/>
                            </span>
                                <input type="text" className="header__search-input" placeholder="Введите адрес доставки"/>
                                <span className="header__search-icon">
                                <CiSearch size={20}/>
                            </span>
                            </div>
                            <div className="header__contact">
                            <span className="header__contact-icon">
                                <BiPhoneCall/>
                            </span>
                                <div className="header__contact-text">
                                    Контакты: <br/>
                                    <a href="tel:+7 (917) 510-57-59" className="header__contact-link">
                                        +7 (917) 510-57-59
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="header__btn">
                        Корзина
                        <span className="header__btn-count">
                            4
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;