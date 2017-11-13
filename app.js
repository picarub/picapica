
let express = require('express')
let request = require('request')
let app = express()

let doRequest = url => (new Promise((resolve,reject) => {
 request(url, (err, res, body) => {
  if (!err && res.statusCode == 200) { resolve(body) }
  else { reject(err) }
 })
}))


app.get(['/','/music','/idolpost','/idol','/mv','/video'], (req, res) => {
 return res.sendFile('index.html',{root: __dirname})       
})



app.get('/a/find', async (req, res) => {
 let q = req.query
 if ('keyword' in q){
  if (q.keyword === null) { console.log('empty') }
  let kw = await doRequest('https://picapica.pw/a/find?keyword=' + q.keyword)
  return res.send(kw)
 }
 if ('timeline' in q){
  let tl = await doRequest('https://picapica.pw/a/find?timeline=' + q.timeline)
  return res.send(tl)
 }
 if ('member' in q){
  let mb = await doRequest('https://picapica.pw/a/find?member=' + q.member)
  return res.send(mb)
 }
 if ('yt' in q){
  let ut = await doRequest('https://picapica.pw/a/find?yt=' + q.yt)
  return res.send(ut)
 }
 if ('dm' in q){
  let dm = await doRequest('https://picapica.pw/a/find?dm=' + q.dm)
  return res.send(dm)
 }
 return res.send('null')            
})




app.use('/r', [express.static('res')])
process.env.NODE_ENV = 'production'
app.listen(80)
console.log('EXPRESS IS RUNNING')


