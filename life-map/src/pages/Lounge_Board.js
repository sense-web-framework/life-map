import '../css/Lounge_Board.css'
import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
// import Modal from 'react-modal'
import Add_Lounge from './Add_Lounge'
function Lounge_Board(){
    const today = new Date();

    const formattedDate = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    // const [modalIsOpen, setModalIsOpen] = useState(false);
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
                    <tr key={index}>
                        <td>{13+num-index}</td>
                        <td class="subject">{post.title}</td>
                        <td>{user}</td>
                        <td>{formattedDate}</td>
                        <td>0</td>
                    </tr>
                    ))}
                    <tr>
                        <td>13</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
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
            {/* onClick={()=>setModalIsOpen(true)} */}
            {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      	<Add_Lounge/>
      </Modal> */}
        </div>
    </div>
    );
}
export default Lounge_Board;