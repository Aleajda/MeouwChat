import React, { useEffect, useState } from "react";
import s from "./ProfileStatusWithHooks.module.css";

const ProfileStatusWithHooks = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (() =>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () =>{
        setEditMode(true)
    }

    const deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status);  
    }

    const onStatusChange = (e) =>{
        setStatus(e.target.value)
    }
    if (props.isOwner){
        return (
            <div className={s.status}>
                {editMode
                ?
                <div>
                    <input className={s.statusInput} onChange={ onStatusChange } onBlur = { deactivateEditMode } autoFocus={true} value={status}/>
                </div>
                :
                <div>
                    <span className={s.statusText} onTouchStart={  activateEditMode } onDoubleClick={ activateEditMode }>{props.status || "нет статуса"}</span>
                </div>
                }
            </div>
        );
    }
    else{
        return (
            <div className={s.status}>
                <div>
                    <span className={s.statusText}>{props.status || "нет статуса"}</span>
                </div>
            </div>
        );
    }
       
}



export default ProfileStatusWithHooks;
