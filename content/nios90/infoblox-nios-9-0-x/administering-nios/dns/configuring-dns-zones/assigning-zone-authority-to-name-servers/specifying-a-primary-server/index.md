---
title: "Specifying a Primary Server"
source: "/space/nios90/1457193490"
pageId: "1457193490"
---
When you create a zone, the primary server can be a Grid member, an external DNS server that you specify, or a Microsoft DNS server that is managed by a Grid member. For information about managing Microsoft Windows DNS servers, see [*About Managing Microsoft Windows Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/about-managing-microsoft-windows-servers).  
Although a zone typically has only one primary server, you can specify multiple primary servers for an authoritative zone. You can configure multiple Grid primaries or multiple external primaries (including Microsoft AD-integrated servers) for a zone, but you cannot configure both at the same time for the same zone. In addition, you can configure one Microsoft server, but not multiple Microsoft servers (except for Microsoft AD-integrated servers), as the primary server for a zone. Note that each primary server that you configure for a zone has its own MNAME for the SOA record and serial number. For information about how to view and modify certain values in the SOA record, see [*Viewing and Modifying SOA Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-delegated-forward-and-stub-zones)  .  
A hidden primary provides data to its secondary servers, which in turn respond to DNS queries using this data. One of several advantages of this approach is that you can take the primary server offline for administrative or maintenance reasons without causing a disruption to DNS service (within the expiration interval set for the validity of its zone data—the default is 30 days).  
When you add an authoritative forward-mapping zone and assign responsibility for the zone to a primary name server whose host name belongs to the name space of the zone, the NIOS appliance automatically generates an NS (name server) record and an A (address) record for the name server. This type of A record is called a glue record because it "glues" the NS record to the IP address (in the A record) of the name server.  
In Grid Manager, you can specify the primary server for a zone when you create it using the *Add* *Authoritative* *Zone* wizard or when you edit an existing zone using the *Authoritative* *Zone* editor. For information on how to add a new zone through the wizard, see [*Configuring Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones). The following procedure describes how to access the editor of a zone. To specify a primary server for an existing zone:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative* *Zone* editor, click **Name** **Servers**.
3. Select **Use** **this** **set** **of** **name** **servers.**
4. Click the Add icon and select one of the following options for a primary server:
   
   - **Grid** **Primary:** Choose this option to select a Grid member as the primary server for the zone. See  Specifying Grid Primary Servers below.
   - **Microsoft** **Primary:** Choose this option to select a Microsoft DNS server as the primary server for the zone. See  Specifying Microsoft Primary Servers below.
   - **External** **Primary:** Choose this option if the appliance is in a Grid and you want to specify a primary server outside the Grid ("external" to the Grid). See  Specifying External Primary Servers below.
5. Save the configuration and click **Restart** if it appears at the top of the screen. or

Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

**Specifying** **Grid** **Primary** **Servers**   
In the *Add* *Grid* *Primary* panel, do the following, and then click **Add** to add the Grid member to the list of name servers for the zone as primary:

- If no member is displayed, click **Select** to specify a Grid member. When there are multiple members, Grid Manager displays the *Member* *Selector* dialog box from which you can select a primary name server. To select multiple primary servers, click **Select** and then **Add** again.
- **Stealth:** Click this to hide the NS record for the primary name server from DNS queries. The NIOS appliance does not create an NS record for the primary name server in the zone data. Clear the checkbox to display the NS record for the primary name server in responses to queries.
