const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Info</title></head>')
        res.write('<h1>Enter some text to create user :)</h1>')
        res.write('<body>')
        res.write('<form action="/create-users" method="POST">')
        res.write('<input name=username type="text">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html')
        return res.end()
    }

    if (url === '/users'){
        // dummy users
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<h1>List of Users</h1>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>fuckingyourmammo</li>')
        res.write('<li>kareenhollatme</li>')
        res.write('<li>fuckingmylawnmower</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/create-users' && method === 'POST'){
        const body = []         // editing data of object but not the object itself
       
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody    = Buffer.concat(body).toString()
            const message       = parsedBody.split('=')[1]
            console.log(message)
            res.statusCode = 302
            return res.end()
        })
    }    
}


module.exports = {
    handler: requestHandler
}