import type { ClothingProduct  } from '../data/data';
import ItemCard from './ItemCard';

interface ItemsContainerProps 
{
    products: ClothingProduct[];
    handleAdjustQuantity: (id: number, delta:number) => void;
    handleAddToCart: (id: number) => void;
}
//renders one itemcard per product
export default function ItemsContainer({
    products,
    handleAdjustQuantity,
    handleAddToCart,
}: ItemsContainerProps)
{
    return(
        <div className='ItemsContainer'>
            {products.map((product) => (
                // handlers are wrapped to include this products id
                <ItemCard 
                key={product.id} 
                {...product}
                handleAdjustQuantity={(delta) =>
                    handleAdjustQuantity(product.id, delta)
                }
                handleAddToCart={() => handleAddToCart(product.id)}
                />
            ))}
        </div>
    );
}