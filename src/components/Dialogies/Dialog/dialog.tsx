import {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./dialog.module.css"

export const Dialog: FC<DialogType> = (props) => {
    let path = '/dialogies/' + props.id;
    return (
        <div>
            <NavLink to={path}><div>{props.author}</div><img className={s.avatar} src={props.img}/> </NavLink>
        </div>

    )
}
type DialogType = {
    id: number
    author: string
    img: string
}