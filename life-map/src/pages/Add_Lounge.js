import '../css/Lounge_Board.css'
import '../css/Lounge_Community.css'
import Communitypage from './Community_page';
import TextareaAutosize from 'react-textarea-autosize'
import {useState,useRef,useEffect} from 'react'
function Add_Lounge(){
    const [post,setPost]=useState([]);
    const L_title = useRef();
    const L_content = useRef();
    const createPost=()=>{
        const title=L_title.current.value.trim();
        const content = L_content.current.value.trim();
        if (!title || !content) return;
        setPost([
            {"title": title, "content": content},
            ...post
          ])
    }
    useEffect(()=>{
        localStorage.setItem('Lounge_post', JSON.stringify(post));
      }, [post])
    return(
        <div className="add_Lounge">
            <Communitypage></Communitypage>
            <div className="L_title">라운지</div>
            <div className="Lcard-write">
                <div className="card-Info">
                    <div className="c_title">
                    제목 <input type="text" ref={L_title}></input>
                    </div>
                    </div>
                    <div className="c_content">
                    <TextareaAutosize className="c_textarea" placeholder='내용을 입력해주세요'ref={L_content}></TextareaAutosize>
                    </div>
                    <input type="submit" className="submitbtn" value='등록하기'onClick={()=>{createPost();alert("등록되었습니다");}}></input>
            </div>
        </div>
    )
}
export default Add_Lounge;