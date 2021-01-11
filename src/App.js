import React, {useState,useEffect} from 'react';
import FlashcardsList from './FlashcardList';
import './app.css';
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(Sample_Flashcards)
  
  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(res=>{
        setFlashcards(res.data.results.map((questionItem, index)=>{
          const answer = questionItem.correct_answer
          const options = [...questionItem.incorrect_answers, answer]
          return{
            id: `${index}-${Date.now()}`,
            questions:questionItem.correct_question,
            answer:answer,
            options:options.sort(() => Math.random() - .5)
          }
        }))
      })
  },[])
  
  return (
    <FlashcardsList flashcards={flashcards}/>
  );
}

const Sample_Flashcards = [
  {
    id:1,
    question: 'what is 2 + 2?',
    answer:'4',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id:1,
    question: 'Question 2nd',
    answer:'answer',
    options:[
      '2',
      'answer',
      '4',
      '5'
    ]
  }
]

export default App;
