import type { ClothingProduct  } from '../data/data';
import ItemCard from './ItemCard';

interface ItemsContainerProps {products: ClothingProduct[];}

export default function ItemsContainer({products}: ItemsContainerProps)
{
    return(
        <div className='ItemsContainer'>
            {products.map((product) => (
                <ItemCard key={product.id} {...product}/>
            ))}
        </div>
    );
}