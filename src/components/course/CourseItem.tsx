import {CourseType} from "../../interface/CourseType.ts";
import React from "react";

export default function CourseItem(props : CourseType) {
    const handelFavorite = (e : React.MouseEvent) => {
        e.stopPropagation();
        console.log(props.isFavorite);
    }

    const handleItemClick = () => {
        window.open(props.link, '_target');
    }


    return (
        <article className="course" onClick={handleItemClick}>
            <img className="course__img" src={props.thumbnail} alt=""/>
            <div className="course__body">
                <div className="course__title">{props.title}</div>
                <div className="course__description">{props.description}</div>
            </div>
            <div className="course__icons">
                <button className="btn" onClick={handelFavorite}>
                    <img alt="좋아요" className="btn__img" src={props.isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}/>
                </button>
                <a className="btn" href={props.link} target="_blank" rel="noreferrer">
                    {
                        props.link && (
                            <img className="btn__img" src="/img/link-icon.svg" alt="링크"/>
                        )
                    }
                </a>
            </div>
        </article>
    );
}