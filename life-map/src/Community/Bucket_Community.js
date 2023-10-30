function Bucket_Community(){
    return(
        <div className="Buket_Community">
            <div className="B_title">버킷리스트</div>
            <div className="input-group">
                <input 
                    type="search"
                    className="search_form"
                    placeholder="해시태그로 검색하세요"
                ></input>
                {/* <button type="submit"></button> */}
            </div>
            <div className="hashtags">
                <div className="hashtags-title">
                    COLLECTION OF HASHTAGS
                </div>
                <div className="hashtags-group">
                    <ul>
                    <li className="r">
                        <li>#해시태그<p>1K</p></li>
                        <li>#해시태그<p>1K</p></li>
                        <li>#해시태그<p>1K</p></li></li>
                    <li className="r">
                        <li>#해시태그</li><p>1K</p>
                        <li>#해시태그</li><p>1K</p>
                        <li>#해시태그</li><p>1K</p></li>
                    <li className="r">
                        <li>#해시태그</li><p>1K</p>
                        <li>#해시태그</li><p>1K</p>
                        <li>#해시태그</li><p>1K</p></li>
                    </ul>
                </div>
            </div>
            <div className="mostLiked">
                <div className="mostLiked-title">
                    MOST LIKED BUCKET
                </div>
                <input type="button" className="read-more">
                </input>
                {/* <div className="mostLiked-group">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
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
                    <button className="liked"></button>
                    <div className="liked-count">30</div>
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
                    <button className="liked"></button>
                    <div className="liked-count">30</div>
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
                    <button className="liked"></button>
                    <div className="liked-count">30</div>
                </div>
            </div>
        </div>        
    );

}
export default Bucket_Community;