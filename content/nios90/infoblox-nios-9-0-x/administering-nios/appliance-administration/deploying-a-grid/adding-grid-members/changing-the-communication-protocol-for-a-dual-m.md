---
title: "Changing the Communication Protocol for a Dual Mode Appliance"
source: "/space/nios90/1483637004"
pageId: "1483637004"
---
You can change the default communication protocol for a dual mode appliance. You can force the appliance to use a specific protocol to join the Grid Master and for the reporting services. But for services with two types of resolution (A and AAAA records), you can set the preferred communication protocol.  
To change the communication protocol for a dual mode appliance:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
2. In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Basic** tab, and then complete the following:
   
   - **Communication** **Protocol** **Settings** **and** **Preferences**: This setting is not applicable for an HA pair. Select either **IPv4** or **IPv6** from the drop-down list. This setting will force the appliance to use the specified protocol for Grid and reporting services and this is the preferred protocol for services with two types of resolution (A and AAAA records).
   - **Customized** **Settings**: Select this and do the following:
     
     - **Always** **use** **this** **Communications** **Protocol** **for**: For a Grid Master, you can select either **IPv4** or **IPv6** from the **Reporting** drop-down list. This setting will force the Grid Master to use the specified communication protocol for reporting service. For a Grid member, you can select either **IPv4** or **IPv6** from the **Grid** and **Reporting** drop-down list. This setting will force the Grid member to use the specified communication protocol for Grid and reporting service.
     - **Always** **Prefer** **this** **Communications** **Protocol** **for**: This field lists the services which has two types of resolution (A and AAAA records). Select either **IPv4** or **IPv6** from the drop-down list for the service which you want the appliance to use this as the preferred communication protocol. The appliance uses the preferred protocol first for the service.
