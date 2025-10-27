// Song of Storms, Zelda: Ocarina of Time
// song @by Koji Kondo
// script @by Dustin Dobransky

setcpm(140*2.5)

const instruments = ["gm_accordion", "piano", "gm_harmonica", "gm_ocarina"]
const melody_instrument = instruments[0]
const base_instrument = instruments[1]

stack(
  note(`<
    d4 a4 d5@4 d4 a4 d5@4 e5@3 f5 e5 f5 e5 c5 a4@4 a4@2 d4@2 f4 g4 a4@6 a4@2 d4@2 f4 g4 e4@6 
    d4 a4 d5@4 d4 a4 d5@4 e5@3 f5 e5 f5 e5 c5 a4@4 a4@2 d4@2 f4 g4 a4@4 a4@2 d4@12
  >`)
  .sound(melody_instrument)
  ._pianoroll({labels:1, cycles:32})
  ,
  note(`<d3@2 [F3,A3]@2 [F3,A3]@2 d3@2 [G3,B3]@4 d3@2 [a3,c4]@2 [a3,c4]@2 d3@2 [g3,b3]@4>`)
  .gain(.6)
  .sound(base_instrument)
  ._pianoroll({labels:1, cycles:32})
)
.room(.5).roomsize(2)