function Cat(name, age, weight) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.weight = weight
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
module.exports = Cat;