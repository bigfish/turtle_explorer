/*global define */
/**
 * Turtle procedures defined as global functions
 * Designed for use in a single-page application
 * such as the TurtleExplorer
 * It requires that the following functions are also defined
 * FORWARD, BACK, RIGHT, LEFT, RESET, REPEAT
 * These functions are used to construct the turtle_procedures.js file
 * which can be passed to the Turtle constructor to add 
 * the procedures to an instance of a Turtle.
 */
define("turtle_explorer/procedures", ["turtle_explorer/turtle"], function (turtle) {

    //alias turtle methods for readability

    function HIDE_TURTLE() {
        turtle.HIDE_TURTLE();
    }

    function SHOW_TURTLE() {
        turtle.SHOW_TURTLE();
    }

    function RIGHT(angle) {
        turtle.RIGHT(angle);
    }

    function LEFT(angle) {
        turtle.LEFT(angle);
    }

    function REPEAT(times, fn, args) {
        turtle.REPEAT(times, fn, args);
    }

    function FORWARD(len) {
        turtle.FORWARD(len);
    }

    function BACK(len) {
        turtle.BACK(len);
    }

    function BEARING() {
        return turtle.BEARING();
    }

    function PENDOWN() {
        turtle.PENDOWN();
    }

    function PENUP() {
        turtle.PENUP();
    }

    function OUT_OF_BOUNDS() {
        return turtle.OUT_OF_BOUNDS();
    }

    function MOVE_FORWARD(len) {
        turtle.MOVE_FORWARD(len);
    }

    function CHECK_FORWARD(len) {
        CHECK_FORWARD(len);
    }

    function STUCK() {
        return turtle.STUCK();
    }

    function SET_BG(color) {
        turtle.SET_BG(color);
    }

    function SET_LINE(color) {
        turtle.SET_LINE(color);
    }

    function BEGIN_FILL(color) {
        turtle.BEGIN_FILL(color);
    }

    function END_FILL() {
        turtle.END_FILL();
    }

    function CENTER_X() {
        return turtle.CENTER_X();
    }

    function CENTER_Y() {
        return turtle.CElTER_Y();
    }

    function GET_WIDTH() {
        return turtle.GET_WIDTH();
    }

    function GET_HEIGHT() {
        return turtle.GET_HEIGHT();
    }

    function SET_FOOD(x, y) {
        turtle.SET_FOOD(x, y);
    }

    function DIST(x1, y1, x2, y2) {
        return turtle.DIST(x1, y1, x2, y2);
    }

    function SMELL() {
        return turtle.SMELL();
    }

    function ANIMATE(fn, max) {
        turtle.ANIMATE(fn, max);
    }

    //procedures

    function SQUAREPIECE(size) {
        FORWARD(size);
        RIGHT(90);
    }

    function SQUARE(size) {
        REPEAT(4, SQUAREPIECE, [size]);
    }

    function RECTANGLE(side1, side2) {
        REPEAT(2, function () {
            SQUAREPIECE(side1);
            SQUAREPIECE(side2);
        });
    }

    function TRIANGLE(size) {
        REPEAT(3, function () {
            FORWARD(size);
            RIGHT(120);
        });
    }

    function HOUSE(size) {
        SQUARE(size);
        FORWARD(size);
        RIGHT(30);
        TRIANGLE(size);
    }

    function THING() {
        FORWARD(100);
        RIGHT(90);
        FORWARD(100);
        RIGHT(90);
        FORWARD(50);
        RIGHT(90);
        FORWARD(50);
        RIGHT(90);
        FORWARD(100);
        RIGHT(90);
        FORWARD(25);
        RIGHT(90);
        FORWARD(25);
        RIGHT(90);
        FORWARD(50);
    }

    function CIRCLE(size) {
        REPEAT(360, function () {
            FORWARD(size);
            RIGHT(1);
        });
    }

    function ARCR(r, deg) {
        REPEAT(deg, function () {
            FORWARD(r);
            RIGHT(1);
        });
    }

    function ARCL(r, deg) {
        REPEAT(deg, function () {
            FORWARD(r);
            LEFT(1);
        });
    }

    function PETAL(size) {
        ARCR(size, 60);
        RIGHT(120);
        ARCR(size, 60);
        RIGHT(120);
    }

    function FLOWER(size) {
        REPEAT(6, function () {
            PETAL(size);
            RIGHT(60);
        });
    }

    function RAY(r) {
        REPEAT(2, function () {
            ARCL(r, 90);
            ARCR(r, 90);
        });
    }

    function SUN(size) {
        REPEAT(9, function () {
            RAY(size);
            RIGHT(160);
        });
    }

    function POLY(side, angle) {
        REPEAT(360 / angle, function () {
            FORWARD(side);
            RIGHT(angle);
        });
    }

    function NEWPOLY(side, angle) {
        REPEAT(100, function () {
            FORWARD(side);
            RIGHT(angle);
            FORWARD(side);
            RIGHT(2 * angle);
        });
    }

    function POLYSPI(side, angle, inc) {
        if (inc === undefined) {
            inc = 1;
        }
        FORWARD(side);
        RIGHT(angle);
        if (side < 500) {
            POLYSPI(side + inc, angle, inc);
        }
    }

    function MULTISPI(side, angle, factor, iter) {
        if (iter === undefined) {
            iter = 1;
        } else {
            iter += 1;
        }

        FORWARD(side);
        RIGHT(angle);

        if (iter < 500) {
            MULTISPI(side * factor, angle, factor, iter);
        }
    }

    function INSPI(side, angle, inc, iter) {
        iter = (iter === undefined) ? 1 : iter;
        FORWARD(side);
        RIGHT(angle);
        if (iter < 500) {
            INSPI(side, angle + inc, inc, iter);
        }
    }

    function SUBSPIRO(side, angle, max) {
        var count = 1;
        while (count <= max) {
            FORWARD(side * count);
            RIGHT(angle);
            count++;
        }

    }

    function SPIRO(side, angle, max) {
        REPEAT(100, SUBSPIRO, [side, angle, max, 0]);
    }

    function SUBGSPIRO(side, angle, max, list) {
        var count = 1;
        while (count <= max) {
            FORWARD(side * count);
            if (list.indexOf(count) > -1) {
                LEFT(angle);
            } else {
                RIGHT(angle);
            }
            count++;
        }
    }

    function GSPIRO(side, angle, max, list) {
        REPEAT(100, SUBGSPIRO, [side, angle, max, list]);
    }

    function RAND(min, max) {
        return min + Math.random() * (max - min);
    }

    function RANDOM_MOVE(d1, d2, a1, a2, times) {
        //if times is not specified, use 1000
        REPEAT(times || 1000, function () {
            FORWARD(RAND(d1, d2));
            RIGHT(RAND(a1, a2));
        });
    }

    function RANDOM_MOVE_IN_BOX(d1, d2, a1, a2, times) {
        //if times is not specified, use 1000
        REPEAT(times || 1000, function () {
            RIGHT(RAND(a1, a2));
            CHECK_FORWARD(RAND(d1, d2));
            if (STUCK()) {
                RIGHT(180);
            }
        });
    }

    function RANDOM_COLOR() {
        var hex = "0123456789ABCDEF";
        var rgb = "";
        for (var i = 0; i < 6; i++) {
            rgb += hex.charAt(Math.round(Math.random() * 15));
        }
        return "#" + rgb;
    }


    function FIND_BY_SMELL1() {
        ANIMATE(function () {
            FORWARD(1);
            if (SMELL() == "weaker") {
                RIGHT(1);
            }
        });
    }

    function FIND_BY_SMELL2(TURN) {
        ANIMATE(function () {
            FORWARD(1);
            if (SMELL() == "weaker") {
                RIGHT(TURN);
            }
        });
    }

    return {
        FORWARD: FORWARD,
        BACK: BACK,
        LEFT: LEFT,
        RIGHT: RIGHT,
        HIDE_TURTLE: HIDE_TURTLE,
        SHOW_TURTLE: SHOW_TURTLE,
        REPEAT: REPEAT,
        ANIMATE: ANIMATE,
        SMELL: SMELL,
        SET_BG: SET_BG,
        SET_FOOD: turtle.SET_FOOD,
        SQUAREPIECE: SQUAREPIECE,
        SQUARE: SQUARE,
        RECTANGLE: RECTANGLE,
        TRIANGLE: TRIANGLE,
        HOUSE: HOUSE,
        THING: THING,
        CIRCLE: CIRCLE,
        ARCR: ARCR,
        ARCL: ARCL,
        PETAL: PETAL,
        FLOWER: FLOWER,
        RAY: RAY,
        SUN: SUN,
        POLY: POLY,
        NEWPOLY: NEWPOLY,
        POLYSPI: POLYSPI,
        MULTISPI: MULTISPI,
        INSPI: INSPI,
        SUBSPIRO: SUBSPIRO,
        SPIRO: SPIRO,
        SUBGSPIRO: SUBGSPIRO,
        GSPIRO: GSPIRO,
        RAND: RAND,
        RANDOM_MOVE: RANDOM_MOVE,
        RANDOM_MOVE_IN_BOX: RANDOM_MOVE_IN_BOX,
        RANDOM_COLOR: RANDOM_COLOR,
        FIND_BY_SMELL1: FIND_BY_SMELL1,
        FIND_BY_SMELL2: FIND_BY_SMELL2
    };
});
