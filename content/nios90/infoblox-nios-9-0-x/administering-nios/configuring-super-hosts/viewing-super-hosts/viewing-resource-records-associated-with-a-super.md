---
title: "Viewing Resource Records Associated with a Super Host"
source: "/space/nios90/1468498092"
pageId: "1468498092"
---
You can view the resource records that are associated with a super host by navigating to the **Data Management** tab → **Super Host** tab, click the respective super host. For each super host object,  the panel displays the following by default:

- **Name**: The name of the associated DNS or DHCP resource record.
- **Type:** The record type. When you search for an unspecified record type, all the associated records are displayed.
- **Data**: Value of a resource record. For example, IP address of an A record.
- **Zone/Network**: The zone or network to which that the resource record belongs.
- **Comment**: Comments that were entered for the resource record.
- **Disabled**: Indicates if the associated DNS/DHCP resource record is disabled.
- **Network View**: The network view associated with the resource record.
- **DNS View**: The DNS view to which the zones belong.
- **Creation Timestamp**: The time at which the DNS resource record was created.

You can also do the following in this panel:

- Use filters and the** Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches. For more information, see [*Using the Go To Function*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
- Create a quick filter to save frequently used filter criteria. For more information, see [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
- Click the right arrow to return to the parent object:
  
  - DNS records, such as A/AAAA/PTR records, and host addresses return to the respective parent zone.
  - DHCP records, such as IPv4 and IPv6 fixed addresses, return to the respective parent network.
- Click the Print icon to print the list of associated resource records.
