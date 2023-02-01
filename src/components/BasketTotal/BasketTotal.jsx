import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {useNavigate} from "react-router-dom";

const BasketTotal = () => {
    const navigate = useNavigate()
    const  {basket} = useContext(CustomContext)

    return (
        <div className='basketTotal'>
            <p className="basket">
                {
                    basket.reduce((acc,rec)=>
                        acc + rec.price * rec.count
                    ,0)
                }
            </p>
            <button className="basketTotal__create" onClick={()=>navigate('/orders')}>
                 оформить заказ
            </button>
        </div>
    );
};

export default BasketTotal;