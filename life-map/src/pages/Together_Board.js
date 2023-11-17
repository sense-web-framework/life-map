import '../css/Together_Board.css'
import {Link} from 'react-router-dom';
import Add_Together from './Add_Together.js';
function Together_Board(){
    return(
        <div className="Together_Board">
            <div className="T_Board">
            {/* <div class="dropdown">
            <button className="dropdown-btn">정렬</button>
            <div class="dropdown-options">
                <a href="#">인기순</a>
                <a href="#">최신순</a>
                <a href="#">오래된순</a>
            </div>
            </div> */}
          {/* <Add_Together /> */}
            <Link to={"/community/together_community/add_Together"}>
                    <input 
                        type="button"
                        value="새로 만들기"
                        className="write_btn"></input>
                </Link>
                <table id="1">
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
                    <td><div className="TB_bookmark"></div></td>
                    <td id='bookmark_num'>3</td>
                    <td><input type="button" onClick={()=>alert('신청완료!')} value="신청하기" className="apply_btn"></input></td>
                </tr>
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
                    <td><div className="TB_bookmark"></div></td>
                    <td id='bookmark_num'>3</td>
                    <td><input type="button" onClick={()=>alert('신청완료!')} value="신청하기" className="apply_btn"></input></td>
                </tr>
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
                    <td><div className="TB_bookmark"></div></td>
                    <td id='bookmark_num'>3</td>
                    <td><input type="button" onClick={()=>alert('신청완료!')} value="신청하기" className="apply_btn"></input></td>
                </tr>
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
                    <td><div className="TB_bookmark"></div></td>
                    <td id='bookmark_num'>3</td>
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