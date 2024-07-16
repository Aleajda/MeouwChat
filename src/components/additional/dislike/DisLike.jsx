import { useState } from "react";
import { DislikeTwoTone} from "@ant-design/icons";
import "./DisLike.css";


const DisLike = () => {
    const [liked, setLiked] = useState(false);
    const [color, setColor] = useState("blue")
    const handleClick = () => {
        setLiked(!liked); // Изменяем состояние при клике
    };

    return (
        <div onClick={handleClick}>
            <DislikeTwoTone
                onClick={() => {
                    color === "blue"
                    ?setColor("red")
                    :setColor("blue")
                }}
                className={`like-icon ${liked ? 'liked' : ''}`}
                twoToneColor={color}
            />
        </div>
    );
}

export default DisLike;