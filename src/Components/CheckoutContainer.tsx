import CheckoutCard from './CheckoutCard';
import type {CheckoutItem} from './ThriftApp'

interface CheckoutContainerProps { checkoutItems: CheckoutItem[]}

export default function CheckoutContainer({checkoutItems}: CheckoutContainerProps)
{
    const grandTotal = checkoutItems.reduce(
        (total, line) => total + line.price * line.quantity,
        0,
    )
    return(
        <div className='CheckoutContainer'>
            <h2>Checkout</h2>
            {checkoutItems.length === 0
                ? <p>Cart Empty</p>
                : checkoutItems.map((line) => (
                    <CheckoutCard key={line.id} {...line}/>
                ))}
            <h3>Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
}