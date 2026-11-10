import type { ClothingProduct  } from '../data/data';
import ItemCard from './ItemCard';

interface ItemsContainerProps 
{
    products: ClothingProduct[];
    handleAdjustQuantity: (id: number, delta:number) => void;
}

export default function ItemsContainer({
    products,
    handleAdjustQuantity,
}: ItemsContainerProps)
{
    return(
        <div className='ItemsContainer'>
            {products.map((product) => (
                <ItemCard 
                key={product.id} 
                {...product}
                handleAdjustQuantity={(delta) =>
                    handleAdjustQuantity(product.id, delta)
                }
                />
            ))}
        </div>
    );
}