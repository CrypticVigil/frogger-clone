// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if ( this.x < 800 ) {
        this.x = Math.floor(this.x + (this.speed * dt));
    } else {
        this.x = -200;
    }

    if (    this.x + 70 >= player.x &&
            this.x - 70 <= player.x && 
            this.y == player.y ) {
        player.x = 303;
        player.y = lane5;
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// I defined the y coordinates as variables 
// so they would be easier to remember
const lane1 = 60;
const lane2 = 143;
const lane3 = 226;
const lane4 = 309;
const lane5 = 392;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

    constructor() {
        this.x = 303;
        this.y = lane5;
        this.sprite = 'images/char-boy.png';
    }

    update() {
        // I didn't end up doing anything with this function.
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(direction) {
        if (direction === 'left') {
            if (this.x > 50) {
                this.x = this.x - 101;
            }
        } else if (direction === 'up') {
            if (this.y > 50) {
                this.y = this.y - 83;
            }
        } else if (direction === 'right') {
            if (this.x < 600) {
                this.x = this.x + 101;
            }
        } else if (direction === 'down') {
            if (this.y < 350){
                this.y = this.y + 83;
            }
        }

        if ( player.y < 50 ) {
            setTimeout( function() {
                player.x = 303;
                player.y = lane5;
                document.getElementById('modal').style.visibility = 'visible';
            }, 800);
            setTimeout( function() {
                document.getElementById('modal').style.visibility = 'hidden';
            }, 4000);
        }

    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let en0 = new Enemy(-200, lane1, 350);
let en1 = new Enemy(300, lane1, 250);
let en2 = new Enemy(-300, lane1, 250);
let en3 = new Enemy(-300, lane2, 220);
let en4 = new Enemy(-300, lane2, 320);
let en5 = new Enemy(400, lane2, 220);
let en6 = new Enemy(-200, lane3, 270);
let en7 = new Enemy(404, lane3, 220);
let en8 = new Enemy(-300, lane4, 290);
let en9 = new Enemy(606, lane4, 230);

let allEnemies = [en0, en1, en2, en3, en4, en5, en6, en7, en8, en9];

let player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
