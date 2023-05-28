import time from '../assest/Vector.png'
import Razor from '../assest/razor.png';
import { useState } from 'react';
import subscriptionPlans from './data';

const Subcriptions = () =>{
  const [subscriptionPrice, setSubscriptionPrice] = useState();

  const onOptionChange = (e) =>{
    setSubscriptionPrice(e.target.value);
  }
  const limitedOffer = subscriptionPrice - 18500;

  return(
    <div className='flex '>
      {/* form container */}
      <div className="flex flex-col w-[500px] rounded-lg shadow-2xl p-5 bg-white">

        {/* sign up and Subscribe */}
        <div className="flex flex-col w-full h-[100px] ">
          <div className="flex flex-row justify-around mb-3">
            {/* sign up */}
            <div className="flex flex-col items-center">
              <div className="flex w-[40px] h-[40px] rounded-full bg-[#0048FF] justify-center items-center 
              text-white font-medium text-xl">1</div>
              <div>
                <h4 className="text-gray-500">Sign up</h4>
              </div>
            </div>
            {/* subscribe */}
            <div className="flex flex-col items-center">
              <div className="flex w-[40px] h-[40px] rounded-full bg-[#0048FF] justify-center items-center 
              text-white font-medium text-xl">2</div>
              <div>
                <h4 className="text-gray-500">Subscribe</h4>
              </div>
            </div>
          </div>

          {/* heading */}
          <div className="flex justify-center font-medium mb-5">
            <h3>Select your subcription plan</h3>
          </div>
        </div>

        {/* subcription plan */}
        <div className="flex flex-col w-full mt-5 gap-3">
          {subscriptionPlans && subscriptionPlans.map((plan)=>(
            <div className={
              plan.category === 'recommended' ? 'flex flex-row justify-between p-2 rounded-md border-[3px] border-[#47BA68] '
              : plan.category === 'expired' ? 'flex flex-row justify-between p-2 rounded-md border-[3px] border-[#E7E7E7]'
              : 'flex flex-row justify-between p-2 rounded-md border-[3px]'
            }>
              <div className='flex flex-row items-center gap-5'>
                {plan.category === 'recommended' ?
                <input type='radio' name= 'subscription-plan' 
                value = {plan.price} 
                className='w-5 h-5  bg-gray-100 border-gray-300
                focus:ring-blue-500'
                onChange={onOptionChange}/>: plan.category === 'expired'?
                <input type='radio' name= 'subscription-plan' 
                value = {plan.price} disabled
                className='w-5 h-5  bg-gray-100 border-gray-300
                focus:ring-blue-500'
                onChange={onOptionChange}/>:
                <input type='radio' name= 'subscription-plan' 
                value = {plan.price} 
                className='w-5 h-5  bg-gray-100 border-gray-300
                focus:ring-blue-500'
                onChange={onOptionChange}/>}
                <div className='flex flex-col'>
                  {plan.category === 'recommended' ?
                  <div className=' mt-[-16px] bg-[#47BA68] rounded-t-none rounded-b-md 
                  text-center font-medium'>
                    Recommended
                  </div>
                  :plan.category === 'expired' ?
                  <div className='mt-[-16px] bg-[#FF0000] rounded-t-none rounded-b-md 
                  text-center font-medium'>
                    Offer Expired
                  </div> : <div></div>
                  }
                  <h2>{plan.name}</h2>
                </div>
              </div>
              <div className='flex flex-col'>
                <div>
                  <p>Total <strong>&#8377;{plan.price}</strong></p>
                </div>
                <div>
                  <p>&#8377;{plan.monthly}<span className='font-thin text-gray-500'>/mo</span></p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* gray line */}
        <div className="w-full h-[1.5px] bg-gray-300 mt-5"></div>

        {/* amount section */}
        <div className="flex w-full h-[50px] mt-5 flex-row justify-between">
          <div className="flex text-sm text-gray-400 pl-5">Subcription Fee</div>
          <div className="flex text-md text-black pr-5">&#8377;18,500</div>
        </div>

        {/* limited offer */}
        <div className="flex flex-row w-full h-auto py-3 justify-between border-[3px] rounded-lg shadow-lg
        border-[#FF0000] bg-[#F77171] opacity-[0.69] ">
          <div className='flex flex-col pl-5 gap-2'>

            <div className="text-[#FF0000] text-sm font-medium">Limited time offer</div>

            <div className="flex flex-row text-[#FF0000] text-sm gap-2">

              <div className='flex text-[#FF0000]'>
                <img src={time} alt='logo' className='w-5 h-5'/>
              </div>

              <div className='flex items-center'>Offer valid till March 2023</div>
            </div>
          </div>
          <div className='pr-5 font-medium'>
            {limitedOffer}
          </div>
        </div>
        {/* GST */}
        <div className='flex flex-row justify-between mt-2'>
            <div className='flex pl-6'>
              Total<span className='font-thin'>(Incl.of 18% GST)</span>
            </div>
            <div className='flex pr-6 font-bold'>
              &#8377;{subscriptionPrice}
            </div>
          </div>
        <div className="flex w-full mt-10 justify-between px-11">
          <button className='uppercase bg-transparent border-[#F77171] 
          border-[1.5px] rounded-md py-4 px-11 font-medium text-[#F77171]'>
            Cancel
          </button>
          <button className='uppercase border-none bg-[#47BA68] py-4 px-9 rounded-md text-[#D7EDDD]'>
            Proceed To Pay
          </button>
        </div>
        <div className='mt-4 '>
          <img src={Razor} alt='razor'/>
        </div>
      </div>
    </div>
  )
}

export default Subcriptions;