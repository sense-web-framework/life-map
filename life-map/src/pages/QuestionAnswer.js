import '../css/QuestionAnswer.css';
import profileImg from '../img/profile-img-source.jpg';

function QuestionAnswer() {
    return (
        <div className="question-answer-page">
            <div className="question-banner">
                <div className="question-banner-img">
                    <div className="question-banner-text">
                        <h6>QUESTION OF THE DAY</h6>
                        <h1>당신은 주변 사람들에게</h1>
                        <h1>어떤 사람으로 남고 싶은가요?</h1>
                    </div>
                </div>
            </div>
            <div className="question-answer-page-my-answer">
                <div className="question-answer-page-my-answer-label">
                    <h2>MY ANSWER</h2>
                </div>
            </div>
            <div className='user-profile'>
                <div className='user-profile-box'>
                    <img src={profileImg} className="profile-img" alt="profile-img" />
                </div>
                <div className='user-profile-name'>
                    {localStorage.getItem('key')}
                    <br></br>
                    {localStorage.getItem(localStorage.getItem('key'))}
                </div>
            </div>
        </div>
    );
}

export default QuestionAnswer;