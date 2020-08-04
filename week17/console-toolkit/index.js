const tty = require('tty')
const ttys = require('ttys')
// const rl = require('readline')
const readline = require('readline')


const stdin = ttys.stdin
const stdout = ttys.stdout

// stdout.write('Hello  world!\n')
// stdout.write('\033[1A')
// stdout.write('winter\n')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
          resolve(answer)
        })
    })
}

void async function() {
    console.log(await ask('your project name?'))
}()