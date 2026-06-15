---
title: "FireEye Integrated RPZ Examples"
source: "/space/nios90/1406140533"
pageId: "1406140533"
---
Following is an example of a syslog message when an alert gets converted to an RPZ rule:

`013-09-11T10:59:55-07:00 user (none) httpd[]: info fireeye-rpt: `

`'79167','infection-match','minr''eng-lab-249.inca.infoblox.com'`

`2013-09-11T10:59:55-07:00 user (none) httpd[]: info FireEye: Create an RPZ rule for `

`'d.bnksw.com' with 'SUBSTITUTE' rule in RPZ zone 'com.lock’`

Note that the domain name [lock.com](http://lock.com) is displayed in the reverse format.  
Following is an example of a syslog message when an alert is ignored by the NIOS appliance:

`2013-09-11T11:04:01-07:00 user (none) httpd[]: info fireeye-rpt: `

`'114488','malware-object','majr''eng-lab-249.inca.infoblox.com'`

`2013-09-11T11:04:01-07:00 user (none) httpd[]: info FireEye: Cannot parse FQDN due to `

`missing field''cnc-services''`
