---
title: "Adding and Configuring Silver Peak SDN"
source: "/space/nios90/1468399924"
pageId: "1468399924"
---
Enabling the discovery of Silver Peak SDN provides visibility into your Silver Peak  SD-WAN elements.

To add and configure Silver Peak SDN, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab, and then click **Discovery**.
2. Select a Probe member, and then click **Edit** > **Member Discovery Properties** in the Toolbar.
3. Click the **SDN/SD-WAN** tab.
4. Click the Add icon and select **Silver Peak**.
5. Complete the following:
   
   - **Config Name**: Specify a short and unique name for the current Silver Peak configuration.
   - **Addresses**: Enter the hostname or IP address of the Silver Peak SDN.
   - **Protocol**: The Protocol will be HTTPS by default.
   - **Network Interface**: Choose the Network Interface that will be used to access the device
   - **Network View**: Select the network view to identify the corresponding network interface for connectivity with the Silver Peak SDN. Also, this network view will be assigned to discovered devices from this SDN.
   - **API Key**: An access key is required to use Silver Peak APIs.
   - **Comment**: Additional information about the Silver Peak device.
   - **Connect using Grid Proxy settings if available**: Select if you want to use the Grid Proxy Server for connectivity to or from the Silver Peak device. If the Proxy is specified in the Grid properties, then Network Insight uses it. For more information, see [*Configuring Proxy Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765075).
6. Click **Test Connection** to check if the device is reachable and the provided credentials are correct. The connection test results are also written to the syslog.
7. Click **Add**.
8. Click **Save & Close**.
