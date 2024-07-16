import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../additional/Textarea/Textarea";

const maxLength150 = maxLengthCreator(150);

const Posts = (props) => {
    
    let addPost = (data, dispatch) =>{
        props.addPost(data.NewPostText);
        data.NewPostText = "";
        dispatch(reset('post'))
    }

    let posts = props.MyPostsData.map((p, index) => (<Post MyPostsData = {props.MyPostsData} profile={props.profile} key={index} index={index} likes={p.likes} message= {p.message} dark={props.dark}/>))

    return (
        <div className={s.postsWrapper}>
            <div className={s.myPosts}>Мои поcты</div>
            <div>
               {posts}
            </div>
            <div className={s.addPost}>
                <div className={s.addPostText}>
                    Добавить пост
                </div>
                <AddPostFormRedux dark={props.dark} onSubmit={addPost}/>
            </div>
        </div>
    );
};
export default Posts;


const AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="NewPostText" placeholder="Введите текст.."
                validate={[required, maxLength150]}/>
            </div>
            <div>
                <button style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null} className={s.submitBtn}><span>Опубликовать</span></button>
            </div>
        </form>
    );
}

const AddPostFormRedux = reduxForm({form: 'post'})(AddPostForm)
