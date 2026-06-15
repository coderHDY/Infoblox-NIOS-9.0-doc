---
title: "Assigning a Credential Group"
source: "/space/nios90/1343292952"
pageId: "1343292952"
---
Probe members, networks and ranges inherit the credential groups assignment from the Grid. You can override this assignment with another credential group for networks and ranges. For members, you cannot assign a credential group as they always use the default group for credential guessing.

### Assigning a Credential Group to the Grid

To assign credentials to the Grid, complete the following:

1. Go to **Infoblox Grid** > **Grid Manager** > **Discovery**.
2. In the **Toolbar**, click **Edit** > **Grid Discovery Properties**.
3. On the **Polling** tab.
4. For **Credential Group**, select the required credential group.
5. Save the configuration.

### Assigning a Credential Group to Network or Network Container

To assign credentials to an IPv4/IPv6 network or network container, complete the following:

1. Go to **Data Management** > **IPAM** or **DHCP**.
2. Click the name of an existing network or network container.
3. Click the Edit icon.
4. Click the **Discovery** tab.
5. **Credential Group**: The field displays the selection inherited from the Grid unless you override it. Click **Override** and select the required credential group.
6. Save the configuration.

### Assigning a Credential Group to DHCP Network or Range

To assign credentials to a DHCP range, complete the following:

1. Go to **Data Management** > **DHCP**.
2. Click the name of an existing IPv4/IPv6 network.
3. Click the Add or Edit icon > **Range**.
4. Click the **Discovery** tab.
5. **Credential Group**: The field displays the selection inherited from the Grid unless you override it. Click **Override** and select the required credential group.
6. Save the configuration.
