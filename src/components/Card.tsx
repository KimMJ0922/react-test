import {ReactNode} from "react";

interface CardProps {
    title : string,
    children : ReactNode
}

export default function Card ({title, children} : CardProps){
    return (
        <div className="card">
            <div className="card__header">{title}</div>
            <div className="card__body">
                {children}
            </div>
        </div>
    );
}
