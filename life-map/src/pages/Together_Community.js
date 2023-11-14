import '../css/Together_Community.css'
import Communitypage from './Community_page';
import TogetherBoard from './Together_Board';
function Together_Community(){
    return(
        <div className="Together_Community">
            <Communitypage></Communitypage>
          <div className="T_title">함께해요</div>  
          <div className="T_input-group">
                <input 
                    type="text"
                    className="T_search_form"
                    placeholder="해시태그로 검색하세요"/>
            </div>
            <TogetherBoard></TogetherBoard>
        </div>
        
    )
}
export default Together_Community;