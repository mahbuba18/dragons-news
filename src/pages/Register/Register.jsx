import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name =form.get('name');
        const photo =form.get('photo');
        const email =form.get('email');
        const password =form.get('password')
        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div>

          <Navbar ></Navbar>
           <div className="">
           <h1 className="text-2xl text-center font-semibold mt-10">Register Please</h1>
            <form onSubmit={handleRegister}  className="md:w-3/4 lg:w-1/2 mx-auto bg-slate-200 p-6 rounded-xl shadow-lg" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="name" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
     </form>
     <p className="text-center mt-4">Already have an account!!  <Link className="text-blue-600" to='/login'> Login</Link></p>
           </div>
            
        </div>
    );
};

export default Register;