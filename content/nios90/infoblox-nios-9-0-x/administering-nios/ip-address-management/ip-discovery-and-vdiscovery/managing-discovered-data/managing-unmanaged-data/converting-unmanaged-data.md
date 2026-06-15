---
title: "Converting Unmanaged Data"
source: "/space/nios90/1432786065"
pageId: "1432786065"
---
You can convert an unmanaged address to a host, an A or AAAA record, a PTR record, or a fixed address. To convert an unmanaged address:

1. In the *IP* *Map* or *List* panel, select an unmanaged address you want to convert, and then select **Convert** from the Toolbar.
2. In the drop-down list, select the type of address to which you want to convert the unmanaged address. For IPv4 addresses, you can select **To** **Host**, **To A** **Record**, **To** **PTR** **Record**, or **To** **Fixed** **Address**. For IPv6 addresses, you can select **To** **Host**, **To** **AAAA**, **To** **PTR** **Record**, or **To** **IPv6** **Fixed** **Address**.  
   Depending on the record type you select, Grid Manager displays the corresponding editor. It also populates the attributes of the unmanaged address in the editor. Enter the appropriate information in the editor.
3. Save the configuration, and then click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> After the conversion, the status of the unmanaged address changes to **Used**.

The following are some conditions for a conversion:

- **A** **and** **AAAA** **records**: You must select a DNS zone when converting an unmanaged address to an A or AAAA record.
- **PTR** **record**: You must select a DNS zone when converting an unmanaged address to a PTR record.
- **IPv4** **and** **IPv6** **Fixed** **Address**: Grid Manager displays a confirmation dialog box to ensure that you want to create a fixed address for the unmanaged address.
- **IPv4** **and** **IPv6** **Host** **record**: You can use the unmanaged address to enable a host record for DNS or DHCP.
