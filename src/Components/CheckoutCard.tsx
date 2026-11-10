import type {CheckoutItem} from './ThriftApp'

export default function CheckoutCard({name, price, quantity}: CheckoutItem)
{
    return(
        <div className='CheckoutCard'>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Line total: ${(price * quantity).toFixed(2)}</p>
        </div>
    );
}