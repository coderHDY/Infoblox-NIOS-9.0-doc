---
title: "Juniper Mist Network Solutions"
source: "/space/nios90/1468399895"
pageId: "1468399895"
---
Enabling the discovery of Juniper Mist provides visibility into your Juniper Mist SD-WAN elements, for example:

- Wireless access points
- Switches
- Routers
- Firewalls

To add and configure Juniper Mist discovery, do the following:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab, and then click **Discovery**. The Grid Manager tab will be automatically chosen as the default selection.
2. Under the **Services** tab, select a Probe member. The **Edit** icon becomes active when you select the Probe member.
3. Click the **Edit **icon.
4. Click the **SDN/SD-WAN** tab from the left navigation pane.
5. Click the drop-down next to the Add icon.
6. Select **Juniper Mist**. The **Add Juniper Mist Configuration** page will be displayed.
7. Complete the following:
   
   - **Config Name**: Specify a short and unique name for the current Juniper Mist configuration.
   - **Address**: Enter the hostname or IP address of the Juniper Mist Dashboard API. By default, it is *api.mist.com*.
   - **Protocol**: This field is populated as **HTTPS** automatically and is not editable.
   - **Network Interface**: Select the interface for accessing the device.
   - **API Key**: An access key required to use Juniper Mist APIs.
   - **Comment**: Additional information about the Juniper Mist device.
   - **Connect using Grid Proxy settings if available**: Select if you want to use the Grid Proxy for connectivity to or from the Juniper Mist device. If the Proxy is specified in the Grid properties, then Network Insight uses it. For more information, see [*Configuring Proxy Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-proxy-servers).
8. Click **Test Connection** to check if the device is reachable and the provided credentials are correct. The connection test results are also logged to syslog.
9. Click **Add**.
10. Click **Save & Close**.
