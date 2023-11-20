import { useState } from 'react';
import NavBar from './NavBar.js';
import image from '../img/프로필.png';
import { getAuth, signOut } from 'firebase/auth';

function MyPage(){

    const item=localStorage.getItem("key");

      async function SignOut() {
        try {
          const auth = getAuth();
          await signOut(auth);
          localStorage.removeItem('key');
          window.location.replace('/main');
        }
         catch (error) {
          console.error('로그아웃 실패: ', error);
        }
      }

    return (
        <div className="MyPage">
            <NavBar/>
            <div className='myPage-bg'>
                <div className='myPage-box'>
                    <div className='myPage-box-title'>MY PAGE</div>
                    <div className='myPage-box-image'><img src={image}></img></div>
                    <div className='myPage-box-id'>{item}</div>
                    <div className='notification-title'>NOTIFICATION</div>
                    <div className='notification' style={{ maxHeight: '230px', width: '500px', overflowY: 'scroll' }}>
                        <ul>
                            <li className='list'>▷(2023.11.10) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.10) abc@naver.com님께서 버킷리스트 '제주도 한달살이'에 좋아요를 누르셨습니다.</li>
                            <li className='list2'>▷(2023.11.10) abc@naver.com님께서 버킷리스트 '제주도 한달살이'에 함께하고 싶어합니다.</li>
                            <li className='list2'>▷(2023.11.10) qwer1234@gmail.com님께서 버킷리스트 '가족사진 100장 찍기'에 좋아요를 누르셨습니다.</li>
                            <li className='list'>▷(2023.11.11) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.11) hihell00@naver.com님께서 나의 오늘의 답변에 공감했습니다.</li>
                            <li className='list2'>▷(2023.11.11) 버킷리스트 '빼뺴로 데이에 부모님께 편지쓰기'를 달성하셨습니다! 축하드립니다.</li>
                            <li className='list2'>▷(2023.11.11) 버킷리스트 '케이크 10조각 먹어보기'를 달성하셨습니다! 축하드립니다.</li>
                            <li className='list'>▷(2023.11.12) 오늘의 질문이 도착했습니다!</li>
                            <li className='list'>▷(2023.11.13) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.13) abc@naver.com님께서 커뮤니티 게시글 '케이크 10조각 먹어보기 꿀팁 드립니다~'에 댓글을 다셨습니다.</li>
                            <li className='list2'>▷(2023.11.13) yeyeye22@naver.com님께서 '7일만에 리액트 마스터' 버킷리스트 함께하기 신청을 수락하셨습니다.</li>
                            <li className='list'>▷(2023.11.14) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.14) qwer1234@gmail.com님께서 버킷리스트 '한성대 주변 맛집 정복'에 좋아요를 누르셨습니다.</li>
                            <li className='list2'>▷(2023.11.14) 버킷리스트 '가족사진 100장 찍기'가 가장 많은 좋아요를 받았습니다! 달성하는 그날까지 화이팅!</li>
                            <li className='list'>▷(2023.11.15) 오늘의 질문이 도착했습니다!</li>
                            <li className='list'>▷(2023.11.16) 오늘의 질문이 도착했습니다!</li>
                            <li className='list'>▷(2023.11.17) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.17) abc@naver.com님께서 커뮤니티 게시글 '수다떨어용~~!!'에 댓글을 다셨습니다.</li>
                            <li className='list2'>▷(2023.11.17) zzzzz098765@naver.com님께서 커뮤니티 게시글 '수다떨어용~~!!'에 댓글을 다셨습니다.</li>
                            <li className='list'>▷(2023.11.18) 오늘의 질문이 도착했습니다!</li>
                            <li className='list'>▷(2023.11.19) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.19) 10293847@gmail.com님께서 커뮤니티 게시글 '수다떨어용~~!!'의 내 댓글에 답글을 다셨습니다.</li>
                            <li className='list'>▷(2023.11.20) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.20) 버킷리스트 '7일만에 리액트 마스터'를 yeyeye22@naver.com님과 함께 달성 완료하셨습니다! 축하드립니다.</li>
                            <li className='list'>▷(2023.11.21) 오늘의 질문이 도착했습니다!</li>
                            <li className='list'>▷(2023.11.22) 오늘의 질문이 도착했습니다!</li>
                            <li className='list2'>▷(2023.11.22) catdoglove@naver.com님께서 나의 오늘의 답변에 공감했습니다.</li>
                            <li className='list'>▷(2023.11.23) 오늘의 질문이 도착했습니다!</li>
                        </ul>
                    </div>
                    
                    <button type="button" className='SignOut' onClick={SignOut}>SIGN OUT</button>
                    
                </div>
            </div>
        </div>
    );
}

export default MyPage;