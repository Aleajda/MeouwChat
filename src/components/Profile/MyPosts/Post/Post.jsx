import s from "./Post.module.css";
import userPhoto from "../../../../images/img.jpg"
import { connect } from "react-redux";
import { deletePost, editPost } from "../../../../redux/profileReducer";
import { useRef, useState } from "react";
import { DeleteOutlined, EditFilled, EditOutlined } from "@ant-design/icons";

const Post = (props) => {
    const deletePost = () => {
        console.log(editMode)
        let newArr = props.MyPostsData.slice(); // Копируем исходный массив
        newArr.splice(props.index, 1); // Удаляем элемент из копии массива
        props.deletePost(newArr)

    }
    const [editMode, setEditMode] = useState(false);
    const savePost = () => {
        console.log(inputRef.current.value)
        props.editPost(inputRef.current.value, props.index)
        setEditMode(false)
    }

    const inputRef = useRef(null);

    return (
        <div className={s.postWrapper}>
            <div className={s.item}>
                <img
                    src={!props.profile.photos.small ?  userPhoto : props.profile.photos.small}
                    alt=""
                />
                <div className={s.text}>
                    <div className={s.edit} onClick={() => setEditMode(true)}><EditOutlined/></div>
                    <div className={s.delete} onClick={editMode ? null : deletePost}><DeleteOutlined/></div>
                    <span className={s.say}>say:</span>
                    <br/>
                    {editMode
                    ?<div>
                        <input ref={inputRef} defaultValue={props.message} placeholder="новый текст"></input>
                        <button
                            style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null} 
                            className={s.submitBtn} onClick={savePost}>
                            save
                        </button>
                    </div>
                    :<span className={s.message}>{props.message}</span>
                    }
                </div>
            </div>
            <div className={s.text}>likes: {props.likes}</div>
        </div>
    );
};
export default connect(null, {deletePost, editPost})(Post);
