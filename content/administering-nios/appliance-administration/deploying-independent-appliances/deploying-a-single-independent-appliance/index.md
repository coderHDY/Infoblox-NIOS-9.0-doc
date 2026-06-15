---
title: "Deploying a Single Independent Appliance"
source: "/space/nios90/280274626"
pageId: "280274626"
---
To deploy a single independent NIOS appliance, connect its LAN1 port to the network and change its default IP settings so that it can connect to its surrounding IP address space. The default LAN settings are as follows:

- IP address: 192.168.1.2
- Netmask: 255.255.255.0
- Gateway: 192.168.1.1

When deploying a single independent appliance, you can use one of the following methods to set up the initial configuration:

- *Method 1 - Using the CLI*
  
  - Requirements: A serial connection from your management system to the console port on the NIOS appliance. You can also enable remote console access so that you can use the CLI over a network connection. For more information, see [*Restricting GUI/API  Access*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)
  - Advantage: You do not need to change the IP address of the management system to connect to the NIOS appliance.
- *Method 2 - Using the Infoblox NIOS Startup Wizard*
  
  - Requirements: An HTTPS connection from your management system to the LAN1 port on the NIOS appliance.
  - Advantage: The wizard provides step-by-step guidance for changing not only the IP settings for the LAN1 port, but also changing the appliance host name and admin password, setting the system clock, and—if using NTP (Network Time Protocol)—enabling the NIOS appliance to be an NTP client.

Note that you can configure network settings using the Startup wizard any time after you have configured the appliance. To start the wizard, from System Manager, select the **System** tab, and then click **System** **Properties** -> **Startup** **Wizard** from the Toolbar.  
  
After you configure the network settings on a single independent appliance, you can migrate data from legacy DNS and DHCP servers to the NIOS appliance. Several tools and methods are available for migrating data and configuration settings. For a list of the available options, see [*Infoblox Tools for Migrating Bulk Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407560)*.*
