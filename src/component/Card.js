import { useState } from "react";
import "./Card.css";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  // console.log(props);
  const [readmore, setmore] = useState(true);
  const [dis, setdis] = useState(`${props.description.substring(0, 100)}...`);
  function settext() {
    if (readmore === true) {
      setmore(false);
      setdis(props.description);
      return;
    }
    setmore(true);
    let temp = `${props.description.substring(0, 100)}...`;
    setdis(temp);
  }




  function likebtn() {
    const liked = props.liked.slice(); 
  
    if (liked.includes(props.Cardkey)) {
      const updatedLiked = liked.filter((key) => key !== props.Cardkey);
      props.setliked(updatedLiked);
      toast.warning("Like removed");
    } else {
      props.setliked([...liked, props.Cardkey]);
      toast.success("Liked successfully");
    }
  }
  
  return (
    <div className="relative card w-[275px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="">
        <img
          src={props.bgimg}
          className="w-full min-h-[168px] object-cover"
          alt=""
        ></img>

        <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 top-[140px] grid place-items-center">
          <button onClick={likebtn}>
            {props.liked.includes(props.Cardkey) ? (
              <FcLike font-size="1.75rem"></FcLike>
            ) : (
              <FcLikePlaceholder font-size="1.75rem"></FcLikePlaceholder>
            )}
          </button>
        </div>
      </div>

      <div className="sub-box">
        <div>
          <h1 className="card-heading">{props.heading}</h1>
        </div>

        <div>
          <p className="">
            {dis}
            <span className="cursor-pointer remore" onClick={settext}>
              {readmore ? `readmore` : ` readless`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
