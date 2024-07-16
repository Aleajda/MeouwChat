import React from "react";
import s from "./Preloader.module.css";

const Preloader:React.FC<any> = () =>{
    return(
        <img className={s.preloader} src="https://i.gifer.com/ZKZg.gif"/>
    );
}                                                                       
export default Preloader;