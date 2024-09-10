import React from 'react';
import Board from '../board/Board';


class Container extends React.component{
    constructor(props){
        super(props);
    }
    render(){
        
        return (
            <div className="container">
                <div className="color-picker-container">
                    <input type="color"/>
                </div>

                <div class="board-container">
                    <Board></Board>
                </div>
            </div>
        )
    }
}

export default Container