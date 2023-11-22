import NavBar from './NavBar.js';
import image from '../img/이미지.png';
import image1 from '../img/이미지1.png';
import image2 from '../img/이미지2.png';
import {Link} from 'react-router-dom';

function main(){
    
    return (
        <div className="main">
            <NavBar/>
            <div className="App-header">
                <div className='App-header-title'>
                FUTURE,
                <div className='fontsize-80px'>DESIGN YOUR LIFE</div>
                </div>
                <div className='App-header-saying'>
                “ HAPPINESS DEPENDS UPON OURSELVES.”, ARISTOTELES
                </div>
            </div>
            <div className="App-header2">
                <div className='App-header2-introduce'>
                    버킷리스트를 작성하고 구체적인 계획을 세우며,<br/>
                    이뤄나가기 위한 지속적인 동기부여를 받을 수 있습니다.<br/>
                    라이프맵과 함께 꿈을 향해 나아가는 첫 걸음을 시작해보세요.
                </div>
            </div>
            <div className="App-header3">
                <div className='App-header3-question-title'>
                    QUESTION
                </div>
                <div className='App-header3-question-text'>
                    하루에 한 번,<br/>
                    당신을 위한<br/>
                    질문에 답하세요
                </div>
                <Link to={'/question'}>
                <button className='App-header3-question-button'>GO TO QUESTION</button>
                </Link>
                <img className='App-header3-question-image' src={image} alt="질문이미지"/>
            </div>
            <div className="App-header4">
                <img className='App-header4-bucketlist-image' src={image1} alt="버킷리스트이미지"/>
                <div className='App-header4-bucketlist-title'>
                    BUCKET LIST
                </div>
                <div className='App-header4-bucketlist-text'>
                    하고 싶은 일을<br/>
                    작성해보세요
                </div>
                <Link to={'/bucket-list'}>
                <button className='App-header4-bucketlist-button'>GO TO BUCKETLIST</button>
                </Link>
            </div>
            <div className="App-header5">
                <div className='App-header5-community-title'>
                    COMMUNITY
                </div>
                <div className='App-header5-community-text'>
                    당신의 목표를<br/>
                    공유하세요
                </div>
                <Link to={'/community/bucket_community'}>
                <button className='App-header5-community-button'>GO TO COMMUNITY</button>
                </Link>
                <img className='App-header5-community-image' src={image2} alt="커뮤니티이미지"/>
            </div>
        </div>
    );
}

export default main;
