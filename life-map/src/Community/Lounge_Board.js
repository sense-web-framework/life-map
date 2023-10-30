import './Lounge_Board.css'
function Lounge_Board(){
    return(
        <div clasName="Lounge_Board">
            <div className='oo'>HEllo</div>
            <div class="board_list_wrap">
                <div clasName="board_list">
                    <div className="num">번호</div>
                    <div className="title">제목</div>
                    <div clasName="writer">작성자</div>
                    <div clasName="date">등록일</div>
                    <div clasName="count">조회수</div>
                </div>
                <div>
                    <div class="num">5</div>
                    <div className="title"><a href='#'>제목입니다</a></div>
                    <div clasName="writer">유저</div>
                    <div clasName="date">2023.10.09</div>
                    <div clasName="count">10</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div className="title"><a href='#'>제목입니다</a></div>
                    <div clasName="writer">유저</div>
                    <div clasName="date">2023.10.09</div>
                    <div clasName="count">10</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div className="title"><a href='#'>제목입니다</a></div>
                    <div clasName="writer">유저</div>
                    <div clasName="date">2023.10.09</div>
                    <div clasName="count">10</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div className="title"><a href='#'>제목입니다</a></div>
                    <div clasName="writer">유저</div>
                    <div clasName="date">2023.10.09</div>
                    <div clasName="count">10</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div className="title"><a href='#'>제목입니다</a></div>
                    <div clasName="writer">유저</div>
                    <div clasName="date">2023.10.09</div>
                    <div clasName="count">10</div>
                </div>
            </div>
            <div clasName="board_page">
                <a href='#' clasName="num on">1</a>
                <a href='#' clasName="num">2</a>
                <a href='#' clasName="num">3</a>
                <a href='#' clasName="num">4</a>
                <a href='#' clasName="num">5</a>
            </div>
            <div clasName="board_btn">
                <a href='#' clasName="write">글쓰기</a>
            </div>
        </div>
    );
}
export default Lounge_Board;