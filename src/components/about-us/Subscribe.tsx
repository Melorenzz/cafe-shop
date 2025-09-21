import MainLayout from "../../layouts/MainLayout.tsx";
import {Link} from "react-router-dom";

const Subscribe = () => {
    return (
        <MainLayout >
            <div className='my-20 gap-7 h-[200px] p-5 md:h-[250px] lg:h-[392px] flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[url(/images/bg-cofee.png)] bg-no-repeat bg-center bg-cover'>
                <h2 className='text-3xl font-semibold text-white'>Subscribe to get 50% discount price</h2>
                <div className='max-w-[486px] bg-white h-fit w-full rounded-full p-1 flex justify-between '>
                    <input placeholder='Email address' className='w-full px-3 font-bold' type="text"/>
                    <Link to='' className='min-w-fit px-5 py-3 text-sm font-semibold rounded-full bg-[#2F2105] text-white w-fit flex items-center gap-2'>
                        Get your coffee
                    </Link>
                </div>
            </div>
        </MainLayout>

    );
};

export default Subscribe;