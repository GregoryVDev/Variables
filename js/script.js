// Exercice 1: Déclaration de variables

// Déclarez les variables suivantes en leur attribuant des valeurs appropriées :

// Une variable nom avec votre nom.
// Une variable age avec votre âge.
// Une variable ville avec le nom de votre ville.


// Exercice 2: Manipulation de variables

// Utilisez les variables déclarées précédemment pour créer une phrase comme suit : "Je m'appelle [nom], j'ai [age] ans et j'habite à [ville]."
// Affichez cette phrase dans la console.


// Exercice 3: Conversion de types

// Déclarez une variable nombre avec la valeur 5.
// Déclarez une variable texte avec la valeur "10".
// Ajoutez la variable nombre à la variable texte et stockez le résultat dans une nouvelle variable appelée resultat.
// Affichez le contenu de la variable resultat dans la console. Qu'observez-vous ?


// Exercice 4: Calculs avec variables

// Déclarez une variable longueur avec la valeur 10.
// Déclarez une variable largeur avec la valeur 5.
// Calculez l'aire d'un rectangle en multipliant longueur par largeur et stockez le résultat dans une variable aire.
// Affichez le contenu de la variable aire dans la console.


// Exercice 5: Mise à jour de variables

// Déclarez une variable compteur avec la valeur 0.
// Incrémentez la valeur de compteur de 1.
// Multipliez la valeur de compteur par 2.
// Affichez la valeur finale de compteur dans la console.



// Exo n°1 et 2

let MyName = "Grég"
let MyAge = 27
let MyCity = "Bordeaux"

let phrase = "Bonjour, je m'appelle " + MyName + ", j'ai " + MyAge + "ans et j'habite à " + MyCity +"."

console.log(phrase);


// Exo n°3

let number = 5
let texte = "10"
let resultat = number + texte

console.log(resultat);


// Exo n°4

let longueur = 10
let largeur = 5
let aire = longueur * largeur

console.log(aire)


// Exo n°5

let compteur = 0
compteur++
compteur = compteur * 2
// compteur *= 2;

console.log(compteur);

console.log("--------------");



// Exercice 6: Opérations mathématiques

// Déclarez une variable a avec la valeur 10.
// Déclarez une variable b avec la valeur 3.
// Effectuez les opérations suivantes et stockez les résultats dans de nouvelles variables :
// Additionnez a et b.
// Soustrayez b de a.
// Multipliez a par b.
// Divisez a par b.
// Affichez les résultats de chaque opération dans la console.


// Exercice 7: Concaténation de chaînes

// Déclarez une variable prenom avec votre prénom.
// Déclarez une variable nomFamille avec votre nom de famille.
// Utilisez les variables prenom et nomFamille pour créer une phrase qui dit "Mon nom complet est [prenom] [nomFamille]."
// Affichez cette phrase dans la console.


// Exercice 8: Conversion de types avancée

// Déclarez une variable nombreString avec la valeur "42".
// Utilisez une opération mathématique pour convertir nombreString en un nombre entier et stockez le résultat dans une nouvelle variable nombreEntier.
// Affichez le type et la valeur de nombreString et nombreEntier dans la console. Remarquez-vous la différence ?


// Exercice 9: Interactions utilisateur

// Utilisez la fonction prompt() pour demander à l'utilisateur son prénom.
// Stockez la valeur saisie par l'utilisateur dans une variable.
// Utilisez ensuite une boîte de dialogue alert() pour afficher un message de salutation personnalisé en utilisant la variable contenant le prénom.


// Exercice 10: Manipulation de dates

// Déclarez une variable anneeNaissance avec votre année de naissance.
// Utilisez l'objet Date pour obtenir l'année actuelle et stockez-la dans une variable anneeActuelle.
// Calculez votre âge en soustrayant anneeNaissance de anneeActuelle et stockez le résultat dans une variable age.
// Affichez votre âge dans la console.



// Exo n°6

let a = 10
let b = 3

let addition = a + b
let soustraction = a - b
let multiple = a * b
let diviser = a / b

console.log(addition);
console.log(soustraction);
console.log(multiple);
console.log(diviser);


// Exo n°7

let FirstName = "Gwégowy"
let NameFamily = "Vartan"

let message = "Bonjour, mon nom complet est " + FirstName +" "+ NameFamily +"."

console.log(message);


// Exo n°8

let NombreString = "42"
let NombreEntier = parseInt(NombreString) // parseInt(NombreString) Cette ligne créé une nouvelle variable appelée NombreEntier. La fonction parseInt est utilisée pour convertir une chaîne de caractères en un nombre entier. Dans ce cas, elle prend la valeur de la variable nombreString, qui est "42", et la convertit en un nombre entier. Après la conversion, nombreEntier contiendra la valeur 42 en tant que nombre entier.

console.log(typeof NombreString); // Il indique que c'est un type "string"
console.log(NombreString); // 42

console.log(typeof NombreEntier); // Il indique que c'est un type "nombre"
console.log(NombreEntier); // 42



// Exo n°9


let prenoom = prompt("Entrez votre prénom :") // La fonction prompt est souvent utilisée pour interagir avec les utilisateurs dans les programmes JavaScript exécutés dans un navigateur. Cela peut être utile pour demander des entrées à l'utilisateur, collecter des données ou personnaliser l'expérience utilisateur. Cependant, il est important de noter que la fonction prompt bloque l'exécution du reste du code tant que la boîte de dialogue est ouverte, ce qui peut affecter l'expérience utilisateur si elle est utilisée de manière inappropriée.


// Vérifie si l'utilisateur a saisi un prénom
if (prenoom !== null && prenoom !== "")
{
    alert("Bonjour, " + prenoom + " !"); // Affiche un message de salutation
}
else
{
    alert("Vous n'avez pas saisi de prénom.") // Affiche un message si aucun prénom n'a été saisi
}



// Exo n°10


let AnneeNaissance = 1995
let DateActuelle = new Date();
let AnneeActuelle = DateActuelle.getFullYear();

let Age = AnneeActuelle - AnneeNaissance

console.log(Age);