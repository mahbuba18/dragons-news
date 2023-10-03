import { BiLogoGoogle} from 'react-icons/bi';
import {AiFillGithub} from 'react-icons/ai';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';



const RightSideNav = () => {
    return (
        <>
        <div>
           <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-3xl font-semibold ">Login With</h2>
            <button className="btn btn-outline text-xl w-full"> < BiLogoGoogle ></BiLogoGoogle> Google </button>
            <button className="btn btn-outline text-xl w-full"> <AiFillGithub></AiFillGithub> Git Hub 
            </button>
           </div>
     </div>
     <div>
     <div className='p-4  mb-6'>
      <h2 className="text-3xl mb-4 font-semibold ">Find Us On</h2>
      <a href="" className='p-4 flex text-lg items-center border rounded-t-lg'>
        <FaFacebook className='mr-3'></FaFacebook>
        <span> Facebook</span>
      </a>
      <a href="" className='p-4 flex text-lg items-center border-x'>
        <FaTwitter className='mr-2'></FaTwitter>
        <span>Twitter</span>
      </a>
      <a href="" className='p-4 flex text-lg items-center border rounded-b-lg'>
        <FaInstagram className='mr-2'></FaInstagram>
        <span> Instagram</span>
      </a>
     </div>
      
  </div>
  {/* Q-zone*/ }
  <div>
           <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-3xl font-semibold ">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           
           </div>
     </div>
     <div></div>

  </>
        
        
    );
};

export default RightSideNav;