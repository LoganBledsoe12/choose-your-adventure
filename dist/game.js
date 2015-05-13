function* chooseYourAdventure() {
	console.log(yield adventure.say('Welcome to Call of Duty'));
	
	var answer = prompt('Are you 18 or older?','no');
	if(answer == "yes"){
	    yield adventure.say('Cool! Lets get started');
	}
	else{
	    yield adventure.say('Your mom need\'s to stop buying you video games');
	    return;
	}

	var selection = prompt('What map would you like to play? \n Enter \'Rust\',\'Scrap Yard\' or \'Highrise\'','Rust');
	if(selection == 'Rust'){
	    yield adventure.say('Rust it is');
	}
	else if(selection == 'Scrap Yard'){
	    yield adventure.say('Scrap Yard it is!')
	}
	else if(selection == 'Highrise'){
	    yield adventure.say('Highrise it is!')
	    
	}
	else{
	    yield adventure.say('Map does not exist')
	}
	console.log(yield adventure.say('That\'s all folks!', 'THE END'));
}

// function* chooseYourAdventure() {
// 	console.log(yield adventure.say('Hey there!'));
// 	console.log(yield adventure.say('Woah', 'This is cool'));
// 	console.log(yield adventure.ask('Woah', 'This is cool'));
// 	console.log(yield adventure.choose('Woah', 'This is cool'));
// 	console.log(yield adventure.say('That\'s all folks!', 'THE END'));
// }
