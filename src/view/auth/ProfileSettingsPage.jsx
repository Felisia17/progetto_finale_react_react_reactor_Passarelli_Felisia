import { useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { supabase } from "../../database/supabase.js";

export default function ProfileSettingsPage() {
  
    
    const [file, setFile] = useState();
    const [preview, setPreview ] = useState();
    const { profile, getUser } = useContext(UserContext);
    
    const handleChange = (e)=> {
        setFile(()=> e.target.files[0]);
    };

    useEffect(()=> {
        if(file){
            const imageUrl = URL.createObjectURL(file);
            setPreview(()=> imageUrl);
        }
    }, [file]);

    const handleAvatarSubmit = async (e)=> {
        e.preventDefault();
        
        const fileExt = file.name.split(".").pop();
        const fileName = `${profile.id}${Math.random()}.${fileExt}`;
        await supabase.storage.from("avatars").upload(fileName, file);
        await supabase
        .from("profiles")
        .upsert({ id: profile.id, avatar_url: fileName })
        .select();
        await getUser();

        
    };

  const { updateProfile } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateProfile(data);
    navigate(routes.profile);
  };

  return (
  <main className="min-h-screen flex flex-col items-center gap-10 p-6 md:p-10">

    <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-5xl">

      <form
        className="p-6 md:p-10 bg-nav-gray w-full md:w-1/2 rounded-box shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold mb-6">Edit Profile</h2>

        <input
          type="text"
          placeholder="Name"
          className="input input-lg mb-5 w-full"
          {...register("first_name")}
        />

        {errors.first_name && (
          <p role="alert" className="text-red-500 mb-6">
            {errors.first_name.message}
          </p>
        )}

        <input
          type="text"
          placeholder="Last Name"
          className="input input-lg mb-5 w-full"
          {...register("last_name")}
        />

        {errors.last_name && (
          <p role="alert" className="text-red-500 mb-6">
            {errors.last_name.message}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          className="input input-lg mb-5 w-full"
          {...register("username")}
        />

        {errors.username && (
          <p role="alert" className="text-red-500 mb-6">
            {errors.username.message}
          </p>
        )}

        <button className="btn btn-neutral p-5 w-full">
          Edit
        </button>
      </form>

      <form
        className="p-6 md:p-10 bg-nav-gray w-full md:w-1/2 rounded-box shadow-lg flex flex-col justify-between"
        onSubmit={handleAvatarSubmit}
      >
        <div>
          <h2 className="text-xl font-bold mb-6">Change Avatar</h2>

          <input
            type="file"
            className="file-input file-input-lg w-full mb-5"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-neutral p-5 w-full">
          Change Avatar
        </button>
      </form>

    </div>

    {preview && (
      <img
        src={preview}
        alt=""
        className="w-40 h-40 md:w-50 md:h-40 object-cover rounded-full border"
      />
    )}

  </main>
);
}