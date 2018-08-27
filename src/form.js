import React from 'react';

export default function Form(props) {
  return (
    <form>
      <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>

  );
};
        