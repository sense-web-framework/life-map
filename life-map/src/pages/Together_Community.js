import '../css/Together_Community.css'
import Together_Board from './Together_Board';
function Together_Community(){
    return(
        <div className="Together_Community">
          <div className="T_title">함께해요</div>  
          <div className="T_input-group">
                <input 
                    type="text"
                    className="T_search_form"
                    placeholder="해시태그로 검색하세요"/>
                 <input type="button" value="" className="T_btn"></input>
            </div>
            <Together_Board></Together_Board>
        </div>
        
    )
}
export default Together_Community;