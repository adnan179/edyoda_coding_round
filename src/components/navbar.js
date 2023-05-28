import logo from '../assest/companylogo.png';

const Navbar = () =>{

  return(
    <section>
      <nav className='flex flex-row w-screen justify-between py-7 shadow-2xl'>
        <div className='flex pl-[80px]'>
          <ul className='flex flex-row w-auto justify-center gap-3'>
            <li>
              <img src={logo} alt='logo'/>
            </li>
            <li>
              <select className='rounded-sm'>
                <option value='React JS'>
                  Courses
                </option>
                <option value='React JS'>
                  React JS
                </option>
                <option value='Angular JS'>
                  Angular JS
                </option>
                <option value='Vue JS'>
                  Vue JS
                </option>
              </select>
            </li>
            <li>
              <select className='rounded-sm'>
                <option value='React JS'>
                  Programs
                </option>
                <option value='Angular JS'>
                  Angular JS
                </option>
                <option value='Vue JS'>
                  Vue JS
                </option>
              </select>
            </li>
          </ul>
        </div>
        <div className='flex flex-row gap-5 items-center pr-[80px]'>
          <div className='material-symbols-outlined cursor-pointer text-2xl'>
            Search
          </div>
          <button className='shadow-lg rounded-md py-2 px-3 cursor-pointer'>
            Log in
          </button>
          <button className='text-white py-1 px-5 rounded-2xl border-none bg-gradient-to-l from-[#0048FF] to-[#0096FF]
          cursor-pointer '>
            Join Now
          </button>
        </div>
      </nav>
    </section>
  )
}

export default Navbar;