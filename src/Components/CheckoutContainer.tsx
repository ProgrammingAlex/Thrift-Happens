import CheckoutCard from './CheckoutCard';
import type {CheckoutItem} from './ThriftApp'

interface CheckoutContainerProps 
{ 
    checkoutItems: CheckoutItem[]
    handleRemoveFromCart: (id: number) => void;
    handleEmptyCheckout: () => void;
}

//lists the checkout lines grand total and empty checkout button
export default function CheckoutContainer({
    checkoutItems,
    handleRemoveFromCart,
    handleEmptyCheckout,
}: CheckoutContainerProps)
{
    //sum of price * quantity for every line, starts at 0
    const grandTotal = checkoutItems.reduce(
        (total, line) => total + line.price * line.quantity,
        0,
    )
    return(
        <div className='CheckoutContainer'>
            <h2>Checkout</h2>
            {/* remove handler is wrapped to include this lines id */}
            {checkoutItems.length === 0
                ? <p>Cart Empty</p>
                : checkoutItems.map((line) => (
                    <CheckoutCard 
                        key={line.id} 
                        {...line}
                        handleRemove={() => handleRemoveFromCart(line.id)}
                    />
                ))}
            <h3>Total: ${grandTotal.toFixed(2)}</h3>
            <button onClick={handleEmptyCheckout} disabled={checkoutItems.length === 0}>
                Empty Checkout
            </button>
        </div>
    );
}