---
title: "DNAME Records for Reverse-Mapping Zones"
source: "/space/nios90/1422590426"
pageId: "1422590426"
---
You can use DNAME records to redirect reverse lookups from one reverse-mapping zone to another. You can use DNAME records for reverse-mapping zones to simplify the management of subzones for classless address spaces larger than a class C subnet (a subnet with a 24-bit netmask).

RFC 2672, *Non-Terminal* *DNS* *Name* *Redirection*, includes an example showing the delegation of a subzone for an address space with a 22-bit netmask inside a zone for a larger space with a 16-bit netmask:

$ORIGIN 0.192.in-addr.arpa.

| 8/22 | NS | ns.slash-22-holder.example. |
| --- | --- | --- |
| 8 | DNAME | 8.8/22 |
| 9 | DNAME | 9.8/22 |
| 10 | DNAME | 10.8/22 |
| 11 | DNAME | 11.8/22 |

The reverse-mapping zone 0.192.in-addr.arpa. applies to the address space 192.0.0.0/16. Within this zone is a subzone and subdomain with the abbreviated name *8/22*. (Its full name is *8/22.0.192.in-addr.arpa*.) This subdomain contains its own subdomains corresponding to the 1024 addresses in the 192.0.8.0/22 subnet:

- Subdomain 8/22 (8/22.0.192.in-addr.arpa)
  
  - Subdomain 8.8/22 for addresses 192.0.8.0 – 192.0.8.255 (or 192.0.8.0/24)
  - Subdomain 9.8/22 for addresses 192.0.9.0 – 192.0.9.255 (or 192.0.9.0/24)
  - Subdomain 10.8/22 for addresses 192.0.10.0 – 192.0.10.255 (or 192.0.10.0/24)
  - Subdomain 11.8/22 for addresses 192.0.11.0 – 192.0.11.255 (or 192.0.11.0/24)

The NS record delegates authority for the reverse-mapping subzone 8/22 to the DNS server ns.slash-22-holder.example.  
Finally, the DNAME records provide ALIASes mapping domain names that correspond to the 192.0.8.0/24, 192.0.9.0/24, 192.0.10.0/24, and 192.0.11.0/24 subnets to the respective subdomains 8.8/22, 9.8/22, 10.8/22, and 11.8/22 in the 8/22.0.192.in-addr.arpa subzone.

> **warning**
>
> ### Note
> 
> NIOS appliances support DNAME records in reverse-mapping zones that map addresses to target zones with a classless address space larger than a class C subnet. However, NIOS appliances do not support such target zones.

You might also use DNAME records if you have a number of multihomed appliances whose IP addresses must be mapped to a single set of domain names. An example of this is shown in the below figure.

*DNAME Records to Simplify DNS* *for* *Multihomed* *Appliances*

*[drawio]*

To add a DNAME record to a reverse-mapping zone, perform the following steps:

1. From the **Data ** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -&gt; **Record** -&gt; **Add** ** DNAME** ** Record**.
2. In the *Add* * DNAME * *Record* wizard, complete the following fields:  
   If you specify a subdomain in the Domain Name field when configuring a DNAME record and the subdomain is also a subzone, the DNAME record appears in the list view for the subzone, not in the list view for the parent zone selected in the process of adding the record.
   
   - **ALIAS**: If Grid Manager displays a zone name, enter the name of a subdomain here. If you are adding a DNAME record for the entire zone, leave this field empty. This field is for adding a DNAME record for a subdomain within the selected zone. The displayed zone name can either be the last selected zone or the zone from which you are adding the CNAME record. If no zone name is displayed or if you want to specify a different zone, click **Select** ** Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box, and then enter the name of a subdomain.
   - **Target:** Type the name of the reverse-mapping zone to which you want to map all the addresses specified in the Domain Name field.
   - **Comments:** Enter identifying text for this record, such as a meaningful note or reminder.
   - **Disable:** Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Save the configuration or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
4. Click **Restart** if it appears at the top of the screen.
