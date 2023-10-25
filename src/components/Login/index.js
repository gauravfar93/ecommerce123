import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const history = useNavigate();

    const [inpVal, setInpval] = useState({
        email:"",
        password:""
    })
    // console.log(inpVal)
    const [data,setData] = useState([])
    
    const getData = (e) => {
        // console.log(e.target.value)
         //here we are taking the value from event. target
        const {name,value} = e.target;
        // console.log(value,name)
        //passing the value through the usestate object.
        setInpval(()=>{
            return {
                ...inpVal,
                [name]:value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault()
        // console.log(inpVal)
        const getuserArr = localStorage.getItem("useryoutube") 
        console.log(getuserArr)
        // here we are authenticating the values of the entered email pass and then login function will run
        const {email,password} = inpVal;
        if(email===""){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("please enter valid email address")
        }else if(password===""){
            alert("password field is required")
        }else if(password.length < 5){
            alert("password length should be greater then five")
        }else{
            if(getuserArr && getuserArr.length){
                const userData = JSON.parse(getuserArr)
                // console.log(userData)
                const userLogin = userData.filter((el,k)=>{
                    return el.email===email && el.password===password
                });
                // console.log(userLogin)
                if(userLogin.length === 0){
                    alert("Invalid Details")
                }else{
                    console.log("user login succesfully")
                    history("/")
                }
            }
        }
    }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                onChange={getData}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                onChange={getData}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
              onClick={addData}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 flex gap-8">
            Not a member?{' '}
            <p href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            <span><NavLink to="/signup">Sign Up</NavLink></span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

