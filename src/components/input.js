import React from 'react';
import '../styles/input.css';

const Input = ({data, setFieldSize}) => {

    let currentSize;
    function selectSize(e) {
        if(e.target.value === 'Easy') {
            currentSize = data[0].field;
        } else if(e.target.value === 'Normal') {
            currentSize = data[1].field;
        } else if(e.target.value === 'Hard') {
            currentSize = data[2].field;
        } else {
            currentSize = data[0].field;
        }
    }

    function submitSelectedSize() {
        setFieldSize(currentSize);
    }

    return (
        <div className="input_container">
            <select className="selector" onChange={(e) => selectSize(e)}>
                <option>Pick mode</option>
                {
                    data.map((item) => {
                        return (
                            <option key={item.name} value={item.name}>{item.name}</option>
                        )
                    })
                }
            </select>
            <button className="button" onClick={submitSelectedSize}>START</button>
        </div>
    );
};

export default Input;