import React from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

// import {
//     Flex,
//     Spacer,
//     Box,
//     ButtonGroup,
//     IconButton,
//     Text,
// } from "@chakra-ui/react"

function Product({ id, title, price, description, image }) {
    const dispatch = useDispatch();
    
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            image,
        };
        // Sending the product as an action to the REDUX store... the basket slice**
        dispatch(addToBasket(product));
    };
    

    return (
        <div>
            <Image src={image}/>
            <h4>{title}</h4>
            <p>{description}</p>

            <div>
                <Currency quantity={price} currency="USD" />
            </div>

            <button onClick={addItemToBasket}>Add to Basket*</button>
        </div>

    )
}

export default Product