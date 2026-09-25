
import logo from "./assets/logo-text.png"

const Footer = () => {
    return (
        <div className='container mx-auto mt-10 border-t  border-gray-200'>
            <div className='flex justify-between mt-10 '  >
                <div>
                    <ul>
                 <img src={logo} alt="Decstac" className='w-22 h-10 object-contain '/>
                 <p className='w-100  text-gray-500'>Curated tools,technologies, and resources for developers building modern software</p>
                 
               </ul>
                </div>
               <div>
                <ul>
                <h1 className=' font-bold'>PRODUCT</h1>
                <li className=' text-gray-500'>Home</li>
                <li className=' text-gray-500'>Technologies</li>
                <li className=' text-gray-500'>Projects</li>
               </ul>
               </div>

               <div>
                <ul >
                <h1 className=' font-bold'>COMPANY</h1>
                <li className=' text-gray-500'>About</li>
                <li className=' text-gray-500'>Contact</li>
                <li className=' text-gray-500'>Careers</li>
               </ul>
               </div>

            </div>

            <p className='text-sm text-gray-500 border-t border-gray-200 mt-8 pt-6 mb-4'>© 2026 Dev Stack. All rights reserved</p>
        </div>
    );
};

export default Footer;