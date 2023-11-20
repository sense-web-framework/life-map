import '../css/Together_Community.css'
import Communitypage from './Community_page';
import Together_Community from './Together_Community';
import TextareaAutosize from 'react-textarea-autosize'
import {useState,useRef,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
function Add_Together(){
  const [posts,setPosts]=useState([]);
    const createPost = () => {
        const title = c_title.current.value.trim();
        const hashtag = c_hashtag.current.value.trim();
        const group = c_group.current.value.trim();
        const content = c_content.current.value.trim();
        if (!title || !content||!group) return;
      
        setPosts([
          {"title": title,"hashtag":hashtag,"group":group, "content": content},
          ...posts
        ])
         // 입력값 초기화
        c_title.current.value = '';
        c_hashtag.current.value = '';
        c_group.current.value = '';
        c_content.current.value = '';
      };
      useEffect(()=>{
        localStorage.setItem('Together_post', JSON.stringify(posts));
      }, [posts])
      const c_title = useRef();
      const c_hashtag = useRef();
      const c_group = useRef();
      const c_content = useRef();
      const navigate = useNavigate();
    return(
        <div className="add_Together">
            <Communitypage></Communitypage>
            <div className="T_title">함께해요</div> 
            <div className="card-write">
                <div className="card-Info">
                    <div className="c_title">
                    제목 <input type="text" ref={c_title}></input>
                    </div>
                    <div className="c_hashtag">
                    해시태그 <input type="text" ref={c_hashtag}></input>
                    </div>
                    <div className="c_group">
                    모집인원 수 <input type="text" ref={c_group}></input>
                        </div>
                    </div>
                    <div className="c_content">
                    <TextareaAutosize className="c_textarea" placeholder='내용을 입력해주세요'ref={c_content}></TextareaAutosize>
                    </div>
                    <input type="submit" className="submitbtn" value='등록하기'onClick={()=>{createPost();alert("등록되었습니다");}}></input>
            </div>
        </div>
    )
}
export default Add_Together;
//onClick={()=>navigate("/community/together_community")}