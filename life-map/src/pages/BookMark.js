import React from "react";
import '../css/LikeButton.css'
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

class BookMark extends React.Component{
    state = {
        isChecked: false,
        notice: ' ',
        count:3,
    };
    
    onClick = () => {
        const {isChecked,count}=this.state;

        this.state.isChecked ?
        this.setState({
            isChecked: false,
            notice: '',
            count:count-1,
        })
        :
        this.setState({
            isChecked: true,
            notice: '좋아요 1회',
            count:count+1,
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="icons-list">
                    {this.state.isChecked ?  
                    <IoBookmark icon="fa-solid fa-bookmark" className="solidbookmark" onClick={this.onClick}/> :
                    <IoBookmarkOutline icon="fa-regular fa-bookmark" className="bookmark" onClick={this.onClick}/>}   
                    <p>{this.state.count}</p>                     
                </div>

            </React.Fragment> 
        )
    }
}
export default BookMark;