import type { ClothingProduct  } from '../data/data';

export default function ItemCard({
    name,
    image,
    fit,
    category,
    color,
    description,
    size,
    price,
    quantity,
}: ClothingProduct) {
    return (
        <div className='ItemCard'>
            <img src={image} alt={name} height="150px"/>
            <h2>{name}</h2>
            <p>Fit: {fit}</p>
            <p>Category: {category}</p>
            <p>Color: {color}</p>
            <p>{description}</p>
            <p>Size: {size}</p>
            <p>price: ${price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
}