---
title: "Restricting Recursive Client Queries"
source: "/space/nios90/1420198595"
pageId: "1420198595"
---
By default, the appliance can serve up to 5000 outstanding recursive client queries. You can change this default value according to your business needs. After you configure the recursive client queries limit, you can enable the appliance to send SNMP traps for recursive queries. Enabling SNMP traps for recursive clients can help you identify possible flood attacks on the DNS recursive server. The appliance sends SNMP traps when the number of recursive client queries exceeds the configured thresholds. For information about how to set the threshold and reset values, see [*Defining Thresholds for Traps*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1406435401).

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.
2. In the *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click the **Advanced** subtab of the **Queries** tab.
4. Select the **Limit number of recursive clients to** option and enter a number. By default, the appliance is allowed to serve up to 5000 concurrent clients that send recursive queries. You can change this default according to your business needs from between 0 to 40000.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
