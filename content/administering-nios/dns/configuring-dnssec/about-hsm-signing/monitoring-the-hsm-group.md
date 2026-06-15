---
title: "Monitoring the HSM Group"
source: "/space/nios90/1502937148"
pageId: "1502937148"
---
You can monitor the status of the HSM group and of individual modules in the group by navigating to the **Grid** tab > **HSM** **Group** panel. To view the status of each HSM, click the arrow beside the group name. This panel displays the following information:

- **Name**: The name of the HSM group or module.
- **Status**: The HSM group status displays the status for all the HSMs in the group.
  
  - The status icon of the group can be one of the following:
    
    - **Green**: All the HSMs in the group are functioning properly.
    - **Yellow**: At least one HSM in the group is not functioning properly.
    - **Red**: All the HSMs in the group are not functioning properly.
    - **Black**: The status of the HSM devices is unknown.
  - The status icon for each HSM can be one of the following:
    
    - **Green**: The HSM is functioning properly. For Thales Luna 5 or 6 devices, the status icon can also display ***x*****%used** which refers to the storage capacity of the HSM partition that is assigned to the Grid. Note that when the capacity reaches 100%, new zone signings and key rollovers for existing zones cannot be performed.
    - **Red**: The HSM is not functioning properly. For a Thales Luna HSM, this indicates that the Grid Master was able to connect to the HSM, but no partition was assigned to the Grid Master.
    - **Black**: The status of the HSM device is unknown.
- **FIPS**: This applies to a Thales Luna HSM only. It indicates if the HSM is in FIPS compliant mode.
- **Comment**: Any comments that were entered about the HSM group.

You can also do the following in this tab:

- Sort the data in ascending or descending order by column.
- Print and export the data in this tab.
