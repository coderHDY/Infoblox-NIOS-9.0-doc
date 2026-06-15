---
title: "About the Client FQDN Option"
source: "/space/nios90/280405256"
pageId: "280405256"
---
When an IPv4 DHCP client sends DHCP DISCOVER and DHCP REQUEST messages, it can include option 81, the Client FQDN option. An IPv6 DHCP client can include option 39, the Client FQDN option, when it sends Solicit and Request messages.  
The Client FQDN option contains the FQDN (fully qualified domain name) of the client and instructions on whether the client or the server performs DDNS updates. You can configure the appliance to replace the FQDN in the option by defining a hostname rewrite policy. For information about adding and enabling a hostname rewrite policy, see [*Replacing Host Names for DDNS Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272318).  
The DHCP server can support option 81 for IPv4 and IPv6 clients, and use the host name or FQDN that the client provides for the update. It can also allow or deny the client's request to update DNS, according to the administrative policies of your organization. The DHCP server indicates its response in the DHCP OFFER message it sends back to an IPv4 client, and in the Reply message it sends back to an IPv6 client.

# Sending Updates with the FQDN Option Enabled

When you enable the DHCP server to support the FQDN option, it uses the information provided by the IPv4 or IPv6 client to update DNS as follows:

- When an IPv4 or IPv6 DHCP client sends a DHCP request with the FQDN option, it can include either its FQDN or only its host name.
  
  - If the request includes the FQDN, the DHCP server uses this FQDN to update DNS. You can specify a list of forward-mapping zones to be updated for IPv4 and IPv6 clients using the FQDN option. For information, see Sending Updates for DHCP Clients Using the FQDN Option below.
  - If the request includes the host name, the DHCP server provides the domain name. It combines the host name of the client and the domain name to create an FQDN for the client. It then updates DNS with the FQDN it created. (You can enter the domain name in the General page of the DHCP Properties window. For information, see [*Enabling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*DDNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*for*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*IPv4*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*and*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*IPv6*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923)[*Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1923).
- When a DHCP client sends a DHCP request with its hostname, the DHCP server adds the domain name you specified to create an FQDN for the client. It then updates DNS with the FQDN it created. For information about entering the domain name, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554).
- When a DHCP client does not send a host name, the DHCP server provides a lease but does not update DNS. You can configure the DHCP server to generate a host name and update DNS as described in [*Generating Host Names for DDNS Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272318).
- If multiple DHCP clients specify the same FQDN or host name, the DHCP server allocates leases to the clients, but updates DNS only for the client that first sent the request. When it tries to update DNS for the succeeding clients, the update fails.

# Sending Updates from DHCP Clients or a DHCP Server

When you enable the DHCP server to support the FQDN option, you must decide if you want the DHCP server to allow clients to update DNS. If you allow the client to update DNS, then the client updates its A or AAAA record only. The DHCP server always updates the PTR records. You can configure the DHCP server as follows:

- The DHCP server can allow clients to update DNS when they send the request in the FQDN option. This is useful for small sites where security is not an issue or in sites where clients move from one administrative domain to another and want to maintain the same FQDN regardless of administrative domain.  
  If you configure the DHCP server to allow clients to perform DDNS updates, you must also configure the DNS server to accept these updates from clients. Note that multiple clients can use the same name, resulting in multiple PTR records for one client name.  
  When a lease expires, the DHCP server does not delete the A or AAAA record, if it was added by the client.
- The DHCP server can refuse the DHCP client's request to update DNS and always perform the updates itself. When the DHCP server updates DNS, it uses the FQDN provided by the DHCP client. Select this option if your organization requires tighter control over your network and does not allow clients to update their own records.

If you do not enable support for the FQDN option and a client includes it in a DHCP request with its FQDN, the DHCP server does not use the FQDN of the client. Instead, it creates the FQDN by combining the host name from the client with the domain name specified in the Grid or Member DHCP Configuration editor.  
Do the following to configure support for the FQDN option for both IPv4and IPv6 clients:

- Enable support for the option and specify who performs the DDNS update. For more information, see Enabling FQDN Option Support velow.
- Specify the DNS zones and DNS view for the updates. For more information, see Sending Updates for DHCP Clients Using the FQDN Option below.

# Enabling FQDN Option Support

You can configure support for the FQDN option for IPv4 and IPv6 clients at the Grid, member, network and shared network levels.  
To configure support for the FQDN Option (option 81) for IPv4 and (Option 39) for IPv6:

1. **Grid:** From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid** **DHCP** **Properties**.   
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Members** tab -> *member* checkbox -> Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Networks** tab -> **Networks** -> *network* checkbox -> Edit icon.  
   **Shared** **Network**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Networks** tab -> **Shared** **Networks** -> *shared_network* checkbox -> Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the **IPv4** **DDNS** -> **Advanced** tab for the Grid and member, or the **IPv4** **DDNS** -> **Basic** tab for the network, do the following:
   
   - **Option** **81** **Support**
     
     - **Enable** **Option** **81** **Support:** Select this to enable the support for option 81.
     - **DHCP** **server** **always** **updates** **DNS:** Select this to allow the DHCP server to update DNS, regardless of the requests from DHCP clients.
     - **DHCP** **server** **updates** **DNS** **if** **requested** **by** **client:** Select this to allow the DHCP server to update DNS only when requested by DHCP clients.
3. In the **IPv6** **DDNS** -> **Advanced** tab for the Grid and member, or the **IPv6** **DDNS** -> **Basic** tab for the network, do the following:
   
   - **FQDN** **Support:** Select **Enable** **FQDN** **Support** and select one of the following to indicate whether the DHCP server or the client performs the DDNS update.
     
     - DHCP always updates DNS
     - DHCP updates DNS if requested by client
4. Save the configuration and click **Restart** if it appears at the top of the screen.

When a lease expires, the DHCP server removes the A or AAAA records and PTR records that it updated. It does not remove any records that the client updated.

# Sending Updates for DHCP Clients Using the FQDN Option

You must specify the DNS view to be updated for each network view.  
To send updates to zones for DHCP IPv4 and IPv6 clients using the FQDN option:

1. If there are multiple network views in the Grid, select a network view.
2. From the **Data** **Management** tab, select the **DHCP** tab, and then click **Configure** **DDNS** from the Toolbar.
3. In the *DDNS* *Properties* editor, complete the following:
   
   - **DNS** **View:** If a network view has more than one DNS view, this field lists the associated DNS views. From the drop-down list, select the DNS view to which the DHCP server sends DDNS updates. Otherwise, the appliance uses the default DNS view.
   - **Zones** **to** **Update** **for** **Hosts** **Using** **DHCP** **FQDN** **Option:** In this section, you can define forward-mapping zones to which the DHCP server sends DDNS updates for IPv4 and IPv6 DHCP clients that use the FQDN option. You must first enable support for the FQDN option before the DHCP server can send DDNS updates to these zones. By default, the DHCP server sends DDNS updates to zones using the domain name that you define for DHCP objects, such as networks and DHCP ranges. For clients using this option, the DHCP server uses the domain name defined in the option.  
     Click the Add icon to specify a forward-mapping zone. Note that the Forward-mapping Zone Selector dialog box displays only the DNS zones that are associated with the selected DNS view. The zones you select here are written to the dhcpd.conf file and the dhcpdv6.conf file as "zone" statements with the matching TSIG key of the DNS view, so the updates are sent to the correct DNS view.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
