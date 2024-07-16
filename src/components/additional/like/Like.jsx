import { useState } from "react";
import { LikeTwoTone } from "@ant-design/icons";
import "./Like.css";


const Like = () => {
    const [liked, setLiked] = useState(false);
    const [color, setColor] = useState("blue")
    const handleClick = () => {
        setLiked(!liked); // Изменяем состояние при клике
    };

    return (
        <div onClick={handleClick}>
            <LikeTwoTone
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

export default Like;