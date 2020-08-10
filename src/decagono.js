import Poligono from './poligono.js'

let decagono = {
  area(){
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return (10 * lado * apotema)/2
  },
  perimetro(){
    console.log(this)
    let lado = Poligono.valores()[1]
    return(lado * 10)
  }
}

export default decagono






  