var a2 = [0, 0, 0, 0, 1, 1, 1, 1]
var a1 = [0, 0, 1, 1, 0, 0, 1, 1]
var a0 = [0, 1, 0, 1, 0, 1, 0, 1]

var a2N = []
var a1N = []
var a0N = []

//Programando salida S0

function s0() {
    let a2a0 = []
    let s0 = []

    //Negando el arreglo de a2
    for (let i = 0; i < a2.length; i++) {
        if (a2[i] == 0) {
            a2N.push(1)
        } else {
            a2N.push(0)
        }
    }

    // console.log("NOT: ",a2N)

    //Haciendo el AND de a2n y a0
    for (let x = 0; x < a2N.length; x++) {
        if (a2N[x] == 1 && a0[x] == 1) {
            a2a0.push(1)
        } else {
            a2a0.push(0)
        }
    }

    // console.log("AND: ",a2a0)

    //Haciendo el OR de a2a0 con a1
    for (let c = 0; c < a2a0.length; c++) {
        if ((a2a0[c] == 0 && a1[c] == 0)) {
            s0.push(0)
        } else {
            s0.push(1)
        }
    }

    //Salida S0
    console.log("S0: ", s0)
}

// Programando salida S1

function s1() {
    let a2_a0 = []
    let a0n_a2 = []
    let s1 = []

    //Negando el arreglo de a0
    for (let i = 0; i < a0.length; i++) {
        if (a0[i] == 0) {
            a0N.push(1)
        } else {
            a0N.push(0)
        }
    }

    //Negando el arreglo de a1
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] == 0) {
            a1N.push(1)
        } else {
            a1N.push(0)
        }
    }
    //Haciendo primer AND de a2n con a0
    for (let a = 0; a < a2N.length; a++) {
        if (a2N[a] == 1 && a0[a] == 1) {
            a2_a0.push(1)
        } else {
            a2_a0.push(0)
        }
    }

    //Haciendo Segundo AND de a0n con a2
    for (let b = 0; b < a2.length; b++) {
        if (a0N[b] == 1 && a2[b] == 1) {
            a0n_a2.push(1)
        } else {
            a0n_a2.push(0)
        }
    }

    //Haciendo OR de 3 con a1N, a0n_a2 y a2_a0
    for(let d = 0; d<a1N.length;d++){
        if ((a1N[d] == 0 && a0n_a2[d] == 0 && a2_a0[d]==0)) {
            s1.push(0)
        } else {
            s1.push(1)
        }
    }
    console.log("S1: ", s1)

}

s0()
s1()

