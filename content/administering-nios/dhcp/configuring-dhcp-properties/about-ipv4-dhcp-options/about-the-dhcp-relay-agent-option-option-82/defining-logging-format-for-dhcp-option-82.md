---
title: "Defining Logging Format for DHCP Option 82"
source: "/space/nios90/1331299409"
pageId: "1331299409"
---
When you define the circuit ID or remote ID of the relay agent as a host identifier, you can choose the logging format Grid Manager uses to display the IDs in the detailed lease information panel. For information about viewing lease information, see [*Viewing Detailed Lease Information*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662976).  
To define logging format for the agent ID, circuit ID and remote ID, complete the following:

1. **Grid:** From the **Data Management** tab, select the **DHCP** tab, and then click **Grid DHCP Properties** from the **Toolbar**.  
   **Independent Appliance:** From the **Data Management** tab, select the **DHCP** tab, and then click **System DHCP Properties.**
2. In the *Grid DHCP Properties* or *System DHCP Properties* editor, select the **General** tab -> **Advanced** tab.
3. Select one of the following for **Logging format for Option 82**:
   
   - **Hexadecimal**: When you select this, Grid Manager displays the agent ID, circuit ID, and remote ID in hexadecimal format in the detailed lease information. This is the default format.
   - **Plaintext**: When you select this, Grid Manager displays the agent ID, circuit ID, and remote ID in plain text in the detailed lease information.

> **warning**
>
> ### Note
> 
> You cannot override this Grid setting at the member level. Also, changing the logging format requires a DHCP service restart.
