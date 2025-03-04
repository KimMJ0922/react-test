import Card from "../Card.tsx";
import {useImmer} from "use-immer";
import {ChangeEvent, SyntheticEvent, useState} from "react";

interface ICourseForm {
    title : string,
    description : string,
    info : {
        skill : string,
        level : number
    }
}
export default function CourseForm({addCourse} : {addCourse : (courseData : ICourseForm) => void}) {
    const [form, setForm] = useImmer<ICourseForm>({
        title : '',
        description : '',
        info : {
            skill : '',
            level : 0
        }
    });
    const handleSubmit = (e : SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        addCourse(form);
    }

    const handleChangeFormData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm((draft) => {
            const { name, value } = e.target;
            if (name === "title" || name === "description") {
                draft[name] = value;
            } else if (name === "skill") {
                draft.info.skill = value;
            } else if (name === "level") {
                draft.info.level = parseInt(value, 10);
            }
        });
    }

    return (
        <Card title="강의 등록">
            <form style={{ display : 'flex', flexDirection: "column", gap: '1rem'}} onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="강의 제목" onChange={handleChangeFormData}/>
                <input type="text" name="description" placeholder="강의 한줄 설명" onChange={handleChangeFormData}/>
                <div style={{display : 'flex', alignItems : 'center'}}>
                    <label htmlFor="skill" style={{width: "100px"}}>스킬</label>
                    <input type="text" name="skill" id="skill" onChange={handleChangeFormData}/>
                </div>
                <div style={{display : 'flex', alignItems : 'center'}}>
                    <label htmlFor="skill" style={{width: "100px"}}>난이도</label>
                    <select name="level" id="level" value={form.info.level} onChange={handleChangeFormData}>
                        <option value="0">입문</option>
                        <option value="1">초급</option>
                        <option value="2">중급</option>
                    </select>
                </div>
                <input type="submit" value="완료"/>
            </form>
        </Card>
    );
}
