import NavBar from './NavBar.js';
import NavBar_Community from './NavBar_Community.js';
import '../css/Community_page.css';   
import '../css/Lounge_Community.css'
import '../css/Lounge_Board.css'
import Bucket_Community from './Bucket_Community.js';
import Lounge_Community from './Lounge_Community.js';
function Community_page(){
    return (
        <div className="Community_page">
            <NavBar/> 
            <div className="banner">
                <div className='banner_txt'>
                    커뮤니티
                </div>
            </div>
            <NavBar_Community></NavBar_Community>
            <Bucket_Community></Bucket_Community>
            {/* <Lounge_Community></Lounge_Community> */}
        </div>
    );
}

export default Community_page;