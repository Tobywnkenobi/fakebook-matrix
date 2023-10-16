import { useState } from 'react';


export default function Whiteboard() {
    const students = [
      'tim',
      'porter',
      'lyla',
      'toby',
      'raul',
      'josh',
      'milad',
      'tom',
      'senait',
      'mabel',
      'mel',
      'heather',
    ];
  
    let studentPerforming = students[1];
  
    return (
      <>
        <h3>Whiteboard</h3>
        <p>Today's whiteboard was performed by {studentPerforming}</p>
        <button
          onClick={() => {
            const studentIndex = Math.floor(Math.random() * students.length);
            studentPerforming =  students[studentIndex];
            console.log(studentPerforming)
          }}
        >
          Select Student
        </button>
      </>
    );
  }
  
  