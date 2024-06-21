import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

import { useForm } from 'react-hook-form'

const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>

            <div>

                <div className="h-screen  w-screen  flex justify-center items-center" >

                    <div className=" modal-box rounded-none  " >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <div className="space-y-5">
                                <h4 className=" text-center text-xl text-blue-400">Sign Up</h4>
                                <label className="input input-bordered  flex items-center gap-2">

                                    <input type="text" className="grow" placeholder="Username" autoComplete="name" {...register("text", { required: true })} />
                                    {errors.text && <span className="text-sm text-red-500">This field is required</span>}

                                </label>
                                <label className="input input-bordered  flex items-center gap-2">

                                    <input type=" email" className="grow" placeholder="Email" autoComplete="email" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                                </label>
                                <label className="input input-bordered flex items-center gap-2">

                                    <input type="password" placeholder="Password" className="grow" autoComplete="current-password" name="password" {...register("password", { required: true })} />
                                    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                                </label>

                                <div className="flex  items-center  justify-between">
                                    <button className="btn" type="submit" >SignUp</button>

                                    <p>Have Account ? <span className="underline text-blue-500 cursor-pointer"  onClick={() => document.getElementById('my_modal_3').showModal()}>Login</span> </p>
                                    <Login />

                                  

                                </div>


                            </div>

                        </form>


                    </div>



                </div>




            </div>

        </>
    )
}

export default Signup
