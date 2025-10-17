// Techno Beat
// An energetic techno-style rhythm with bass and percussion

stack(
  s("bd*4").gain(1.2),
  s("~ hh*2 ~ hh*2").gain(0.6),
  s("~ ~ cp ~").gain(0.8),
  note("c2 ~ c2 eb2").s("sawtooth").lpf(300).gain(0.7)
).fast(1.5)
