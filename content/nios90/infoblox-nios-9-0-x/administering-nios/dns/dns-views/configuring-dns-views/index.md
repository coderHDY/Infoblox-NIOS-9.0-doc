---
title: "Configuring DNS Views"
source: "/space/nios90/280665456"
pageId: "280665456"
---
Following are the tasks to configure a DNS view:

1. Add a DNS view, as described in [Adding a DNS View](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuring-dns-views/adding-a-dns-view/Adding+a+DNS+View).
2. Add zones to the DNS view. You can add authoritative forward-mapping and reverse-mapping zones, as well as delegated, forward, and stub zones. For information about configuring each type of zone, see [*Configuring Authoritative Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones)[s](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones) and [*Configuring Delegated, Forward, and Stub Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-delegated-forward-and-stub-zones).

You can optionally do the following:

1. Define a Match Clients list and a Match Destination list to restrict access to the DNS view. For more information, see Defining Match Clients Lists* *and Defining a Match Destinations List below.
2. Copy resource records from one zone to another. This is useful when different DNS views have the same zone and have multiple resource records in common. For information, see Managing DNS Views below*.*
3. Create resource records in a group and share the group among multiple zones. For information, see [*Configuring Shared Record Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/configuring-shared-record-groups).
4. Specify which interface IP address is published in the glue A record of the DNS view. For information, see [*Changing the Interface IP Address*](#CHIIAd).
5. Manage recursive views. For information, see Managing Recursive DNS Views below.
6. Manage the order of the DNS views, as this determines the order in which the NIOS appliance checks the Match Clients list. For information, see Managing the Order of DNS Views.
7. Configure forwarders for a DNS view. For more information, see [*Using Forwarders*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/using-forwarders).
8. Enable AAAA filtering and configure a list of IPv4 networks and addresses for allowing or denying AAAA filtering from the appliance. For information, see [*Controlling AAAA Records for IPv4 Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/controlling-aaaa-records-for-ipv4-clients).
