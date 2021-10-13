function checkAir(samples, threshold){
    let dirty = 0;
    for(let sample of samples){
        if (sample == "dirty"){
            dirty++;
        }
    }
    if((dirty * 100 / samples.length) > (threshold * 100)){
        return "Polluted"
    } else {
        return "Clean"
    }
}

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))