import {Link} from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import CartModal from "./CartModal.tsx";
import {useState} from "react";

const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
            <header className="flex py-5 justify-between items-center">
                <img src="/images/icons/logo_coffe.svg" alt="logo"/>
                <nav className='text-lg hidden lg:flex space-x-5'>
                    <Link to={''}>About us</Link>
                    <Link to={''}>Our Product</Link>
                    <Link to={''}>Delivery</Link>
                </nav>
                <div className='flex items-center gap-5'>
                    <div className='rounded-full max-w-[222px] w-full px-3 py-2 bg-[white] flex items-center gap-3'>
                        <MagnifyingGlassIcon className='min-w-6'  />
                        <input className='hidden lg:inline' placeholder='Cappuccino' type="text"/>
                    </div>
                    <div className="flex items-center relative">
                        {/* кнопка корзины */}
                        <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative z-10">
                            <ShoppingCartIcon className="w-6 h-6" />
                        </button>

                        {/* попап */}
                        {isCartOpen && (
                            <CartModal />
                        )}
                    </div>

                </div>
            </header>

    );
};

export default Header;