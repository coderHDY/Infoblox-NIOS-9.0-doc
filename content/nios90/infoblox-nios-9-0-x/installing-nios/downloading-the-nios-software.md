---
title: "Downloading the NIOS Software"
source: "/space/nios90/1366983320"
pageId: "1366983320"
---
You can download NIOS from the Infoblox Support web site at [https://support.infoblox.com/](https://support.infoblox.com/). You must be a registered user to access this web site.

To download the software for vNIOS:

1. Log on to the Infoblox Support web site at [https://support.infoblox.com/](https://support.infoblox.com/)
2. Click the **Downloads** tab.
3. Select **NIOS/vNIOS** from the **Infoblox Software** drop-down list.
4. Select the **General maintenance products with full engineering support for routine patches and bug fixes on all significant issues** option.
5. Select **NIOS 9.0.8** from the **Select version** drop-down list.

The NIOS installer files are available for download. The installer files are of two sizes:

- Files of size 500 GB
- Files of size 150 GB

Infoblox recommends using a minimum size of 150 GB for any of these files that has resizable as part of the file name and you can resize them depending on your requirement and deployment.

If you download the resizable files, a default disk size is defined on the VM. You then change the default disk size using the VMware UI. When you start the VM for the first time, NIOS detects how much disk space has been reserved for the virtual disk and allocates partitions within that space. You can increase the disk size upto a maximum of 2.5 terabytes.

If you want to resize the disk space from the current 250 GB to a lower size, remove the member from the Grid and add a replacement member with the required disk size. If you want to resize a smaller disk to a higher size, back up the Grid database, and deploy the new instance with the required disk size. After the deployment, restore the backed up database. Infoblox recommends configuring a scheduled backup so that if the disk limit is reached and the system is unresponsive, the earlier backup can be restored.

Infoblox recommends configuring instances of only 250 GB and higher as Grid Master and Grid Master Candidate.

> **warning**
>
> ### Note
> 
> - Images of type .vhd comprise only one file each and can be resized. The minimum size of the .vhd image is 150 GB.
> - Infoblox recommends that you provision 150 GB or more disk space for the NIOS instance while deploying resizable images.
