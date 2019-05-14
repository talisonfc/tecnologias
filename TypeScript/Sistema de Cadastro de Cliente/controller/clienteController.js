var Client = /** @class */ (function () {
    function Client() {
    }
    ;
    return Client;
}());
var form = document.forms[0];
var save = document.getElementById('salvar');
save.onclick = function () {
    var soons = form.children;
    for (var i = 0; i < 2; i++) {
        console.log(soons[i].value);
    }
};
