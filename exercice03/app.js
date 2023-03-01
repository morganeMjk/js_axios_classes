class Personne {
    constructor(userId) {
        this.userId = userId;
        this.display()
    }
    async display() {
        if (!this.userId) {
            console.log('erreur')
        }
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`, {});

        if (!userData) {
            return console.log('utilisateur introuvable');
        }
        const {name, email} = userData.data;
        console.log(name, email);

        const nom = document.createElement('p');
        const mail = document.createElement('p');
        document.querySelector("body").appendChild(nom);
        document.querySelector("body").appendChild(mail);

        nom.textContent = name;
        mail.textContent = email;
    }
}

for (let index = 1; index <= 10; index++) {
    new Personne(index)    
}