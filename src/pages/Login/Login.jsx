import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
    const {signIn}=useContext(AuthContext)
  const handleLogin=e =>{
    e.preventDefault();
     const form =new FormData(e.currentTarget);
     const email =form.get('email');
     const password=form.get('password')
     console.log(email,password);
     signIn()
     .then(result=>{
        console.log(result.user);
     })
     .catch(error=>{
        console.error(error)
     })
  }

    return (
        <div>
            <Navbar ></Navbar>
           <div className="">
           <h1 className="text-2xl text-center font-semibold mt-10">Please log in</h1>
            <form onSubmit={handleLogin}  className="md:w-3/4 lg:w-1/2 mx-auto bg-slate-200 p-6 rounded-xl shadow-lg" >
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
          <input type="password" required name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
     </form>
     <p className="text-center mt-4">Do not have an account  <Link className="text-blue-600" to='/register'> Register</Link></p>
           </div>

            
        </div>
    );
};

export default Login;