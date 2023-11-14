import '../css/Together_Community.css'
import Communitypage from './Community_page';
import TextareaAutosize from 'react-textarea-autosize'
function Add_Together(){
    return(
        <div className="add_Together">
            <Communitypage></Communitypage>
            <div className="card-write">
                <div className="card-Info">
                    <div className="c_title">
                    제목 <input type="text"></input>
                    </div>
                    <div className="c_hashtag">
                    해시태그 <input type="text"></input>
                    </div>
                    <div className="c_group">
                    모집인원 수 <input type="text"></input>
                        </div>
                    </div>
                    <div className="c_content">
                    <TextareaAutosize className="c_textarea" placeholder='내용을 입력해주세요'></TextareaAutosize>
                    </div>
            </div>
        </div>
    )
}
export default Add_Together;