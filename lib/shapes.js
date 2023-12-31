class shape {
    
    constructor() {
        this.color = "";
    }
    setColor(shapeColor) {
        this.color = shapeColor;
    }
}

class Circle extends shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };