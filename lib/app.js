/*jslint evil: true*/
/*global $ INIT require module exports RESET */

//privates
$ = function (id) {
    return document.getElementById(id);
};
var feedback = $("feedback");
var buffer = $('turtle_buffer');
var runBtn = $('runBtn');
var resetBtn = $('resetBtn');

//exports
exports.TEST = function () {
    console.log("HELLO");
};

//run the buffer of code entered by the user
exports.RUN = function (event) {
    var buftext = buffer.value;
    feedback.innerText = "";
    try {
        eval(buftext);
    } catch (e) {
        feedback.innerText = e.message;
    }
};


runBtn.addEventListener('click', exports.RUN, false);
resetBtn.addEventListener('click', RESET, false);

/* run main app */
exports.main = function () {
    console.log("calling INIT");
    INIT("canvas", "#000000", "#FFFF00");
};

if (module == require.main) {
    console.log("executing exports.main");
    exports.main();
}
