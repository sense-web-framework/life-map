import React from 'react';
import '../css/LikeButton.css'
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
class LikeButton extends React.Component{
    state = {
        isChecked: false,
        notice: ' ',
    };

    onClick = () => {
        this.state.isChecked ?
        this.setState({
            isChecked: false,
            notice: '',
        })
        :
        this.setState({
            isChecked: true,
            notice: '좋아요 1회',
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="icons-list">
                    {this.state.isChecked ?  
                    <HeartFilled className="button red" onClick={this.onClick}/> :
                    <HeartOutlined className="button" onClick={this.onClick}/>}
                    <h3>{this.state.notice}</h3>
                </div>
            </React.Fragment> 
        )
    }
}
export default LikeButton;