import React from "react";
import { Field, reduxForm } from "redux-form";
import { ConnectedInput2, Input2 } from "../../../additional/Textarea/Textarea";
import { maxLengthCreator, required } from "../../../../utils/validators";
import s from "./ProfileDataForm.module.css";

const maxLength40 = maxLengthCreator(40);
const maxLength100 = maxLengthCreator(100);

const ProfileDataForm = (props) =>{
    return (
        <form className={s.rofileDataForm} onSubmit={props.handleSubmit}>
            <div>
                <b>В поиске работы: </b><Field placeholder="В поиске работы?" name="lookingForAJob" type="checkbox" component={"input"}/>
            </div>
            <div>
                <b>Навыки: </b><Field placeholder="Описание" name="lookingForAJobDescription" component={ConnectedInput2} validate={[required, maxLength40]}/>
            </div>
            <div>
                <b>Имя: </b><Field placeholder="Полное имя" name="fullName" component={ConnectedInput2} validate={[required, maxLength40]}/>
            </div>
            <div>
                <b>О себе: </b><Field placeholder="О себе" name="aboutMe" component={ConnectedInput2} validate={[required, maxLength100]}/>
            </div>
            <div>
                <b>Vk link: </b><Field placeolder="Vk" name="contacts.vk" component={ConnectedInput2} validate={[required, maxLength40]}/>
            </div>
            <div>
                <b>Git link: </b><Field placeolder="Git" name="contacts.github" component={ConnectedInput2} validate={[required, maxLength40]}/>
            </div>
            {props.error && 
            <div>
                {props.error}
            </div>
            }
            <div>
                <button
                    style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null}
                    className={s.submitBtn}>
                    <span>Сохранить</span>
                </button>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm)
export default ProfileDataReduxForm;