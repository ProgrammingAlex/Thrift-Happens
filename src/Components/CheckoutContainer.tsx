import CheckoutCard from './CheckoutCard';
import type {CheckoutItem} from './ThriftApp'

interface CheckoutContainerProps { checkoutItems: CheckoutItem[]}

export default function CheckoutContainer({checkoutItems}: CheckoutContainerProps)
{
    return(
        <div className='CheckoutContainer'>
            <h2>Checkout</h2>
            {checkoutItems.length === 0
                ? <p> Your checkout is empty</p>
                : checkoutItems.map((line) => (
                    <CheckoutCard key={line.id} {...line}/>
                ))}
        </div>
    );
}