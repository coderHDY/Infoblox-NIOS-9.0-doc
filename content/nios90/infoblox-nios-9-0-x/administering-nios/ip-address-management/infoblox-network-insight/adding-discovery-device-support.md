---
title: "Adding Discovery Device Support"
source: "/space/nios90/280406153"
pageId: "280406153"
---
> **warning**
>
> ### Note
> 
> Adding Device Support Bundles, viewing and deleting them requires Superuser permissions.

Infoblox frequently provides support files for additional network devices that may not previously be supported by discovery, and updates to support new operating system versions of existing devices. To add device support updates:

1. From the **Infoblox** **Grid** tab, select the **Device** **Support** tab.
2. Expand the Toolbar and click **Add**.
3. Click **Select** and navigate to the file you want to upload.
4. Select the file, and then click **Upload**.  
   The Device Support table shows its installed library of files with the following data points:

- **Name**: The descriptive device name for the device support file.
- **Version**: The version of the currently active device support file.
- **Author**: The developer of the device support file.
- **Type**: The Type column lists two types of Device Support files: the System type indicates a support bundle that is installed with the NIOS/Grid Manager system. The Downloaded type indicates device support bundles that are installed by the administrator.  
  System bundles are read-only and cannot be removed or overwritten by administrators.

You may remove custom support bundles that you have installed on the Device Support Page. To do so, click the Action icon  for a chosen device and choose **Delete** from the popup menu.
