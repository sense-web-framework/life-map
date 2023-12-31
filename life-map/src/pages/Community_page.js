import NavBar from './NavBar.js';
import NavBar_Community from './NavBar_Community.js';
import '../css/Community_page.css';   
import '../css/Lounge_Community.css'

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
            <div className='Community_body'>
            </div>
        </div>
    );
}

export default Community_page;