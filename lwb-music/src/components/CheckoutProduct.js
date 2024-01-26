import React from 'react';
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct(
    id,
    title,
    price,
    description,
    image,
) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            image,  
        };

        // Pushing the item into redux
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        // Remove item from redux**
        dispatch(removeFromBasket({ id }));
    }

  return (
    <div>
        <Image src={image} height={200} width={200} objectFit="contain" />

        {/* Middle */}
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <Currency quantity={price} currency='USD' />
        </div>

        <div>
            <button onClick={addItemToBasket}>Add to Checkout</button>
            <button onClick={removeItemFromBasket}>Remove from Checkout</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;