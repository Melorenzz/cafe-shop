import MainLayout from "../../layouts/MainLayout.tsx";
import ProductCard from "../ProductCard.tsx";

const popularProducts = [
    {
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=60",
        rating: "4.8",
        name: "Espresso",
        price: 3,
        subtitle: "Strong and bold coffee shot",
    },
    {
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60",
        rating: "4.6",
        name: "Cappuccino",
        price: 4,
        subtitle: "Espresso with steamed milk and foam",
    },
    {
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=500&q=60",
        rating: "4.9",
        name: "Latte",
        price: 4.5,
        subtitle: "Smooth espresso with steamed milk",
    },
];

const Popular = () => {
    return (
        <MainLayout>
            <h2 className='text-3xl font-semibold -mt-79 relative z-2'>Popular Now</h2>
            <div className='w-full lg:h-[367px] rounded-4xl bg-[#F9D9AA] mt-40 relative'>
                <div className='lg:absolute -top-30 flex flex-col lg:flex-row gap-[38px] justify-center w-full px-5 py-5 md:py-0 md:px-10'>
                    {popularProducts.map((product) => (
                        <ProductCard img={product.img} rating={product.rating} name={product.name} price={product.price} subtitle={product.subtitle} />

                    ))}
                </div>
            </div>

        </MainLayout>
    );
};

export default Popular;