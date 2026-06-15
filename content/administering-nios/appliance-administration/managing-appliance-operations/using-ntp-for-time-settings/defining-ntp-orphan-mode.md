---
title: "Defining NTP Orphan Mode"
source: "/space/nios90/1449263310"
pageId: "1449263310"
---
The NTP orphan mode allows you to configure a stratum value that enables the Grid members to continue serving NTP uninterruptedly using the disconnected NTP service in the absence of external NTP servers of the Grid. When the external NTP servers are reachable again, the Grid connects with the server to serve NTP and derive the NTP stratum values and the Grid automatically switches to the connected mode. For information about orphan mode, see [*Configuring the Orphan Mode*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274375).

To configure a user specified stratum for NTP service on a Grid to use the disconnected NTP services, complete the following:

> **warning**
>
> ### Note
> 
> - Unless a special configuration is required, use the default values. In case you configure the values, keep the configuration as simple as possible.
> - When you select the **Use Default** option for the stratum value of either the Grid Manager or the Grid member, you will not be able to add or edit the stratum values.
> - You can use the `set ntp_stratum` CLI command in maintenance mode to set the local NTP stratum value for both the Grid Manager and member.

1. From the **Infoblox Grid **tab, select the** Grid Manager** tab, expand the Toolbar and click **NTP **->** NTP Grid Config**.
2. In the **Orphan Mode **tab of the *Grid* *NTP* editor, specify the following:
   
   - **Use Default**: Select this if you want to use the default values and do not want to configure the stratum for the Grid Manager and the Grid members. When you select the **Use Default** option, NIOS uses the default stratum value of 12 for the Grid Manager and 14 for the Grid level members.
   - **Grid Manager local NTP stratum**: Specify the NTP stratum value for the Grid Manager, enter a stratum value that is between 2 to 14, both inclusive.
   - **Member local NTP stratum**: Specify the NTP stratum for the Grid members at Grid level, enter a stratum value that is between 3 to 15, both inclusive. However, the minimum NTP stratum value of the member needs to be 1 more than the Grid Manager NTP stratum value.
3. Click **Save & Close** to complete the configuration.

To configure a user specified stratum for NTP service on a member to use the disconnected NTP services, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab -> **Members** tab -> *Grid_member *checkbox. Expand the Toolbar and click **NTP **->** NTP Member Config**.   
   To override a Grid level inherited stratum value, click **Override**. To inherit the same values as the Grid, click **Inherit**.
2. In the **Orphan Mode **tab of the *Member* *NTP* *Properties* editor, specify the following:
   
   - **Use Default**: Select this if you want to use the default values and do not want to configure the stratum value for the Grid Member. When you select the **Use Default** option, NIOS uses the default stratum value of 14 for the Grid member.
   - **Member local NTP stratum**: Specify the NTP stratum value for the Grid member, enter a stratum value that is between 2 to 15, both inclusive. By default, if the Grid Manager is set as the NTP server for the Grid member, then the Grid member will generate the stratum value by using the stratum value of the Grid Manager.
3. Click **Save & Close** to complete the configuration.

The NTP service will restart automatically once the configuration has been modified.
