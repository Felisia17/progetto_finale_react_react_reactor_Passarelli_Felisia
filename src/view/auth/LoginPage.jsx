import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";


export default function LoginPage(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    const onSubmit = async (user_data) => {
        await login({
            email: user_data.email,
            password: user_data.password,
        });

        navigate('/');
    };

    return (
  <main className="min-h-screen flex flex-col justify-center items-center px-4">

    <h1 className="text-2xl sm:text-3xl font-bold font-electro text-center mb-6">
      Login
    </h1>

    <form
      className="p-6 sm:p-10 bg-nav-gray w-full max-w-md rounded-box shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >

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
        Sign In
      </button>

    </form>

  </main>
);
}
   