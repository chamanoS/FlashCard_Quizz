import React, {useState} from 'react';
import FlashcardsList from './FlashcardList';
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(Sample_Flashcards)
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
