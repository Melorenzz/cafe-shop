import { create } from "zustand";

interface ICartItem {
    name: string;
    price: number;
    quantity: number;
    img: string;
}

interface CartStore {
    cart: ICartItem[];
    addToCart: (item: ICartItem) => void;
    removeFromCart: (name: string) => void;
    increaseQuantity: (name: string) => void;
    decreaseQuantity: (name: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: JSON.parse(localStorage.getItem("cart") || '[]'),
    addToCart: (item) =>
        set((state) => {
            const newCart = [...state.cart, item];
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        }),
    removeFromCart: (name) =>
        set((state) => {
            const newCart = state.cart.filter((i) => i.name !== name);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        }),
    increaseQuantity: (name) =>
        set((state) => {
            const newCart = state.cart.map((i) =>
                i.name === name ? { ...i, quantity: i.quantity + 1 } : i
            );
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        }),

    decreaseQuantity: (name) =>
        set((state) => {
            let newCart = state.cart.map((i) =>
                i.name === name ? { ...i, quantity: i.quantity - 1 } : i
            );
            // удалить товары с quantity < 1
            newCart = newCart.filter((i) => i.quantity > 0);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        }),
}))