import React, { FC } from "react";
import style from "./Style.module.css";

export const WrapperCards: FC<any> = ({ children }) => {
    return (
        <div>
            <div className={style.block}>Mahjong</div>
            <div className={style.wrapper}>
                {children}
            </div>
        </div>
    )
}