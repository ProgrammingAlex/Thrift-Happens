import { useState } from 'react';
import type { ClothingProduct  } from '../data/data';
import ItemsContainer from './ItemsContainer';

interface ThriftAppData{ products: ClothingProduct[]}

export default function ThriftApp({products}: ThriftAppData)
{
    const [items, setItems] = useState<ClothingProduct[]>(products);

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

    return(
        <div>
            <ItemsContainer
                products={items} 
                handleAdjustQuantity={handleAdjustQuantity}
            />
        </div>
    );
}