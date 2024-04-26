import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log("data inside registration", data)
        const { email, password, name, photoURL } = data;
        if (password.length < 6) {
            return toast('Password must be 6 character long')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast("Your password should at least one uppercase character")
        }
        else if (!/[a-z]/.test(password)) {
            return toast("Your password should at least one lowercase character")
        }
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        toast("User created successfully")
                        // window.location.reload()
                        navigate("/")

                    })
            })
            .catch(error => {
                console.log(error)
                toast(error.message)
            })
    }
    useEffect(() => {
        document.title = "Home Vista | Register"
    }, []);

    return (
        <div className="w-full md:w-1/2 mx-auto bg-base-200 md:p-6 rounded-lg my-14">
            <div className="hero-content">

                <div className="card shrink-0 w-full p-2 md:p-6 bg-base-100">
                    <h2 className="text-3xl font-bold text-center" data-aos="fade-up" data-aos-delay="400">Register Now!!!</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control" data-aos="fade-left" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                                {...register("name")} />
                        </div>
                        <div className="form-control" data-aos="fade-right" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control" data-aos="fade-left" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text font-semibold">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" className="input input-bordered"
                                {...register("photoURL")} />
                        </div>
                        {/* password field */}
                        <div className="form-control" data-aos="fade-right" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input w-full input-bordered"
                                    {...register("password", { required: true })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-3">
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>

                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-medium">Register</button>
                        </div>
                    </form>
                    <p>Already have an account ? <Link className="text-[#1DD100] font-bold" to="/login">Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;