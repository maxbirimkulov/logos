import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Title from "../../components/Title/Title";
import OrderSelect from "../Catalog/OrderSelect/OrderSelect";
import OrdersSelect from "../../components/OrdersSelect/OrdersSelect";
import OrdersRadio from "../../components/OrdersRadio/OrdersRadio";
import {useForm} from "react-hook-form";

const Orders = () => {
    const {
        reset,
        handleSubmit,
        register
    } = useForm(

    )
    const navigate = useNavigate()
    const [delivery,setDelivery] = useState('delivery')
    const [buy,setBuy] = useState('online')
    const [time,setTime] = useState('time1')
    return (
        <div className='orders'>
            <div className="container">
                <div className="orders__content">
                    <button className="orders__back" onClick={()=>navigate(-1)}>
                        в корзину
                    </button>
                    <Title title='Оформление заказа'/>
                    <div className="orders__contact">
                        <h3 className="orders__contact-title">
                            1. Контактная информация
                        </h3>
                        <label htmlFor="" className="orders__contact-label">
                            <input type="text" className="orders__contact-input" placeholder='Имя*' {...register('name')}/>
                            <input type="text" className="orders__contact-input" placeholder='Телефон*'{...register('number')}/>
                        </label>
                    </div>
                    <div className="orders__contact">
                        <h3 className="orders__contact-title">
                            1. Контактная информация
                        </h3>
                        <div className="orders__contact-btns">
                            <button className="orders__contact-btn" onClick={()=>setDelivery('delivery')}>
                                Доставка
                            </button>
                            <button className="orders__contact-btn" onClick={()=>setDelivery('pickup')}>
                                Самовывоз
                            </button>
                        </div>
                        {
                            delivery === 'delivery' ? <>
                                <h3 className="orders__contact-title">
                                    Адрес доставки
                                </h3>
                                <label htmlFor="" className="orders__contact-label">
                                    <input type="text" className="orders__contact-input" placeholder='Укажите улицу*' {...register('street')}/>
                                    <input type="text" className="orders__contact-input" placeholder='Номер дома*'{...register('home')}/>
                                </label>
                                <label htmlFor="" className="orders__contact-label">
                                    <input type="text" className="orders__contact-input" placeholder='№ квартиры/офиса' {...register('numberHome')}/>
                                    <input type="text" className="orders__contact-input" placeholder='Подъезд' {...register('')}/>
                                    <input type="text" className="orders__contact-input" placeholder='Этаж' {...register('')}/>

                                </label>
                                <label htmlFor="" className="orders__contact-label">
                                    <input type="text" className="orders__contact-input" placeholder='Комментарий' {...register('comment')}/>
                                </label>
                            </> : <>
                                <h3 className="orders__contact-title">
                                    Выберите ресторан
                                </h3>
                               <OrdersSelect/>
                            </>
                        }
                        <div className="orders__contact">
                            <h3 className="orders__contact-title">
                                3. Оплатить
                            </h3>
                            <div className="orders__contact-btns">
                                <button className="orders__contact-btn" onClick={()=>setBuy('online')}>
                                    Оплата онлайн
                                </button>
                                <button className="orders__contact-btn" onClick={()=>setBuy('card')}>
                                    Курьеру картой
                                </button>
                                <button className="orders__contact-btn" onClick={()=>setBuy('nal')}>
                                    Самовывоз
                                </button>
                            </div>
                            {
                                buy === 'online' ?
                                    <input type="text" className="orders__contact-input" placeholder='online' {...register('online')}/>
                                : buy === 'card' ? <input type="text" className="orders__contact-input" placeholder='card number'/>
                                    : <input type="text" className="orders__contact-input" placeholder='Сдача с' {...register('numberCard')}/>

                            }
                        </div>
                        <div className="orders__contact">
                            <h3 className="orders__contact-title">
                                3. Оплатить
                            </h3>
                            <div className="orders__contact-btns">
                                <button className="orders__contact-btn" onClick={()=>setTime('time1')}>
                                    В ближайшее время
                                </button>
                                <button className="orders__contact-btn" onClick={()=>setTime('time2')}>
                                    Ко времени
                                </button>
                                <input type="number" className="orders__contact-input" placeholder='Укажите время' {...register('time')}/>
                            </div>
                            {
                                time === 'time1' ?
                                    <input type="number" className="orders__contact-input" placeholder='Кол-во персон' {...register('person')}/>
                                    : <input type="number" className="orders__contact-input" placeholder='Кол-во персон' {...register('')}/>
                            }
                            <h3 className="orders__contact-title">
                                Хотите мы позвоним?
                            </h3>
                            <OrdersRadio/>
                        </div>
                        <div className="orders__contact">
                            <p className="orders__contact">
                                Я согласен на обработку моих перс. данных в соответствии с Условиями
                            </p>
                            <button className="orders__contact-btn" type='submit'>
                                Оформить заказ
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Orders;