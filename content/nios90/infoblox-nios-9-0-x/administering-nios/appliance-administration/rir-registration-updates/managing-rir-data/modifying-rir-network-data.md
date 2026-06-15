---
title: "Modifying RIR Network Data"
source: "/space/nios90/1423671458"
pageId: "1423671458"
---
You can modify certain RIR network information in the **RIR** **Registration** tab of the *IPv4* *and* *IPv6* *Network* editors. To modify RIR network information, complete the following:

1. From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network* checkbox, and then click the Edit icon.   
   or  
   From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* checkbox, and then click the Edit icon.
2. In the *IPv4* or *IPv6* *Network* *Container* or *Network* editor, click the **RIR** **Registration** tab, and then complete the following to modify RIR related data for the IPv4 or IPv6 network container or network:
   
   - **Internet** **Registry**: Displays the RIR that allocates RIR address blocks. The default is **RIPE**. You cannot change this.
   - **Organization** **ID**: Displays the organization ID with which this network is associated. You cannot change this.
   - **Registration** **Status**: Displays the current registration status. This can be **Registered** or **Not** **Registered**.  
     **Registered** indicates that the network has a corresponding entry in the RIPE database. Note that when you select **API** as the communication method, the registration status will be updated automatically after the registration update is completed. However, when you select **Email** as the communication method, the registration status will not be automatically updated. You can modify this by selecting the appropriate status from the drop-down list.
   - **Status** **of** **last** **update**: Displays the registration status, communication method, timestamp of the last registration update. The status can be Pending, Sent, Succeeded, or Failed. The displayed timestamp reflects the timestamp used on the Grid Master. Each time you send a registration update to create, modify, or delete a network container or network, the updated status and timestamp will be displayed here. If you have selected not to send the registration update, the previous status and timestamp are retained.
   - **Registration** ** Action**: From the drop-down list, select what you want to do with the RIR network updates. If you are creating a top-level network block that has already been assigned to the organization, select **None**. If you are creating a child network within the allocated address block, you can select one of the following:
     
     - **None**: The appliance does not submit the updates.
     - **Create**: The appliance creates the network container or network for the specified organization.
     - **Modify**: Modifies data for this network container or network.
     - **Delete**: Deletes the RIR network from the organization. When you select this, you must enter a reason for deleting this entry in the **Delete ** **Reason** field.
   - **Do** **not** **update** **registrations**: By default, the appliance sends updates to RIPE if you specify **Create**, **Modify**, or **Delete** as the registration action. Select this if you do not want the appliance to submit updates to the RIPE database.
   
   **RIR** **Network** **Attributes**: Modify the value of RIR network attributes by clicking the **Value** field of an attribute and entering a new value. You can add a new RIR network attribute by clicking the Add icon and selecting an attribute from the drop-down list. You can also select any optional attributes and click the Delete icon to delete them. For information about RIR network attributes, see [*RIR Network Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-attributes/rir-network-attributes).  
   You can enter up to 256 characters for all RIR network attributes, unless otherwise noted.  
   **Preview** **RIR** **Submissions**: Click this to view the updates before the appliance submits them to the RIPE database. This button is enabled only when the registration action is **Create**, **Modify**, or **Delete**, and the **Do** **not** **update** **registrations** checkbox is not selected. For more information, see [*Previewing Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/monitoring-rir-data/Monitoring+RIR+Data#Previewing-Registration-Updates).   
   To schedule this task, click the Schedule icon at the top of the wizard. In the Schedule Change panel, click **Later**, and then specify a date, time, and time zone.
3. Save the configuration.
