---
title: "Action Template Variables and Name Spaces"
source: "/space/nios90/1375143031"
pageId: "1375143031"
---
Action templates can access variables in several different name spaces. The following are the available name spaces:

- **C**: http cookies. It supports only the DEL operation (primarily for logout purposes), but it can be used as a substitution origin.
- **Read-Only E**: Event data.
- **H**: http headers. Note that the assigned variables are sent in the next HTTP request and it survives the template execution.
- **Read-Only I**: Template instance variables. It is set in the GUI during the creation of the filter and it also includes the endpoint variables that are set in the GUI when creating an endpoint. Note that the instance variables can override endpoint variables, if needed.
- **L**: Local template variables. This name space is empty at name space startup and will not survive the template invocation.
- **Read-Only P**: Previous endpoint response values (if parsing is enabled for the response.)
- **Read-Only R**: Previous endpoint request http-specific return values. This includes RC, the http status code of the previous request (Example: 200), BODY, and the body of the response.
- **Read-Only RH**: Previous endpoint request that returned http headers.
- **S**: Endpoint session state variables. These variables survive the template invocation (it is used similar to L: name space which is not cleared at the end of the template execution.)
- **Read-Only UT**: Read-only utility variables. The UT: name space contains the following read-only variables:
  
  - **EPOCH**: EPOCH seconds since Jan 1st, 1970 (integer, 1 second resolution.)
  - **TIME**: UTC time in ISO-8601 format. Example: 2016-04-08T23:09:35Z (1 second resolution).
  - **UUID**: Random UUID of the form 00000000-0000-0000-0000-000000000000.
  - **PROTOCOL**: The protocol used for the request.
  - **URI**: Complete URI used for the request.
  - **HOST**: The endpoint address.
  - **PORT**: The port used for the request.
- **Read-Only XC**: Execute a command on the variable. This results no output.
