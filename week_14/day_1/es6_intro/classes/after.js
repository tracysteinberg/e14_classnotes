class Cow{
  constructor(name){
    this.name = name;
  }

  moo(){
    return `${this.name} says moo`;
  }
}

var cow = new Cow("Betty");
console.log(cow.moo());