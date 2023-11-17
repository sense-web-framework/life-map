import Community_page from "./Community_page";
import LikeButton from "./LikeButton.js";
function Bucket_Community(){
    return(
        <div className="Buket_Community">
            <Community_page></Community_page>
            <div className="B_title">버킷리스트</div>
            <div className="B_input-group">
                <input 
                    type="text"
                    className="B_search_form"
                    placeholder="해시태그로 검색하세요"/>
                 <input type="button" value="" className="B_btn"></input>
            </div>
            <div className="hashtags">
                <div className="hashtags-title">
                    COLLECTION OF HASHTAGS
                </div>
                <div className="hashtags-group">
                    <ul>
                        <li>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        </li>
                        <li>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        </li>
                        <li>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#해시태그</span>
                            <span>1K</span>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mostLiked">
                <div className="mostLiked-title">
                    MOST LIKED BUCKET
                    <input type="button" className="read-more">
                </input>
                </div>
                <div className="user1">
                    <div className="user-icon"></div>
                    <div className="user-name">유저1</div>
                    <div className="title">겨울에 삿포로 여행하기</div>
                    <div className="hashtag">
                        <li>#해시태그</li><li>#해시태그</li><li>#해시태그</li>
                    </div>
                    <div className="content">
                    겨울에 삿포로 여행 가는 건 정말 낭만 있어요 
                    이 부분은 버킷 리스트의 상세 소개 부분이에요...</div>
                    <div className="division-line"></div>
                    <div className="liked"><LikeButton></LikeButton></div>
                </div>
                <div className="user2">
                    <div className="user-icon"></div>
                    <div className="user-name">유저2</div>
                    <div className="title">겨울에 삿포로 여행하기</div>
                    <div className="hashtag">
                        <li>#해시태그</li><li>#해시태그</li><li>#해시태그</li>
                    </div>
                    <div className="content">
                    겨울에 삿포로 여행 가는 건 정말 낭만 있어요 
                    이 부분은 버킷 리스트의 상세 소개 부분이에요...</div>
                    <div className="division-line"></div>
                    <div className="liked"><LikeButton></LikeButton></div>
                </div>
                <div className="user3">
                    <div className="user-icon"></div>
                    <div className="user-name">유저3</div>
                    <div className="title">겨울에 삿포로 여행하기</div>
                    <div className="hashtag">
                        <li>#해시태그</li><li>#해시태그</li><li>#해시태그</li>
                    </div>
                    <div className="content">
                    겨울에 삿포로 여행 가는 건 정말 낭만 있어요 
                    이 부분은 버킷 리스트의 상세 소개 부분이에요...</div>
                    <div className="division-line"></div>
                    <div className="liked"><LikeButton></LikeButton></div>
                </div>
            </div>
        </div>        
    );

}
export default Bucket_Community;