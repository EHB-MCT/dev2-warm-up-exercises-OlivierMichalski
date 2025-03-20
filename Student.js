class Student {
    constructor(naam, leeftijd, score) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this._score = score; 
    }

    get naam() {
        return this._naam;
    }

    get score() {
        return this._score;
    }

    set score(nieuweScore) {
        if (typeof nieuweScore === 'number' && nieuweScore >= 0 && nieuweScore <= 100) {
            this._score = nieuweScore;
        } else {
            console.error('Score moet een getal tussen 0 en 100 zijn.');
        }
    }
}

export default Student;
