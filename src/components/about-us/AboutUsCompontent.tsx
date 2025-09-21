import MainLayout from "../../layouts/MainLayout.tsx";
import {Link} from "react-router-dom";

const AboutUsCompontent = () => {
    return (
        <div className='bg-[url(/images/bg-image.png)] w-full bg-no-repeat bg-cover py-15 mt-50'>
            <MainLayout className='flex flex-wrap justify-around gap-10 items-center'>
                <div className='p-2 bg-[white]/50 backdrop-blur-sm max-w-[370px] w-full h-[509px] rounded-xl -mt-40 shadow-sm'>
                    <div className=' w-full h-full rounded-xl'>
                        <img className='w-full h-full object-cover' src="/images/cofeeCup.png" alt="cofee"/>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>About us</h2>
                    <p className='text-2xl font-semibold max-w-[330px] mt-5'>We provide quality coffee, and ready to deliver.</p>
                    <p className='mt-3 text-lg text-[#7E7D7A] max-w-[430px]'>
                        We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.
                    </p>
                    <Link to='' className='mt-5 px-5 py-3 text-sm font-semibold rounded-full bg-[#2F2105] text-[#F4AE26] w-fit flex items-center gap-2'>
                        Get your coffee
                    </Link>
                </div>
            </MainLayout>
        </div>
    );
};

export default AboutUsCompontent;