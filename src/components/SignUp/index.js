import React, { useState } from "react";
import {NavLink} from "react-router-dom";

const SignUp = () => {
  //here we are passing the value to the usestate object
    const [inpVal, setInpval] = useState({
        name:"",
        email:"",
        password:""
    })
    // console.log(inpVal)
    //setting into the data array
    const [data,setData] = useState([])

    const getData = (e) => {
        // console.log(e.target.value)
        //taking values of name from the event.target.
        const {name,value} = e.target;
        // console.log(value,name)
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
        //here we are authenticating the field which was filled by the user at the time of signup.
        const {name,email,password} = inpVal;

        if(name===""){
            alert("name field is required")
        }else if(email===""){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("please enter valid email address")
        }else if(password===""){
            alert("password field is required")
        }else if(password.length < 5){
            alert("password length should be greater then five")
        }else{
            alert("sign-up succesfully")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpVal]))
        }
    }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up
        </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
          <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={getData}
                  id="email"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                
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
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 flex gap-8">
            Already Have an Account?{" "}
            <p
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
            <span><NavLink to="/login">Sign In</NavLink></span>
              
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
