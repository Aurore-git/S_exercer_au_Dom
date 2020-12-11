
// Contenu du texte de la balise <H1>

var titreElt = document.getElementsByClassName('title');
var calledElt = titreElt [0];

console.log ("Premier H1 : ", calledElt.textContent);




// Contenu HTML de la 1ère balise <li>

// 1ère solution
var menuElt = document.getElementsByTagName('li');
var listeElt = menuElt [0];

console.log (menuElt.innerHTML);


// 2ème solution
var ulElt = document.getElementsByTagName('ul');
var liElt = ulElt [0];

console.log (liElt.firstElementChild.innerHTML);


// 3ème solution


        

// Contenu HTML de la dernière balise <li>

var lastElt = document.getElementsByTagName('li');
var lastLiElt = lastElt [0];

console.log (lastLiElt.lastElementChild.innerHTML);


// Contenu HTML de la 3ème balise <li>


var itemListEl = document.querySelectorAll('#menu > ul > li');
var thirdListEl = itemListEl[2];

console.log( thirdListEl.innerHTML);     




// HTML du parent de la balise <ul>

var parentElt = document.getElementsByTagName('ul');

console.log(parentElt.parentNode.innerHTML);



// HTML du parent de la 4ème balise <li>


var listEl = document.querySelectorAll('#menu > ul > li');
var fourthListEl = listEl[3];

console.log(parentNode.innerHTML);    


// Survol de la souris en rouge sur tout le texte de la balise <ul>


