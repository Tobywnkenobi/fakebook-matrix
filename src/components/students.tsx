export default function Students() {
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
  
    return (
      <>
        <h4>Students: </h4>
        {students.map((student: string, i: number) => {
          return <p key={i}>{student}</p>;
        })}
      </>
    );
  }
  
