---
title: "Modifying, Disabling, and Deleting Host and Resource Records"
source: "/space/nios90/1422721290"
pageId: "1422721290"
---
You can modify, disable, or delete an existing host or DNS resource record. When physical repair or relocation of a network device occurs, you can disable a record instead of deleting it. When you disable a record, the NIOS appliance does not answer queries for it, nor does it include disabled records in zone transfers and zone imports. This avoids having to delete and then add the record again. When the changes to the physical device are complete, you can simply enable the host or resource record.  
To modify or disable a host or resource record, perform the following steps:

1. Use one of the following methods to retrieve the host or resource record:
   
   - Perform a global search.
   - Select it from a Smart Folder.
   - From the **Data** **Management** tab, select the **DNS** tab - &gt; **Zones** tab -&gt; *dns_view* -&gt; *zone* -&gt; *host_record* or *resource_record*.
2. Select the record you want to modify and click the Modify icon.
3. In the host or resource record editor, you can do the following:
   
   - In the **General** tab, you can change most of the information, except for the read-only fields, such as the **DNS View** and **Host Name Policy**. You can select the **Disable** checkbox to disable the record.
   - In the **TTL** tab, you can modify the TTL setting. The NIOS appliance also allows you to specify TTL settings for each record. If you do not specify a TTL for a record, the appliance applies the default TTL value of the zone to each record. For information, see [*About Time To Live Settings*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-time-to-live-settings).
   - In the **Extensible Attributes** tab, you can modify the attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - The **Permissions** tab displays if you logged in as a superuser. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
4. Save the configuration and click **Restart** if it appears at the top of the screen.

When you delete host and resource records, Grid Manager moves them to the Recycle Bin. You can use the Recycle Bin to store deleted DNS configuration objects and selectively restore objects to the active configuration at a later time. You can also permanently remove the objects from the Recycle Bin.

> **warning**
>
> ### Note
> 
> You cannot delete automatically-generated records, such as NS records and SOA records.

To delete host and resource record, perform the following steps:

1. Perform a global search to retrieve the record you want to delete.   
   Or  
   From the **Data** **Management** tab, select the **DNS** tab, click the **Zones** tab-&gt; *dns_view* -&gt; *zone* -&gt; *host_record* or *resource_record*.
2. Select the record and click the Delete icon.
3. In the *Delete* *Confirmation* dialog box, select **Yes** to delete or **No** to cancel.
4. Optionally, if the **Enable** **PTR** **record** **removal** **for** **A/AAAA** **records** option is selected and if you try to delete an A or AAAA record, the appliance displays the *Delete* *Confirmation* *(A* *or* *AAAA* *Record)* dialog box to confirm whether you want to remove the corresponding PTR record that was automatically generated while creating the A or AAAA record. In the *Delete* *Confirmation* dialog box, select the **Remove** **associated** **PTR** **resource** **record(s)** checkbox and click **Yes** to delete the associated PTR record or click **No** to cancel. For information about enabling this option, see [*Deleting PTR Records associated with A or AAAA Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/deleting-ptr-records-associated-with-a-or-aaaa-r).  
   Or  
   You can also schedule the deletion for a later time. Click **Schedule** **Deletion** and in the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Deletions*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-).
