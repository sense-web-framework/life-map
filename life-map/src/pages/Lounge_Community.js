import Lounge_Board from "./Lounge_Board.js";

function Lounge_Community(){
    return(
        <div className="Lounge_Community">
            <div className="L_title">라운지</div>
            <div className="L_subtitle">자유롭게 소통하는 공간</div>
            <input 
                type="search"
                className="L_search_form"
                placeholder=" 검색어"
            ></input>
            {/* <div className="L-board">
                
            </div> */}
            <Lounge_Board></Lounge_Board>
        </div>
    );
}
export default Lounge_Community;