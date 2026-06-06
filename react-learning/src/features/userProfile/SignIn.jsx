import { Link } from "react-router-dom"
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UserRegister() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = ((data) => console.log('data', data))

    return (
        <div>
            <div className="d-flex registerNavbar">
                <div className="p-2 flex-fill logo child-div">
                    <Link to="/"><img src="./src/assets/amazon-logo.webp" alt="Amazon Logo" className="amazonLogo" /></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="card mt-10">
                        <div className="card-body">
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h4>Let us create your free Amazon account</h4>
                                        </div>
                                        <div className="col-sm-12">
                                            <label for="exampleInputEmail1" className="form-label">First Name <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                {...register("firstName", { required: "First name required", minLength: { value: 6, message: "Min 6 chars" }, maxLength: { value: 10, message: "Max 10 chars" } })} />
                                            {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <label for="exampleInputEmail1" className="form-label">Last Name <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                {...register("lastName", { required: "Last name required", minLength: { value: 6, message: "Min 6 chars" } })} />
                                            {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                                        </div>

                                        <div className="col-sm-12">
                                            <label for="exampleInputEmail1" className="form-label">Enter an email. Work email preferred. <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp"  {...register("email", {
                                                    required: "Email is required",
                                                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                                                })} />
                                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <label for="exampleInputEmail1" className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                {...register ("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 chars" }, maxLength: { value: 10, message: "Max 10 chars" } })} />
                                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <label for="exampleInputEmail1" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                {...register ("confirmPassword", {validate: (val) => val === watch("password") || "Passwords don't match", required: "Confirm Password is required", minLength: { value: 6, message: "Min 6 chars" }, maxLength: { value: 10, message: "Max 10 chars" } })} />
                                                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <button type="submit" className="btn bg-warning me-2">Submit</button>
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <div>Already an Amazon Business customer? <span className="text-primary link-active"><Link to="/">Sign in</Link></span></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>

        </div>
    )
}