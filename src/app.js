import Circulo from './circulo.js'
import Triangulo from './triangulo.js'
import Octagono from './octagono.js'
import Cuadrado from './cuadrado.js'
import Decagono from './decagono.js'
import Rectangulo from './rectangulo.js'
import Poligono from './Poligono.js'


document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let poligono = e.target.value
  if (poligono === 'circulo') {
    let circulo = new Circulo()
    console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
    console.log(`Area del Circulo ===> ${circulo.area()}`)
  }
  if (poligono === 'triangulo') {
      let triangulo = new Triangulo()
      console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
      console.log(`Area del Triangulo ===> ${triangulo.area()}`)
    }
    if (poligono === 'octagono') {
      let octagono = new Octagono()
      console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
      console.log(`Area del Octagono ===> ${octagono.area()}`)
    }
    if (poligono === 'cuadrado') {
      let cuadrado = new Cuadrado()
      console.log(`Perimetro del cuadrado ===> ${cuadrado.perimetro()}`)
      console.log(`Area del cuadrado ===> ${cuadrado.area()}`)
    }
    if (poligono === 'decagono') {
      let decagono = new Decagono()
      console.log(`Perimetro del decagono ===> ${decagono.perimetro()}`)
      console.log(`Area del decagono ===> ${decagono.area()}`)
    }
    if (poligono === 'rectangulo') {
      let rectangulo = new Rectangulo()
      console.log(`Perimetro del rectangulo ===> ${rectangulo.perimetro()}`)
      console.log(`Area del rectangulo ===> ${rectangulo.area()}`)
    }
})


 