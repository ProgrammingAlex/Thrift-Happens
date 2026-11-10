import type {CheckoutItem} from './ThriftApp'

interface CheckoutCardProps extends CheckoutItem {handleRemove: () => void;}

//displays one checkout line with a remove button
export default function CheckoutCard({name, image, price, quantity, handleRemove}: CheckoutCardProps)
{
    const subtotal = price * quantity;
    return(
        <div className='CheckoutCard'>
            <img src={image}  alt={name} height="60px"/>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Line total: ${(price * quantity).toFixed(2)}</p>
            <p>Subtotal ${subtotal.toFixed(2)}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}