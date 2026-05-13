import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { supabase } from "../../database/supabase";



export default function BodySection({ game, profile_id }){
    
    const [isFavourite, setIsFavourite] = useState(false);
    const [description, setDescription] = useState("");
    const [gameReview, setGameReview] = useState([]);
    const [checkReview, setCheckReview] = useState(false);

    const handle_description = (e)=>{
        setDescription(e.target.value);
    };

    const get_review = async ()=> {
        let {data: review, error } = await supabase
        .from("review")
        .select("*")
        .eq("game_id", game.id);

        setGameReview(review);
        
    };

    const add_review = async ()=>{
        const {data, error} = await supabase
        .from("review")
        .insert([
            {profile_id, game_id: game.id, game_name: game.name, description},
        ])

        .select();

        setDescription("");
        setCheckReview(!checkReview)
    
    };


    const add_game = async ()=>{
        const { data, error} = await supabase 
        .from("favourites")
        .insert([{ profile_id, game_id: game.id, game_name: game.name}])
        .select();
        setIsFavourite(true);
    };


    const remove_game = async ()=>{
        const { error} = await supabase 
        .from("favourites")
        .delete()
        .eq("profile_id", profile_id)
        .eq("game_id", game.id);
        setIsFavourite(false);
    };

        const get_favourite = async ()=>{
        let {data: favourites, error} = await supabase
        .from("favourites")
        .select("*")
        .eq("profile_id", profile_id)
        .eq("game_id", game.id);

        if(favourites.length > 0) setIsFavourite(true);

    };

    useEffect(()=> {
            get_favourite();
            get_review();
        }, [checkReview]);
    

   return (
  <section className="mt-10 px-4 flex flex-col items-center gap-6 md:grid md:grid-cols-6 md:px-10">

    
    <div className="w-full md:col-span-5 flex flex-col items-center">

      <p className="text-white text-xl mb-5">Review</p>

      <textarea
        className="textarea w-full max-w-md"
        placeholder="Type your review"
        onChange={handle_description}
        value={description}
      />

      <button
        className="btn bg-nav-gray w-full max-w-md mt-3"
        onClick={add_review}
      >
        Send
      </button>

      <div className="border border-nav-gray h-[200px] w-full max-w-md my-4 overflow-auto text-white rounded-lg p-2">
        {gameReview &&
          gameReview.map((review) => (
            <p
              key={review.id}
              className="my-3 border border-white p-2 rounded text-end"
            >
              {review.description}
            </p>
          ))}
      </div>

    </div>

    
    <div className="flex justify-center -mt-6 md:mt-0 md:block">
      {(isFavourite && (
        <FaHeart
          className="text-red-500 cursor-pointer text-3xl"
          onClick={remove_game}
        />
      )) || (
        <FaRegHeart
          className="text-red-500 cursor-pointer text-3xl"
          onClick={add_game}
        />
      )}
    </div>

  </section>
);
}