import React from 'react';
import './css/game.css';
import Form from './form.js'
import GuessCount from './guess-count.js';
import GuessList from './guess-list.js';
export default function Game(props) {
  return (
		<section className="game"> {/*Guessing Section */}
		  <h2 id="feedback">{props.fbText}</h2>
      <Form />
		  <GuessCount />	
      <GuessList />  		
		</section>
  );
};
Game.defaultProps = { 
    fbText: 'Make your Guess!' 
}

        