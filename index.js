
const fs = require('fs');
const path = require('path');
//const myPath = "/G-Lab/GDL002-md-links/README.md";
const filePath = process.argv[2];
const readPath = fs.readFileSync(filePath, 'utf8');


//Función para verificar que el path ingresado es absoluto
function pathIsAbsolute () { 
	if(path.isAbsolute(filePath)) {
    	console.log("Is Absolute");	
    	return true
	} else {
		console.log("Not Absolute");
		return false
	}
}; 

//Función para extraer links de archivo MD
function linksExtractor (str)  {
	const regularExpression = /\[(.*?)\]\((.*?)\)/gi;
	let linksArray = [];
	let match;
		while(match = regularExpression.exec(str)){
			arrayContent = {href: match[2], text: match[1]};
			linksArray.push(arrayContent);	
	};
		return linksArray;
};

console.log(pathIsAbsolute());
//Nos muestra en la terminal array de links
console.log(linksExtractor(readPath));


module.exports = {
"pathIsAbsolute": pathIsAbsolute,
"linksExtractor": linksExtractor
};
