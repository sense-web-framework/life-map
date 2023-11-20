import '../css/Question.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function Question() {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState("");

    const navigateToAnswer = () => {
        if (answer.length < 5) {
            alert('내용이 너무 짧습니다.');
        }
        else {
            const d = localStorage.getItem('question-answers');
            let a = []
            if (d) {
                a = JSON.parse(d);
                a = a.concat({key: localStorage.getItem('key'), answer: answer});
            }
            else {
                a.push({key: localStorage.getItem('key'), answer: answer});
            }

            localStorage.setItem(localStorage.getItem('key'), answer);
            localStorage.setItem('question-answers', JSON.stringify(a))
            navigate("/question-answer");
        }
    };

    const onChangeTodayAnswer = (e) => {
        setAnswer(e.target.value);
    }

    if (localStorage.getItem('key') != null) {
        if (localStorage.getItem(localStorage.getItem('key')) != null) {
            window.location.replace("/question-answer");
        }
        else {
            return (
                <div className="question-page">
                    <div className="question-banner">
                        <div className="question-banner-img">
                            <div className="question-banner-text">
                                <h6>QUESTION OF THE DAY</h6>
                                <h1>당신은 주변 사람들에게</h1>
                                <h1>어떤 사람으로 남고 싶은가요?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="question-page-answer">
                        <div className="question-page-answer-label">
                            <h2>MAKE YOUR ANSWER</h2>
                        </div>
                        <div className="question-page-answer-form">
                            <form>
                                <textarea placeholder="당신의 답변을 입력해주세요." maxlength="300" onChange={onChangeTodayAnswer}></textarea><br/>
                                <input type="submit" value="SUBMIT" onClick={navigateToAnswer}/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
    else {
        return (
            <div className="fail-question-message">
                <br></br>
                <br></br>
                <br></br>
                로그인 후 이용하실 수 있습니다.
            </div>
        );
    }
}

export default Question;