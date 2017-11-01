const expect = require('chai').expect
const platzom = require('..').default

describe ('#platzom', function (){
 
 it ('si la palabra termina con "ar", se le quitan esas dos letras', function() {
 	const translation = platzom ("programar")
 	expect(translation).to.equal("program")
 })
 it ('si la palabra inicioa con Z, se le añade "pe" al final.', function() {
 	const translation = platzom("Zorro")
 	const translation2 = platzom("Zarpar")

 	expect(translation).to.equal("Zorrope") 
	expect(translation2).to.equal("Zarppe")
 })
 it ('si la palabra traducida tiene 10 o más letras, se debe partir por la mitad y unir con un guión medio.', function() {
 	const translation = platzom("abecedario")
 	expect(translation).to.equal("abece-dario")
 })
 it ('por ultimo, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercambiando letras mayúsculas y minúsculas.', function() {
 	const translation = platzom("sometemos")
 	expect(translation).to.equal("SoMeTeMoS")
 })

})