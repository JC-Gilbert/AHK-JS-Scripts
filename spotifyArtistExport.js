/* Spotify doesn't currently have a way to export any artists you have saved to your favorites... so, I've developed a workaround */

// Step 1: Log into you spotify account
// Step 2: Scroll to the bottom of your artists list (this load all artists into the page dom)
// Step 3: Hit F12 on your keyboard and paste this in the console

function gimmeMyArtists() {
	var tiles = document.getElementsByClassName('LunqxlFIupJw_Dkx6mNx');
	var artists = [];
	
	for(var i = 0; i < tiles.length; i++) {
		title = tiles[i].getElementsByClassName('Nqa6Cw3RkDMV8QnYreTr')[0].getAttribute('title');
		
		if(!artists.includes(title)) {
			artists.push(title);
		}
	}
	
	
	artists.sort();
	var returnString = "";
	for(stuff in artists) {
		returnString += artists[stuff] + ", ";
	}
	
	return returnString;
}

// Step 4: Next, paste this line
myArtists = gimmeMyArtists();

// Step 5: Finally, paste the following
myArtists

// All of your artists should be printed to the screen for you to copy
