function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;

    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:relative;"/>';
    };

    this.moveRight = function () {
        this.left += Math.round(Math.random() * this.speed) + 5;
        this.left -= Math.ceil(Math.random() * this.speed);
        this.top += Math.round(Math.random() * this.speed) + 5;
        this.top -= Math.ceil(Math.random() * this.speed);
    }

}

var xuka = new Hero('xuka.png', 20, 30, 200, 30);
var nobita = new Hero('nobita.png', 20, 30, 200, 10);
var xeko = new Hero('xeko.png', 20, 30, 200, 50);

function start() {

    if (xuka.left < window.innerWidth - xuka.size) {
        xuka.moveRight();
    }
    if (nobita.left < window.innerWidth - nobita.size) {
        nobita.moveRight();
    }
    if (xeko.left < window.innerWidth - xeko.size) {
        xeko.moveRight();
    }
    document.getElementById('xuka').innerHTML = xuka.getHeroElement();
    document.getElementById('nobita').innerHTML = nobita.getHeroElement();
    document.getElementById('xeko').innerHTML = xeko.getHeroElement();
    setTimeout(start, 100)
}

start();

