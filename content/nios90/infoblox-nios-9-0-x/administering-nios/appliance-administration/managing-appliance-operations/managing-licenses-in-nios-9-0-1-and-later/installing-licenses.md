---
title: "Installing Licenses"
source: "/space/nios90/1446412795"
pageId: "1446412795"
---
After obtaining licenses, you can install licenses by using CLI commands from a serial console or from the Grid Manager UI. For information about obtaining licenses, see [*Obtaining Member Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later/obtaining-member-licenses) and [*Obtaining Grid Wide Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later/obtaining-grid-wide-licenses). For more information about license installation, see:

*[toc]*

Installing any of the following licenses from the CLI or the Grid Manager UI triggers a product restart: DNS Infrastructure Protection (Software add-on), DNS Cache Acceleration, Multi-Grid Management, and NIOS. All active sessions to the Grid will be disconnected. If you are signed in to the Grid Manager UI at the time, you will be signed out and must sign back in.

> **warning**
>
> **Note**
> 
> For a physical appliance of Trinzic X6 series, you must install licenses for the supported NIOS software models using the CLI only. Installing the NIOS software model licenses from Grid Manager (by uploading the license file or pasting the license information) is not supported.

## Installing from the CLI

Use the following commands to install member and Grid wide licenses using one of the following commands:

- [*set license*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-license): Contact the Infoblox Support to obtain the license string and then use this command to add the license.
- [*set temp_license*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-temp-license): Use this command to generate and install temporary licenses.

## Installing from the Grid Manager UI

You can install member and Grid wide licenses from the NIOS Grid Manager as explained in this section:

1. **Grid**: From the **Infoblox** **Grid** tab, select the **Licenses** tab -&gt; **Member** tab or **Grid Wide** tab, and click the Add icon.  
   Or  
   **Standalone system**: From the **System** tab, select the **Licenses** tab -&gt; **Member** tab or **Grid Wide** tab, and click the Add icon.
2. Select one of the following:
   
   - **Upload License File**: Use this method to upload member and Grid-wide license files. Click **Select File**, navigate to the license file, and click **Open**.
   - **Paste License(s)**: Paste the license key in this text field. You must paste the entire string in CSV format: serial number, hardware ID, license type, end date (in the mm/dd/yyyy format), and license string.  
     Example:  
     564daaa3ef07e648a563434a2b412834,564daaa3ef07e648a563434a2b412834,DNS,12/05/2018,EwAAADU+PZEOjFsMAXxw4nlfHyZ6tdw  
     If you are pasting multiple licenses, start each string on a new line.
3. Click **Verify License(s)**.  
   The appliance validates the license and adds it to the table.
4. Click **Save All Valid License(s)**.  
   If you are activating licenses for an HA pair, you must follow this procedure for both nodes.

> **warning**
>
> **Note**
> 
> - Once the NIOS license is installed, you must wait for NIOS to restart (if prompted) before you install other licenses.
> - To transfer licenses between vNIOS on VMware appliances, refer to the *Infoblox* *Installation* *Guide* *for* *vNIOS* *for* *VMware*.
