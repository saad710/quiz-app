import logo from './logo.svg';
import './App.css';
import Quiz from './Component/QuizApp/Quiz';
import { createContext, useState } from 'react';


export const UserContext = createContext();
function App() {


  return (
    <div className="App">
      
        <Quiz/>
     
    </div>
  );
}

export default App;
