import { useContext, useEffect, useState } from "react";
import ProfileImageDefault from "../../assets/ProfileImageDefault.svg";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router";
import routes from "../../router/routes";
import { supabase } from "../../database/supabase";

export default function ProfilePage() {
  const { user, profile } = useContext(UserContext);
  const [avatarUrl, setAvatarUrl] = useState();
  const [userFavourites, setUserFavourites] = useState();

  const download_avatar = async ()=> {
    if(profile){
      const { data, error } = await supabase.storage
      .from("avatars")
      .download(profile.avatar_url);
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    }
  };


  const get_favourites = async ()=> {
    if(profile){
      let {data:favourites, error} = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile.id);
      setUserFavourites(favourites);

    
    }
  };

  useEffect(()=> {
    download_avatar();
    get_favourites();
  },[profile]);

 return (
  <main className="min-h-screen px-4 py-6">
    {user && profile && (
      <>
        <article className="mt-6 flex flex-col items-center">
          <img
            src={avatarUrl ?? ProfileImageDefault}
            className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full"
            alt="ProfileImageDefault"
          />

          <h2 className="text-xl sm:text-2xl font-bold mt-4 text-center">
            {profile.first_name}
          </h2>
        </article>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:px-20">

          <article className="bg-black text-nav-gray rounded-box p-6">
            <h3 className="font-bold text-lg mb-4">
              Your data
            </h3>

            <p className="mb-2">
              Name: {profile.first_name} {profile.last_name}
            </p>

            <p className="mb-2">
              Username: {profile.username}
            </p>

            <p className="break-all mb-4">
              Email: {user.email}
            </p>

            <Link
              className="btn btn-outline w-full"
              to={routes.profile_settings}
            >
              Settings
            </Link>
          </article>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-center lg:text-left">
              I tuoi preferiti
            </h3>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {userFavourites &&
                userFavourites.map((game) => {
                  return (
                    <div
                      className="card bg-base-100 shadow-sm border border-gray-700"
                      key={game.id}
                    >
                      <div className="card-body p-4">
                        <h2 className="card-title text-sm">
                          {game.game_name}
                        </h2>
                      </div>
                    </div>
                  );
                })}

            </section>
          </div>

        </section>
      </>
    )}
  </main>
);
}