---
title: "Using the List Panel Action Menu"
source: "/space/nios90/1345063109"
pageId: "1345063109"
---
The IP address **List** panel provides an Action icon  with a series of menu options for features related to IP address management and IP data management under IPAM. Menu choices change based upon the context and the current state of IP addresses in the table; features available in the List panel action menu include the following:

- (*Applies* *only* *with* *Network* *Insight*) View **Router** **Redundancy** information for discovered IP addresses in an IPv4 network. For active VIPs, you will see several sets of related information:



*Virtual* *IPs* *and* *discovered* *redundancy* *information*

*[image: media]*



- **Active**: lists the active interface in the redundancy pair;
- **VIP**: The Virtual IP for the router redundancy pair;
- **Standby**: The standby IP interface for the router redundancy.

Discovery of all three IP components of the Router Redundancy instance also provides related information for all three IP entities:

- **Show** **IPAM** **Address**: opens the IPAM page to the listed IP address;
- **VIP**: Opens the virtual interface in the host device's Interfaces page;
- **Associated** **router**: The third item lists the hostname router for each of the three IP address entities comprising the redundancy instance. The currently active router will be identified with the **Active** and **VIP** objects; the second **Standby** router is identified with the **Standby** IP address.
- **Show** **Interfaces** **View**: Displayed only if there is a device interface associated with this IP address. It displays the interface name. Clicking the interface name opens the interfaces list view for that device. The interfaces list view is pre-populated with the interface name.
- **Assets** **View** **–>** **Show** **Assets**: Opens the IP address's list of network assets that are connected to the IP address or reachable through the IP address in some way, such as through a routable path. Provides a quick look at basic connectivity provided by the selected IP address; for more information about Assets views, see [*Viewing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[*Assets*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[*Associated*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[*with*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[*Discovered*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106)[*Devices*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106).
- **Clear**: Allows you to remove data associated with the currently selected IP address, form three categories:
  
  - **Clear** **Lease**: If the IP interface gets its configuration from a DHCP lease, choosing this option will clear the IP's DHCP configuration. Applies only to IP addresses that are fully managed through IPAM;
  - **Clear** **Unmanaged** **Data**: Clears the discovered data for an unmanaged IP address;
  - **Clear** **Discovered** **Data**: Clears discovered data from the IPAM object, and re-launches discovery afterwards if necessary.
- **Convert**: Conversion feature to convert the currently unmanaged IP address to an object fully managed by IPAM: **Network**, **To** **Host**, **To** **A** **Record**, **To** **PTR** **Record**, or **To Fixed** **Address**. (For related information, see [*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*Discovered*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086), [*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*Host*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779), [*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*A*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)and [*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*PTR*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656).)
- **Discover** **Now**: Requests Grid Manager to execute discovery on the selected IP address.
- **Exclusion**: Exclude or disable exclusion of the current IP address from discovery. For related information, see [*Excluding*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[*IP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[*Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[*from*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[*Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210).
- **Show** **Active** **Users**: Displays all the users who are currently active on the selected network. For information, see[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[*Viewing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[*Active*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[*Network*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)[*Users*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411).
