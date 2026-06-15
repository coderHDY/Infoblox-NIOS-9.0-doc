---
title: "Action Template: Add a Host Record"
source: "/space/nios90/1396310597"
pageId: "1396310597"
---
The following sample template, if assigned to a DHCP network notification rule, will insert a host record for any added network that matches the rule, with a hostname and domain name set by extensible attributes in the network. Detailed explanations about this sample are included in Action Template with Comments: Add a Host Record below.

`{`

`         "version": "1.0",`

`         "name": "Insert host record",`

`         "comment": "Will automatically insert a host record for new network insertions, assumes the network has a 'Zone' extensible attribute, optionally a 'Hostname' extensible attribute as well",`

`         "type": "REST_EVENT",`

`         "event_type": [`

`             "NETWORK_IPV4"`

`        ],`

`        "action_type": "Insert a host record",`

`        "vendor_identifier": "WAPI 2.3",`

`        "transport": {`

`           "content_type": "application/json",`

`       },`

`       "steps":`

`       [`

`          {`

`              "name": "stop if it is not a network insert",`

`              "operation": "CONDITION",`

`              "condition": {`

`                 "condition_type": "AND",`

`                 "statements": [`

`                    {`

`                        "left": "${E:A:operation_type}",`

`                        "op": "!=",`

`                        "right": "INSERT"`

`                    }`

`               ],`

`               "stop": true`

`           }`

`        },`

`        {`

`            "name": "stop if we don't have the zone EA set, else save it",`

`            "operation": "CONDITION",`

`            "condition": {`

`                 "condition_type": "AND",`

`                 "statements": [`

`                    {`

`                         "left": "${E:A:values{extattrs}{Zone}{value}}",`

`                         "op": "==",`

`                         "right": ""`

`                     }`

`                ],`

`                "stop": true,`

`                "else_eval": "${XC:COPY:{L:ZONE}:{E:values{extattrs}{Zone}{value}}}"`

`            }`

`        },`

`        {`

`            "name": "get the hostname or use a default value",`

`            "operation": "CONDITION",`

`            "condition": {`

`               "condition_type": "AND",`

`               "statements": [`

`                   {`

`                       "left": "${E:A:values{extattrs}{Hostname}{value}}",`

`                       "op": "!=",`

`                       "right": ""`

`                   }`

`               ],`

`               "eval":`

`   "${XC:COPY:{L:HOSTNAME}:{E:values{extattrs}{Hostname}{value}}}",`

`               "else_eval": "${XC:ASSIGN:{L:HOSTNAME}:{S:defaulthostname}}"`

`            }`

`       },`

`       {`

`             "name": "insert the host record with the next available IP",`

`             "operation": "POST",`

`             "transport": {`

`                  "path": "record:host"`

`            },`

`            "body_list": [`

`                "{",`

`                "\"name\": \"${L:A:HOSTNAME}.${L:A:ZONE}\",",`

`                "\"ipv4addrs\": [{\"ipv4addr\":`

`   \"func:nextavailableip:${E:A:values{network}}\"}],",`

`                "\"comment\": \"Inserted via outbound\"",`

`                "}"`

`             ]`

`         }`

`     ]`

`}`
