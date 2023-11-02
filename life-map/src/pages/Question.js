import '../css/Question.css';

function Question() {
    return (
        <div className="QuestionPage">
            <div className="banner">
                <div className="banner-img">
                    <div className="banner-text">
                        <h6>QUESTION OF THE DAY</h6>
                        <h1>당신은 주변 사람들에게</h1>
                        <h1>어떤 사람으로 남고 싶은가요?</h1>
                    </div>
                </div>
            </div>
            <div className="answer">
                <div className="answer-label">
                    <h2>MAKE YOUR ANSWER</h2>
                </div>
                <div className="answer-form">
                    <form>
                        <textarea placeholder="당신의 답변을 입력해주세요." maxlength="300"></textarea><br/>
                        <input type="submit" value="SUBMIT"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Question;