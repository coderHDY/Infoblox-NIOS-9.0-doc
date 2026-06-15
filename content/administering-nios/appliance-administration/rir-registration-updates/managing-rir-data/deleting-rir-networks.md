---
title: "Deleting RIR Networks"
source: "/space/nios90/1423638754"
pageId: "1423638754"
---
When you delete an RIR network or network container, the appliance moves it to the Recycle Bin, if enabled. You must enter the reason for deleting the RIR network or network container and indicate whether you want to send the deletion update to RIPE. You can delete multiple networks at the same time.  
To delete an RIR network or network container:

1. From the **Data** **Management** tab, select the **IPAM** tab -> *network* checkbox, and then click the Delete icon. You can choose to delete the network immediately or schedule its deletion.
2. In the *Delete* *Confirmation* *(IPv4* *or* *IPv6* *Network)* or *Schedule* *Deletion* dialog box, complete the following:
   
   - **Justification**: Enter the reason for deleting this network.
   - **Do** **not** **update** **registrations**: Select this checkbox if you do not want the appliance to submit updates to RIPE.
3. Optionally, you can click **Preview** **RIR** **Submissions** to view the RIR network information before deleting the network. Grid Manager displays the preview data in a separate browser window. For information, see [*Previewing Registration Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406780).
4. Click **Yes**. If you are scheduling a deletion, enter the data and time for execution, and then click **Schedule** **Deletion**.
