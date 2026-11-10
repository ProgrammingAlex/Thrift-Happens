import type { ClothingProduct  } from '../data/data';

interface ItemCardProps extends ClothingProduct
{
    handleAdjustQuantity: (delta: number) => void;
}

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
    itemQuantity,
    handleAdjustQuantity,
}: ItemCardProps) {
    const isOutOfStock = quantity === 0;
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
            <p>{isOutOfStock ? "Out of Stock" : `In Stock: ${quantity}` }</p>
            <button onClick={() => handleAdjustQuantity(-1)} disabled={isOutOfStock || itemQuantity === 0}>
                {" - "}
            </button>
            <span>{itemQuantity}</span>
            <button onClick={() => handleAdjustQuantity(1)} disabled={isOutOfStock || itemQuantity === quantity}>
                {" + "}
            </button>
        </div>
    );
}