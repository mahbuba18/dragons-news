import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center '>
            <img className='mx-auto p-4' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;