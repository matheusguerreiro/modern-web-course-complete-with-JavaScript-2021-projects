// outro exemplo de var em loop

const funcs = []

for (var c = 0; c < 10; c++) {
    funcs.push(function() {
        console.log(c)
    })
}

funcs[2]()
funcs[8]()