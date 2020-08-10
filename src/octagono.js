import Poligono from './poligono.js'

let octagono = {
  area() {
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return ((lado * 8) * apotema)/2  },
  perimetro() {
    let lado = Poligono.valores()[1]
    return lado * 3
  }
}

export default octagono