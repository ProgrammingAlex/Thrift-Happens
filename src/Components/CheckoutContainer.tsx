import CheckoutCard from './CheckoutCard';
import type {CheckoutItem} from './ThriftApp'

interface CheckoutContainerProps 
{ 
    checkoutItems: CheckoutItem[]
    handleRemoveFromCart: (id: number) => void;
    handleEmptyCheckout: () => void;
}

export default function CheckoutContainer({
    checkoutItems,
    handleRemoveFromCart,
    handleEmptyCheckout,
}: CheckoutContainerProps)
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