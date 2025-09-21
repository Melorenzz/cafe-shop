import MainLayout from "../../layouts/MainLayout.tsx";

const blocks = [
    {title: 'How to use delivery service', subtitle: 'there are 20+ coffees for you', img: '/images/howtoimage.png'},
    {title: 'we delivery it to you', subtitle: 'Choose delivery service', img: '/images/food-truck%201.png'},
    {title: 'Enjoy your coffee', subtitle: 'Choose delivery service', img: '/images/coffee-cup%202.png'},
]

const HowToUse = () => {
    return (
        <MainLayout className='mt-5'>
            <h2 className='text-3xl font-semibold mt-20'>How to use delivery service</h2>
            <div className='flex flex-wrap items-center justify-around gap-10 mt-10'>
                {blocks.map(item => (
                    <div className='flex flex-col items-center space-y-2'>
                        <img className='max-w-[159px] aspect-square w-full' src={item.img} alt="cofee cup"/>
                        <h2 className='text-[#2F2105] text-2xl font-semibold'>{item.title}</h2>
                        <p className='text-lg'>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default HowToUse;