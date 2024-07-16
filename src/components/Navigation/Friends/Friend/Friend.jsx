import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friendImg}>
                <img
                    src={props.imgSrc}
                    alt=""
                />
            </div>
            <div className={s.friendName}>{props.name}</div>
        </div>
    );
};
export default Friend;
