import {useEffect, useState} from "react";
import './styles/app.css';
import BlocksArea from "./components/blocks-area";
import Input from './components/input';
import HoverSquares from "./components/hover-squares";

function App() {

    const [data, setData] = useState([]);
    const [fieldSize, setFieldSize] = useState(5);
    const [hoveredFields, setHoveredFields] = useState([]);
    console.log(hoveredFields);

    useEffect(() => {
        fetch('https://demo7919674.mockable.io')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);

  return (
    <div className="main_container">
        <Input
            data={data}
            setFieldSize={setFieldSize}
        />
        <div style={{display: 'flex'}}>
            <BlocksArea
                fieldSize={fieldSize}
                setHoveredFields={setHoveredFields}
                hoveredFields={hoveredFields}
            />
            <HoverSquares
                hoveredFields={hoveredFields}
                fieldSize={fieldSize}
            />
        </div>
    </div>
  );
}

export default App;
