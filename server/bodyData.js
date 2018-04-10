import queryString from 'querystring'
export default async function bodyData(ctx) {
  let postData = '';
  return new Promise(function(resolve, reject) {
    ctx.req.addListener('data', (data) => {
      postData += data
    })
    ctx.req.addListener('end', function(err) {
      if(postData) {
        resolve(queryString.parse(postData))
      } else {
        reject(err)
      }
    })
  })
}