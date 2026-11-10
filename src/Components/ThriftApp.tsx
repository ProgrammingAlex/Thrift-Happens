import { useState } from 'react';
import type { ClothingProduct  } from '../data/data';
import ItemsContainer from './ItemsContainer';
import CheckoutContainer  from './CheckoutContainer'
import NavBar from './NavBar';

//One checkout line. id matches the products id.
interface ThriftAppData{ products: ClothingProduct[]}

export interface CheckoutItem
{
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
//Main component. Holds all state and the handlers that change it.
export default function ThriftApp({products}: ThriftAppData)
{
    //quantity = stock left, itemQuantity = amount selected
    const [items, setItems] = useState<ClothingProduct[]>(products);
    const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);

    //Changes a products selected amount by 1 up or down
    function handleAdjustQuantity(id: number, delta: number)
    {
        //copy the array, update only the clicked product
        setItems((prevItems) =>
            prevItems.map((items) =>
                items.id === id
                    ?   {...items, 
                            //keep between 0 and the stock left
                            itemQuantity: Math.min(items.quantity, Math.max(0, items.itemQuantity + delta),
                        ),
                        }
                    : items,
            ),
        );
    }
    //moves the selected amount from stock into the checkout
    function handleAddToCart(id: number)
    {
        const product = items.find((item) => item.id === id);
        const amount = product ? product.itemQuantity : 0;
        //only add a positive amount tha is in stock
        if(product && amount > 0 && amount <= product.quantity)
        {
            //increase the existing line or add a new one
            setCheckoutItems((prevCheckout)=>
                prevCheckout.some((line) => line.id === id)
                    ? prevCheckout.map((line) =>
                        line.id === id
                             ? {...line, quantity:line.quantity + amount}
                             : line,
                    )
                    : [...prevCheckout, {
                        id: product.id,
                        name: product.name,
                        image: product.image,
                        price:product.price,
                        quantity:amount,
                    }],
                );
                //lower the stock and reset the selection to 0
                setItems((prevItems) =>
                    prevItems.map((item) =>
                        item.id === id
                            ? {...item, quantity: item.quantity - amount, itemQuantity: 0}
                            :item,
                    ),
            );
        }
    }
    //removes one checkout line and returns its quentity to stock
    function handleRemoveFromCart(id: number)
    {
        //Get the lin first so we know how much to return
        const removedLine = checkoutItems.find((line) => line.id === id);

        if(removedLine)
        {
            //keep every line except this one
            setCheckoutItems((prevCheckout) =>
                prevCheckout.filter((line) => line.id != id),
                );
            //return the quentity to that products stock
            setItems((prevItems) => 
                prevItems.map((item) => 
                    item.id === id
                        ? {...item, quantity: item.quantity + removedLine.quantity}
                        : item,
                    ),
                );
        }
    }
    //clears the checkout and returns all reserve stock
    function handleEmptyCheckout()
    {
        //Give each product back its checkout quantity, if it has one
        setItems((prevItems) =>
            prevItems.map((item) =>
            {
                const line = checkoutItems.find((line) => line.id === item.id);
                return line
                    ? {...item, quantity: item.quantity + line.quantity}
                    : item;
            }),
        );
        setCheckoutItems([]);
    }

    //Total units in the checkout, for the navbar
    const checkoutCount = checkoutItems.reduce((total, line) => total + line.quantity, 0); 

    return(
        <div>
            <NavBar checkoutCount={checkoutCount}/>
            <div className='ThriftApp'>
                <ItemsContainer
                    products={items} 
                    handleAdjustQuantity={handleAdjustQuantity}
                    handleAddToCart={handleAddToCart}
                />
                <CheckoutContainer 
                    checkoutItems={checkoutItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCheckout={handleEmptyCheckout}
                />
            </div>
        </div>

    );
}