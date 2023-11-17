import React from 'react';
import {LockOutlined, UnlockOutlined} from '@ant-design/icons';
class SecretButton extends React.Component{
    state = {
        isChecked: true,
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
            notice: '',
        });
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    {this.state.isChecked ?  
                    <UnlockOutlined onClick={this.onClick}/> :
                    <LockOutlined onClick={this.onClick}/>}
                </div>
            </React.Fragment> 
        )
    }
}
export default SecretButton;