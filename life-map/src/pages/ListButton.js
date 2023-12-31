import React, { Component } from 'react';
import '../css/ListButton.css'

class ListButton extends Component {
  state = {
    input1: '',
    list: []
  };
  num = 0;

  //모든 input 제어
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //추가 명령을 수행할 함수
  handleCreate = () => {
    const { input1, list } = this.state;
    const newItem = {
      input1: input1
    };

    this.setState({
      list: [...list, newItem],
      input1: ''
    });
  };

  render() {
    const { handleChange, handleCreate } = this;
    const { input1, list } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            name="input1"
            placeholder="버킷리스트"
            onChange={handleChange}
            value={input1}
          />

          <button onClick={handleCreate} className="add_btn">Add</button>
        </div>
        <div>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="Interval">
                {item.input1}
                <input type="button" value="Detail" className="move_list"></input>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListButton;