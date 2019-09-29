---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost:8000/docs/collection.json)

<!-- END_INFO -->

#general


<!-- START_c6c5c00d6ac7f771f157dff4a2889b1a -->
## _debugbar/open
> Example request:

```bash
curl -X GET -G "http://localhost:8000/_debugbar/open" 
```

```javascript
const url = new URL("http://localhost:8000/_debugbar/open");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/open`


<!-- END_c6c5c00d6ac7f771f157dff4a2889b1a -->

<!-- START_7b167949c615f4a7e7b673f8d5fdaf59 -->
## Return Clockwork output

> Example request:

```bash
curl -X GET -G "http://localhost:8000/_debugbar/clockwork/1" 
```

```javascript
const url = new URL("http://localhost:8000/_debugbar/clockwork/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/clockwork/{id}`


<!-- END_7b167949c615f4a7e7b673f8d5fdaf59 -->

<!-- START_01a252c50bd17b20340dbc5a91cea4b7 -->
## _debugbar/telescope/{id}
> Example request:

```bash
curl -X GET -G "http://localhost:8000/_debugbar/telescope/1" 
```

```javascript
const url = new URL("http://localhost:8000/_debugbar/telescope/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/telescope/{id}`


<!-- END_01a252c50bd17b20340dbc5a91cea4b7 -->

<!-- START_5f8a640000f5db43332951f0d77378c4 -->
## Return the stylesheets for the Debugbar

> Example request:

```bash
curl -X GET -G "http://localhost:8000/_debugbar/assets/stylesheets" 
```

```javascript
const url = new URL("http://localhost:8000/_debugbar/assets/stylesheets");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/assets/stylesheets`


<!-- END_5f8a640000f5db43332951f0d77378c4 -->

<!-- START_db7a887cf930ce3c638a8708fd1a75ee -->
## Return the javascript for the Debugbar

> Example request:

```bash
curl -X GET -G "http://localhost:8000/_debugbar/assets/javascript" 
```

```javascript
const url = new URL("http://localhost:8000/_debugbar/assets/javascript");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET _debugbar/assets/javascript`


<!-- END_db7a887cf930ce3c638a8708fd1a75ee -->

<!-- START_0973671c4f56e7409202dc85c868d442 -->
## Forget a cache key

> Example request:

```bash
curl -X DELETE "http://localhost:8000/_debugbar/cache/1/1" 
```

```javascript
const url = new URL("http://localhost:8000/_debugbar/cache/1/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE _debugbar/cache/{key}/{tags?}`


<!-- END_0973671c4f56e7409202dc85c868d442 -->

<!-- START_7ebdd0ac8b3cd321e05382d1c06cd0b1 -->
## Get the key performance stats for the dashboard.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/stats" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/stats");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/stats`


<!-- END_7ebdd0ac8b3cd321e05382d1c06cd0b1 -->

<!-- START_5abc89804e68469f8260c0ded520f59c -->
## Get the current queue workload for the application.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/workload" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/workload");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/workload`


<!-- END_5abc89804e68469f8260c0ded520f59c -->

<!-- START_7d6f8da3e735f9175246fbab4b37610c -->
## Get all of the master supervisors and their underlying supervisors.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/masters" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/masters");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/masters`


<!-- END_7d6f8da3e735f9175246fbab4b37610c -->

<!-- START_3a653cb977489e73ed8798e5705defbf -->
## Get all of the monitored tags and their job counts.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/monitoring" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/monitoring");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/monitoring`


<!-- END_3a653cb977489e73ed8798e5705defbf -->

<!-- START_970935b1e560143fd003dd90a6f0b7b0 -->
## Start monitoring the given tag.

> Example request:

```bash
curl -X POST "http://localhost:8000/horizon/api/monitoring" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/monitoring");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST horizon/api/monitoring`


<!-- END_970935b1e560143fd003dd90a6f0b7b0 -->

<!-- START_abd3993e15d364e7a2c79c9caa73a862 -->
## Paginate the jobs for a given tag.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/monitoring/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/monitoring/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/monitoring/{tag}`


<!-- END_abd3993e15d364e7a2c79c9caa73a862 -->

<!-- START_9f62e45bc2a894b92554c1406f487f03 -->
## Stop monitoring the given tag.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/horizon/api/monitoring/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/monitoring/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE horizon/api/monitoring/{tag}`


<!-- END_9f62e45bc2a894b92554c1406f487f03 -->

<!-- START_9808e9d7d776f039d57c72f052e6e8cc -->
## Get all of the measured jobs.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/metrics/jobs" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/metrics/jobs");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/metrics/jobs`


<!-- END_9808e9d7d776f039d57c72f052e6e8cc -->

<!-- START_dbb28dc188d668f7fa836ee5bc43e243 -->
## Get metrics for a given job.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/metrics/jobs/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/metrics/jobs/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/metrics/jobs/{id}`


<!-- END_dbb28dc188d668f7fa836ee5bc43e243 -->

<!-- START_ca0a10e3b27a3c5820831f79ab403f78 -->
## Get all of the measured queues.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/metrics/queues" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/metrics/queues");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/metrics/queues`


<!-- END_ca0a10e3b27a3c5820831f79ab403f78 -->

<!-- START_7a3c56bda1e4b728cf5a5691ee989766 -->
## Get metrics for a given queue.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/metrics/queues/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/metrics/queues/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/metrics/queues/{id}`


<!-- END_7a3c56bda1e4b728cf5a5691ee989766 -->

<!-- START_c34fa16bca5eb044bd9b7d7643c3376a -->
## Get all of the recent jobs.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/jobs/recent" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/jobs/recent");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/jobs/recent`


<!-- END_c34fa16bca5eb044bd9b7d7643c3376a -->

<!-- START_73a5f0771b8fdd710e2b547f24f1b308 -->
## Get all of the failed jobs.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/jobs/failed" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/jobs/failed");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/jobs/failed`


<!-- END_73a5f0771b8fdd710e2b547f24f1b308 -->

<!-- START_25959bfc2e37e26b5875453cbf717c3f -->
## Get a failed job instance.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/api/jobs/failed/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/jobs/failed/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET horizon/api/jobs/failed/{id}`


<!-- END_25959bfc2e37e26b5875453cbf717c3f -->

<!-- START_b69e44e22af794a2060e89edd04f0600 -->
## Retry a failed job.

> Example request:

```bash
curl -X POST "http://localhost:8000/horizon/api/jobs/retry/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/api/jobs/retry/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST horizon/api/jobs/retry/{id}`


<!-- END_b69e44e22af794a2060e89edd04f0600 -->

<!-- START_fb7b7b4614d0392062e423beed14f31f -->
## Single page application catch-all route.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/horizon/1" 
```

```javascript
const url = new URL("http://localhost:8000/horizon/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET horizon/{view?}`


<!-- END_fb7b7b4614d0392062e423beed14f31f -->

<!-- START_66df3678904adde969490f2278b8f47f -->
## Authenticate the request for channel access.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/broadcasting/auth" 
```

```javascript
const url = new URL("http://localhost:8000/broadcasting/auth");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (403):

```json
{
    "message": ""
}
```

### HTTP Request
`GET broadcasting/auth`

`POST broadcasting/auth`


<!-- END_66df3678904adde969490f2278b8f47f -->

<!-- START_6a0817a059f8c6644c81392c397152ab -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/v1/comments/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/comments/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/comments/{comment}`


<!-- END_6a0817a059f8c6644c81392c397152ab -->

<!-- START_f99570930a19ddf175adf1bf36e47c74 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/v1/posts/1/comments" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1/comments");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/posts/{post}/comments`


<!-- END_f99570930a19ddf175adf1bf36e47c74 -->

<!-- START_8c8dee3dc083fa8a3bbfd25342a7c1b6 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/v1/posts" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/posts`


<!-- END_8c8dee3dc083fa8a3bbfd25342a7c1b6 -->

<!-- START_3796d8fefb4eee670804ff3319ca1bb4 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/v1/posts/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/posts/{post}`

`PATCH api/v1/posts/{post}`


<!-- END_3796d8fefb4eee670804ff3319ca1bb4 -->

<!-- START_b59514618939469a1367e18797eec2b3 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/v1/posts/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/posts/{post}`


<!-- END_b59514618939469a1367e18797eec2b3 -->

<!-- START_719e5c9f68b65a9688ba0e7c33eaa47a -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/v1/posts/1/likes" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1/likes");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/posts/{post}/likes`


<!-- END_719e5c9f68b65a9688ba0e7c33eaa47a -->

<!-- START_4a82a91754a364499d663d4e0aec4649 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/v1/posts/1/likes" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1/likes");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/posts/{post}/likes`


<!-- END_4a82a91754a364499d663d4e0aec4649 -->

<!-- START_296fac4bf818c99f6dd42a4a0eb56b58 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/v1/users/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/users/{user}`

`PATCH api/v1/users/{user}`


<!-- END_296fac4bf818c99f6dd42a4a0eb56b58 -->

<!-- START_62c9bbe42f17504edc764991d2b19eac -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/v1/media" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/media");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/media`


<!-- END_62c9bbe42f17504edc764991d2b19eac -->

<!-- START_7217a5c95307b7ffb90ac556e3e45503 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/v1/media/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/media/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/media/{medium}`


<!-- END_7217a5c95307b7ffb90ac556e3e45503 -->

<!-- START_ce47787100a8aec189353ca3f6801abb -->
## Return the user&#039;s access token.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/v1/authenticate" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/authenticate");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/authenticate`


<!-- END_ce47787100a8aec189353ca3f6801abb -->

<!-- START_3eda1cfa7c6b97dd1062f86fca7ed15b -->
## Return the post&#039;s comments.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/posts/1/comments" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1/comments");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "content": "Hey ! I'm a comment as example.",
            "posted_at": "2019-09-29T21:10:30+02:00",
            "humanized_posted_at": "29 September 2019, 21:10",
            "author_id": 1,
            "post_id": 1,
            "author_name": "anakin",
            "author_url": "http:\/\/localhost:8000\/users\/1",
            "can_delete": false
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/posts\/1\/comments?page=1",
        "last": "http:\/\/localhost\/api\/v1\/posts\/1\/comments?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/posts\/1\/comments",
        "per_page": 20,
        "to": 1,
        "total": 1
    }
}
```

### HTTP Request
`GET api/v1/posts/{post}/comments`


<!-- END_3eda1cfa7c6b97dd1062f86fca7ed15b -->

<!-- START_ccda93e1ac915d22d1612e204a878900 -->
## Return the user&#039;s comments.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/users/1/comments" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/users/1/comments");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "content": "Hey ! I'm a comment as example.",
            "posted_at": "2019-09-29T21:10:30+02:00",
            "humanized_posted_at": "29 September 2019, 21:10",
            "author_id": 1,
            "post_id": 1,
            "author_name": "anakin",
            "author_url": "http:\/\/localhost:8000\/users\/1",
            "can_delete": false
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/users\/1\/comments?page=1",
        "last": "http:\/\/localhost\/api\/v1\/users\/1\/comments?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/users\/1\/comments",
        "per_page": 20,
        "to": 1,
        "total": 1
    }
}
```

### HTTP Request
`GET api/v1/users/{user}/comments`


<!-- END_ccda93e1ac915d22d1612e204a878900 -->

<!-- START_5e5a02a77abae733d04429dd2e7aeacc -->
## Return the comments.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/comments" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/comments");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "content": "Hey ! I'm a comment as example.",
            "posted_at": "2019-09-29T21:10:30+02:00",
            "humanized_posted_at": "29 September 2019, 21:10",
            "author_id": 1,
            "post_id": 1,
            "author_name": "anakin",
            "author_url": "http:\/\/localhost:8000\/users\/1",
            "can_delete": false
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/comments?page=1",
        "last": "http:\/\/localhost\/api\/v1\/comments?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/comments",
        "per_page": 20,
        "to": 1,
        "total": 1
    }
}
```

### HTTP Request
`GET api/v1/comments`


<!-- END_5e5a02a77abae733d04429dd2e7aeacc -->

<!-- START_a9e0057fe2bb93fc30508661979a9325 -->
## Return the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/comments/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/comments/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": {
        "id": 1,
        "content": "Hey ! I'm a comment as example.",
        "posted_at": "2019-09-29T21:10:30+02:00",
        "humanized_posted_at": "29 September 2019, 21:10",
        "author_id": 1,
        "post_id": 1,
        "author_name": "anakin",
        "author_url": "http:\/\/localhost:8000\/users\/1",
        "can_delete": false
    }
}
```

### HTTP Request
`GET api/v1/comments/{comment}`


<!-- END_a9e0057fe2bb93fc30508661979a9325 -->

<!-- START_b44fcd65726cfe1fc58d7294cb863b1f -->
## Return the posts.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/posts" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "title": "Hello World",
            "slug": "hello-world",
            "content": "\n                    Welcome to Laravel-blog !<br><br>\n                    Don't forget to read the README before starting.<br><br>\n                    Feel free to add a star on Laravel-blog on Github !<br><br>\n                    You can open an issue or (better) a PR if something went wrong.",
            "posted_at": "2019-09-29T21:10:30+02:00",
            "author_id": 1,
            "comments_count": 1
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/posts?page=1",
        "last": "http:\/\/localhost\/api\/v1\/posts?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/posts",
        "per_page": 20,
        "to": 1,
        "total": 1
    }
}
```

### HTTP Request
`GET api/v1/posts`


<!-- END_b44fcd65726cfe1fc58d7294cb863b1f -->

<!-- START_0a4452675c47dd92270900d7a1e7d281 -->
## Return the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/posts/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/posts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": {
        "id": 1,
        "title": "Hello World",
        "slug": "hello-world",
        "content": "\n                    Welcome to Laravel-blog !<br><br>\n                    Don't forget to read the README before starting.<br><br>\n                    Feel free to add a star on Laravel-blog on Github !<br><br>\n                    You can open an issue or (better) a PR if something went wrong.",
        "posted_at": "2019-09-29T21:10:30+02:00",
        "author_id": 1,
        "comments_count": 1
    }
}
```

### HTTP Request
`GET api/v1/posts/{post}`


<!-- END_0a4452675c47dd92270900d7a1e7d281 -->

<!-- START_c3bfb7499b9c7bcaa6f2be79f6f8f204 -->
## Return the user&#039;s posts.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/users/1/posts" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/users/1/posts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "title": "Hello World",
            "slug": "hello-world",
            "content": "\n                    Welcome to Laravel-blog !<br><br>\n                    Don't forget to read the README before starting.<br><br>\n                    Feel free to add a star on Laravel-blog on Github !<br><br>\n                    You can open an issue or (better) a PR if something went wrong.",
            "posted_at": "2019-09-29T21:10:30+02:00",
            "author_id": 1,
            "comments_count": 1
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/users\/1\/posts?page=1",
        "last": "http:\/\/localhost\/api\/v1\/users\/1\/posts?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/users\/1\/posts",
        "per_page": 20,
        "to": 1,
        "total": 1
    }
}
```

### HTTP Request
`GET api/v1/users/{user}/posts`


<!-- END_c3bfb7499b9c7bcaa6f2be79f6f8f204 -->

<!-- START_1aff981da377ba9a1bbc56ff8efaec0d -->
## Return the users.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/users" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "name": "anakin",
            "email": "darthvader@deathstar.ds",
            "provider": null,
            "provider_id": null,
            "registered_at": "2019-09-29T21:10:30+02:00",
            "comments_count": 1,
            "posts_count": 1,
            "roles": [
                {
                    "id": 2,
                    "name": "admin"
                }
            ]
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/users?page=1",
        "last": "http:\/\/localhost\/api\/v1\/users?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/users",
        "per_page": 20,
        "to": 1,
        "total": 1
    }
}
```

### HTTP Request
`GET api/v1/users`


<!-- END_1aff981da377ba9a1bbc56ff8efaec0d -->

<!-- START_cedc85e856362e0e3b46f5dcd9f8f5d0 -->
## Return the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/users/1" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": {
        "id": 1,
        "name": "anakin",
        "email": "darthvader@deathstar.ds",
        "provider": null,
        "provider_id": null,
        "registered_at": "2019-09-29T21:10:30+02:00",
        "comments_count": 1,
        "posts_count": 1,
        "roles": [
            {
                "id": 2,
                "name": "admin"
            }
        ]
    }
}
```

### HTTP Request
`GET api/v1/users/{user}`


<!-- END_cedc85e856362e0e3b46f5dcd9f8f5d0 -->

<!-- START_d1c3c7bc533c826fb7194ad291cddc25 -->
## Return the comments.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/v1/media" 
```

```javascript
const url = new URL("http://localhost:8000/api/v1/media");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [],
    "links": {
        "first": "http:\/\/localhost\/api\/v1\/media?page=1",
        "last": "http:\/\/localhost\/api\/v1\/media?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": null,
        "last_page": 1,
        "path": "http:\/\/localhost\/api\/v1\/media",
        "per_page": 20,
        "to": null,
        "total": 0
    }
}
```

### HTTP Request
`GET api/v1/media`


<!-- END_d1c3c7bc533c826fb7194ad291cddc25 -->

<!-- START_20785eb0dbb18bbf1dd6e6b8481736a1 -->
## Invoke the controller method.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/.well-known/change-password" 
```

```javascript
const url = new URL("http://localhost:8000/.well-known/change-password");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET .well-known/change-password`

`POST .well-known/change-password`

`PUT .well-known/change-password`

`PATCH .well-known/change-password`

`DELETE .well-known/change-password`

`OPTIONS .well-known/change-password`


<!-- END_20785eb0dbb18bbf1dd6e6b8481736a1 -->

<!-- START_66e08d3cc8222573018fed49e121e96d -->
## Show the application&#039;s login form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/login" 
```

```javascript
const url = new URL("http://localhost:8000/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET login`


<!-- END_66e08d3cc8222573018fed49e121e96d -->

<!-- START_ba35aa39474cb98cfb31829e70eb8b74 -->
## Handle a login request to the application.

> Example request:

```bash
curl -X POST "http://localhost:8000/login" 
```

```javascript
const url = new URL("http://localhost:8000/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST login`


<!-- END_ba35aa39474cb98cfb31829e70eb8b74 -->

<!-- START_e65925f23b9bc6b93d9356895f29f80c -->
## Log the user out of the application.

> Example request:

```bash
curl -X POST "http://localhost:8000/logout" 
```

```javascript
const url = new URL("http://localhost:8000/logout");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST logout`


<!-- END_e65925f23b9bc6b93d9356895f29f80c -->

<!-- START_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->
## Show the application registration form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/register" 
```

```javascript
const url = new URL("http://localhost:8000/register");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET register`


<!-- END_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->

<!-- START_d7aad7b5ac127700500280d511a3db01 -->
## Handle a registration request for the application.

> Example request:

```bash
curl -X POST "http://localhost:8000/register" 
```

```javascript
const url = new URL("http://localhost:8000/register");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST register`


<!-- END_d7aad7b5ac127700500280d511a3db01 -->

<!-- START_d72797bae6d0b1f3a341ebb1f8900441 -->
## Display the form to request a password reset link.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/password/reset" 
```

```javascript
const url = new URL("http://localhost:8000/password/reset");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset`


<!-- END_d72797bae6d0b1f3a341ebb1f8900441 -->

<!-- START_feb40f06a93c80d742181b6ffb6b734e -->
## Send a reset link to the given user.

> Example request:

```bash
curl -X POST "http://localhost:8000/password/email" 
```

```javascript
const url = new URL("http://localhost:8000/password/email");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/email`


<!-- END_feb40f06a93c80d742181b6ffb6b734e -->

<!-- START_e1605a6e5ceee9d1aeb7729216635fd7 -->
## Display the password reset view for the given token.

If no token is present, display the link request form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/password/reset/1" 
```

```javascript
const url = new URL("http://localhost:8000/password/reset/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset/{token}`


<!-- END_e1605a6e5ceee9d1aeb7729216635fd7 -->

<!-- START_cafb407b7a846b31491f97719bb15aef -->
## Reset the given user&#039;s password.

> Example request:

```bash
curl -X POST "http://localhost:8000/password/reset" 
```

```javascript
const url = new URL("http://localhost:8000/password/reset");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/reset`


<!-- END_cafb407b7a846b31491f97719bb15aef -->

<!-- START_c88fc6aa6eb1bee7a494d3c0a02038b1 -->
## Show the email verification notice.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/email/verify" 
```

```javascript
const url = new URL("http://localhost:8000/email/verify");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET email/verify`


<!-- END_c88fc6aa6eb1bee7a494d3c0a02038b1 -->

<!-- START_6792598c74b34a271a2e3ab9365adf9e -->
## Mark the authenticated user&#039;s email address as verified.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/email/verify/1/1" 
```

```javascript
const url = new URL("http://localhost:8000/email/verify/1/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET email/verify/{id}/{hash}`


<!-- END_6792598c74b34a271a2e3ab9365adf9e -->

<!-- START_38334d357e7e155bf70b9ab94619ca3d -->
## Resend the email verification notification.

> Example request:

```bash
curl -X POST "http://localhost:8000/email/resend" 
```

```javascript
const url = new URL("http://localhost:8000/email/resend");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST email/resend`


<!-- END_38334d357e7e155bf70b9ab94619ca3d -->

<!-- START_8d072c144b70a88567c69b272241f6a2 -->
## Redirect the user to the GitHub authentication page.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/auth/1" 
```

```javascript
const url = new URL("http://localhost:8000/auth/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET auth/{provider}`


<!-- END_8d072c144b70a88567c69b272241f6a2 -->

<!-- START_2548569efb59429767fc28e251ad4c25 -->
## Obtain the user information from provider.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/auth/1/callback" 
```

```javascript
const url = new URL("http://localhost:8000/auth/1/callback");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET auth/{provider}/callback`


<!-- END_2548569efb59429767fc28e251ad4c25 -->

<!-- START_17dd86d726732cb5428282561a56da53 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/settings/account" 
```

```javascript
const url = new URL("http://localhost:8000/settings/account");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET settings/account`


<!-- END_17dd86d726732cb5428282561a56da53 -->

<!-- START_089e6632875a5d028490ced201fdcb86 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/settings/account" 
```

```javascript
const url = new URL("http://localhost:8000/settings/account");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT settings/account`

`PATCH settings/account`


<!-- END_089e6632875a5d028490ced201fdcb86 -->

<!-- START_e586631a1005cdd8c7118697e1952d4c -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/settings/password" 
```

```javascript
const url = new URL("http://localhost:8000/settings/password");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET settings/password`


<!-- END_e586631a1005cdd8c7118697e1952d4c -->

<!-- START_ec64149bc4f9231d6eb84db9b336cbaf -->
## Update password for the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/settings/password" 
```

```javascript
const url = new URL("http://localhost:8000/settings/password");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT settings/password`

`PATCH settings/password`


<!-- END_ec64149bc4f9231d6eb84db9b336cbaf -->

<!-- START_f9ab618b5deee34f85634e95b4a82f3d -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/settings/token" 
```

```javascript
const url = new URL("http://localhost:8000/settings/token");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET settings/token`


<!-- END_f9ab618b5deee34f85634e95b4a82f3d -->

<!-- START_95ddf607a1596e65f6cd4e2dc3dc2e40 -->
## Generate a personnal access token for the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/settings/token" 
```

```javascript
const url = new URL("http://localhost:8000/settings/token");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT settings/token`

`PATCH settings/token`


<!-- END_95ddf607a1596e65f6cd4e2dc3dc2e40 -->

<!-- START_51954135400626953c3178083567f375 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/newsletter-subscriptions" 
```

```javascript
const url = new URL("http://localhost:8000/newsletter-subscriptions");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST newsletter-subscriptions`


<!-- END_51954135400626953c3178083567f375 -->

<!-- START_53be1e9e10a08458929a2e0ea70ddb86 -->
## Show the application dashboard.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/" 
```

```javascript
const url = new URL("http://localhost:8000/");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET /`


<!-- END_53be1e9e10a08458929a2e0ea70ddb86 -->

<!-- START_0c9959cb0684cb20bcb3e60165bb563d -->
## Show the rss feed of posts.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/posts/feed" 
```

```javascript
const url = new URL("http://localhost:8000/posts/feed");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET posts/feed`


<!-- END_0c9959cb0684cb20bcb3e60165bb563d -->

<!-- START_e448059c27b44e4d6f45041c75927d6b -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/posts/1" 
```

```javascript
const url = new URL("http://localhost:8000/posts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET posts/{post}`


<!-- END_e448059c27b44e4d6f45041c75927d6b -->

<!-- START_5693ac2f2e21af3ebc471cd5a6244460 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/users/1" 
```

```javascript
const url = new URL("http://localhost:8000/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET users/{user}`


<!-- END_5693ac2f2e21af3ebc471cd5a6244460 -->

<!-- START_642d45397331f069bf43a088f5c57254 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/newsletter-subscriptions/unsubscribe" 
```

```javascript
const url = new URL("http://localhost:8000/newsletter-subscriptions/unsubscribe");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET newsletter-subscriptions/unsubscribe`


<!-- END_642d45397331f069bf43a088f5c57254 -->

<!-- START_8a59594ff635c00027a130968fc47527 -->
## Show the application admin dashboard.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/dashboard" 
```

```javascript
const url = new URL("http://localhost:8000/admin/dashboard");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/dashboard`


<!-- END_8a59594ff635c00027a130968fc47527 -->

<!-- START_a8ef477b5c348c0f4b24b4f9b3bc90ad -->
## Show the application posts index.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/posts" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/posts`


<!-- END_a8ef477b5c348c0f4b24b4f9b3bc90ad -->

<!-- START_2e37c90d67a96143863923ff5859c905 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/posts/create" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/posts/create`


<!-- END_2e37c90d67a96143863923ff5859c905 -->

<!-- START_a67af5ec5245a6f896bb7a6169c39d6b -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/admin/posts" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/posts`


<!-- END_a67af5ec5245a6f896bb7a6169c39d6b -->

<!-- START_649522dca2addc54d4862e8db6413ddd -->
## Display the specified resource edit form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/posts/1/edit" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/posts/{post}/edit`


<!-- END_649522dca2addc54d4862e8db6413ddd -->

<!-- START_93e124efe376a044a56b19551240b7ba -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/admin/posts/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/posts/{post}`

`PATCH admin/posts/{post}`


<!-- END_93e124efe376a044a56b19551240b7ba -->

<!-- START_64495d195e98183da03753c6fe58a7f4 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/admin/posts/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/posts/{post}`


<!-- END_64495d195e98183da03753c6fe58a7f4 -->

<!-- START_ceb220571f717658f2dc5f82db50573b -->
## Unset the post&#039;s thumbnail.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/admin/posts/1/thumbnail" 
```

```javascript
const url = new URL("http://localhost:8000/admin/posts/1/thumbnail");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/posts/{post}/thumbnail`


<!-- END_ceb220571f717658f2dc5f82db50573b -->

<!-- START_7614490a3eef5fbcba402080d0369e6a -->
## Show the application users index.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/users" 
```

```javascript
const url = new URL("http://localhost:8000/admin/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/users`


<!-- END_7614490a3eef5fbcba402080d0369e6a -->

<!-- START_f8b3cec767336a1c2280a2a3173678d9 -->
## Display the specified resource edit form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/users/1/edit" 
```

```javascript
const url = new URL("http://localhost:8000/admin/users/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/users/{user}/edit`


<!-- END_f8b3cec767336a1c2280a2a3173678d9 -->

<!-- START_d7f417f614d8614811f624203f4e63cd -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/admin/users/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/users/{user}`

`PATCH admin/users/{user}`


<!-- END_d7f417f614d8614811f624203f4e63cd -->

<!-- START_7808ba69eddbf670b6ef910cd9c8c163 -->
## Show the application comments index.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/comments" 
```

```javascript
const url = new URL("http://localhost:8000/admin/comments");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/comments`


<!-- END_7808ba69eddbf670b6ef910cd9c8c163 -->

<!-- START_84a2ca210dedaf5b920149f93d26cc58 -->
## Display the specified resource edit form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/comments/1/edit" 
```

```javascript
const url = new URL("http://localhost:8000/admin/comments/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/comments/{comment}/edit`


<!-- END_84a2ca210dedaf5b920149f93d26cc58 -->

<!-- START_2ce51a0baa9e8c29d042c57ae999136c -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/admin/comments/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/comments/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/comments/{comment}`

`PATCH admin/comments/{comment}`


<!-- END_2ce51a0baa9e8c29d042c57ae999136c -->

<!-- START_8f1ea74ff4d19e11a2bc484579c2a238 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/admin/comments/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/comments/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/comments/{comment}`


<!-- END_8f1ea74ff4d19e11a2bc484579c2a238 -->

<!-- START_8535e162b521fec6ac2854e0b45b0865 -->
## Return the media library.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/media" 
```

```javascript
const url = new URL("http://localhost:8000/admin/media");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/media`


<!-- END_8535e162b521fec6ac2854e0b45b0865 -->

<!-- START_edd94880c44a5cfbe2ca7fd2db69eae7 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/media/create" 
```

```javascript
const url = new URL("http://localhost:8000/admin/media/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/media/create`


<!-- END_edd94880c44a5cfbe2ca7fd2db69eae7 -->

<!-- START_d7c0fe82b940bf83b23bc6f175effed1 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/admin/media" 
```

```javascript
const url = new URL("http://localhost:8000/admin/media");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/media`


<!-- END_d7c0fe82b940bf83b23bc6f175effed1 -->

<!-- START_63d9cc4f9cf2f6bf82c871f2ddc9da55 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/admin/media/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/media/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/media/{medium}`


<!-- END_63d9cc4f9cf2f6bf82c871f2ddc9da55 -->

<!-- START_7b466bfe7772a0270c8c70b79ff528c2 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/admin/media/1" 
```

```javascript
const url = new URL("http://localhost:8000/admin/media/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/media/{medium}`


<!-- END_7b466bfe7772a0270c8c70b79ff528c2 -->


