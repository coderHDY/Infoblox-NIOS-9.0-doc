---
title: "Limitations of Using the Scalable Image File"
source: "/space/nios90/1366983355"
pageId: "1366983355"
---
The following are the limitations of using the scalable NIOS image:

- You can use the scalable image only on the following appliances:
  
  - IB-V926, IB-V1516, IB-V1526, IB-V2326, IB-V4126, IB-V5005
  - IB-V805, IB-V1405, IB-V2205, IB-V4005, IB-V815, IB-V825, IB-V1415, IB-V1425, IB-V2215, IB-V2225, IB-V4015, IB-V4025, IB-FLEX, CP-V805, CP-V1405, CP-V2205
  - ND-V805, ND-V906, ND-V1405,ND-V1606, ND-V2205 , ND-V2306 , ND-V4005, ND-V4106
- If you use ovftool to deploy the OVA image, there is no command line option to increase the disk-size. As a workaround, you can use ovftool to upload the image but before powering on the VM, you will need to use the UI to change the disk size based on your requirement.
- The Parental Control feature fails to start if there is no space left on the device when downloading ZVELO data.
- Infoblox recommends to not run DNS/DHCP/updates on the member provisioned with the lower disk size.
- Do not try to join a resizable disk image to a Grid running an NIOS version earlier than 8.5.
- Infoblox does not recommend auto-synchronizing or downgrading resizable disk images to NIOS versions earlier than 8.5.
- If you have resizable members whose provisioned disk space is lower than 85 GB, disable the rsync-batch mode by running the `set upgrade_dist rsync_batch disable` command on Grid Master.
- If you have a reporting member as part of your Grid, then you must have a minimum disk space of 250 GB by default.
- When you configure an X6 series appliance as TR-5005, repartitioning automatically takes place and a new partition is created for reporting.
