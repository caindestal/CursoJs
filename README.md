# Platzom

PLatzom es un idioma inventado y se hace on el objetivo de aprender los [fundamentos de JavaScrip] (https://platzi.com/js)

## Descripción del idioma

- si la palabra termina con "ar", se le quitan esas dos letras.
- si la palabra inicioa con Z, se le añade "pe" al final.
-si la palabra traducida tiene 10 o más letras, se debe partir por la mitad y unir con un guión medio.
- por ultimo, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercambiando letras mayúsculas y minúsculas. 

## Intalación

```
npm install platzom
```

## Uso

```
ìmport platzom from 'platzom'
platzom("programar") // program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos

- [Orlando Galicia] (https://teitter.com/@orlandog)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
