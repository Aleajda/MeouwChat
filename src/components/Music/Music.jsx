import { connect } from "react-redux"
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { useForm } from "react-hook-form";
import { getSongs } from "../../redux/musicReducer";
import { useEffect } from "react";
import { SyncOutlined } from "@ant-design/icons";
import s from "./Music.module.css";

const Music = (props) =>{
    
    useEffect(() => {
        props.getSongs(20, "", "")
        return () => {
        };
    }, []);

    const {
        register,
        reset,
        handleSubmit,
    } = useForm()

    const onSubmit = data => {
        console.log(data);
        props.getSongs(20, data.query, data.option)
      };

    if (!props.songs){
        return <div style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}><SyncOutlined style={{fontSize: '20vw'}} spin={true}/></div>
    }
    return (
    <div>
        <div className={s.formWrapper}>
            <form className={s.searchForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.queries}>
                    <input 
                        style={props.dark ? {border: 'solid rgb(47, 248, 255) 2px'} : null}
                        className={s.inputQuery} type="text" {...register("query")}
                    />
                    <div className={s.radioBtn}>
                        <input
                            type="radio"
                            id="option1"
                            name="option"
                            value=""
                            {...register("option")}
                            defaultChecked
                        />
                        <label htmlFor="option1">Все</label>

                        <input style={{marginLeft: '5px'}}
                            type="radio"
                            id="option2"
                            name="option"
                            value="pop"
                            {...register("option")}
                        />
                        <label htmlFor="option2">Поп</label>

                        <input style={{marginLeft: '5px', color: 'green'}}
                            type="radio"
                            id="option3"
                            name="option"
                            value="rock"
                            {...register("option")}
                        />
                        <label htmlFor="option3">Рок</label>
                    </div>
                </div>
                <button
                    style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null}
                    className={s.submitBtn}
                    type="submit">
                    Поиск
                </button>
            </form>
        </div>
        <div className={s.wrapper}>
            {props.songs.map((song) => {
                return(
                    <div key={song.id} className={s.audioWrapper}>
                        <audio preload="none" controls src={`${song.audio}`}></audio>
                        <div className={s.songTitle}>{song.name}</div>
                        <img className={s.songImg} src={song.album_image} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
    );
}


let mapStateToProps = (state) => ({
    songs: state.Music.songs,
    dark: state.Settings.dark
})


export default compose(connect(mapStateToProps, {getSongs}), withAuthRedirect)(Music)


