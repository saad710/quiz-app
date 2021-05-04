import React, { useContext, useState } from 'react';
import { TotalCountContext } from '../../Provider/TotalCountProvider';


import { quizContent } from './quizdata';
import QuizHeader from './QuizHeader';
import QuizItem from './QuizItem';



const Quiz = (props) => {
    const [mainData,setMainData] = useState(quizContent)
    const {totalItem,setTotalItem,marks,setMarks} = useContext(TotalCountContext)



    const handleTotalSubmit = (e) => {
        e.preventDefault()
        if(totalItem){
            const totalMarks =  totalItem.reduce((total,prd) => total + prd.score, 0);
            console.log(totalMarks)
            setMarks(totalMarks)
            setTotalItem('')
        }
       
    }
     
        return (
        <div>
            <QuizHeader/>
            <div className="d-flex justify-content-center">
                <h5>Total Score : {marks}</h5>
            </div>
            <br/>
            {
                mainData.map((data,index) => <QuizItem allInfo = {data} key={index} ></QuizItem> )
            }  
            <div className="d-flex justify-content-center">
               <button className="btn btn-info " type="submit" onClick={handleTotalSubmit}>Calculate</button>
            </div>  
           
        </div>
    );
};

export default Quiz;