import MainLayout from "../../layouts/MainLayout.tsx";
import ProductCard from "../ProductCard.tsx";


const special = [
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
    {
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=60",
        rating: "4.7",
        name: "Mocha",
        price: 5,
        subtitle: "Chocolate flavored espresso drink",
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60",
        rating: "4.5",
        name: "Macchiato",
        price: 4,
        subtitle: "Espresso with a dash of steamed milk",
    },
    {
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60",
        rating: "4.6",
        name: "Flat White",
        price: 4.2,
        subtitle: "Espresso with velvety milk",
    },

];
const SpecialProduct = () => {
    return (
        <MainLayout>
            <h2 className='text-3xl font-semibold mt-20'>Special menu for you</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {special.map((product) => (
                    <ProductCard img={product.img} rating={product.rating} price={product.price} name={product.name} subtitle={product.subtitle} />
                ))}
            </div>
        </MainLayout>
    );
};

export default SpecialProduct;