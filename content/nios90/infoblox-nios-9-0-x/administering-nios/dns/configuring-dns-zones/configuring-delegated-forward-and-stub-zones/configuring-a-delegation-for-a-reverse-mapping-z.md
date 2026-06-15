---
title: "Configuring a Delegation for a Reverse-Mapping Zone"
source: "/space/nios90/1432748744"
pageId: "1432748744"
---
To create a delegation for a reverse-mapping zone:

1. From the **Data Management** tab, select the **DNS** tab -&gt; **Zones** tab.
2. Click the parent zone to open it.  
   Grid Manager displays the **Records** and **Subzones** tabs of the zone.
3. From the **Subzones** tab, click the Add icon -&gt; **Zone** -&gt; **Add Delegation**.
4. In the *Add Delegation* wizard, specify the following:
   
   - **IPv4 Network:** This field displays if you are creating a delegation zone for an IPv4 reverse-mapping zone. Enter the IPv4 address for the address space for which you want to define the reverse-mapping zone and select a netmask from the Netmask drop-down list. Alternatively, you can specify the address in CIDR format, such as 192/8.
   - To use an RFC 2317 prefix, select a netmask value that is between 25 to 31, inclusive. Grid Manager displays the following fields:
   - **RFC2317 Prefix:** Enter a prefix in this field. Prefixes can include alphanumeric characters.
   - **Allow manual creation of PTR records in parent zone:** Select this checkbox to allow users to create labels that correspond to IP addresses in the delegated address space in the parent zone.
   - For information about RFC 2317, see [*Specifying an RFC 2317 Prefix*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-reverse-mapping-zone)*.*
   - **IPv6 Network Prefix:** This field displays if you are creating a delegation zone for an IPv6 reverse-mapping zone. Enter the IPv6 prefix for the address space for which you want to define the reverse-mapping zone and select the prefix length from the drop-down list.
   - **Name:** This field displays a dot followed by the domain name of the current zone. Enter one or more labels before the dot to specify the domain name of the subzone.
   - **DNS View:** This field displays only when there is more than one DNS view in the network view. Select a DNS view from the drop-down list.
   - **Comment:** Optionally, enter additional text about the zone.
   - **Disable:** Select this option to temporarily disable this zone. Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock:** Select this option to lock the zone so that you can make changes to it and prevent others from making conflicting changes.
   - The **Sync to MGM** is used for synchronizing the selected zone from the managed Grid to the Multi-Grid Master and is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Use Inherited Setting**: ** **Select this to inherit synchronization settings from the parent level, i.e. the DNS view.
     - **Yes**: Select this to enable synchronization of zones between the managed Grid and Multi-Grid Master.
     - **No**: Select this to disable synchronization of zones between the managed Grid and Multi-Grid Master.
       
       **Note: **  If you have selected **No** at the parent level i.e DNS view (disabled synchronization) and if you try to select **Yes** when adding a zone, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent level.
5. Click **Next** to assign a delegation name server group or define the name servers for the zone. Select one of the following:
   
   - **Use this name server group**: Select this to assign a delegation NS group for the delegated zone. You can select the delegation NS group from the drop-down list.
   - **Use this set of name servers**: Select this to define name servers for the delegated zone. In the *Name Servers* panel, click the Add icon and specify the following information**:**
     
     - **Name:** Enter the name of a remote name server to which you want the local server to redirect queries for zone data. This is a name server that is authoritative for the delegated zone.
     - **Address:** Enter the IP address of the delegated server.
   
   For information about delegation NS groups, see [*Using Delegation Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/using-name-server-groups)*.*
6. Save the configuration and click **Restart** if it appears at the top of the screen, or click **Next** to define extensible attributes as described in [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.* or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

> **warning**
>
> Note
> 
> The DNS server resolves the FQDN of the delegated name server and does not use the IP address that you specify when assigning the delegated name servers.
