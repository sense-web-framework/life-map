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
                            <span>#여행</span>
                            <span>5K</span>
                        </div>
                        <div class="h">
                            <span>#취미</span>
                            <span>3K</span>
                        </div>
                        <div class="h">
                            <span>#운동</span>
                            <span>2K</span>
                        </div>
                        </li>
                        <li>
                        <div class="h">
                            <span>#헬스</span>
                            <span>2K</span>
                        </div>
                        <div class="h">
                            <span>#힐링</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#등산</span>
                            <span>1K</span>
                        </div>
                        </li>
                        <li>
                        <div class="h">
                            <span>#맛집</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#도전</span>
                            <span>1K</span>
                        </div>
                        <div class="h">
                            <span>#그림</span>
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
                        <li>#여행</li><li>#일본</li><li>#겨울</li>
                    </div>
                    <div className="content">
                    겨울에 삿포로 여행 가는 건 정말 낭만 있어요 
                    </div>
                    <div className="division-line"></div>
                    <div className="liked"><LikeButton></LikeButton></div>
                </div>
                <div className="user2">
                    <div className="user-icon"></div>
                    <div className="user-name">유저2</div>
                    <div className="title">스카이다이빙 해보기</div>
                    <div className="hashtag">
                        <li>#스포츠</li><li>#도전</li><li>#풍경</li>
                    </div>
                    <div className="content">
                    겨울에 삿포로 여행 가는 건 정말 낭만 있어요 </div>
                    <div className="division-line"></div>
                    <div className="liked"><LikeButton></LikeButton></div>
                </div>
                <div className="user3">
                    <div className="user-icon"></div>
                    <div className="user-name">유저3</div>
                    <div className="title">바디프로필 찍기</div>
                    <div className="hashtag">
                        <li>#운동</li><li>#헬스</li><li>#도전</li>
                    </div>
                    <div className="content">
                    바디프로필을 준비하면서 나의 한계에 도전해보고 싶어요.</div>
                    <div className="division-line"></div>
                    <div className="liked"><LikeButton></LikeButton></div>
                </div>
            </div>
        </div>        
    );

}
export default Bucket_Community;