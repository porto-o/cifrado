const cifrar = () => {
    var texto = document.getElementById("inputText").value;
    var index = document.getElementById("index").value;
    var num = /([0-9])/gi;
    if (texto.match(num)) {
        Swal.fire({
            icon: "danger",
            title: ":C",
            text: "No intentes poner numeros porfavor",
        });
    } else {
        if (index.length <= 0 || texto.length <= 0) {
            Swal.fire({
                icon: "danger",
                title: ":C",
                text: "No intentes poner numeros porfavor",
            });
        } else {
            index = parseInt(index.substring(0, 10));
            if (index < 0) {
                index = index * -1;
            }
            var mod = index % 27;
            var cb = document.getElementById("description");
            cb.innerHTML =
                "Recorrer: " + index + "\n" + 'Recorrido a partir de "a": ' + mod;
            document.getElementById("output").innerHTML = cesar.encode(
                document.getElementById("inputText").value,
                mod
            );
            document.getElementById("des").innerHTML = " ";
        }
    }
};

var cesar =
    cesar ||
    (() => {
        var doStaff = (txt, desp, action) => {
            var replace = (() => {
                var abc = [
                    "a",
                    "b",
                    "c",
                    "d",
                    "e",
                    "f",
                    "g",
                    "h",
                    "i",
                    "j",
                    "k",
                    "l",
                    "m",
                    "n",
                    "ñ",
                    "o",
                    "p",
                    "q",
                    "r",
                    "s",
                    "t",
                    "u",
                    "v",
                    "w",
                    "x",
                    "y",
                    "z",
                ];
                var l = abc.length;

                return (c) => {
                    var i = abc.indexOf(c.toLowerCase());
                    if (i != -1) {
                        var pos = i;
                        if (action) {
                            pos += desp;
                            pos -= pos >= l ? l : 0;
                        } else {
                            pos -= desp;
                            pos += pos < 0 ? l : 0;
                        }
                        return abc[pos];
                    }
                    return c;
                };
            })();

            var re = /([ña-z])/gi;
            return String(txt).replace(re, (match) => {
                return replace(match);
            });
        };
        return {
            encode: (txt, desp) => {
                return doStaff(txt, desp, true);
            },

            decode: (txt, desp) => {
                return doStaff(txt, desp, false);
            },
        };
    })();

const alert = () => {
    var texto = document.getElementById("inputText").value;
    var num = /([0-9])/gi;
    if (texto.match(num)) {
        Swal.fire({
            icon: "error",
            title: ":C",
            text: "No intentes poner numeros porfavor",
        });
    }
};

const descifrar = () => {
    var index_2 = document.getElementById("index").value;
    index_2 = parseInt(index_2.substring(0, 10));
    if (index_2 < 0) {
        index_2 = index_2 * -1;
    }
    var mod = index_2 % 27;
    document.getElementById("des").innerHTML = cesar.decode(
        document.getElementById("output").value,
        mod
    );
};