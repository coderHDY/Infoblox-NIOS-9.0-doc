---
title: "ibDDNSUpdateStatistics"
source: "/space/nios90/1430127730"
pageId: "1430127730"
---
ibDDNSUpdateStatistics provides statistical data about DDNS updates. The counters always start with zero when the DNS service is restarted. They report the total numbers since the DNS service was last restarted.  
ibDDNSUpdateStatistics contains the following objects:



* ibDDNSUpdateStatistics*

| Object (Type) | Description |
| --- | --- |
| ibDDNSUpdateSuccess (Counter64) | The number of successful dynamic DNS updates. |
| ibDDNSUpdateFailure (Counter64) | The number of all failed dynamic DNS updates, excluding those reported by the ibDDNSUpdateReject object. |
| ibDDNSUpdateReject (Counter64) | The number of dynamic DNS updates that failed because they were denied by the DNS server. |
| ibDDNSUpdatePrerequisiteReject (Counter64) | The number of dynamic DNS updates that failed because the prerequisites were not satisfied. This is also included in the total number of failures reported by the ibDDNSUpdateFailure object. |
