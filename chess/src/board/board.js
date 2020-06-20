import React from 'react';
import ReactDOM from 'react-dom';
import '/index.css';

class Square extends React.Component {
    render() {
      return (
        <div className={this.props.styleName}>
        </div>
      );
    }
  }

class BoardRow extends React.Component {
    renderSquare(x) {
        return <Square  styleName={x} />;
    }

    createSquare(rowNum) {
        var whiteSquare = this.renderSquare("whitesquare");
        var blackSquare = this.renderSquare("blacksquare");
        var squares = [];
        var start, end;
        rowNum % 2 == 0 ? start = 0 : end = 0;
        end += start + 8;
        for (var i = start; i < end; i++) {
            i % 2 == 0 ? squares.push(whiteSquare) : squares.push(blackSquare);
        }
        return squares;
    }

    render() {
        return (
            <div className="board-row">
                {this.createSquare()}
            </div>
        )
    }
}

class Rows extends React.Component {
    render() {
        return(
            <div> 

            </div>
        )
    }
  }