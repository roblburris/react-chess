import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {
    render() {
      return (
        <div className={this.props.styleName}>
        </div>
      );
    }
  }

  class Piece extends React.Component {
    render(piece) {
      return (
        <img className="piece">  </img>
      )
    }
}
  
  class Board extends React.Component {
    renderSquare(x) {
      return <Square  styleName={x} />;
    }

    initializeRows() {
      var twoRows = [<div className="board-row"> </div>, <div className="board-row"> </div>];
      for (var i; i < 4; i++) {
        var whiteSquare = this.renderSquare("whitesquare");
        var blackSquare = this.renderSquare("blacksquare")
        twoRows[0] = twoRows[0].append(whiteSquare);
        twoRows[0] = twoRows[0].append(blackSquare);
        twoRows[1] = twoRows[1].append(blackSquare);
        twoRows[1] = twoRows[1].append(whiteSquare);
      }
      twoRows[0].append(" </div>");
      twoRows[1].append(" </div>");
      return twoRows;
    }
    initializeBoard() {
      var board = "<div className=\"board\"> ";
      for (var i; i < 4; i++) {
        board.append(this.initializeRows()[0]);
        board.append(this.initializeRows()[1]);
      }
      board.append(" </div>");
      return board;
    }
  
    render() {
      return (
        this.initializeBoard()
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <Board />
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  