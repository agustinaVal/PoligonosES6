import Poligono from './Poligono'

let rectangulo = {
  area() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return (base * altura)
  },
  perimetro() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return (base + altura) * 2
  }
}

export default rectangulo