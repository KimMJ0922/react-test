import CourseItem from "./CourseItem.tsx";
import Card from "../Card.tsx";
import {CourseType} from "../../interface/CourseType.ts";
import {Fragment} from "react";

interface ICourseList {
    title : string,
    courseList : CourseType[]
}

export default function CourseList({title, courseList} : ICourseList) {
    return (
        <>
            <Card title={title}>
                <div className="courses">
                    {
                      courseList.map((item: CourseType, index : number) => (
                            <Fragment key={index}>
                                <CourseItem {...item}/>
                                {index < courseList.length -1 && <hr className="divider" />}
                            </Fragment>
                        ))
                    }
                </div>
            </Card>
        </>
    );
}

