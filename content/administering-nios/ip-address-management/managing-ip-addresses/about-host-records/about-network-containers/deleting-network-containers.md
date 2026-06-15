---
title: "Deleting Network Containers"
source: "/space/nios90/1346013927"
pageId: "1346013927"
---
Depending on the configuration, you may or may not be able to delete or schedule the deletion of a network container and all its contents. Contents in a network container can include other network containers, leaf networks, and associated objects. For recursive deletions, only network containers and networks are considered. Objects such as hosts are not considered for recursive deletions.  
Superusers can determine which group of users are allowed to delete or schedule the deletion of a network container and all its contents. For information about how to configure the recursive deletion of network containers, see [*Configuring Recursive Deletions of Networks and Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274866).  
Note that you must have Read/Write permission to all the contents in order to delete a network container. When you delete a network container only, the appliance reparents the other network containers and leaf networks.  
The appliance puts all deleted objects in the Recycle Bin, if enabled. You can restore the objects if necessary. When you restore a parent object from the Recycle Bin, all its contents, if any, are re-parented to the restored parent object. For information about the Recycle Bin, see [*Using the Recycle Bin*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).  
To delete a network container:

1. From the **Data** **Management** tab, select the **IPAM** tab -> *network_container* checkbox. You can select multiple network containers for deletion.
2. Click the Delete icon.
3. Do one of the following in the *Delete* *Confirmation* dialog box:
   
   - Select one of the following. Note that these options appear only if you are allowed to delete the network container and all its contents. For information about how to configure this, see* *[*Configuring Recursive Deletions of Networks and Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274866).
     
     - **Delete** **only** **the** **network** **container** **and** **re-parent** **the** **subnets**: Select this to delete only the network container and re-parent its subnets.
     - **Delete** **the** **network** **container** **and** **all** **its** **subnetworks**: Select this to delete both the network and its contents.
   - Click **Yes**.

The appliance puts the deleted network container in the Recycle Bin, if enabled. You can also schedule the deletion for a later time. Click **Schedule** **Deletion** and in the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Deletions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883). For information about scheduling recursive deletions of network containers, see [*Scheduling Recursive Deletions of Network Containers and Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883).
