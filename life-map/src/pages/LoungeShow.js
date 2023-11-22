import {useState,useEffect} from 'react'
import '../css/Lounge_Board.css'
function LoungeShow(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // localStorage에서 데이터를 읽어옴
        const storedPosts = JSON.parse(localStorage.getItem('Lounge_post')) || [];
        setPosts(Array.isArray(storedPosts) ? storedPosts : []);
      }, []);
      const user=localStorage.getItem('key')
    return(
        <div clasName="LoungeShow">
            <div id="show-title">라운지 게시판</div>
            <div id="show-card">
            {posts.map((post,index)=>(
                <tr id="showTable">
                    <p>작성자: {user}</p>
                    <p>제목: {post.title}</p>
                    <p>내용: {post.content}</p>
                </tr>
            ))}
            </div>
        </div>
    )
}
export default LoungeShow;