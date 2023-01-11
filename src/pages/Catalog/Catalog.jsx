import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";


const Catalog = () => {

    const {count} = useContext(CustomContext)



    return (
        <div>
            {count}
            catalog
        </div>
    );
};

export default Catalog;