import type { ClothingProduct  } from '../data/data';

interface ItemCardProps extends ClothingProduct
{
    handleAdjustQuantity: (delta: number) => void;
    handleAddToCart: () => void;
}
//Displays one product with its quantity counter and add button
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
    handleAddToCart,
}: ItemCardProps) {
    const isOutOfStock = quantity === 0;

    //button text explains why its disabled
    let addLabel = `Add ${itemQuantity} to Cart`;
    if(isOutOfStock)
        addLabel = "Out of Stock";
    else if(itemQuantity === 0)
        addLabel = "Select a quantity";

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
            {/*^^ Disabled at 0 and at the stock limit ^^*/}
            <button onClick={() => handleAdjustQuantity(-1)} disabled={isOutOfStock || itemQuantity === 0}>
                {" - "}
            </button>
            <span> {itemQuantity} </span>
            <button onClick={() => handleAdjustQuantity(1)} disabled={isOutOfStock || itemQuantity === quantity}>
                {" + "}
            </button>
            <br />
            <button onClick={handleAddToCart} disabled={isOutOfStock || itemQuantity === 0}>
                {addLabel}
            </button>
        </div>
    );
}