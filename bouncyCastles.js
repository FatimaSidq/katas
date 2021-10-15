function sphereVolume(radius) {
  return (4/3) * Math.PI * Math.pow(radius, 3);
}

function coneVolume(radius, height) {
  return Math.PI * radius**2 * height / 3;
}

function prismVolume(height, width, depth) {
  return (height * width) * depth;
}

function totalVolume(solids) {
  let total = 0;
  for(let solid of solids){
    switch(solid.type){
      case "sphere":
        total += sphereVolume(solid.radius);
        break;

      case "cone":
        total += coneVolume(solid.radius, solid.height);
        break;

      case "prism":
        total += prismVolume(solid.height, solid.width, solid.depth);
        break;
    }
  }
  return total;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);