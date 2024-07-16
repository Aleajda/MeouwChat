import React from 'react';
import flyordieImg from "../../images/flyordieio.avif";
import rodhaImg from "../../images/rodha.avif";
import ageoftanksImg from "../../images/age-of-tanks.avif"
import img2048 from "../../images/2048.avif";
import cuttherope from "../../images/cut-the-rope.avif";
import tabletennis from "../../images/table-tennis-world-tour.avif";
import watersortpuzzle from "../../images/water-sort-puzzle.avif";
import hextris from "../../images/hextris.avif";
import helixjump from "../../images/helix-jump.avif";
import murdermafia from "../../images/murder-mafia.avif";
import shapecrusher from "../../images/shape-crusher.avif";
import gobattles from "../../images/gobattles.avif";
import { NavLink } from 'react-router-dom';
import s from "./Games.module.css";



const Games = () => {
  return (
    <div className={s.gamesWrapper}>
      <NavLink to="/games/flyordie">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={flyordieImg} alt="" />
      </NavLink>
      <NavLink to="/games/rodha">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={rodhaImg} alt="" />
      </NavLink>
      <NavLink to="/games/ageoftanks">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={ageoftanksImg} alt="" />
      </NavLink>
      <NavLink to="/games/2048">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={img2048} alt="" />
      </NavLink>
      <NavLink to="/games/cuttherope">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={cuttherope} alt="" />
      </NavLink>
      <NavLink to="/games/tabletennis">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={tabletennis} alt="" />
      </NavLink>
      <NavLink to="/games/watersortpuzzle">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={watersortpuzzle} alt="" />
      </NavLink>
      <NavLink to="/games/hextris">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={hextris} alt="" />
      </NavLink>
      <NavLink to="/games/helixjump">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={helixjump} alt="" />
      </NavLink>
      <NavLink to="/games/murdermafia">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={murdermafia} alt="" />
      </NavLink>
      <NavLink to="/games/shapecrusher">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={shapecrusher} alt="" />
      </NavLink>
      <NavLink to="/games/gobattles">
      <img className={s.gameImg} style={{width: "300px", height: "160px", borderRadius: "10px"}} src={gobattles} alt="" />
      </NavLink>
    </div>
  );
};

const Game = (props) =>{
  return(
    <div className={s.gameWrapper} style={{width: "80%", height: "80%", margin: "auto"}}>
      <iframe
          id="game-iframe"
          src={props.link}
          allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope; "
          allowfullscreen=""
          sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads  allow-popups allow-popups-to-escape-sandbox"
          loading="eager"
          importance="high"
          data-hj-allow-iframe="true"
          width="100%"
          height="100%"
          style={{ border: "none" }}
      />
    </div>
  )
}

export const FlyOrDie = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/flyordieio/index.html?v=1.292"}/>)}

export const Rodha = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/rodha/index.html?v=1.293"}/>)}

export const AgeOfTanks = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/rodha/index.html?v=1.293"}/>)}

export const Game2048 = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/2048/index.html?v=1.293"}/>)}

export const CutTheRope = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/cut-the-rope-ebx/index.html?v=1.293"}/>)}

export const TableTennis = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/table-tennis-world-tour/index.html?v=1.293"}/>)}

export const WaterSortPuzzle = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/cups---water-sort-puzzle/index.html?v=1.293"}/>)}

export const Hextris = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/hextris/index.html?v=1.293"}/>)}

export const HelixJump = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/helix-jump/index.html?v=1.293"}/>)}

export const MurderMafia = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/murder-mafia/index.html?v=1.293"}/>)}

export const ShapeCrusher = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/shape-crusher/index.html?v=1.293"}/>)}

export const GoBattles = () =>{return(<Game link={"https://games.crazygames.com/ru_RU/gobattles-2--light-version-/index.html?v=1.293"}/>)}

export default Games;

// https://games.crazygames.com/ru_RU/age-of-tanks-warriors-td-war/index.html?v=1.292
