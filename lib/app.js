/*jslint evil: true*/
/*global $ define*/

define("turtle_explorer/app", ["turtle_explorer/turtle", "turtle_explorer/procedures"], function (turtle, procedures) {
    //import turtle
    console.log("turtle required", turtle);
    //UI
    $ = function (id) {
        return document.getElementById(id);
    };
    var feedback = $("feedback");
    var buffer = $('turtle_buffer');
    var runBtn = $('runBtn');
    var resetBtn = $('resetBtn');

    //run the buffer of code entered by the user


    function run(event) {

        var buftext = "with(P) {" + buffer.value + "};";

        feedback.innerText = "";
        try {
            eval(buftext);
        } catch (e) {
            feedback.innerText = e.message;
        }
    }

    runBtn.addEventListener('click', run, false);
    resetBtn.addEventListener('click', turtle.RESET, false);

    /* run main app */

    function init() {
        console.log("calling INIT");
        turtle.INIT("canvas", "#000000", "#FFFF00");
    }

    return {
        init: init,
        run: run,
        turtle: turtle,
        procedures: procedures
    };

});
