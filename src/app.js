import circulo from './circulo.js'
import triangulo from './triangulo.js'
import octagono from './octagono.js'
import cuadrado from './cuadrado.js'
import decagono from './decagono.js'
import rectangulo from './decagono.js'
import Poligono from './poligono.js'

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
    let poligono = e.target.value
    if (poligono === 'circulo') {
      console.log(`Perímetro del Círculo ===> ${circulo.perimetro()}`)
    console.log(`Área del Círculo ===> ${circulo.area()}`)
    }
    if (poligono === 'triangulo') {
        console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
        console.log(`Area del Triangulo ===> ${triangulo.area()}`)
      }
      if (poligono === 'octagono') {
        console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
        console.log(`Area del Octagono ===> ${octagono.area()}`)
      }
      if (poligono === 'cuadrado') {
        console.log(`Perimetro del cuadrado ===> ${cuadrado.perimetro()}`)
        console.log(`Area del cuadrado ===> ${cuadrado.area()}`)
      }
      if (poligono === 'decagono') {
        console.log(`Perimetro del decagono ===> ${decagono.perimetro()}`)
        console.log(`Area del decagono ===> ${decagono.area()}`)
      }
      if (poligono === 'rectangulo') {
        console.log(`Perimetro del rectangulo ===> ${rectangulo.perimetro()}`)
        console.log(`Area del rectangulo ===> ${rectangulo.area()}`)
      }
  })

 