import '../css/Together_Board.css'
import {Link} from 'react-router-dom';
import Add_Together from './Add_Together.js';
import BookMark from './BookMark.js';
import {useState,useEffect} from 'react'
function Together_Board(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // localStorage에서 데이터를 읽어옴
        const storedPosts = JSON.parse(localStorage.getItem('Together_post')) || [];
        // setPosts(storedPosts);
        setPosts(Array.isArray(storedPosts) ? storedPosts : []);
      }, []);
    return(
        <div className="Together_Board">
            <div className="T_Board">
            <Link to={"/community/together_community/add_Together"}>
                    <input 
                        type="button"
                        value="새로 만들기"
                        className="write_btn"></input>
                </Link>
                <table id="1">
                {posts.map((post,index)=>(
                <tr key={index}>
                    <td><div className="TB_picture_new"></div></td>
                    <td>
                        <div className="TB_title">{post.title}</div><br></br>
                        <div className="TB_content">{post.content}</div><br></br>
                        <div className="TB_hashtag">{post.hashtag}</div>
                    </td>
                    <td><div className="TB_parti"></div></td>
                    <td id='parti_num'>+{post.group}</td>
                    <td><div className="TB_bookmark"><BookMark></BookMark></div></td>
                    <td><input type="button" onClick={()=>alert('신청완료!')} value="신청하기" className="apply_btn"></input></td>
                </tr>
                ))}
                <tr>
                    <td><div className="TB_picture"></div></td>
                    <td>
                        <div className="TB_title">케이크 10조각 먹어보기</div><br></br>
                        <div className="TB_content">케이크 한번에 10조각 먹기 도전하실 분 구합니다. 
                        단거 잘 먹는 사람만.</div><br></br>
                        <div className="TB_hashtag">#도전#케이크#디저트#가볍게</div>
                    </td>
                    <td><div className="TB_parti"></div></td>
                    <td id='parti_num'>+3</td>
                    <td><div className="TB_bookmark"><BookMark></BookMark></div></td>
                    <td><input type="button" onClick={()=>alert('신청완료!')} value="신청하기" className="apply_btn"></input></td>
                </tr>
                <tr>
                    <td><div className="TB_picture_book"></div></td>
                    <td>
                        <div className="TB_title">하루에 책 다섯페이지씩 읽기</div><br></br>
                        <div className="TB_content">하루에 책 다섯페이지씩 읽으실 분 구합니다.
                        </div><br></br>
                        <div className="TB_hashtag">#도전#독서#책#꾸준히</div>
                    </td>
                    <td><div className="TB_parti"></div></td>
                    <td id='parti_num'>+3</td>
                    <td><div className="TB_bookmark"><BookMark></BookMark></div></td>
                    <td><input type="button" onClick={()=>alert('신청완료!')} value="신청하기" className="apply_btn"></input></td>
                </tr>
                </table>
                <div class="paging">
                <ul>
                    <li class="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default Together_Board;