---
title: "Enabling DNS Resolution"
source: "/space/nios90/280764908"
pageId: "280764908"
---
You can specify a network server to perform domain name queries and specify up to two name servers for resolving a DNS name. You can specify the IP address of a preferred name server and that of an alternate name server, plus use a search list for performing partial name resolution.  
To enable DNS resolution for a Grid or for an independent appliance or HA pair:

1. **Grid:** From the **Infoblox Grid** tab, select the **Grid Manager** tab, expand the Toolbar and click **Grid Properties** -&gt; **Edit**.  
   **Member:** From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *Grid_member* check box, and then click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the *Grid* *Properties* or *Member* *Properties* editor, select the **DNS** **Resolver** tab, and then enter the following:

- **Enable DNS Resolver:** Select the check box to enable the NIOS appliance to send DNS queries to the preferred or alternate name servers whose IP addresses you specify in the following fields.  
  Click the Add icon and enter the IP addresses (IPv4 or IPv6) of the servers to which the appliance sends queries. The first address that you add is the primary DNS resolver and the second address that you add is the secondary DNS resolver. The appliance attempts to send queries to the servers in the order they are listed if it does not receive a response from a listed name server. To move a server up or down on the list, select it and drag it to its new location or click the up and down arrows.  
  Note that if you are using the Infoblox Subscriber Parental Control feature, set the primary DNS resolver to a loopback address (127.0.0.1) to enable parental control.
- **Search List:** You can define a group of domain names that the NIOS appliance can add to partial queries that do not specify a domain name. For example, if you define a RADIUS authentication home server as "as1", and you list "corpxyz.com" and "hq.corpxyz.com" in the domain group list, then the NIOS appliance sends a query for as1.corpxyz.com and another query for as1.hq.corpxyz.com to the preferred or alternate name server. To specify domain names containing IDNs, manually convert it into punycode and specify domain names in punycode.  
  To add a domain name, click the Add icon and type a domain name in the Search List field. To remove a domain name from the group, select it, and then click **Delete**.

3. Save the configuration and click **Restart** if it appears at the top of the screen.
