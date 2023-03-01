class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
        function display() {
            console.log(this.nom + this.age)
        }
    }
}

let firstPersonne = new Personne('Anna', 23);
console.log(firstPersonne)


let secondPersonne = new Personne('Bob', 28);
console.log(secondPersonne)