import { useState } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useCartStore } from "../store/store.ts";

export default function CartModal() {
    const [deliveryType, setDeliveryType] = useState("pickup");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { cart, increaseQuantity, decreaseQuantity } = useCartStore();

    const total = cart.reduce(
        (current, item) => current + item.price * item.quantity,
        0
    );

    // Отправка заказа на backend
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || cart.length === 0) {
            alert("Добавьте хотя бы один товар в корзину");
            return;
        };

        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    items: cart.map((item) => ({
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                    delivery: deliveryType,
                }),
            });

            if (res.ok) {
                setSuccess(true);
                setName("");
                setPhone("");
            }
        } catch (err) {
            console.error("Ошибка при отправке заказа:", err);
        } finally {
            setLoading(false);
        }
    };

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
                            <div
                                key={index}
                                className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0"
                            >
                                <div className="w-12 h-12 bg-gray-100 overflow-hidden rounded-lg flex items-center justify-center text-lg">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.img}
                                        alt=""
                                    />
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                                    <p className="text-[#FF902B] font-semibold text-sm">
                                        {item.price} руб
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.name)}
                                        className="w-8 h-8 bg-gray-100 p-2 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                                    >
                                        {item.quantity === 1 ? (
                                            <TrashIcon className="text-[red]" />
                                        ) : (
                                            <MinusIcon />
                                        )}
                                    </button>
                                    <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                                    <button
                                        onClick={() => increaseQuantity(item.name)}
                                        className="w-8 h-8 bg-gray-100 p-2 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                                    >
                                        <PlusIcon />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Корзина пустая</p>
                    )}
                </div>

                {/* Total */}
                <div className="mt-6 pt-4 border-t-2 border-gray-200">
                    <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Итого:</span>
                        <span className="text-[#FF902B]">{total} руб</span>
                    </div>
                </div>

                {/* Форма */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Имя
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введите имя"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Телефон
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+420 123 456 789"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* Способ получения */}
                    <div>
                        <h3 className="font-medium mb-3 text-gray-800">Способ получения:</h3>
                        <div className="space-y-2">
                            <label
                                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                    deliveryType === "pickup"
                                        ? "border-[#FF902B] bg-orange-50"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="pickup"
                                    checked={deliveryType === "pickup"}
                                    onChange={(e) => setDeliveryType(e.target.value)}
                                    className="text-blue-600"
                                />
                                <div>
                                    <div className="font-medium">Самовывоз</div>
                                    <div className="text-sm text-gray-600">
                                        Бесплатно • Готов через 2 часа
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-[#FF902B] hover:bg-orange-500 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50"
                    >
                        {loading ? "Отправка..." : "Оформить заказ"}
                    </button>

                    {success && (
                        <p className="text-green-600 text-center font-medium mt-2">
                            ✅ Заказ отправлен!
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
