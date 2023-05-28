import Navbar from "./navbar";
import Subcriptions from "./subcriptions";
import bg from '../assest/Background.png';
import live from '../assest/live.png';
import {BsBook} from 'react-icons/bs'

const Home = () =>{

  return(
    <div >
      <section>
        <Navbar/>
      </section>
      <section style={{backgroundImage: `url(${bg})`,backgroundRepeat:"no-repeat"}} className="flex w-screen min-h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1 p-10">
          {/* headings and lines */}
          <div className="flex flex-col pt-5 gap-9">
            <h1 className="text-5xl mb-5 text-white">
              Access curated courses worth <span className="line-through">$18,500</span> at just <span className="text-[#0048FF]">$99</span> per year!
            </h1>
            <div className="flex flex-row gap-7">
              <div className="text-white text-3xl">
                <BsBook/>
              </div>
              <h2 className="flex text-white text-2xl"><span className="text-[#0048FF] font-medium">100+</span> Job relevant courses</h2>
            </div>
            <div className="flex flex-row gap-7">
              <div className="material-symbols-outlined text-3xl text-white">schedule</div>
              <h2 className="text-white text-2xl"><span className="text-[#0048FF] font-medium">20,000+</span> Hours of content</h2>
            </div>
            <div className="flex flex-row gap-5">
              <div className="pt-2 border-[3px] border-white p-1 rounded-md">
                <img src={live}/>
              </div>
              <h2 className="text-white text-2xl"><span className="text-[#0048FF] font-medium">Exclusive</span> Webinar access</h2>
            </div>
            <div className="flex flex-row gap-5">
              <div className="material-symbols-outlined text-white text-4xl">
                school
              </div>
              <h2 className="text-white text-2xl">Scholarship worth<span className="text-[#0048FF] font-medium"> $94,500</span></h2>
            </div>
            <div className="flex flex-row gap-5">
              <div className="border-[3px] border-white w-10 h-10 rounded-full text-white ">
              <svg
                className="h-10 w-10 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="16" y1="6" x2="5" y2="18" />
              </svg>
              <p className="mt-[-35px] pl-1 font-medium">Ads</p>
              </div>
              <h2 className="text-white text-2xl"><span className="text-[#0048FF] font-medium">Ad Free</span> learning experience</h2>
            </div>
          </div>

          {/* form */}
          <div className="lg:pl-[100px]">
            <Subcriptions/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;