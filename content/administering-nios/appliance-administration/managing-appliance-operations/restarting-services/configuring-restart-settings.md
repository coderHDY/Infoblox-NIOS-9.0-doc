---
title: "Configuring Restart Settings"
source: "/space/nios90/1356236243"
pageId: "1356236243"
---
To configure the service restart settings for the Grid:

1. Click **Infoblox** **Grid–> Grid Manager–>DHCP** or **DNS** tab.
2. In the toolbar, click **Edit–>Grid DHCP Properties** or **Grid DNS Properties**.
3. Click **Toggle Advanced Mode–>Restart**.
4. If necessary, modify the service restart settings:

- **Delay** **between** **Restart** **Groups**. This is the delay between the restarts of separate restart groups. The default is 10 seconds.

> **warning**
>
> ### Note
> 
> If the delay time from the previous group restart has not elapsed yet, the new restart requests are displayed with the Pending restart status. To speed up the new restarts, you change the delay between restart groups to a smaller value at any time.

- **Member** **Restart** **Timeout**. This is the amount of time that the appliance waits for a response from a member. The default is 1 minute.

1. Optionally, select the checkbox **Apply** **restart** **requests** **to** **offline** **members** **when** **they** **connect**.

1. Click** Save & Close**.
