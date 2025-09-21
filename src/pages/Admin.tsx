import { useEffect, useState } from "react";
import AdminOrders from "../components/admin/AdminOrders.tsx";

export default function AdminPage() {
    const [token, setToken] = useState<string | null>(null);
    const [authorized, setAuthorized] = useState(false);

    // useEffect(() => {
    //     const savedToken = localStorage.getItem("admin_token");
    //     if (savedToken === ADMIN_SECRET) {
    //         setToken(savedToken);
    //         setAuthorized(true);
    //     }
    // }, []);

    // const handleLogin = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const form = e.target as HTMLFormElement;
    //     const input = form.adminPassword as HTMLInputElement;
    //
    //     if (input.value === ADMIN_SECRET) {
    //         localStorage.setItem("admin_token", input.value);
    //         setToken(input.value);
    //         setAuthorized(true);
    //     } else {
    //         alert("Неверный пароль!");
    //     }
    // };

    if (!authorized) {
        return (
            <div className="flex items-center justify-center h-screen">
                <form
                    onSubmit={handleLogin}
                    className="bg-white p-6 rounded shadow-md w-80"
                >
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Вход для владельцев
                    </h2>
                    <input
                        type="password"
                        name="adminPassword"
                        placeholder="Введите пароль"
                        className="w-full px-4 py-2 mb-4 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
                    >
                        Войти
                    </button>
                </form>
            </div>
        );
    }

    // Если авторизован → показываем заказы
    return <AdminOrders />;
}
