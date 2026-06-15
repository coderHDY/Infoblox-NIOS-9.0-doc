---
title: "Resolving Conflicting Addresses"
source: "/space/nios90/1432719329"
pageId: "1432719329"
---
Conflicts happen when discovered data does not match existing IP address data. The *IP* *Map* panel and the **Cloud** tab  
-> **VMs** tab display conflicting addresses with a red background. The *IP* *List* panel displays **Conflict** as the status for all conflicting addresses. For objects that have multiple conflicts, Grid Manager lists each of them in a bulleted list in the *Resolve* *multiple* *conflicts* dialog. You can select a conflict, in any order, to begin resolving each issue. After you resolve the selected issue, Grid Manager returns to the *Resolve* *multiple* *conflicts* dialog so you can resolve other issues.  
Depending on the conflict, you can do one of the following to resolve it:

- For a DHCP lease conflict, you can clear the existing lease and create either a fixed address or a reservation for the IP address. You can also keep the existing data and clear the discovered data. For more information, see Resolving DHCP Lease Conflicts below.
- For a fixed address conflict, you can either keep the existing fixed address data or update the existing data with the discovered data. For more information, see Resolving Fixed Address Conflicts below.
- For a DHCP range conflict, you can create a fixed address, create a reservation, or clear the discovered data. For more information, see  Resolving DHCP Range Conflicts below.
- For a host conflict, you can either keep the existing host record data or update the existing data with the discovered data. For more information, see  Resolving Host Conflicts below.
- For a VM affiliation conflict, you can either update all the displayed objects to be affiliate with the discovered data or keep the current affiliation and clear the conflict. For more information, see  Resolving VM Affiliation Conflicts below[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406620/Managing+Discovered+Data#bookmark1373)

You must resolve conflicting addresses individually. You cannot resolve multiple conflicts at the same time.

> **warning**
>
> ### Note
> 
> After the conflict is resolved, the status of the IP address changes depending on how you resolved the conflict.

To resolve a conflict:

1. In the *IP* *Map* or *List* panel, select a conflicting address, and then click **Resolve** **Conflict** from the Toolbar.
2. The *Resolve* *Conflict* dialog box displays the reason of the conflict and lists the existing information and discovered information of the address in the **Description** field. Depending on the type of conflict, the appliance displays the corresponding resolution options. You can compare the existing and discovered data and decide how you want to resolve the conflict.
