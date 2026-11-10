
import logo from '../assets/images/logo.png';
//Top bar showing the store name and checkout item count.
interface NavBarProps {checkoutCount: number;}


export default function NavBar({checkoutCount}: NavBarProps)
{
    return(
        <nav className="NavBar">
            <img src={logo} alt="Logo" height="120px" width="300px"/>
            <p>Checkout: {checkoutCount} {checkoutCount === 1 ? "item" : "items"}</p>
        </nav>
    );
}