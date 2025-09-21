import { useEffect, useState } from "react";
import {
    CalendarIcon,
    CheckCircleIcon,
    ClockIcon,
    PhoneIcon,
    ShoppingBagIcon,
    TrashIcon
} from "@heroicons/react/16/solid";

type OrderItem = {
    name: string;
    price: number;
    quantity: number;
};

type Order = {
    id: number;
    name: string;
    phone: string;
    items: OrderItem[];
    createdAt: string;
    status?: "pending" | "completed";
};

const ADMIN_SECRET = import.meta.env.VITE_ADMIN_SECRET;

export default function AdminOrders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/api/orders", {
                headers: { Authorization: `Bearer ${ADMIN_SECRET}` },
            });
            if (!res.ok) throw new Error("Не удалось получить заказы");
            const data = await res.json();
            setOrders(data.map((o: Order) => ({ ...o, status: "pending" })));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteOrder = async (id: number) => {
        try {
            const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${ADMIN_SECRET}` },
            });

            if (!res.ok) throw new Error("Не удалось удалить заказ");

            // Удаляем из локального состояния после успешного ответа
            setOrders((prev) => prev.filter((o) => o.id !== id));
        } catch (err) {
            console.error(err);
        }
    };
    const getTotalAmount = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Заголовок */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Все заказы
                    </h1>
                    <p className="text-gray-600">Управление заказами и их статусами</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        <p className="ml-4 text-gray-600">Загрузка...</p>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="text-center py-16">
                        <ShoppingBagIcon className="mx-auto h-24 w-24 text-gray-300 mb-4" />
                        <p className="text-xl text-gray-500 font-medium">Нет заказов</p>
                        <p className="text-gray-400 mt-2">Заказы будут отображаться здесь</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >


                                {/* Заголовок заказа */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            {order.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <PhoneIcon className="h-4 w-4" />
                                            <span className="text-sm">{order.phone}</span>
                                        </div>
                                    </div>

                                    {/* Статус */}
                                    <div className="flex items-center gap-2">
                                        {order.status === "completed" ? (
                                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <ClockIcon className="h-5 w-5 text-amber-500" />
                                        )}
                                        <span
                                            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                                order.status === "completed"
                                                    ? "bg-green-100 text-green-700 ring-1 ring-green-200"
                                                    : "bg-amber-100 text-amber-700 ring-1 ring-amber-200"
                                            }`}
                                        >
                      {order.status === "completed" ? "Выполнен" : "В обработке"}
                    </span>
                                        <button
                                            onClick={() => deleteOrder(order.id)}
                                            className=" p-2 rounded-full bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-all duration-200 group"
                                        >
                                            <TrashIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                        </button>
                                    </div>

                                </div>

                                {/* Товары */}
                                <div className="bg-gray-50/50 rounded-xl p-4 mb-4 space-y-3">
                                    <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                                        Состав заказа
                                    </h4>
                                    {order.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center py-2 px-3 bg-white/60 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                                                    {item.quantity}
                                                </div>
                                                <span className="font-medium text-gray-800">
                          {item.name}
                        </span>
                                            </div>
                                            <span className="font-bold text-blue-600">
                        {item.price * item.quantity} ₽
                      </span>
                                        </div>
                                    ))}

                                    {/* Общая сумма */}
                                    <div className="border-t pt-3 mt-3">
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="font-bold text-gray-800">Итого:</span>
                                            <span className="font-bold text-xl text-blue-600">
                        {getTotalAmount(order.items)} ₽
                      </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Дата и время */}
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>
                    {new Date(order.createdAt).toLocaleString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
