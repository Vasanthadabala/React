function Event() {
    function clickHandle() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
      console.log(randomNum);
      let userInput = prompt('type a number'); 
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
      }
    return (
      <div>
        <button onClick={clickHandle}>Guess the number between 1 and 3</button>
      </div>
    );
  }
  
  export default Event;
  