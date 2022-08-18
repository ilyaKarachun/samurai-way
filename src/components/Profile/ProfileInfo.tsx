import React, {FC} from "react";

export const ProfileInfo: FC<ProfileInfoType> = (props) => {
    return (<>
            <div><img
                alt="img"
                src={props.img}/>
            </div>
            <div>{props.descriprion}</div>
        </>

    )
}
type ProfileInfoType = {
    descriprion: string
    img: string
}