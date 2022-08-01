import React, { FC } from "react";
import style from "./Style.module.css";

type CardProps = {
    num: number,
    visibility: boolean,
    onClick: () => void,
}

export const Card: FC<CardProps> = ({ num, visibility = true, onClick }) => {
    return (
        <div className={style.card}>
            {!visibility ? (
                <button className={style.btn} type={"button"} onClick={() => onClick()}>X</button>
            ) : (
                <span className={style.num}>{num}</span>
            )}
        </div>
    )
}