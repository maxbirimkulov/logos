import React, {useContext, useState} from 'react';
import {CustomContext} from "../../utils/Context";

const Home = () => {

    const {count, setCount} = useContext(CustomContext)



    return (
        <div>
            <br/>
            <br/>

            {count}

            <br/>
            <br/>

            <button type='button' onClick={() => setCount(prev => prev + 1)}>Увеличить на 1</button>

            <br/>
            <br/>

            asdasdsad
        </div>
    );
};

export default Home;












