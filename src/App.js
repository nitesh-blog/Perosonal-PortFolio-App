import './App.css';
import Intro from './components1/intro/Intro';
import About from './components1/about/About';
import Contact from './components1/contact/Contact';
import Toggle from './components1/toggle/Toggle';
import { ReactDOM } from 'react-dom/client';
import { useContext } from 'react';
import { ThemeContext } from './Context';
function App() 
{
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
    <div style={{backgroundColor: darkMode ? "#222" : "blanchedalmond",
    color: darkMode && "white",
    }}
    >
        <Toggle />
        <Intro />
        <About />
        <Contact />


    </div>
    );
}

export default App;