import NavBar from './NavBar.js';
import '../css/BucketList.css'
import TextareaAutosize from 'react-textarea-autosize'

function BucketList() {

    return(
        <div className="BucketList">
            <NavBar></NavBar>
            <div className="List">
                <div className="bucketlist_title">MY BUCKET LIST</div>
                <div className="list_underline"></div>
                <div className="list_type">
                    <ol>
                        <li>버킷리스트1</li>
                        <li>버킷리스트2</li>
                        <li>버킷리스트3</li>
                        <li>버킷리스트4</li>
                        <li>버킷리스트5</li>
                        <li>버킷리스트6</li>
                        <li>버킷리스트7</li>
                    </ol>
                </div>
            </div>

            <div className="Detail">
                <div className="div_fontsize">Detail</div>
                
                <div className="div_Setting">
                    <p className="p_Setting">SETTING</p>
                    <input type="checkbox" className="Private" ></input>
                    <p className="p_Private">나만보기</p>
                </div>
                <div className="Content">
                    <input type="text" className="Title" placeholder="제목입력"></input>
                    <input type="button" className="Heart"></input>
                    <div className="title_underline"></div>
                    <input type="text" className="HashTag" placeholder="해시태그"></input>
                    <TextareaAutosize className="Textarea" placeholder="버킷리스트를 작성해주세요" rows={1}></TextareaAutosize>   
                </div>
            </div>
        </div>
    );
}
export default BucketList;