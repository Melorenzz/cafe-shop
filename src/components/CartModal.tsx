import {useEffect, useState} from 'react';
import {MinusIcon, PlusIcon, TrashIcon} from "@heroicons/react/16/solid";
import {useCartStore} from "../store/store.ts";

type CartItems = {
    name: string;
    price: number;
    quantity: number;
    img: string;
}

export default function CartModal() {
    const [deliveryType, setDeliveryType] = useState('pickup');

    const { cart, increaseQuantity, decreaseQuantity } = useCartStore();



    // function counter(name: string, isPlus: boolean) {


        // setCartItems((prevState) => (
        //     prevState.map(item => (
        //         item.name === name ? {...item, quantity: isPlus ? item.quantity + 1 : item.quantity - 1} : item
        //     )).filter(item => item.quantity >= 1)
        //
        // ))
    // }

    return (

                    <div className="absolute right-0 z-50 top-10 w-[300px] sm:w-[350px] bg-white rounded-xl">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Корзина</h2>

                        </div>

                        {/* Modal Body */}
                        <div className="p-6 max-h-96 overflow-y-auto">
                            {/* Cart Items */}
                            <div className="space-y-4">
                                {cart.length > 0 ? (
                                    cart.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0">
                                            <div className="w-12 h-12 bg-gray-100 overflow-hidden rounded-lg flex items-center justify-center text-lg">
                                                <img className='w-full h-full object-cover' src={item.img} alt=""/>
                                            </div>

                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-800">{item.name}</h4>
                                                <p className="text-[#FF902B] font-semibold text-sm">{item.price} руб</p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => decreaseQuantity(item.name)}
                                                    className="w-8 h-8 bg-gray-100 p-2 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                                                >
                                                    {item.quantity === 1 ? (
                                                        <TrashIcon className='text-[red]' />
                                                    ) : (
                                                        <MinusIcon  />
                                                    )}
                                                </button>
                                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => increaseQuantity(item.name)}

                                                    className="w-8 h-8 bg-gray-100 p-2 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                                                >
                                                    <PlusIcon  />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Clean</p>
                                )}
                            </div>

                            {/* Total */}
                            <div className="mt-6 pt-4 border-t-2 border-gray-200">
                                <div className="flex justify-between items-center text-lg font-semibold">
                                    <span>Итого:</span>
                                    <span className="text-[#FF902B]">{cart.reduce((current, item) => current + item.price * item.quantity, 0)} руб</span>
                                </div>
                            </div>

                            {/* Delivery Options */}
                            <div className="mt-6">
                                <h3 className="font-medium mb-3 text-gray-800">Способ получения:</h3>
                                <div className="space-y-2">
                                    <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                        deliveryType === 'pickup' ? 'border-[#FF902B] bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                                    }`}>
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="pickup"
                                            checked={deliveryType === 'pickup'}
                                            onChange={(e) => setDeliveryType(e.target.value)}
                                            className="text-blue-600"
                                        />
                                        <div>
                                            <div className="font-medium">Самовывоз из магазина</div>
                                            <div className="text-sm text-gray-600">Бесплатно • Готов через 2 часа</div>
                                        </div>
                                    </label>

                                    {/*<label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${*/}
                                    {/*    deliveryType === 'delivery' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'*/}
                                    {/*}`}>*/}
                                    {/*    <input*/}
                                    {/*        type="radio"*/}
                                    {/*        name="delivery"*/}
                                    {/*        value="delivery"*/}
                                    {/*        checked={deliveryType === 'delivery'}*/}
                                    {/*        onChange={(e) => setDeliveryType(e.target.value)}*/}
                                    {/*        className="text-blue-600"*/}
                                    {/*    />*/}
                                    {/*    <div>*/}
                                    {/*        <div className="font-medium">Доставка курьером</div>*/}
                                    {/*        <div className="text-sm text-gray-600">500 ₽ • 1-2 дня</div>*/}
                                    {/*    </div>*/}
                                    {/*</label>*/}
                                </div>
                            </div>

                            {/* Order Button */}
                            <button
                                className="w-full mt-6 bg-[#FF902B] hover:bg-orange-500 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
    );
}