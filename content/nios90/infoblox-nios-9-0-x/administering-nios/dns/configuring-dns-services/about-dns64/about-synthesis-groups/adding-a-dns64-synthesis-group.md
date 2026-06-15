---
title: "Adding a DNS64 Synthesis Group"
source: "/space/nios90/1420230831"
pageId: "1420230831"
---
To add a synthesis group:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **DNS64** **Groups** tab, and then click the Add icon.
2. In the *DNS64* *Synthesis* *Group* wizard, complete the following:
   
   - **Name:** Enter a name for the group.
   - **Prefix:** The IPv6 prefix used for the synthesized AAAA records. The default is the well-known prefix 64:FF9B::/96. The prefix length must be /32, /40, /48, /56, /64, and /96, and all bits beyond the specified length must be zero.
   - **Comment:** Optionally, enter additional information about the group.
   - **Disabled:** Select this checkbox if you would like to disable the group at this time. Note that you cannot disable the group if it is the only group that is used by a Grid, member or DNS view that has DNS64 enabled.
   - **Apply** **to** **queries** **requesting** **DNSSEC** **records:** Select this to generate synthesized AAAA records for DNS64 synthesis groups that request DNSSEC data.
3. Click **Next** to define extensible attributes for the synthesis group. For information, see[Managing Extensible Attributes#bookmark868](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)[*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)
4. Save the configuration
