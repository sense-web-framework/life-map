import '../css/Lounge_Board.css'
import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Modal from 'react-modal'
import LoungeShow from './LoungeShow'
function Lounge_Board(){
    const today = new Date();

    const formattedDate = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // localStorage에서 데이터를 읽어옴
        const storedPosts = JSON.parse(localStorage.getItem('Lounge_post')) || [];
        setPosts(Array.isArray(storedPosts) ? storedPosts : []);
      }, []);
      const user=localStorage.getItem('key')
      const num=posts.length
    return(
        <div clasName="Lounge_Board">
            <div className="Board">			
                <table>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                    {posts.map((post,index)=>(
                    <tr key={index} onClick={()=>setModalIsOpen(true)} >
                        <td>{13+num-index}</td>
                        <td class="subject">{post.title}</td>
                        <td>{user}</td>
                        <td>{formattedDate}</td>
                        <td>1</td>
                    </tr>
                    ))}
                    <tr>
                        <td>13</td>
                        <td class="subject">겨울에 가기 좋은 해외여행지 추천</td>
                        <td>rgreged@naver.com</td>
                        <td>2023.10.24</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td class="subject">뜨개질 시작했어요~</td>
                        <td>anvgjnkd@daum.net</td>
                        <td>2023.10.15</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td class="subject">맛집 추천해주세요!</td>
                        <td>jinha31@naver.com</td>
                        <td>2023.10.08</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td class="subject">한성대 주변 맛집 모음</td>
                        <td>keunnv@gmail.com</td>
                        <td>2023.09.28</td>
                        <td>53</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td class="subject">10kg뺀 다이어트 방법</td>
                        <td>qopq@naver.com</td>
                        <td>2023.09.17</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td class="subject">ESFJ 특징</td>
                        <td>jdujd@gmail.com</td>
                        <td>2023.09.10</td>
                        <td>35</td>
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
            <Link to={"/community/lounge_community/add_Lounge"}>
            <input type="button" value="글쓰기" className="L_write_btn"onClick={goToTop} ></input>
            </Link>
            <Modal id="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      	<LoungeShow/>
      </Modal>
        </div>
    </div>
    );
}
export default Lounge_Board;