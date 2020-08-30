const http = require('http')
const fs = require('fs')
const unzipper = require('unzipper')
const https = require('https')

// Create an HTTP server
const srv = http.createServer((req, res) => {
    if (req.url.match(/^\/auth/)) {
        return auth(req, res)
    }
    if (!req.url.match(/^\/\?/)) {
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        })
        res.end('not found')
        return
    }
    let writeStream = unzipper.Extract({ path: '../toy-server/public/' })
    req.pipe(writeStream)
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('okay')
    })
})

// now that server is running
srv.listen(8081)

function auth(req, res) {
    let code = req.url.match(/code=([^&]+)/)[1],
        client_id = 'Iv1.ca332253f12b901f',
        client_secret = '09c2fa277be35fe3b7e1ccedc7fd04e3010df527',
        redirect_uri = encodeURIComponent('http://localhost:8081/auth'),
        state = 'hz'

    let params = `code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&state=${state}`
    const request = https.request(
        `https://github.com/login/oauth/access_token?${params}`,
        {
            method: 'POST',
        },
        (response) => {
            response.on('data', (d) => {
                let result = d.toString().match(/access_token=([^&]+)/)
                if (result) {
                    let token = result[1]
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(`<a href="http://localhost:8080/token=${token}">publish</a>`)
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' })
                    res.end(d.toString())
                }
            })
        }
    )
    request.on('error', (error) => {
        console.log('i am error')
    })
    request.end()
}
