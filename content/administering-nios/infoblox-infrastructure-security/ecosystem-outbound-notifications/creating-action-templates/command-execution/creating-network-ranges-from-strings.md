---
title: "Creating Network Ranges from Strings"
source: "/space/nios90/1375044991"
pageId: "1375044991"
---
Use the `XC:NETWORKTORANGE` operation to create a range from a network string. This operation should be specified as the following: `${XC:NETWORKTORANGE:{“var_with_network”}:{“var_for_range”}}` where network is a string such as ‘`1.2.3.4/16’` or `‘2001:db8:ce4::/48’`

The resulting range is an XMLA value such as the following:

`{`  
`   '&lt;xmla&gt;': True,`  
`   'name': 'range',`  
`   'attrs': {'from': '1.2.0.0', 'to': '1.2.255.255'},`  
`   'value': [],`  
`   'index': {}`  
`}`

or

`{`  
`   '&lt;xmla&gt;': True,`  
`   'name': 'range',`  
`   'attrs': {'from': '2001:db8:ce4::', 'to':`  
` '2001:db8:ce4:ffff:ffff:ffff:ffff:ffff'},`  
`   'value': [],`  
`   'index': {}`

`}`

---

**Note**: “`var_with_network”` must be a top-level variable in a namespace such as `E:var,` but not `L:var{key}[42]`.

---

When namespace E is `{‘E’: {‘net’: ‘1.2.3.4/16’}}` and the response is as follows:

`&lt;SiteConfigResponse success="1"&gt;`  
`  &lt;Site id="42" name="this_site" description="testing site" riskfactor="1.0" isDynamic="0"&gt;`  
`   &lt;Description&gt;testing site</Description>`  
`   &lt;Hosts&gt;`  
`     &lt;host&gt;a.com</host>`  
`   </Hosts>`  
`   &lt;Credentials&gt;</Credentials>`  
`   &lt;Alerting&gt;</Alerting>`  
`   &lt;ScanConfig configID="21" name="CIS" templateID="cis" engineID="3" configVersion="3"&gt;`  
`   &lt;Schedules&gt;</Schedules>`  
`   </ScanConfig>`  
`  </Site>`  
`</SiteConfigResponse>`

Then using the following steps:

`{`  
`     "name": "copy",`  
`     "operation": "NOP",`  
`     "body_list": [`  
`       "${XC:COPY:{L:Site}:{P:PARSE{SiteConfigResponse}}}",`  
`       "${XC:NETWORKTORANGE:{E:net}:{L:range}}"`  
`     ]`  
`},`  
`{`

`     "name": "add",`  
`     "operation": "VARIABLEOP",`  
`     "variable_ops": [`  
`        {`  
`          "operation": "PUSH",`  
`          "type": "COMPOSITE",`  
`          "destination": "L:Site{Site}{Hosts}",`  
`          "source": "L:range"`  
`         }`  
`     ]`  
`},`  
`{`  
`     "name": "post",`  
`     "operation": "POST",`  
`     "body_list": [`  
`        '&lt;?xml version="1.0" encoding="UTF-8"?&gt;',`  
`        '&lt;SiteSaveRequest session-id="some_sess_id"&gt;',`  
`        '${L:x:Site}',`  
`       '</SiteSaveRequest>'`  
`    ]`  
`}`

returns the following XML results:

`&lt;?xml version="1.0" encoding="UTF-8"?&gt;`  
`&lt;SiteSaveRequest session-id="some_sess_id"&gt;`  
`  &lt;Site name="this_site" isDynamic="0" description="testing site" riskfactor="1.0"id="42"&gt;`  
`     &lt;Description&gt;testing site</Description>`  
`     &lt;Hosts&gt;`  
`       &lt;host&gt;a.com</host>`

`       &lt;range from="1.2.0.0" to="1.2.255.255"/&gt;`  
`     </Hosts>`  
`     &lt;Credentials/&gt;`  
`     &lt;Alerting/&gt;`  
`     &lt;ScanConfig configID="21" configVersion="3" name="CIS" templateID="cis" engineID="3"&gt;`  
`     &lt;Schedules/&gt;`  
`     </ScanConfig>`  
`  </Site>`  
`</SiteSaveRequest>`
