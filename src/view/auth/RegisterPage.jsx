import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {supabase} from "../../database/supabase.js";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


export default function RegisterPage(){

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const {signUp} = useContext(UserContext);

    const navigate = useNavigate();

    const onSubmit = async (user_data)=>{
        let { data, error } = await supabase.auth.signUp({
            email: user_data.email,
            password: user_data.password,
            options:  {
                data:{
                    first_name: user_data.first_name,
                    last_name: user_data.last_name,
                    username: user_data.username
                }
            }
            
        })

        navigate('/');
    }
  return (
  <main className="min-h-screen flex flex-col justify-center items-center px-4">

    <h1 className="text-2xl sm:text-3xl font-bold font-electro text-center mb-6">
      Crea il tuo Account
    </h1>

    <form
      className="p-6 sm:p-10 bg-nav-gray w-full max-w-md rounded-box shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >

      <input
        type="text"
        placeholder="Name"
        className="input input-lg mb-5 w-full"
        {...register("first_name", { required: "This field is required" })}
      />

      {errors.first_name && (
        <p className="text-red-500 mb-4 text-sm">
          {errors.first_name.message}
        </p>
      )}

      <input
        type="text"
        placeholder="Last Name"
        className="input input-lg mb-5 w-full"
        {...register("last_name", { required: "This field is required" })}
      />

      {errors.last_name && (
        <p className="text-red-500 mb-4 text-sm">
          {errors.last_name.message}
        </p>
      )}

      <input
        type="text"
        placeholder="Username"
        className="input input-lg mb-5 w-full"
        {...register("username", { required: "This field is required" })}
      />

      {errors.username && (
        <p className="text-red-500 mb-4 text-sm">
          {errors.username.message}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        className="input input-lg mb-5 w-full"
        {...register("email", { required: "This field is required" })}
      />

      {errors.email && (
        <p className="text-red-500 mb-4 text-sm">
          {errors.email.message}
        </p>
      )}

      <input
        type="password"
        placeholder="Password"
        className="input input-lg mb-5 w-full"
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters"
          }
        })}
      />

      {errors.password && (
        <p className="text-red-500 mb-4 text-sm">
          {errors.password.message}
        </p>
      )}

      <button className="btn btn-neutral p-5 w-full mt-2">
        Sign Up
      </button>

    </form>

  </main>
);
}