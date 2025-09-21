import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import {CheckIcon, StarIcon} from "@heroicons/react/16/solid";
import {useEffect, useState} from "react";
import {useCartStore} from "../store/store.ts";

interface IProduct {
    img: string;
    rating: string;
    name: string;
    price: number;
    subtitle: string;

}

const ProductCard = ({img, rating, name, price, subtitle}: IProduct) => {
    const { cart, addToCart } = useCartStore();

    // проверяем, есть ли товар в корзине
    const isInCart = cart.some((item) => item.name === name);


    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full p-6">
            {/* Image container with rating */}
            <div className="relative">
                <img
                    src={img}
                    alt="image"
                    className="w-full h-50 sm:h-56 object-cover rounded-xl"
                />
                {/* Rating badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <span className="text-lg font-semibold text-gray-800">{rating}</span>
                    <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
            </div>

            {/* Content */}
            <div>
                <div className="flex justify-between items-center mb-3 mt-3">
                    <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                    <span className="text-2xl font-bold text-gray-800">{price} P</span>
                </div>

                <div className="flex justify-between">
                    {/* Temperature options */}
                    <p className='font-semibold text-[#7E7D7A] max-w-[160px] leading-5 line-clamp-2'>
                        {subtitle}
                    </p>

                    {/* Add to cart button */}
                    <button
                        disabled={isInCart}
                        onClick={() => {
                            addToCart({ name, price, quantity: 1, img });
                        // localStorage.setItem("cart", JSON.stringify(newCart));
                    }} className={` ${isInCart ? 'bg-green-500' : 'bg-orange-400 hover:bg-orange-500'} text-white p-3 rounded-full transition-colors`}>
                        {isInCart ? (
                            <CheckIcon className="w-6 h-6" />
                        ) : (
                            <ShoppingCartIcon className="w-6 h-6" />

                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;