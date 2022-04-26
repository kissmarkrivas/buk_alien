function invasorAlien(diasTotales = 0,aliens = []) {
  //ordenar aliens
  let diasVidaAlien = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // 0, 1, 2, 3, 4, 5, 6, 7, 8
  for (let i = 0; i < aliens.length; i++) {
    diasVidaAlien[aliens[i]] += 1
  }
  
  for (let diaSiguiente = 0; diaSiguiente < diasTotales; diaSiguiente++) {
    let primerDia = diasVidaAlien[0] //[0]
    for (let index = 0; index < diasVidaAlien.length; index++) {       
      if (index !== 8) {
        diasVidaAlien[index] = diasVidaAlien[index + 1]//[1,1]
      } else {
        diasVidaAlien[6] = diasVidaAlien[6] + primerDia
        diasVidaAlien[8] = primerDia
      }
    }
  }
  return [diasVidaAlien,diasVidaAlien.reduce((a, b) => a + b, 0)]
}

const aliensData1 = [1,1,1,1,2,1,1,4,1,4,3,1,1,1,1,1,1,1,1,4,1,3,1,1,1,5,1,3,1,4,1,2,1,1,5,1,1,1,1,1,1,1,1,1,1,3,4,1,5,1,1,1,1,1,1,1,1,1,3,1,4,1,1,1,1,3,5,1,1,2,1,1,1,1,4,4,1,1,1,4,1,1,4,2,4,4,5,1,1,1,1,2,3,1,1,4,1,5,1,1,1,3,1,1,1,1,5,5,1,2,2,2,2,1,1,2,1,1,1,1,1,3,1,1,1,2,3,1,5,1,1,1,2,2,1,1,1,1,1,3,2,1,1,1,4,3,1,1,4,1,5,4,1,4,1,1,1,1,1,1,1,1,1,1,2,2,4,5,1,1,1,1,5,4,1,3,1,1,1,1,4,3,3,3,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,5,1,3,1,4,3,1,3,1,5,1,1,1,1,3,1,5,1,2,4,1,1,4,1,4,4,2,1,2,1,3,3,1,4,4,1,1,3,4,1,1,1,2,5,2,5,1,1,1,4,1,1,1,1,1,1,3,1,5,1,2,1,1,1,1,1,4,4,1,1,1,5,1,1,5,1,2,1,5,1,1,1,1,1,1,1,1,1,1,1,1,3,2,4,1,1,2,1,1,3,2]
const [aliens, totalAliens] = invasorAlien(80,aliensData1)
console.log("Total de aliens 1 : " , totalAliens)

const aliensData2 = [1,1,1,1,2,1,1,4,1,4,3,1,1,1,1,1,1,1,1,4,1,3,1,1,1,5,1,3,1,4,1,2,1,1,5,1,1,1,1,1,1,1,1,1,1,3,4,1,5,1,1,1,1,1,1,1,1,1,3,1,4,1,1,1,1,3,5,1,1,2,1,1,1,1,4,4,1,1,1,4,1,1,4,2,4,4,5,1,1,1,1,2,3,1,1,4,1,5,1,1,1,3,1,1,1,1,5,5,1,2,2,2,2,1,1,2,1,1,1,1,1,3,1,1,1,2,3,1,5,1,1,1,2,2,1,1,1,1,1,3,2,1,1,1,4,3,1,1,4,1,5,4,1,4,1,1,1,1,1,1,1,1,1,1,2,2,4,5,1,1,1,1,5,4,1,3,1,1,1,1,4,3,3,3,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,5,1,3,1,4,3,1,3,1,5,1,1,1,1,3,1,5,1,2,4,1,1,4,1,4,4,2,1,2,1,3,3,1,4,4,1,1,3,4,1,1,1,2,5,2,5,1,1,1,4,1,1,1,1,1,1,3,1,5,1,2,1,1,1,1,1,4,4,1,1,1,5,1,1,5,1,2,1,5,1,1,1,1,1,1,1,1,1,1,1,1,3,2,4,1,1,2,1,1,3,2]
const [aliens2, totalAliens2] = invasorAlien(256,aliensData2)
console.log("Total de aliens 2: " , totalAliens2)

//¿Cuantos aliens tendríamos en el planeta luego de 80 días?
//386536
//¿Cuantos aliens tendríamos en el planeta luego de 256 días?
//1732821262171


// array=[3, 4, 3, 1, 2]
// for (let i = 18; i > 0; i--) {
//   console.log(`dia ${i-1}`)
//   for(a=0;a < array.length ; a++){
//     result = array[a]-1
//     // array.splice([a],1,result)
//     if (result==-1) {
//       array.splice([a],1,6)
//     }else{
//       array.splice([a],1,result)
//     }
//   }
//   console.log(array)
//   cuenta_seros=array.filter(sero=>sero==0);
//   // console.log(cuenta_seros)
//   for (let b = 0; b < cuenta_seros.length; b++) {
//     array.push(9)
//   }
// }


// [1,2,3,4]

// [18,1]

// [16,8][7,8]
//       [0,8]
// [9,8][0,8]

// [2,8]
