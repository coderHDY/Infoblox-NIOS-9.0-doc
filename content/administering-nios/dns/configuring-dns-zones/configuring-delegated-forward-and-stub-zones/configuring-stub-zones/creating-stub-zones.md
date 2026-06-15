---
title: "Creating Stub Zones"
source: "/space/nios90/1432716365"
pageId: "1432716365"
---
When you create a stub zone on the NIOS appliance, you specify the following:

- The Grid member that is hosting the stub zone.  
  You can specify multiple appliances if you want the stub zones on multiple name servers. If you do, the appliances store identical records about the stub zone. You can also specify a stub member NS group for the zone. For information on specifying a stub member NS group, see [*Using Stub Member Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489/Using+Name+Server+Groups#bookmark1833)
- The IP address of the primary server(s) that the NIOS appliance can query in the stub zone.

The primary server can be a Grid member or an external primary server. If you specify multiple primary servers, the appliance queries the primary servers, starting with the first server on the list. You can also specify a forward/stub server NS group for the zone. For information on specifying a forward/stub server NS group, see [*Using Forward/Stub Server Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).

The primary server and the name server hosting the stub zone can belong to the same Grid, as long as the authoritative zone and the stub zone are in different DNS views. You cannot configure one zone as both authoritative and stub in the same view.

After you create a stub zone, the NIOS appliance does the following:

1. It sends a query to the primary server for the SOA (Start of Authority) record of the stub zone. The primary server returns the SOA record.
2. Then, it sends a query for the NS (name server) records in the zone.  
   The primary server returns the NS records and the A (address) records of the name servers. (These A records are also called glue records.)  
   If the primary server is a NIOS appliance, you might have to manually create the A record and add it to the stub zone. A NIOS appliance that is the primary server for a zone always creates an NS record, but does not always create an A record.

- The appliance automatically creates an A record when its host name belongs to the name space of the zone. For example, if the zone is [corpxyz.com](http://corpxyz.com) and the primary server host name is [server1.corpxyz.com](http://server1.corpxyz.com), the appliance automatically creates the NS and A records and sends these records when it is queried by the stub zone name server.
- The appliance does not automatically create an A record when its host name is in a name space that is different from the zone. For example, if the zone is [corp200.com](http://corp200.com) and the primary server host name is [server1.corpxyz.com](http://server1.corpxyz.com), then the appliance creates the NS record only and sends it when it is queried by the stub zone name server. In this case, you must manually create the A record.
