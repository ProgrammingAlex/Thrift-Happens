import type { ClothingProduct  } from '../data/data';
import ItemsContainer from './ItemsContainer';

interface ThriftAppData{ products: ClothingProduct[]}

export default function ThriftApp({products}: ThriftAppData)
{
    return(
        <div>
            <ItemsContainer products={products}/>
        </div>
    );
}