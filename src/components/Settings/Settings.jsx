import { connect } from "react-redux"
import { setDark, setWhite } from "../../redux/settingsReducer"
import s from "./Settings.module.css"
import { useState } from "react";

const Settings = (props) =>{

    const throwError = () => {
        throw new Error('Intentional error for testing ErrorBoundary');
    };

    const [count, setCount] = useState(0);

    return(
        <div className={s.wrapper}>
            <button 
                style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null}
                className={s.submitBtn} onClick={props.dark ? props.setWhite : props.setDark}>
                сменить тему
            </button>
            <button 
                style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null}
                className={s.submitBtn} onClick={count ? setCount(count+1) : () => setCount(count + 1)}>
                Ошибка
            </button>
        </div>
        
    )
}

const mapStateToProps = (state) =>{
    return{
        dark: state.Settings.dark
    }
}

export default connect(mapStateToProps, {setDark, setWhite})(Settings)