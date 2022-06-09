import React from 'react';
import '../styles/hover-squares.css';

const HoverSquares = ({hoveredFields, fieldSize}) => {

    function countHover(hoveredFields, item) {
        let column = item % fieldSize;
        if(column === 0) {
            column = fieldSize;
        }
        let row = (item - column) / fieldSize;
        return `row ${row + 1} - column ${column}`;
    }

    return (
        <div className="hover_squares_container">
            <h2 className="hover_squares_header">Hover Squares</h2>
            {
                hoveredFields.map((item, index) => {
                    return(
                        <div key={index} className="hover_squares_item">
                            {countHover(hoveredFields, item)}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HoverSquares;