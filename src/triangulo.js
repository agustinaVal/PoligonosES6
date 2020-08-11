import Poligono from './poligono.js'

class Triangulo extends Poligono {
  constructor() {
    super()
  }
  area() {
    return this.base * this.altura 
  }
  perimetro() {
    return this.lado * 3
  }
}

export default Triangulo



  