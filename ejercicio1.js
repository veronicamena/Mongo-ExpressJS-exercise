/* Ejercicio SEMANA 1 - Desarrollar una función que, de todos los ficheros de un directorio, muestre el contenido de aquellos que
tienen extensión .md
Para ello podemos usar las funciones vistas dentro del apartado dedicado a File System. La función debe
recibir como parámetro el directorio sobre el que vamos a hacer el análisis.
Debemos analizar, de cara a simplificar nuestro código si la manera más óptima de desarrollarlo es a través de el
uso de las versiones síncronas o las versiones asíncronas de las funciones. */

const fs = require('fs')
const chalk = require('chalk')


// VERSIÓN ASÍNCRONA:

fs.readdir('./prueba_markdown', (err, files) => {
    if (err) return console.log(err)

    let markdown = files.filter(function (item) {
        if (item.includes(".md")) {
            return true
        } else {
            return false
        }
    })
    console.log(chalk.yellow(markdown))



    //lo simplifico:
    fs.readdir('./prueba_markdown', (err, files) => {
        if (err) return console.log(err)

        let markdown = files.filter(item => item.includes(".md"))
        console.log(chalk.green(markdown))
    })

})



// VERSIÓN SÍNCRONA:

/* try {
    let myFiles = fs.readdirSync('./prueba_markdown')
    console.log(chalk.green("Esta carpeta contiene estos archivos: " + myFiles))

    for (let i = 0; i < myFiles.length; i++) {
        console.log(chalk.yellow("Archivo: " + myFiles[i]))
        let extensionMyFile = myFiles[i].split(".")
        //console.log(extensionMyFile)
        if (extensionMyFile[1] == "md") {
            console.log("SI es un archivo markdown " + myFiles[i])
        } else {
            console.log("NO es un archivo markdown")
        }
    }

} catch (err) {
    console.log(err)
} */