import '../css/Question.css';
import { useNavigate } from "react-router-dom";

function Question() {
    const navigate = useNavigate();

    const navigateToAnswer = () => {
        navigate("/question-answer");
    };

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
                        <textarea placeholder="당신의 답변을 입력해주세요." maxlength="300"></textarea><br/>
                        <input type="submit" value="SUBMIT" onClick={navigateToAnswer}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Question;