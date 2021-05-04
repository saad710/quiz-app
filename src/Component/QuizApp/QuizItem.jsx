// import React, { useState } from 'react';
// import { quizContent } from './quizdata';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormLabel from '@material-ui/core/FormLabel';



// const QuizItem = () => {
//     const [mainData,setMainData] = useState(quizContent)
   
//     const [value, setValue] = React.useState('');
    // const [currentScore,currentSetScore] = useState([])
    // const [currentId,currentSetId] = useState()
    // const [currentDataId,setCurrentDataId] = useState()
    
    // const [index,setIndex] = useState()
    // const [totalItem,setTotalItem] = useState([])
    // const [marks,setMarks] = useState()
    

    // const handleRadioChange = (items,data,index,event) => {
    //     setValue(event.target.value);
    //     console.log(value)
    //     console.log(items.score)
     

        
      //  const newScore = [...currentScore,items.score]
      // currentSetScore(newScore)
        
      //   const newItem = [...totalItem,items]
      //   setTotalItem(newItem)
      //   console.log(newItem)
      //   // currentSetId(items.id)
      //   console.log(data)
      //   // setCurrentQue(data.question)
      //   setCurrentDataId(data.id)
      //   // setIndex(index)
      //   console.log(index)
 

     
    // const handleTotalSubmit = (e) => {
    //     e.preventDefault()
    //     const totalMarks =  totalItem.reduce((total,prd) => total + prd.score, 0);
    //     console.log(totalMarks)
    //     setMarks(totalMarks)
    //     setTotalItem('')
       
    // }
    
//     return (
//         <div>
            
//        <form>
//          {
//                mainData.map((data, index)=> (
//                   <div key={index}>
//                       <h5>{data.question} </h5>
                     
//                       {data.options.map((items,index) => (
                    
//                    <div key={index}>
//                         <input type="radio" id="male" name="gender" value={value}  onChange={(event)=> handleRadioChange(items,data,index,event)}/>
//                         <label htmlFor="male">{items.option}</label>
//                    </div>
                           
                      
//                       ))}
                     
                           
//                           <p>score: {currentScore.map((c,i)=> c)}</p>
                     
                  
//                   </div>
//                ))
                
//            }
           
 
//            </form>
         
//           <div className="marks d-flex justify-content-center">
//             <p style={{fontSize: '25px'}}>{marks}</p>
//           </div>
        
        
//         </div>
//     );
// };

// export default QuizItem;

import React, { useContext, useState } from 'react';
import { TotalCountContext } from '../../Provider/TotalCountProvider';
import QuizButton from './QuizButton';

const QuizItem = (props) => {
  const {question, options} = props.allInfo;
     const {totalItem,setTotalItem,marks,setMarks} = useContext(TotalCountContext)
     const [getvalue, setValue] = React.useState('');
     const [currentScore,currentSetScore] = useState([])
    //  const [currentDataId,setCurrentDataId] = useState()
    //  const [marks,setMarks] = useState()
    

   

    const handleRadioChange = (items,index,event) => {
        setValue(event.target.value);
        console.log(getvalue)
        console.log(items.score)
        
     
      currentSetScore(items.score)
      // const matchValue = totalItem &&  totalItem.filter(n => n.queId !== items.queId)
      // const rst = matchValue && matchValue.map(res=>({id: res.id, option: res.option, queId: res.queId, score: items.score}));
      

      // console.log(matchValue)
        
        const newItem = [...totalItem,items]
        setTotalItem(newItem)
        console.log(newItem)
        // currentSetId(items.id)
        
        // setCurrentQue(data.question)
        // setCurrentDataId(id)
        // setIndex(index)
        console.log(index)
    }
 
   
  return (
    <div>
        <form action="">
          <h5>{question}</h5>
          {
            options.map((items,index) => (
             <div key ={index}>
                <input type="radio" id='male' name="gender" value={getvalue} onChange={(event)=> handleRadioChange(items,index,event)}/>
                <label htmlFor='male'>{items.option}</label>
              
             </div>
            ))
          }
          <p >score:{currentScore}</p>
        </form>
     
    </div>
  );
};

export default QuizItem;