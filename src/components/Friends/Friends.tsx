import React, {FC} from "react";
import s from './Friends.module.css'

export type FriendsType = {
    name: string
}
type FriendsComponentType = {
    state: Array<FriendsType>
}
export const Friends: FC<FriendsComponentType> = (props) => {
    return (<div>
            <h3>Friends</h3>
            {props.state.map(el => {
                return (
                    <span className={s.friends}>
                        {el.name}
                        <img className={s.img}></img>
                    </span>
                )
            })}
        </div>
    )

};