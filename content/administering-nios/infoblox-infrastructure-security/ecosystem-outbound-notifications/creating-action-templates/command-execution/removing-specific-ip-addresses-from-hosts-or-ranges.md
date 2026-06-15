---
title: "Removing Specific IP Addresses from Hosts or Ranges"
source: "/space/nios90/1375569028"
pageId: "1375569028"
---
Use the `XC:REMOVEIP` operation to remove a specific IP address from a list of hosts or ranges. This operation should be specified as the following: `${XC:REMOVEIP:{“var_with_ip”}:{“var_with_list”}}` where IP address is a string such as `‘1.2.3.4’` or `‘2001:db8:ce4::42’`.

The list of hosts/ranges is as follows:

`[`  
`  {`  
`     '&lt;xmla&gt;': True,`  
`     'name': 'range',`  
`     'attrs': {'from': '1.2.3.1', 'to': '1.2.3.7'},`  
`     'value': [],`  
`     'index': {}`  
`  },`  
`  {`  
`     '&lt;xmla&gt;': True,`  
`     'name': 'host',`  
`     'attrs': {},`  
`     'value': ['a.com'],`  
`     'index': {}`  
`  }`  
`]`

---

**Note**:` “var_with_IP”` must be a top-level variable in a namespace such as `E:var`, but not `L:var{key}[42].`

---

Having namespace E as `{‘E’: {‘ip’: ‘1.2.3.4’}}` and Rapid7 response as follows:

`&lt;SiteConfigResponse success="1"&gt;`  
`  &lt;Site id="42" name="this_site" description="testing site" riskfactor="1.0"isDynamic="0"&gt;`  
`  &lt;Description&gt;testing site</Description>`  
`  &lt;Hosts&gt;`  
`    &lt;host&gt;a.com</host>`  
`    &lt;range from="1.2.3.1" to="1.2.3.7"/&gt;`  
`    &lt;host&gt;b.com</host>`  
`  </Hosts>`  
`  &lt;Credentials&gt;</Credentials>`  
`  &lt;Alerting&gt;</Alerting>`  
`  &lt;ScanConfig configID="21" name="CIS" templateID="cis" engineID="3" configVersion="3"&gt;`  
`  &lt;Schedules&gt;</Schedules>`  
`  </ScanConfig>`  
` </Site>`  
`</SiteConfigResponse>`

Use the following steps:

`{`  
`     "name": "copy",`  
`     "operation": "NOP",`  
`     "body_list": [`

`        "${XC:COPY:{L:Site}:{P:PARSE{SiteConfigResponse}}}",`  
`        "${XC:REMOVEIP:{E:ip}:{L:Site{Hosts}}}"`  
`      ]`  
`},`  
`{`  
`     "name": "post",`  
`     "operation": "POST",`  
`     "body_list": [`  
`        '&lt;?xml version="1.0" encoding="UTF-8"?&gt;',`  
`        '&lt;SiteSaveRequest session-id="some_sess_id"&gt;',`  
`        '${L:x:Site}',`  
`        '</SiteSaveRequest>'`  
`      ]`  
`}`

It returns the following XML results:

`&lt;?xml version="1.0" encoding="UTF-8"?&gt;`  
`&lt;SiteSaveRequest session-id="some_sess_id"&gt;`  
`     &lt;Site name="this_site" isDynamic="0" description="testing site" riskfactor="1.0"id="42"&gt;`  
`     &lt;Description&gt;testing site</Description>`  
`     &lt;Hosts&gt;`  
`        &lt;host&gt;a.com</host>`  
`        &lt;range from="1.2.3.1" to="1.2.3.3"/&gt;`  
`        &lt;range from="1.2.3.5" to="1.2.3.7"/&gt;`  
`        &lt;host&gt;b.com</host>`  
`     </Hosts>`  
`     &lt;Credentials/&gt;`  
`     &lt;Alerting/&gt;`  
`     &lt;ScanConfig configID="21" configVersion="3" name="CIS" templateID="cis" engineID="3"&gt;`  
`     &lt;Schedules/&gt;`  
`     </ScanConfig>`  
`  </Site>`  
`</SiteSaveRequest>`
