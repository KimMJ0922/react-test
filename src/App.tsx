import './App.css'
import CourseList from "./components/course/CourseList.tsx";
import {useEffect, useState} from "react";
import {CourseType} from "./interface/CourseType.ts";
import CourseForm from "./components/course/CourseForm.tsx";

function App() {
    const [courseList, setCourseList] = useState<CourseType[]>([]);

    
    useEffect(() => {
        setCourseList([
            {
                title: '입문자를 위한, HTML&CSS 웹 개발 입문',
                description: '웹 개발에 필요한 기본 지식을 배웁니다.',
                thumbnail: '/img/htmlcss.png',
                isFavorite : true
            },
            {
                title: '포트폴리오 사이트 만들고 배포까지!',
                description: '포트폴리오 사이트를 만들고 배포해 보세요.',
                thumbnail: '/img/portfolio.png',
                isFavorite : false,
                link: 'https://inf.run/Kpnd'
            },
            {
                title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
                description: '쉽고! 알찬! 내용을 준비했습니다.',
                thumbnail: '/img/js.png',
                isFavorite : true,
                link: 'https://inf.run/YkAN'
            }
        ]);
    }, []);

    const addCourse = (course : CourseType) => {
        setCourseList([...courseList, course]);
    }

    /*const favoriteList = courseList.filter((item) => item.isFavorite)*/

    return (
      <main style={{flexDirection: 'column', gap: '1rem'}}>
          <CourseForm addCourse={addCourse}/>
          <CourseList title="강의 목록" courseList={courseList}/>
          {/*<CourseList title="관심 목록" courseList={favoriteList}/>*/}
      </main>
    )
}

export default App
