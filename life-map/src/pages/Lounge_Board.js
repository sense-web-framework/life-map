import '../css/Lounge_Board.css'

function Lounge_Board(){
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
                    <tr>
                        <td>15</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td class="subject">제목입니다</td>
                        <td>유저</td>
                        <td>2023.10.08</td>
                        <td>0</td>
                    </tr>
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
            <input type="button" value="글쓰기" className="write_btn"></input>
        </div>
    </div>
    );
}
export default Lounge_Board;