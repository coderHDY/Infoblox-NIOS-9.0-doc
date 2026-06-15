---
title: "Configuring Shared Record Groups"
source: "/space/nios90/280272365"
pageId: "280272365"
---
A shared record group is a set of resource records that you can add to multiple zones. You can create resource records in a group and share the group among multiple zones. The zones handle the shared resource records as any other resource record. You can include the following types of DNS resource records in a shared record group: A, SRV, MX, AAAA, CNAME, and TXT.  
Using shared record groups simplifies and expedites the administration of resource records. When you create or update a shared record, the appliance automatically updates it in all associated zones. In addition, shared resource records reduce the object count in the NIOS database; instead of the creating the same record in multiple zones, you can use only one shared record. For example, for 10 zones and 500 records per zone, the object count decreases from 5278 objects to 781 objects.  
The figure Creating Shared Records below shows an example of how to create and use shared records.  
In this example, there are two shared record groups. One group—group1— contains the A records ftp and printer1 and the MX record mx1, and the other group—group2—contains the A record web and the MX record mx2. The resource records in group1 are shared with the internal view zones sales.example.com and finance.example.com and the external view zone sales.example.com. The resource records in group2 are shared with the internal view zone marketing.example.com and the external view zones sales.example.com and marketing.example.com.   
  
*Creating* *Shared* *Records*

*[drawio]*

In this section:

*[children]*
