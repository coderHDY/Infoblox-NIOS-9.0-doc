---
title: "Deleting Super Hosts"
source: "/space/nios90/1468465274"
pageId: "1468465274"
---
When you delete a super host, you have an option to delete only the respective super host or delete the associated records also. The deleted super hosts and associated records are moved to the Recycle Bin, from which you can restore or permanently delete them. For information about the Recycle Bin, see [*Using the Recycle Bin*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588/Finding+and+Restoring+Data#UsingtheRecycleBin).

To delete a super host:

1. From the **Data Management** tab, select the **Super Host** tab.
2. Select a super host that you want to delete and click the Delete icon, or click the Action icon
   
   *[image: media]*
   
   next to the respective super host and select **Delete** from the menu.
3. The appliance displays the *Delete Confirmation* dialog box to confirm that you want to delete a super host. You can choose to delete the records that are associated with the super host by selecting the **Delete associated records with the Superhost **checkbox. You cannot delete associated records if you do not have write permissions on those objects. When you restore this super host from the Recycle Bin, the associated resource records are also restored.  
   If you do not select the** Delete associated records with the Superhost **checkbox while deleting a super host, the associated records will not be deleted. When you restore the deleted super host, only the respective super host is restored and you must associate the resource records manually.
