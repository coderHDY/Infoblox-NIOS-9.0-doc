---
title: "Editing HTTP Request for HTTP Health Monitor"
source: "/space/nios90/1394542955"
pageId: "1394542955"
---
You can specify a multi-line message and include HTTP headers in the request by using the **HTTP** **Request** field in the HTTP health monitor properties. The header lines of an HTTP request have the simple name: value syntax. The request headers are used to pass cookies, authentication, and provide information about the client to the server, etc.  
The HTTP 1.1 contains a request line and a single host header:

Example 1:

`GET / HTTP/1.1`  
`Host: www.yoursite.com`  
`Connection: close`

Example 2:

`GET /index.html HTTP/1.1`  
`Host: www.example.com`

Note that the lines are terminated with two chars

`\r\n`. The whole request terminates with an empty line "`\r\n\r\n`" character sequence. NIOS adds `\r\n\r\n` string if it is absent. You can request  `GET /` instead of "`GET/index.html`".  
The host header differentiates between several HTTP servers that are running on a single IP address on the same port.  
In HTTP 1.1, the server keeps the connection alive by default after the response is sent. You can disable the connection by adding a `Connection: close` header line to the request.

An HTTP 1.0 request may consist of a single line followed by the automatically added `\r\n\r\n`:

`GET /index.html HTTP/1.0`

Or in the most simple form:

`GET / HTTP/1.0`

The server closes the connection after the response has been sent. You can use `Connection: Keep-Alive` header to alter this behavior. The `Content-Length` header is important to determine the end of the response for keep-alive connections.  
Apart from HTTP 1.0/1.1, NIOS also supports a request format known as HTTP 0.9:

`GET /index.html`

or

`GET /`

Normally, the response header consists of a response line, such as `HTTP/1.1 200 OK` or `HTTP/1.0 400 Bad Request`, followed by a couple of header lines, and then by an empty line which signals the end of the response header. With HTTP 0.9, the response immediately starts with the content of the requested file, which means that there is no HTTP return code for an HTTP 0.9 request.
