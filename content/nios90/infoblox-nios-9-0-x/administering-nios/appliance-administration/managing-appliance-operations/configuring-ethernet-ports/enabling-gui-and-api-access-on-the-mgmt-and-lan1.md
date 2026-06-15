---
title: "Enabling GUI and API Access on the MGMT and LAN1/VIP Ports"
source: "/space/nios90/1327333412"
pageId: "1327333412"
---
You can access the Infoblox GUI and API through the MGMT and LAN1 or VIP interfaces simultaneously. To do so, you must first configure the MGMT port on the appliance, and then enable the **Enable** **GUI/API** **Access** **via** **both** **MGMT** **and** **LAN1/VIP** feature. For information about the MGMT port, see [*Using the MGMT Port*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port). When you enable this feature, you can use the MGMT and LAN1ports for standalone appliances and MGMT and VIP ports for an HA pair. This feature is disabled for all new installations and upgrades.

> **warning**
>
> ### Note
> 
> When the DNS Infrastructure Protection service is running on the Advanced Standalone Appliance, then the GUI and API access is allowed only on the MGMT port.

To enable GUI and API access on the MGMT and LAN1/VIP ports:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and select **Grid** **Properties** -&gt; **Edit**.
3. In the *Grid* *Properties* editor, select the **General** tab -&gt; click the **Advanced** tab (or click Toggle Advanced Mode) and complete the following:
   
   - **Enable** **GUI/API** **Access** **via** **both** **MGMT** **and** **LAN1/VIP**: Select this checkbox to allow access to the Infoblox GUI and API using both the MGMT and LAN1 ports for standalone appliances and allow both the MGMT and VIP ports for an HA pair. This feature is valid only if you have enabled the MGMT port. For information about enabling the MGMT port, see .
4. Click Save to save the changes.
