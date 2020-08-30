const http = require('http')
const fs = require('fs')
const archiver = require('archiver')
const child_process = require('child_process')

child_process.exec(
    `start https://github.com/login/oauth/authorize?client_id=Iv1.ca332253f12b901f&redirect_uri=${encodeURIComponent(
        'http://localhost:8081/auth'
    )}&scope=${encodeURIComponent('read:user')}&state=hz`
)

const server = http.createServer((request, response) => {
    let token = request.url.match(/token=([^&]+)/)[1]
    publish(token)
})

server.listen(8080)

function publish(token) {
    let package = 'package'
    const archive = archiver('zip', {
        zlib: { level: 9 },
    })
    archive.directory(package, false)

    const options = {
        host: 'localhost',
        port: 8081,
        path: '/?filename=' + package + '.zip',
        method: 'POST',
        headers: {
            token,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    const req = http.request(options)
    archive.pipe(req)
    archive.on('end', () => {
        req.end()
    })
    archive.finalize()
}
