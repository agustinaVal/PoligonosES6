
import Poligono from './Poligono'

const triangulo = {
  area() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return base * altura 
  },
  perimetro() {
    let lado = Poligono.valores()[1]
    return lado * 3
  }
}

export default triangulo



  