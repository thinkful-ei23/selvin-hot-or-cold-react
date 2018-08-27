import React from 'react';
import './css/header.css';
export default function Header(props) {
    return (
      <header> {/* Header */}

			{/* Top Navigation */}
			<nav> 
				<ul className="clearfix">
					<li><a className="what" href="# ">{props.whatText}</a></li>
					<li><a className="new" href="# ">{props.newGameText}</a></li>
				</ul>
			</nav>
			
			{/* Modal Information Box */}
			<div className="overlay" id="modal">
				<div className="content">
					<h3>{props.whatDoIDoText}</h3>
					<div>
						<p>{props.hotColdText}</p>
						<ul>
							<li>{props.howToText1}</li>
							<li>{props.howToText2}</li>
							<li>{props.howToText3}</li>
						</ul>
						<p>{props.readyText}</p>
						<a className="close" href="# ">{props.gotItText}</a>
					</div>
				</div>
			</div>

			{/* logo text */}
			<h1>{props.hotOrColdText}</h1> 

		</header>
    );
};
Header.defaultProps = {
  whatText: 'What ?',
  newGameText: '+ New Game',
  whatDoIDoText: 'What do I do?',
  hotColdText: 'This is a Hot or Cold Number Guessing Game. The game goes like this: ',
  howToText1: '1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.',
  howToText2: '2. You need to <strong>guess</strong> until you can find the hidden secret number.',
  howToText3: '3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.',
  readyText: 'So, Are you ready?',
  gotItText: 'Got It!',
  hotOrColdText: 'HOT or COLD'


}

        