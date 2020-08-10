import Poligono from './Poligono'

let cuadrado = {
  area() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return base * altura
  },
  perimetro() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return (base * 2) + (altura * 2)
  }
}

export default cuadrado