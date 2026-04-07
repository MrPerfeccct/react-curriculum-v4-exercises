//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Aleksei';
  const age = 30;
  const hobbies = ['coding', 'hiking', 'cooking'];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        My name is {name} and I'm {age} years old.
      </p>
      <p>My hobbies include:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
