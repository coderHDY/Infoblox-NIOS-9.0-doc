---
title: "DtcCertificate Header Items"
source: "/space/nios90/1456865760"
pageId: "1456865760"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-Dtccertificate | String | Yes | DtcCertificate |  |  |
| certificate | DTC certificate | No | Object Hash/Issuer/Valid from/Valid to/Subject  For example:  "702971b9b6bb34468f6006389f53849dff43c78   ee415d256f771cdcb58782081025e28362c714d27   c9c652967afa64f0edf0c17170b3ace72bd0b3c9eebad7ef/CN=""pannpn"",   OU=""Engineering"",O=""Infoblox"",L=""NYC",ST=""Kerala"",   C=""IN""/2017-11-22 18:46:43/2018-11-22 18:46:43/CN=""pannpn"",OU=""Engineering"",O=""Infoblox"",L=""NYC"",   ST=""Kerala"",C=""IN"" | cert | Object hash is the SHA512 fingerprint of the certificate, that is to be used during the CSV import/export of dtcMonitorHttp and dtcMonitorSip objects in the client_cert field |
