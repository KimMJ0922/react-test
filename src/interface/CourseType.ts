export type CourseType = {
    title: string,
    description: string,
    thumbnail?: string,
    isFavorite?: boolean,
    link?: string
};

const courseList : CourseType[] = [];

export const initializeCourseList = () => {
    courseList.splice(0, courseList.length);
}
export const setCourse = (course: CourseType) => {
    courseList.push(course);
}

export const setCourseList = (courseList: CourseType[]) => {
    courseList.map(item => setCourse(item));
}

export const deleteCourse = (course: CourseType) => {
    courseList.filter(item => item !== course);
}

export const getCourseList = () => {
    return courseList;
}