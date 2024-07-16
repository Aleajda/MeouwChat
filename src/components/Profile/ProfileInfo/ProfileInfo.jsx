import Preloader from "../../additional/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../images/img.jpg"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import React, { useState } from "react";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";
import vk from "../../../images/vk3.svg"
import git from "../../../images/git.svg"

const ProfileInfo = (props) => {
    
    let [editMode, setEditMode] = useState(false);

    const onPhotoSelect = (e) =>{
        if (e.target.files.length){
            props.updatePhoto(e.target.files[0]);
        }
        
    }

    const onSubmit = (FormData) =>{
        props.saveProfile(FormData).then((success)=>{
            if (success) {
                setEditMode(false);
            }
        });
        
    }
    
        return (
            <div className={s.wrapper}>
                <div className={s.mainWrapper}>
                    <div className={s.avaWrapper}>
                        <div className={s.ava}>
                            <img
                                className={s.avaImg}
                                src={!props.profile.photos.small ?  userPhoto : props.profile.photos.small}
                                alt=""
                            />
                            {props.isOwner &&
                            <div className={s.input__wrapper}>
                                <button 
                                    className={s.submitBtn}>
                                    <label className={s.inputFile}>
                                    <input  type="file" name="file" onChange={onPhotoSelect}/>		
                                    <span style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null} >Загрузить</span>
                                    </label> 
                                </button>
                            </div>}
                        </div>
                        
                    </div>


                    <div className={s.userNameWrapper}>
                        <div className={s.discription}>
                            <div className={s.nickWvk}>
                                <div className={s.nickName}>{props.profile.fullName}</div>
                                <div>
                                    <a href={props.profile.contacts.vk} target="_blank"><img src={vk}/></a>
                                </div>
                                <div>
                                    <a href={props.profile.contacts.github} target="_blank"><img src={git}/></a>
                                </div>
                            </div>
                            <div>
                                <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} isOwner={props.isOwner}/>
                            </div>
                            <div className={s.shortInfo}>
                                Краткая информация: 
                            </div>
                            {editMode
                            ?<ProfileDataReduxForm dark={props.dark} initialValues={props.profile} onSubmit={onSubmit}/>
                            :<ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} dark={props.dark} isOwner={props.isOwner}/>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        );
       
};






const ProfileData = (props) =>{
    return (
        <div className={s.profileData}>
            <div>
                <b style={{fontWeight: 500}}>В поиске работы: </b>{props.profile.lookingForAJob ? "да" : "нет"}
            </div>
            <div>
                <b style={{fontWeight: 500}}>Скиллы: </b>{props.profile.lookingForAJobDescription ? `${props.profile.lookingForAJobDescription}` : "нет"}
            </div>
            <div>
                <b style={{fontWeight: 500}}>О себе: </b>{props.profile.aboutMe ? `${props.profile.aboutMe}` : "Этот пользователь решил ничего не рассказывать про себя"}
            </div>
            {props.isOwner
            ?<div>
                <button
                    style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null} 
                    onClick={props.goToEditMode} className={s.submitBtn}>
                    <span>Редактировать</span>
                </button>
            </div>
            :null}
        </div>
    )
}

export default ProfileInfo;
