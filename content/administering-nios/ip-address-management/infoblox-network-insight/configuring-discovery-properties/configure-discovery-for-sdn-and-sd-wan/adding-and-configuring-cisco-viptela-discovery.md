---
title: "Adding and Configuring Cisco Viptela Discovery"
source: "/space/nios90/1343325490"
pageId: "1343325490"
---
Enabling discovery of Cisco Viptela devices provides visibility into your Viptela SDN/SD-WAN infrastructure. You can use Viptela as an on-premise SDN controller or as a cloud solution.

To add and configure Cisco Viptela discovery, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab, and then click **Discovery**.
2. Select a Probe member, and then click **Edit** > **Member Discovery Properties** in the **Toolbar**.
3. Click the **SDN/SD-WAN** tab.
4. Click the Add icon and select **Viptela**.
5. Complete the following:
   
   - **Config Name**: Specify a short and unique name for the current Viptela configuration.
   - **Address**: Enter the hostname or IP address of the Viptela vManage controller.
   - **On-premise controller**: Check this if your Viptela setup is on-premises.
   - **Protocol**: Select **HTTP** or **HTTPS**.
   - **Network Interface**: Select the interface that will be used to access the device.
   - **Network View**: Select the network view in which the discovered Viptela devices will be shown.
   - **Username**: The login name for the Viptela vManage controller.
   - **Password**: The login password.
   - **Comment**: Additional information about the Viptela vManage controller.
   - **Connect using Grid Proxy settings if available**: Select if you want to use the Grid Proxy for connectivity to or from the Viptela. If the Proxy is specified in the Grid properties, Network Insight uses it.
6. Click **Test Connection** to check if the device is reachable and the provided credentials are correct. The connection test results are also written to the syslog.
7. Click **Add**.
8. Click **Save & Close**.
