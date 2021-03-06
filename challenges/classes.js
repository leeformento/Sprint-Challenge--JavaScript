// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (length, width, height){
//   this.length = length;
//   this.width = width;
//   this.height = height;
// }
// CuboidMaker.prototype.volume = function() {
//   return (this.length* this.width* this.height);
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
// }


// ============= Refactor CuboidMaker, volume prototype, surfaceArea function
class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return (this.length* this.width* this.height);
  }
  surfaceArea() {
    return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


/* Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new CuboidMaker(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:
  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well. 
  Create a new cube object and log out the results of your new cube.
*/

class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    super(attributes);

  }
  volume() {
    return (Math.pow(this.length, 3));
  }
  surfaceArea() {
    return 6*(Math.pow(this.length, 2));
  }
}

const cube = new CubeMaker(4,4,4);
console.log(cube.volume());
console.log(cube.surfaceArea());