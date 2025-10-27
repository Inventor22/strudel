// Song of Storms, Zelda: Ocarina of Time
// song @by Koji Kondo
// script @by Dustin Dobransky

setcpm(140*2.5)

stack(
  note(`<
    d4 a4 d5@4 d4 a4 d5@4 e5@3 f5 e5 f5 e5 c5 a4@4 a4@2 d4@2 f4 g4 a4@6 a4@2 d4@2 f4 g4 e4@6 
    d4 a4 d5@4 d4 a4 d5@4 e5@3 f5 e5 f5 e5 c5 a4@4 a4@2 d4@2 f4 g4 a4@4 a4@2 d4@12
  >`)
  //.jux(press)
  //._punchcard({labels:1})
  ,
  note(`<d3@2 [F3,A3]@2 [F3,A3]@2 d3@2 [G3,B3]@4 d3@2 [a3,c4]@2 [a3,c4]@2 d3@2 [g3,b3]@4>`)
  .gain(.9)
  //.jux(rev)
  //._pianoroll()
)
.sound("piano")
.release(0.7)
//.room(1).roomsize(2)
//.jux(rev)