import { connect } from "react-redux";
import s from "./Textarea.module.css";
import React from "react";

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.textareaWrapper}>
            <textarea className={s.textarea + " " + (hasError ? s.textareaError : "") } {...input} {...props}/>
            <div className={s.errorWrapper}>
                {hasError && <span className={s.errorText}>{meta.error}!</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <input className={s.input + " " + (hasError ? s.textareaError : "") } {...input} {...props}/>
            <div>
                {hasError && <span className={s.errorText}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input2 = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.input2Container}>
            <input 
                className={s.input2 + " " + (hasError ? s.textareaError : "") } {...input} {...props}
                style={props.dark ? {border: 'solid rgb(47, 248, 255) 2px'} : null}/>
            <div>
                {hasError && <span className={s.errorText}>{meta.error}</span>}
            </div>
        </div>
    )
}

let mapStateToProps = (state) =>{
    return {
      dark: state.Settings.dark
    }
}

export const ConnectedInput2 = connect(mapStateToProps)(Input2);