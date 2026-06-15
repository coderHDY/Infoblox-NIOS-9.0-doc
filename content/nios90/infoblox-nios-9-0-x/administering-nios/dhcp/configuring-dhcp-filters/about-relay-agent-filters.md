---
title: "About Relay Agent Filters"
source: "/space/nios90/280761466"
pageId: "280761466"
---
The NIOS appliance can filter an address request by the circuit ID and remote ID of a requesting host. The filter instructs the appliance either to grant or deny an address request if the requesting host matches the filter. For information about the DHCP relay agent option, see as described in [About the DHCP Relay Agent Option (Option 82)](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).  
Option 82 assists the agent in forwarding address assignments across the proper circuit. When a relay agent receives a DHCPDISCOVER message, it can add one or two agent IDs (circuit ID or remote ID) in the DHCP option 82 suboption fields to the message, as illustrated in the figure Relay Agent Filtering below. If the agent ID strings match those defined in a relay agent filter applied to a DHCP address range, the appliance either assigns addresses from that range or denies the request based on the configured parameters.   
  
*Relay* *Agent* *Filtering*

*[drawio]*

To apply a relay agent filter to an address range:

1. Define a relay agent filter. For information, see Defining Relay Agent Filters below*.*
2. Apply the filter to a DHCP address range or range template, and specify that if the circuit ID or remote ID of a requesting host matches the filter definition, the appliance either grants or denies the address assignment. For information, see *[Applying Filters to DHCP Objects](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)**.*
3. Define the access privileges of limited-access admin group for relay agent filters. For information, see *[Managing Administrators](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators)*.

# Defining Relay Agent Filters

To define a relay agent filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4** **Relay** **Agent** **Filter**.  
   or  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -&gt; **IPv4** **Relay** **Agent** **Filter**.
2. In the *Add* *IPv4* *Relay* *Agent* *Filter* wizard, complete the following:
   
   - **Name**: Enter a meaningful name for the filter. For example, you can enter the IP address or the name of the router acting as the relay agent. The name must be unique within a specific network.
   - **Comment**: Enter useful information about the filter.
3. Click **Next** to define the relay agent ID type. If you apply both ID types, the relay agent must provide both identifiers when submitting a DHCP address request.  
   Select one of the following for both **Circuit** **ID** and** ** **Remote** **ID:**
   
   - **Any**: Select this and the filter matches any of the circuit identifiers for remote hosts. You cannot select this for circuit ID and remote ID at the same time.
   - **Not**** Set**: Select this and no circuit identifier is set for remote hosts.
   - **Matches ****Values**: Select this and enter the circuit ID or remote ID in the field. You can enter the ID in hexadecimal format, such as 1f:cd, ab, or ef:23:56, or in string format, such as abcd or aa:gg. The appliance matches the value you enter here with the value sent by the DHCP client in counted octet sequence format. This field supports wildcard characters and regular expressions. You can also select to have an exact match or a substring match, as follows:
     
     - **Exact**** Match**: Select this to match the exact value sent by the DHCP client that contains the value you entered in the **Matches**** Values** field.
     - **Substring**: Select this to match a substring of the value sent by the DHCP client. Enter the **Offset** and **Length** values for the substring match, as follows:
       
       - **Offset**: Enter the number of characters at which the match value for the substring starts. Enter 0 to start at the beginning of the value, enter 1 for the second position, and so on. For example, when you enter 2 and have a substring value of AFTR, the appliance matches the value AFTR starting at the third character of the match value.
       - **Length**: Enter the length of the substring value. For example, if the match value is AFTR, the length is 4.
4. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see *[Using Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

After you define a relay agent filter, you can assign it to a DHCP range. The appliance responds to address requests based on the filter criteria. For information, see *[Applying Filters to DHCP Objects](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)*.
