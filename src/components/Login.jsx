import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("")
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)

    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
        <span
          className="mx-auto h-10 w-auto"
        >
          <Logo width="100%" />
        </span>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(login)} >
          <div>
            {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label> */}
            <div className="mt-2">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                id="email"
                label="Email:"
                placeholder="Enter your email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
                })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              {/* <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label> */}

            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
            Sign Up
            </Link>
        </p>
      </div>
    </div>


    // <div
    // className='flex items-center justify-center w-full'
    // >
    //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    //     <div className="mb-2 flex justify-center">
    //                 <span className="inline-block w-full max-w-[100px]">
    //                     <Logo width="100%" />
    //                 </span>
    //     </div>
    //     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    //     <p className="mt-2 text-center text-base text-black/60">
    //                 Don&apos;t have any account?&nbsp;
    //                 <Link
    //                     to="/signup"
    //                     className="font-medium text-primary transition-all duration-200 hover:underline"
    //                 >
    //                     Sign Up
    //                 </Link>
    //     </p>
    //     {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    //     <form onSubmit={handleSubmit(login)} className='mt-8'>
    //         <div className='space-y-5'>
    //             <Input
    //             label="Email: "
    //             placeholder="Enter your email"
    //             type="email"
    //             {...register("email", {
    //                 required: true,
    //                 validate: {
    //                     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    //                     "Email address must be a valid address",
    //                 }
    //             })}
    //             />
    //             <Input
    //             label="Password: "
    //             type="password"
    //             placeholder="Enter your password"
    //             {...register("password", {
    //                 required: true,
    //             })}
    //             />
    //             <Button
    //             type="submit"
    //             className="w-full"
    //             >Sign in</Button>
    //         </div>
    //     </form>
    //     </div>
    // </div>
  )
}

export default Login