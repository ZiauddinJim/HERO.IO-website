import playStore from '/playStore.png'
import appStore from '/appStore.png'
import assets from '../assets/assets';
import Container from './Container';
const Banner = () => {
    return (
        <div>
            <div className='text-center mx-2 lg:mx-auto flex flex-col justify-center items-center'>
                <h1 className='lg:text-6xl text-4xl font-bold mt-20'>
                    We Build <br />
                    <span className='gradient bg-clip-text text-transparent'> Productive</span> Apps
                </h1>
                <p className='gray mt-4 mb-10'>
                    At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <ul className='flex justify-center gap-5 mb-10'>
                    <li className='btn btn-outline '>
                        <a target='_blank' href="https://play.google.com/" className='flex items-center gap-1'>
                            <img src={playStore} /> <span> Google Play</span>
                        </a></li>
                    <li className='btn btn-outline '>
                        <a target='_blank' href="https://www.apple.com/app-store" className='flex items-center gap-1'>
                            <img src={appStore} /> <span>App Store</span>
                        </a></li>
                </ul>
                <div><img src={assets.hero} alt="" /></div>
            </div>
            <div className='gradient text-white w-full py-20 px-3 mx-auto text-center'>
                <Container>
                    <h1 className='font-bold lg:text-5xl text-3xl mb-10'>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-25 justify-center'>
                        <div className='state-cards bg-[#632ee3]'>
                            <p className="stat-title text-slate-200">Total Downloads</p>
                            <p className="stat-value">29.6M</p>
                            <p className="stat-desc text-slate-200">12% More Than Last Month</p>
                        </div>
                        <div className='state-cards bg-[#7b45e8]'>
                            <p className="stat-title text-slate-200">Total Downloads</p>
                            <p className="stat-value">29.6M</p>
                            <p className="stat-desc text-slate-200">12% More Than Last Month</p>
                        </div>
                        <div className='state-cards bg-[#9f62f2]'>
                            <p className="stat-title text-slate-200">Total Downloads</p>
                            <p className="stat-value">29.6M</p>
                            <p className="stat-desc text-slate-200">12% More Than Last Month</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>

    );
};

export default Banner;