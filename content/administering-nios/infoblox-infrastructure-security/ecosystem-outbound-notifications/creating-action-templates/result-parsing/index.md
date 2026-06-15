---
title: "Result Parsing"
source: "/space/nios90/1375569143"
pageId: "1375569143"
---
Besides the R: name space, which is always initialized, if a template step includes the parse setting, then the result returned by the server is interpreted and will be available in the P: name space. Result parsing is extremely naive and supports only the following:

- **JSON**: In this case, the returned JSON will be available in the P name space if it is a dictionary, otherwise it will be as-is in the P:PARSE variable. If JSON is malformed, an error will be logged and P:PARSE will be set to an empty dictionary.
- **REGEX**: The supplied REGEX is applied to the whole body and it will be available in P:PARSE[0] to P:PARSE[N], if you have specified more than one groupings. In this case, P:PARSE[0] contains the full match, and P:PARSE[1..N] contains each individual grouping match. If no groupings are parsed, then P:PARSE will be a string with the matched expression. If one grouping is parsed, then P:PARSE will be a string with the matched grouping result. Note that ^ and $ anchors are the anchors for the whole output to be parsed.
- **REGEXLINE**: The supplied REGEX is applied to every line returned by the server, and each match is assigned to P:PARSE[0] to P:PARSE[N] depending on how many lines match. The REGEX must contain only one grouping. If there are many groupings then the last matched grouping is put in the PARSE value, but if there are no groupings provided then the full match is put in each line. Note that ^ and $ anchors in this case are the anchors for each line.
- **REGEXMULTILINE**: REGEXMULTILINE can be used when multiple groupings are required to be matched in multiple lines. Each match will be in P:PARSE[0..n] and each individual match is a list where the first value is the full REGEX match, and each subsequent value is a grouping match. The first grouping match of the first match can be accessed via ${P:PARSE[0][1]}. Note that ^ and $ anchors in this case are the anchors for each line.

For all REGEX cases, if there are no matches, P:PARSE is set to an empty string.

- **CONDITION**: In some cases, when a condition on a REGEX match is required, it is recommended to use a CONDITION step with the :L (length) format specifier applied to PARSE. So when ${P:L:PARSE} is matched with = 0, it would create a condition evaluating to true if there was a regular expression match.
- **XML**: For XML, the XML data is converted into a dictionary of dictionaries/lists depending on the XML present. Similar to JSON, this will be available in the P name space if it is a dictionary, otherwise it will be as-is in the P:PARSE variable. If the XML is malformed or not parsable, then an error is logged and P:PARSE is set to an empty dictionary.

Parsing does not support DTDs, schemas, or XML attributes. It simply converts the XML document as-is. This also means that if the schema defines a particular element to be a list, it might not be deserialized as a list depending on how many members are present (if there is only one, then the parent is not considered a list.) When serializing XML, any variable composed of a dictionary with an '`&lt;xmla&gt;`' member set to True will be serialized as an XML element with attributes.

If an XMLA element is serialized under JSON/XML, the attributes will be ignored and the appliance returns a meaningful result (a list of XMLA variables will be serialized in JSON as a list of the values of these elements, assuming the values are simple strings/numbers).

For example, consider the following XML:

`&lt;?xml version="1.0" encoding="UTF-8" ?&gt;`  
`<!DOCTYPE APPLIANCE_LIST_OUTPUT SYSTEM`  
`"https://qualysapi.qualys.com/api/2.0/fo/appliance/appliance_list_`  
`output.dtd">`  
`&lt;APPLIANCE_LIST_OUTPUT&gt;`  
`   &lt;RESPONSE&gt;`  
`     &lt;DATETIME&gt;2014-01-02T09:26:01Z</DATETIME>`  
`     &lt;APPLIANCE_LIST&gt;`  
`       &lt;APPLIANCE&gt;`  
`          &lt;ID&gt;777</ID>`  
`          &lt;NAME&gt;scanner1</NAME>`  
`          &lt;SOFTWARE_VERSION&gt;2.6</SOFTWARE_VERSION>`  
`          &lt;RUNNING_SCAN_COUNT&gt;0</RUNNING_SCAN_COUNT>`  
`          &lt;STATUS&gt;Online</STATUS>&lt;S2&gt;Online</S2>`  
`      </APPLIANCE>`  
`      &lt;APPLIANCE&gt;`  
`          &lt;ID&gt;1127</ID>`  
`          &lt;NAME&gt;scanner2</NAME>`  
`          &lt;SOFTWARE_VERSION&gt;2.6</SOFTWARE_VERSION>`  
`          &lt;RUNNING_SCAN_COUNT&gt;0</RUNNING_SCAN_COUNT>`  
`          &lt;STATUS&gt;Online</STATUS>&lt;S2&gt;Online</S2>`  
`      </APPLIANCE>`  
`      &lt;APPLIANCE&gt;`  
`          &lt;ID&gt;1131</ID>`  
`          &lt;NAME&gt;scanner3</NAME>`  
`          &lt;SOFTWARE_VERSION&gt;2.6</SOFTWARE_VERSION>`  
`          &lt;RUNNING_SCAN_COUNT&gt;0</RUNNING_SCAN_COUNT>`  
`          &lt;STATUS&gt;Offline</STATUS>&lt;S2&gt;Online</S2>`  
`      </APPLIANCE>`  
`    </APPLIANCE_LIST>`  
`    &lt;LICENSE_INFO&gt;`  
`      &lt;QVSA_LICENSES_COUNT&gt;10</QVSA_LICENSES_COUNT>`  
`      &lt;QVSA_LICENSES_USED&gt;3</QVSA_LICENSES_USED>`  
`    </LICENSE_INFO>`  
`  </RESPONSE>`  
`</APPLIANCE_LIST_OUTPUT>`

*The XML will be deserialized as follows:*

`{`

`    "APPLIANCE_LIST_OUTPUT":`

`    {`

`         "RESPONSE": {`

`            "APPLIANCE_LIST": [`

`               {`

`                  "ID": "777",`

`                  "NAME": "scanner1",`

`                  "RUNNING_SCAN_COUNT": "0",`

`                  "S2": "Online",`

`                  "SOFTWARE_VERSION": "2.6",`

`                  "STATUS": "Online"`

`               },`

`               {`

`                  "ID": "1127",`

`                  "NAME": "scanner2",`

`                  "RUNNING_SCAN_COUNT": "0",`

`                  "S2": "Online",`

`                  "SOFTWARE_VERSION": "2.6",`

`                  "STATUS": "Online"`

`               },`

`               {`

`                  "ID": "1131",`

`                  "NAME": "scanner3",`

`                  "RUNNING_SCAN_COUNT": "0",`

`                  "S2": "Online",`

`                  "SOFTWARE_VERSION": "2.6",`

`                  "STATUS": "Offline"`

`               },`  
`        ],`  
`        "DATETIME": "2014-01-02T09:26:01Z",`  
`        "LICENSE_INFO": {`  
`            "QVSA_LICENSES_COUNT": "10",`  
`            "QVSA_LICENSES_USED": "3"`  
`        }`  
`      },`  
`   }`  
`}`

*But the following will be deserialized differently:*

`&lt;?xml version="1.0" encoding="UTF-8" ?&gt;`  
`<!DOCTYPE APPLIANCE_LIST_OUTPUT SYSTEM`  
`"https://qualysapi.qualys.com/api/2.0/fo/appliance/appliance_list_ output.dtd">`

`&lt;APPLIANCE_LIST_OUTPUT&gt;`

`      &lt;RESPONSE&gt;`

`         &lt;DATETIME&gt;2014-01-02T09:26:01Z</DATETIME>`

`         &lt;APPLIANCE_LIST&gt;`

`            &lt;APPLIANCE&gt;`

`               &lt;ID&gt;777</ID>`

`               &lt;NAME&gt;scanner1</NAME>`

`               &lt;SOFTWARE_VERSION&gt;2.6</SOFTWARE_VERSION>`

`               &lt;RUNNING_SCAN_COUNT&gt;0</RUNNING_SCAN_COUNT>`

`               &lt;STATUS&gt;Online</STATUS>&lt;S2&gt;Online</S2>`

`           </APPLIANCE>`

`        </APPLIANCE_LIST>`

`        &lt;LICENSE_INFO&gt;`

`            &lt;QVSA_LICENSES_COUNT&gt;10</QVSA_LICENSES_COUNT>`

`            &lt;QVSA_LICENSES_USED&gt;3</QVSA_LICENSES_USED>`

`        </LICENSE_INFO>`

`    </RESPONSE>`

`</APPLIANCE_LIST_OUTPUT>`

*The XML will be deserialized as follows (note the difference in the appliance_list):*

`{`

`       "APPLIANCE_LIST_OUTPUT":`

`       {`

`           "RESPONSE": {`

`              "APPLIANCE_LIST": {`

`                  "APPLIANCE": {`

`                  {`

`                      "ID": "777",`

`                      "NAME": "scanner1",`

`                      "RUNNING_SCAN_COUNT": "0",`

`                      "S2": "Online",`

`                      "SOFTWARE_VERSION": "2.6",`

`                      "STATUS": "Online"`

`                 }`

`        },`

`        "DATETIME": "2014-01-02T09:26:01Z",`

`        "LICENSE_INFO": {`

`             "QVSA_LICENSES_COUNT": "10",`

`             "QVSA_LICENSES_USED": "3"`

`        }`

`     },`

`  }`

`}`

- **XMLA**: Infoblox strongly recommends that you use XMLA as the quoting option (as opposed to XML) when you create new action templates. New operations such as PUSH, POP, SHIFT and others are not officially supported for XML parsed data.
  
  XMLA parsing strips all white spaces (horizontal tab, line feed, vertical tab, form feed, carriage return, and space). To keep all white spaces, XMLA_WHITESPACE enum is added. The parsing is the same as XMLA except that there is no white space stripping.
  
  If you set parse to XMLA, the XML parsing supports XML attributes, and the XML document is put in the P:PARSE namespace variable, as illustrated in the following example. This example contains a mixed-attribute XML message with some values that contain attributes and some do not.

`&lt;?xml version="1.0" encoding="utf-8"?&gt;`  
`&lt;SiteConfigResponse success="1"&gt;`  
`   &lt;Site id="27" name="SOAPUI13006925d-7dac-428d-aaf1-4038a98838a1" description="" riskfactor="1.0" isDynamic="0"&gt;`  
`     &lt;Description/&gt;`  
`     &lt;Hosts a0="123"&gt;`  
`         &lt;host a1="123"&gt;server1.example.com</host>`  
`         &lt;host&gt;server2.example.com</host>`  
`         &lt;host&gt;server3.example.com</host>`  
`         &lt;host&gt;server4.example.com</host>`  
`         &lt;host&gt;server5.example.com</host>`  
`     </Hosts>`  
`     &lt;Credentials&gt;</Credentials>`  
`       &lt;Alerting&gt;`  
`          &lt;Alert name="test" enabled="1" maxAlerts="2"&gt;`  
`          &lt;scanFilter scanStart="1" scanStop="1" scanFailed="1" scanResumed="1" scanPaused="1"/&gt;`  
`          &lt;vulnFilter severityThreshold="1" confirmed="1" unconfirmed="1" potential="1"/&gt;`  
`          &lt;smtpAlert sender="user1@example.com" server="server6.example.com" limitText="0"&gt;`  
`          &lt;recipient&gt;user2@example.com</recipient>`  
`         </smtpAlert>`  
`        </Alert>`  
`       </Alerting>`  
`     &lt;ScanConfig configID="28" name="Full audit" templateID="full-audit" engineID="3" configVersion="3"&gt;`  
`       &lt;Schedules&gt;</Schedules>`  
`     </ScanConfig>`  
`   </Site>`  
`</SiteConfigResponse>`

The following is the deserialized response in P:PARSE when using XMLA parsing:

`[`

`     {`

`         "&lt;xmla&gt;": true,`

`         "attrs": {`

`              "success": "1"`

`         },`

`         "index": {`

`              "Site": 0`

`         },`

`         "name": "SiteConfigResponse",`

`         "value": [`

`            {`

`               "&lt;xmla&gt;": true,`

`               "attrs": {`

`                  "description": "",`

`                  "id": "27",`  
`                  "isDynamic": "0",`  
`                  "name": "SOAPUI13006925d-7dac-428d-aaf1-4038a98838a1",`  
`                  "riskfactor": "1.0"`  
`                },`  
`                "index": {`  
`                  "Alerting": 3,`  
`                  "Credentials": 2,`  
`                  "Description": 0,`  
`                  "Hosts": 1,`  
`                  "ScanConfig": 4`  
`                },`  
`                "name": "Site",`  
`                "value": [`  
`                   {`  
`                      "&lt;xmla&gt;": true,`  
`                      "attrs": {},`  
`                      "index": {},`  
`                      "name": "Description",`  
`                      "value": []`  
`                   },`  
`                   {`  
`                      "&lt;xmla&gt;": true,`  
`                      "attrs": {`  
`                          "a0": "123"`  
`                      },`  
`                      "index": {`  
`                          "host": 4`  
`                      },`  
`                      "name": "Hosts",`  
`                      "value": [`  
`                          {`  
`                              "&lt;xmla&gt;": true,`  
`                              "attrs": {`  
`                                  "a1": "123"`  
`                               },`  
`                               "index": {},`  
`                               "name": "host",`  
`                               "value": ["server1.example.com"]`  
`                          },`  
`                          {`  
`                               "&lt;xmla&gt;": true,`  
`                               "attrs": {},`  
`                               "index": {},`  
`                               "name": "host",`  
`                               "value": ["server2.example.com"]`  
`                          },`  
`                          {`  
`                               "&lt;xmla&gt;": true,`  
`                               "attrs": {},`  
`                               "index": {},`  
`                               "name": "host",`  
`                               "value": ["server3.example.com"]`

`                          },`  
`                          {`  
`                               "&lt;xmla&gt;": true,`  
`                               "attrs": {},`  
`                               "index": {},`  
`                               "name": "host",`  
`                               "value": ["server4.example.com"]`  
`                          },`

`                          {`  
`                               "&lt;xmla&gt;": true,`  
`                               "attrs": {},`  
`                               "index": {},`  
`                               "name": "host",`  
`                               "value": ["server5.example.com"]`  
`                           }`  
`                       ]`  
`                    },`  
`                    {`  
`                       "&lt;xmla&gt;": true,`  
`                       "attrs": {},`  
`                       "index": {},`  
`                       "name": "Credentials",`  
`                       "value": []`  
`                    },`  
`                    {`  
`                       "&lt;xmla&gt;": true,`  
`                       "attrs": {},`  
`                       "index": {`  
`                           "Alert": 0`  
`                       },`  
`                       "name": "Alerting",`  
`                       "value": [`  
`                          {`  
`                               "&lt;xmla&gt;": true,`  
`                               "attrs": {`  
`                                   "enabled": "1",`  
`                                   "maxAlerts": "2",`  
`                                   "name": "test"`  
`                               },`  
`                               "index": {`  
`                                  "scanFilter": 0,`  
`                                  "smtpAlert": 2,`  
`                                  "vulnFilter": 1`  
`                               },`  
`                               "name": "Alert",`  
`                               "value": [`  
`                                  {`  
`                                      "&lt;xmla&gt;": true,`  
`                                      "attrs": {`  
`                                           "scanFailed": "1",`  
`                                           "scanPaused": "1",`  
`                                           "scanResumed": "1",`  
`                                           "scanStart": "1",`  
`                                           "scanStop": "1"`  
`                                       },`  
`                                       "index": {},`  
`                                       "name": "scanFilter",`  
`                                       "value": []`

`                                  },`

`                                  {`

`                                       "&lt;xmla&gt;": true,`

`                                       "attrs": {`

`                                          "confirmed": "1",`

`                                          "potential": "1",`

`                                          "severityThreshold": "1",`

`                                          "unconfirmed": "1"`

`                                        },`

`                                        "index": {},`

`                                        "name": "vulnFilter",`

`                                        "value": []`  
`                                  },`  
`                                  {`  
`                                        "&lt;xmla&gt;": true,`  
`                                        "attrs": {`  
`                                             "limitText": "0",`  
`                                             "sender": "user1@example.com",`  
`                                             "server": "server6.example.com"`  
`                                        },`  
`                                        "index": {`  
`                                             "recipient": 0`  
`                                        },`  
`                                        "name": "smtpAlert",`  
`                                        "value": [`  
`                                             {`  
`                                                 "&lt;xmla&gt;": true,`  
`                                                 "attrs": {},`  
`                                                 "index": {},`  
`                                                 "name": "recipient",`  
`                                                 "value": ["user2@example.com"]`  
`                                              }`  
`                                         ]`  
`                                      }`  
`                                   ]`  
`                                 }`  
`                               ]`  
`                            },`  
`                            {`  
`                               "&lt;xmla&gt;": true,`  
`                               "attrs": {`  
`                                  "configID": "28",`  
`                                  "configVersion": "3",`  
`                                  "engineID": "3",`  
`                                  "name": "Full audit",`  
`                                  "templateID": "full-audit"`  
`                               },`  
`                               "index": {`  
`                                  "Schedules": 0`  
`                               },`  
`                               "name": "ScanConfig",`  
`                               "value": [`  
`                                  {`  
`                                        "&lt;xmla&gt;": true,`  
`                                        "attrs": {},`  
`                                        "index": {},`  
`                                        "name": "Schedules",`  
`                                        "value": []`

`                                  }`

`                               ]`

`                           }`

`                       ]`

`                  }`

`             ]`

`      }`

`]`

As shown in the example above, any XML value will become an internal dictionary that contains separate '`attrs`' and '`value`' members representing the XML attributes (if exist) and the XML values (if exist) of the element respectively, as well as the single "" boolean (set to `True`) to qualify this particular field as an XML attribute field (this is used when serializing, as well as for user-created XMLA values, see below).

You typically address the XMLA variable by using `VAR{tag}{subtag}`, which uses the VALUES of the tag (its value or its subtag(s)). To access the attributes of a tag, you use `VAR{tag}{{attributename}}`. Example: `P::PARSE{SiteConfigResponse}{{success}}`

If you need to access the name of a tag instead (for example if the remote server can return different tags depending on the status), use the `[[name]]` syntax. For example, you can use `P::PARSE[[name]].`
