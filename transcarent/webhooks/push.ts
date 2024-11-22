const url = "https://dev-api.transcarent.ai/v1/webhook/9am/d5acd840-27a8-4160-8bfe-f1dcddc17f40/push"
const body = {
   "title": "test",
   "content": "Test content",
   "targetUrl": "https://app.dev.join9am.com/app",
   "unreadMessageCount": 1
}

class Rq {
  url: string;
  method: string;
  headers: Headers = new Headers({
  "Content-Type": "application/json"
})
  body: string;

  constructor(url: string, method: string, body: string) {
    this.url = url
    this.method = method
    this.body = body
  }
}

const fn = async () => {
  try {
    const r = new Rq(url, "POST", JSON.stringify(body))
    console.log(r)
    const res = await fetch(r.url, {
      method: r.method,
      headers: r.headers,
      body: r.body
    })
    console.log(res)
    const response = await res.text()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

fn()
