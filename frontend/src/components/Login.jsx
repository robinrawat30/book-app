import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    // console.log(watch("example")) // watch input value by passing the name of it














    return (
        <>

            <div>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                <dialog id="my_modal_3" className="modal">

                <div className="modal-box rounded-none">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>

                            <div className="space-y-5">
                                <h4 className=" text-center text-xl text-blue-400">Log in</h4>
                                <label className="input input-bordered  flex items-center gap-2">

                                    <input type="text" className="grow" placeholder="Email"  autoComplete="email"  {...register("email", { required: true })} />
                                    <br/>
                                    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                                </label>
                                <label className="input input-bordered flex items-center gap-2">

                                    <input type="password" placeholder="Password" className="grow" autoComplete="current-password"   {...register("password", { required: true })} />
                                    <br/>
                                    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                                </label>

                                <div className="flex  items-center  justify-between">
                                    <button type="submit" className="btn">Login</button>
                                    <p className=" text-sm ">Not Registered ?{" "}<Link to='/signup' className=" text-sm underline text-blue-500">Signup</Link></p>

                                </div>


                            </div>
                        </form>



                    </div>
           



                </dialog>
                    



            </div>


        </>
    )
}

export default Login
