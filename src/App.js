import React from 'react';


function App() {
  const greetings = {
    greeting_one : 'Hello',
    greeting_two : 'world',
  }

  function greetings_message (){
    return 'Hello World 2';
  }
  
  return (
    <div>
      <h1>{greetings.greeting_one}, {greetings.greeting_two}</h1>
      <h2>{greetings_message()}</h2>
    </div>
    
  );
}

export default App;
