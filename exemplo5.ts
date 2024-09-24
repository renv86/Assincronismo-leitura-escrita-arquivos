import fs from 'fs/promises'

fs.readFile('./bancodedados.json').then((resultado) => {
const json = resultado.toString()
const bancodedados = JSON.parse(json)

bancodedados.usuarios.push({
    nome: 'João',
    email: 'joao@email.com'
})

fs.writeFile('./bancodedados.json', JSON.stringify(bancodedados))
    console.log(bancodedados);

}).catch(() => {
    console.log('Arquivo não existe!');
    
})