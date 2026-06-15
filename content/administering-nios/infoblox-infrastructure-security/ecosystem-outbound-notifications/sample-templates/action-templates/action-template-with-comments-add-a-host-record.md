---
title: "Action Template with Comments: Add a Host Record"
source: "/space/nios90/1396310626"
pageId: "1396310626"
---
The comments (labeled as **Note**:) embedded in the sample template explain the operation for each section of the template. Note that the execution of this sample template will cause a single **POST** request to be sent with the following body for an insertion of a **10.0.0.0/24** network with the Zone extensible attribute set to [test.com](http://test.com) and the Hostname extensible attribute set to `name`:

`{"name": "name.test.com","ipv4addrs": [{"ipv4addr":`  
`"func:nextavailableip:10.0.0.0/24"}],"comment": "Inserted via a template"}`

---

**Note**: The preamble of the template specifies the version, version, name and other relevant fields.

---

`{`  
`       "version": "1.0",`  
`       "name": "Insert host record",`

`       "comment": "Will automatically insert a host record for new network insertions,assumes the network has a 'Zone' extensible attribute, optionally a 'Hostname' extensible attribute as well",`

`       "type": "REST_EVENT",`

---

**Note**: The `event_type` field specifies that this template is used for IPv4 network events only.

---

`"event_type": [`

`          "NETWORK_IPV4"`

`       ],`

---

**Note**: The `action_type` and` vendor_identifier` fields describe the template type and the vendor type.

---

`  "action_type": "Insert a host record",`

`  "vendor_identifier": "WAPI 2.3",`

---

**Note**: The following specifies that the template is going to send JSON to the server.

---

`  "transport": {`

`       "content_type": "application/json",`

`  },`

---

**Note**: The following are steps that will be executed sequentially.

---

`  "steps":`

`  [`

---

**Note**: The first step will stop the execution, without an error, if the network event received is not an insertion – it could be a modify, for example.

---

`{`

`     "name": "stop if it is not a network insert",`

`     "operation": "CONDITION",`

`     "condition": {`

---

**Note**: You can specify only one statement: either AND or OR would work.

---

`"condition_type": "AND",`

`"statements": [`

---

**Note: **The match is to check if `operation_type` in the event is different from INSERT. It is a good practice to put the event variable on the left side so if it is not present in the event, the template would not fail.

---

`{`

`"left": "${E:A:operation_type}",`

`"op": "!=",`

`"right": "INSERT"`

`}`

`],`

---

**Note**: The directive that stops the execution if the condition matches.

---

`"stop": true`

`}`

`},`

---

**Note**: The second step will stop the execution if the inserted network does not have the Zone extensible attribute configured. If it has the extensible attribute, it will be put in a temporary local variable for easier access later on.

---

`{`

`"name": "stop if we don't have the zone EA set, else save it",`

`"operation": "CONDITION",`

`"condition": {`

---

**Note**: Similar to the previous section, we have only one statement, so either AND or OR would work. The condition ensures that the Zone extensible attribute is set to a value.

---

`"condition_type": "AND",`

`"statements": [`

`{`

---

**Note**: As previously mentioned, non-existent variable access in the left side of a condition will not cause an error, but instead return an empty value.

---

`"left": "${E:A:values{extattrs}{Zone}{value}}",`

`"op": "==",`

`"right": ""`

`}`

`],`

---

**Note**: If the extensible attribute is empty or nonexistent, the operation should stop here.

---

`"stop": true,`

---

**Note**: Otherwise, it will copy the zone value to the local ZONE variable.

---

`"else_eval": "${XC:COPY:{L:ZONE}:{E:values{extattrs}{Zone}{value}}}"`

`}`

`},`

---

**Note**: This step is similar to the zone step above. However, if the host name is not set, it will put a default host name in a local variable to provide the default.

---

`{`

`"name": "get the hostname or use a default value",`

`"operation": "CONDITION",`

`"condition": {`

`"condition_type": "AND",`

`"statements": [`

`{`

`"left": "${E:A:values{extattrs}{Hostname}{value}}",`

`"op": "!=",`

`"right": ""`

`}`

`],`

---

**Note**: This is executed if the extensible attribute is present, by copying its value to HOSTNAME.

---

`"eval": "${XC:COPY:{L:HOSTNAME}:{E:values{extattrs}{Hostname}{value}}}",`

---

**Note**: Otherwise, the following is executed if the extensible attribute is empty or not present, by assigning the `defaulthostname `string instead.

---

`"else_eval": "${XC:ASSIGN:{L:HOSTNAME}:{S:defaulthostname}}"`

`}`

`},`

---

**Note**: This step will finally contact the endpoint and in this case insert the host.

---

`{`  
`"name": "insert the host record with the next available IP",`

---

**Note**: This defines the HTTP operation to use.

---

`"operation": "POST",`

---

**Note**: The endpoint is configured starting with *https://master_ip/....* The endpoint template overrides the path with */wapi/v2.3/* so by default all template requests would go to *https://master_ip/wapi/v2.3/.* In this step, we want to insert a host, so `record:host` is appended to the URI above (no override is set here) to arrive to the valid RESTful URI *https://master_ip/wapi/v2.3/record:host.*

---

`"transport": {`

`"path": "record:host"`

`},`

---

**Note**: This is the text that will be sent to the server in the POST’s BODY.

---

`"body_list": [`

`"{",`

---

**Note**: This references the local variables that were previously assigned.

---

`"\"name\": \"${L:A:HOSTNAME}.${L:A:ZONE}\",",`

---

**Note**: This option signifies that the RESTful API will use the next available IP in the network as the address for this host.

---

`"\"ipv4addrs\": [{\"ipv4addr\":`

`\"func:nextavailableip:${E:A:values{network}}\"}],",`

---

**Note**: This is the comment stating that the action is done through the RESTful API template.

---

`"\"comment\": \"Inserted via outbound\"",`  
`"}"`

`]`

`     }`

`   ]`

`}`
