import Lounge_Board from "./Lounge_Board.js";
import Community_page from "./Community_page.js";
import '../css/Lounge_Community.css'
function Lounge_Community(){
    return(
        <div className="Lounge_Community">
            <Community_page></Community_page>
            <div className="L_title">라운지</div>
            <div className="L_subtitle">자유롭게 소통하는 공간</div>
            <div className="L_input-group">
                <input 
                    type="text"
                    className="L_search_form"
                    placeholder=" 검색어"
                ></input>
                <input type="button" value="" className="L_btn"></input>
            </div>
            {/* <div className="L-board">
                
            </div> */}
            <Lounge_Board></Lounge_Board>
        </div>
    );
}
export default Lounge_Community;