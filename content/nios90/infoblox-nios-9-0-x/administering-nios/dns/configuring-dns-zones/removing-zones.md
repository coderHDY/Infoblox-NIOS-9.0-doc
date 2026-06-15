---
title: "Removing Zones"
source: "/space/nios90/280405463"
pageId: "280405463"
---
Depending on the configuration, you may or may not be able to delete or schedule the deletion of a zone and all its contents. Superusers can determine which group of users are allowed to delete or schedule the deletion of a zone and all its contents. For information about how to configure the recursive deletion of zones, see [*Configuring Recursive Deletions of Networks and Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)*.*

Note that you must have Read/Write permission to all the subzones and resource records in order to delete a zone. The possible effects of removing or re-parenting are illustrated in the following figure Removing or Reparenting Subzones.

The appliance puts all deleted objects in the Recycle Bin, if enabled. You can restore the objects if necessary. When you restore a parent object from the Recycle Bin, all its contents, if any, are re-parented to the restored parent object. For information about the Recycle Bin, see [*Using the Recycle Bin*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).

*Removing* *or* *Reparenting* *Subzones*

*[drawio]*

If you choose to reparent the subzones, be aware of the following caveats and possible effects of the reparenting:

- You cannot remove a zone and reparent its subzones if at least one of the subzones is a delegated zone. You must first remove any delegated subzones, and then you can remove the zone and reparent its subzones.
- If there are AD (Active Directory) subzones (_msdcs, _sites, _tcp, _udp, domaindnszones, foresetdnszones) and you opt to remove the parent zone only, the NIOS appliance reparents all subzones except the AD subzones, which it removes regardless of the removal option you specify.
- The subzone reparenting option is unavailable when you select multiple zones for removal.
- A record created under a top-level reverse-mapping zone is reparented when its immediate parent zone is created. If that parent zone is deleted, the record is restored to the top-level reverse-mapping zone.

**Examples**:

`Example 1:`  
` Step 1 - `Add` 10.in-addr.arpa `under . (root zone)  
` Step 2 - `If you add` 10.in-addr.arpa, it is created under . (root zone)`  
` Step 3 - `if you add` in-addr.arpa, `then` 10.in-addr.arpa `is reparented under` in-addr.arpa`

`Example 2`

- Deleting `in-addr.arpa` from the hierarchy might lead to `10.in-addr.arpa` reparenting under . (root zone), depending on the **Remove zone only**/ **Remove all subzones** option you select.
- If `in-addr.arpa` is restored, it is restored under . (root) zone with all its resource records.

`Example 3`

- Consider `in-addr.arpa `zone having `10.10.in-addr.arpa + 10.0.0.1` (PTR record)
- If you add `10.in-addr.arpa`, then `10.10.in-addr.arpa` is reparented under `10.in-addr.arpa`
- and `10.0.0.1` PTR record is reparented from` in-addr.arpa` to `10.in-addr.arpa.`
- If you delete` 10.in-addr.arpa`, then `10.10.in-addr.arpa` is reparented under in-addr.arpa (depending on the **Remove zone only**/ **Remove all subzones** option) and 10.0.0.1 PTR record is deleted along with 10.in-addr.arpa zone.
- When you remove a zone and reparent its subzones, any subzone that inherited its admin access settings from its previous parent zone (as opposed to having specific access settings for the subzone) now receive their settings from its new parent zone, which might be different. See the following figure Changed Admin Access Settings after Reparenting Subzones.

*Changed* *Admin* *Access* *Settings* *after* *Reparenting* *Subzones*

*[drawio]*

… the admin access settings for subzone C change because the privileges for its new parent zone (zone A) are different from those of its previous parent zone (zone B).  
Before you remove zone B, subzone C inherits a "Deny" admin access setting from zone B. After the removal, subzone C inherits "Read/Write" access from its new parent zone, zone A.  
Note that if you set a specific "Deny" admin access privilege for subzone C before removing its parent zone (zone B), subzone C retains its specified "Deny" setting.

> **warning**
>
> ### Note
> 
> Instead of removing a zone, you can also disable it. For more information, see [*Enabling and Disabling Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/locking-unlocking-enabling-disabling-zones)[.](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Enabling%20and%20Disabling%20Zones&linkCreation=true&fromPageId=280405463)

To remove a zone:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab.
2. Click the checkbox of the zones you want to delete.
3. Click the Delete icon.
4. Select one of the following. Note that these options appear only if you are allowed to delete zones and all its contents. For information about how to configure this, see [*Configuring Recursive Deletions of Networks and Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid/Managing+a+Grid#bookmark684)
   
   - **Remove** **zone** **only:** Select this to remove the zone and all its content. The appliance reparents all subzones to the parent zone of the zone that you want to remove, except for the automatically created AD (Active Directory) subzones.
   - **Remove** **all** **subzones:** Select this to remove the selected zone, all its subzones, and all the resource records of the selected zone and its subzones.
5. Click **Yes**. Grid Manager displays a warning message. Click **Yes **to continue or **No **to cancel the process. Note that this process may take a longer time to complete depending on the size of the data.

You can also schedule the deletion for a later time. Click **Schedule** **Deletion** and in the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Deletions*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-). For information about scheduling recursive deletions of zones, see [*Scheduling New IPAM/DHCP Objects and Associated Port Configurations*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-)*.*
