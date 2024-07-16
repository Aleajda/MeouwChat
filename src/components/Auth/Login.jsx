import { connect } from "react-redux";
import s from "./Login.module.css";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/authReducer";

const Login = (props) => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = (data) =>{
        // alert(JSON.stringify(data))
        // props.loginUser(data.username, data.password)
        if (props.captcha){
            props.loginUser(data.username, data.password, true, data.captcha);
        }
        else{
            props.loginUser(data.username, data.password, true, null);
        }
        reset();
    }

    if (props.isAuth){return <Navigate to={"/profile"}/>}

    return(
        <div className={s.lForm}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={s.formTitle}>Sign In</h1>
            <div>
                {errors?.username && <p style={{color: "red"}}>Поле обязательно к заполнению</p> }
            </div>
            <div className={s.formDiv}>
                <input style={props.dark ? {color: 'white'} : null} type="text" className={s.formInput}
                {...register("username", {required: true})}/>
                <label style={props.dark ? {backgroundColor: '#191919'} : null} className={s.formLabel}>Username</label>
            </div>
            <div>
                {errors?.password && <p style={{color: "red"}}>Поле обязательно к заполнению</p>}
            </div>
            <div className={s.formDiv + ' ' + s.formDivPas}>
                <input style={props.dark ? {color: 'white'} : null} type="password" className={s.formInput} 
                {...register("password", {required: true})}/>
                <label style={props.dark ? {backgroundColor: '#191919'} : null} className={s.formLabel}>Password</label>
            </div>
            {props.captcha
            ?
            <div>
                <div>
                    {errors?.captcha && <p style={{color: "red"}}>Поле обязательно к заполнению</p> }
                </div> 
                <div className={s.formDiv}>
                    <input type="text" className={s.formInput}
                    {...register("captcha", {required: true})}/>
                    <label className={s.formLabel}>Captcha</label>
                </div>
                <div className={s.captchaImg}><img src={props.captcha}/></div> 
            </div>
            :
            null}
            <div>
                {props.errorMessage ? <p style={{color: "red"}}>{props.errorMessage}</p>: null}
            </div>
            <button className={s.formButton}>Sign In</button>
            <div class={s.signUpLink}>
                <NavLink to={"/registration"}>Don't have an account? Sign Up</NavLink>
            </div>
        </form>
        </div>  
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    captcha: state.Auth.captcha,
    errorMessage: state.Auth.errorMessage,
    dark: state.Settings.dark
})

export default connect(mapStateToProps, {loginUser})(Login);