import React from 'react';

const AllProducts = () => {
    return (
        <section className="products">

            <ul className="products__list">
                <li className="products__item active">
                    Холодные закуски
                </li>
                <li className="products__item">
                    Горячие закуски
                </li>
                <li className="products__item">
                    Мясные блюда
                </li>
                <li className="products__item">
                    Супы
                </li>
                <li className="products__item">
                    Рыбные блюда
                </li>
                <li className="products__item">
                    Гриль меню
                </li>
                <li className="products__item">
                    Фирменные блюда

                </li>
                <li className="products__item">

                    Напитки
                </li>
            </ul>
        </section>
    );
};

export default AllProducts;