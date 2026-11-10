import { useState } from 'react';
import type { ClothingProduct  } from '../data/data';
import ItemsContainer from './ItemsContainer';
import CheckoutContainer  from './CheckoutContainer'

interface ThriftAppData{ products: ClothingProduct[]}

export interface CheckoutItem
{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function ThriftApp({products}: ThriftAppData)
{
    const [items, setItems] = useState<ClothingProduct[]>(products);
    const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);

    function handleAdjustQuantity(id: number, delta: number)
    {
        setItems((prevItems) =>
            prevItems.map((items) =>
                items.id === id
                    ?   {...items, 
                            itemQuantity: Math.min(items.quantity, Math.max(0, items.itemQuantity + delta),
                        ),
                        }
                    : items,
            ),
        );
    }

    function handleAddToCart(id: number)
    {
        const product = items.find((item) => item.id === id);
        const amount = product ? product.itemQuantity : 0;

        if(product && amount > 0 && amount <= product.quantity)
        {
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
                        price:product.price,
                        quantity:amount,
                    }],
                );
                setItems((prevItems) =>
                    prevItems.map((item) =>
                        item.id === id
                            ? {...item, quantity: item.quantity - amount, itemQuantity: 0}
                            :item,
                    ),
            );
        }
    }

    return(
        <div className='ThriftApp'>
            <ItemsContainer
                products={items} 
                handleAdjustQuantity={handleAdjustQuantity}
                handleAddToCart={handleAddToCart}
            />
            <CheckoutContainer checkoutItems={checkoutItems}/>
        </div>
    );
}