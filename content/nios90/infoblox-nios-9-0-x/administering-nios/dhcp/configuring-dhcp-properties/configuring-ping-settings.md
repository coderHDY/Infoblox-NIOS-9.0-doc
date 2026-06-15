---
title: "Configuring Ping Settings"
source: "/space/nios90/280271401"
pageId: "280271401"
---
When a DHCP client first tries to connect to a network, it broadcasts its request for an IP address. When the appliance receives such a request, it checks its record of assigned IP addresses and leases. Because there are a limited number of IP addresses available, the appliance reassigns IP addresses whose leases might have expired. Therefore, once the appliance selects a candidate IP address for lease, it sends an ICMP echo request (or ping) to the IP address to verify that it is not in use.

If the appliance receives a response, this indicates that the IP address is still in use. Note that the lease status for this IP address is **Abandoned**. Only after the DHCP client broadcasts a new request for an IP address that the appliance selects another candidate IP address and sends it a ping. This flow continues until the appliance finds an IP address that does not respond to the ping as depicted in the figure Ping Overview below. The appliance then sends a DHCPOFFER message with the unused IP address to the DHCP client.   
  
*Figure* *26.1* *Ping* *Overview*

*[drawio]*

By default, the appliance pings the candidate IP address once and waits one second for the response. You can change these default settings to better suit your environment. Though you can increase the ping or timeout value to accommodate delays caused by problems in the network, increasing any of these values increases the delay a client experiences when acquiring a lease. You can also disable the appliance from sending pings by changing the number of pings to 0.

You can define ping settings for an entire Grid, and when necessary, define different ping settings for a member. Settings at the member level override settings at the Grid level.

To configure ping settings:

1. **Grid**: From the **Data ****Management** tab, select the **DHCP** tab, and then click **Grid**** DHCP ****Properties** from the Toolbar.  
   **Member**: From the **Data ****Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.
2. In the *DHCP **Properties* editor, click **Toggle**** Advanced**** Mode** if the editor is in basic mode. When the additional tabs appear, click the **General** tab -&gt; **Advanced** tab and complete the following:
   
   - **Number**** of ****Ping**** Requests**: Enter the number of pings the appliance sends to an IP address to verify that it is not in use. The range is 0 to 10, inclusive. Enter 0 to disable DHCP pings.
   - **Ping**** Timeout**: Select the ping timeout value from the drop-down list.

3. Save the configuration and click **Restart** if it appears at the top of the screen.
