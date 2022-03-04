import { useState } from 'react';
import './App.css';
import Naamkaran from './components/Header/Header';
import InputBar from './components/InputBar/InputBar';
import ResultContainer from './components/ResultContainer/ResultContainer';
import name from '@rstacruz/startup-name-generator';

// const name = require('@rstacruz/startup-name-generator');

function App() {
    const [title, setTitle] = useState('Naamkaran');
    const [input, setInput] = useState('');
    const [result, setResult] = useState([])
    

    const handleInputChange = (text) => {
        setInput(text);
    
        if(text.length == 0){
            setResult([]);
        }
        else{
            setResult(name(text));
        }
    };

    return (
        
        <>
            <Naamkaran title={title} input={input} />
            <InputBar onInputChange={handleInputChange} />
            <ResultContainer result={result} />
        </>
    );
}

export default App;
