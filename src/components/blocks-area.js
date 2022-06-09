import React from 'react';
import '../styles/blocks-area.css';

const BlocksArea = ({fieldSize, setHoveredFields, hoveredFields}) => {

    const blocksArr = new Array(fieldSize * fieldSize).fill(null);

    function setItemColor(e, index) {
        if(e.target.style.backgroundColor === 'blue') {
            e.target.style.backgroundColor = 'white';
            setHoveredFields([...hoveredFields, +index]);
        } else {
            e.target.style.backgroundColor = 'blue';
            setHoveredFields([...hoveredFields, +index]);
        }
    }

    return (
        <div
            className = {fieldSize === 5 ? "blocks_area_easy" :
                fieldSize === 15 ? "blocks_area_normal" :
                fieldSize === 25 ? "blocks_area_hard" : null
            }
        >
            {
                blocksArr.map((item, index) => {
                    return(
                        <div
                            key={index + 1}
                            className="block_item"
                            onMouseOver={(e) => {
                                setItemColor(e, index + 1);
                            }}
                        ></div>
                    )
                })
            }
        </div>
    );
};

export default BlocksArea;