import MainLayout from "../../layouts/MainLayout.tsx";
import Header from "../Header.tsx";
import {Link} from "react-router-dom";
import {StarIcon} from "@heroicons/react/16/solid";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

const Main = () => {
    return (
        <div className='bg-[#F6EBDA] relative pb-100'>
            <img className='absolute right-0 top-0 z-1' src="/images/bg_main.png" alt="background image"/>
            <img className='absolute bottom-0 left-0 rotate-y-180 rotate-x-180 z-0' src="/images/bg_main.png" alt="background image"/>
            <MainLayout className='relative z-2'>
                <Header />
                <div className='flex flex-col gap-20 lg:flex-row justify-center lg:justify-between items-center mt-30'>
                    <div className='space-y-7'>
                        <h1 className='text-5xl font-semibold leading-15 text-[#2F2105] max-w-[490px]'>Enjoy your <span className='text-[#FF902B]'>cofee</span> before your activity</h1>
                        <p className='text-[#7E7D7A] text-lg max-w-[350px]'>
                            Boost your productivity and build your mood with a glass of coffee in the morning
                        </p>
                        <div className='flex items-center gap-5'>
                            <Link to='' className='px-5 py-3 text-sm font-semibold rounded-full bg-[#2F2105] text-white w-fit flex items-center gap-2'>
                                Order now
                                <div className='aspect-square rounded-full w-5 p-1 bg-[#FF902B]'>
                                    <ShoppingCartIcon strokeWidth={2.5} />
                                </div>
                            </Link>
                            <Link to='' className='px-5 py-3 text-sm font-bold rounded-full text-[#F4AE26]'>More menu</Link>
                        </div>
                    </div>
                    <div>
                        <div className='aspect-square max-w-100 flex items-center justify-center relative'>
                            <img src="/images/cofee.png" alt="cofee"/>
                            <div className='absolute top-10 left-0 md:-left-12 p-1 bg-[white]/70 backdrop-blur-sm rounded-full'>
                                <div className='bg-[white] rounded-full w-full h-full px-10 py-1 text-2xl font-semibold flex items-center justify-center'>
                                    Cappuccino
                                </div>

                            </div>
                            <div className='absolute bottom-10 left-0 p-1 bg-[white]/70 backdrop-blur-sm rounded-full'>
                                <div className='bg-[white] rounded-full w-full h-full px-10 py-1 text-2xl font-semibold flex items-center justify-center'>
                                    18K
                                </div>

                            </div>
                            <div className='absolute top-25 right-0 p-1 bg-[white]/70 backdrop-blur-sm rounded-full'>
                                <div className='bg-[white] rounded-full w-full h-full px-7 py-2 text-2xl font-bold flex items-center justify-center gap-1'>
                                    4.8
                                    <StarIcon className='w-5 text-[#FFD057]' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default Main;