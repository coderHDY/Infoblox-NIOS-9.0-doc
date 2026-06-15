---
title: "Specifying Secondary Servers"
source: "/space/nios90/1456865883"
pageId: "1456865883"
---
A secondary name server is as authoritative for a zone as a primary server. Like a primary server, a secondary server answers queries from resolvers and other name servers. The main difference between a secondary and primary server is that a secondary server receives all its data from a primary server, or possibly from another secondary server that relays zone data it receives. The zone data passes from a primary to a secondary server (and possibly from that secondary server on to another secondary server). This process is called a zone transfer.  
The advantage of using primary and secondary name servers is that you enter and maintain zone data in one place— on the primary server. The data is then distributed to the one or more secondary servers.  
Secondary servers can be Grid members, external DNS servers or Microsoft DNS servers that are managed by Grid members. In Grid Manager, you can specify the secondary server for a zone when you create it using the *Add* *Authoritative* *Zone* wizard and when you edit an existing zone using the *Authoritative* *Zone* editor. For information on how to add a new zone through the wizard, see [*Configuring Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones). The following procedure describes how to access the editor of a zone.  
To specify a secondary server for an existing zone:

1. From the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative* *Zone* editor, click **Name** **Servers**.
3. Select **Use** **this** **set** **of** **name** **servers.**
4. Click the Add icon and select one of the following options:
   
   - **Grid** **Secondary:** Selects the local appliance as the secondary server (or if the appliance is deployed in a Grid and you want to make a different member the secondary server). See  Adding Grid Secondaries below[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers/Assigning+Zone+Authority+to+Name+Servers#bookmark1773)
   - **Microsoft** **Secondary:** Select this option if you want to specify a managed Microsoft DNS server as a secondary server. See  Specifying Microsoft Secondary Servers below.
   - **External** **Secondary**: Select this option if the appliance is in a Grid and you want to specify a secondary server outside the Grid ("external" to the Grid), or if the appliance is deployed independently from a Grid. See  Specifying External Secondaries below.
5. Save the configuration and click **Restart** if it appears at the top of the screen. or

Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
