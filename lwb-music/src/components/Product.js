import React from 'react';
import Currency from 'react-currency-formatter';

// import {
//     Flex,
//     Spacer,
//     Box,
//     ButtonGroup,
//     IconButton,
//     Text,
// } from "@chakra-ui/react"

function Product({ id, title, price, description, image }) {
    


    return (
        <div>
            <p>{category}</p>

            <Image src={image}/>

            <h4>{title}</h4>

            <p>{description}</p>

            <div>
                <Currency quantity={price} currency="USD" />
            </div>


        </div>

    )
}

export default Product