---
title: "Retrieving Member Licenses for Virtual and Physical Appliances"
source: "/space/nios90/2340421684"
pageId: "2340421684"
---
You can retrieve a member license key in CSV (comma-separated values) or .txt format. It contains the serial number, hardware ID, license type, end date, and license string.

You can either upload the CSV file to the appliance or copy the license information from the .txt file and paste it in the **Paste License(s)** field on the **Infoblox Grid** tab -> **Licenses** tab -> **Member** tab -> **Add** dialog box in Grid Manager. For more information, see the [*Adding Permanent or Subscription Licenses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1495269928) section.

To obtain permanent static licenses from Infoblox:

1. Sign in to the support portal at [*https://support.infoblox.com*](https://support.infoblox.com/) using Google Chrome for best performance.
2. Click **My Products**.  
   An overview page that contains a graphical representation of software entitlements (assigned and unassigned), host appliances with and without assigned software, and statuses of existing contracts, is displayed.
3. *(For partners only) ***End Customer**: If you manage multiple accounts for various customers, select the account for which you want to obtain licenses.
4. According to the appliance for which you want to obtain the license, follow instructions in one of the following sections:

- [Obtaining the License for a New Virtual Machine](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/2340487189/Obtaining+Member+Licenses#Obtaining-the-License-for-a-New-Virtual-Machine)
- [Obtaining the License for a New Physical Appliance](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/2340487189/Obtaining+Member+Licenses#Obtaining-the-License-for-a-New-Physical-Appliance)
- [Obtaining the License for an Existing Physical or a Virtual Appliance](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/2340487189/Obtaining+Member+Licenses#Obtaining-the-License-for-an-Existing-Physical-or-a-Virtual-Appliance)

## Obtaining the License for a New Virtual Machine

Unlike physical appliances, virtual appliances are created within your environment. Infoblox sells only activation IDs or software licenses for these appliances. To use licenses purchased for a VM, create a VM as a host by associating the appliance serial number with it in the Infoblox Support portal.

To create a new VM as a host and obtain licenses:

1. In the Infoblox Support portal > overview page, click **Create VM/Grid and Assign Software**.
2. In the *Create Virtual Machine* dialog box:
   
   - *(For partners only) ***End Customer**: Select the account for which you want to obtain licenses. **Virtual Host Hardware ID**: Specify the hardware ID of the virtual host.  
     A virtual appliance serial number consists of 32 alphanumeric characters.
   - **VM Model**: Choose the license technology from the drop-down list as **DDI (for NIOS and BloxOne)** or **NetMRI**.
3. Click **Save & Assign Software**.  
   The *Manage Software of Host* &lt;*host name*&gt; page is displayed for the host you created.
4. In the *Software available to be assigned to Host* section, enter the quantity to be assigned in the **Qty to Assign** field of the applicable license.
5. Click **Assign Software** to assign the licenses.  
   The assigned license moves to the *Software currently assigned to host* section.
   
   *[image: media]*
   
   
6. To download the license keys, click the **Download License Keys** button.

## Obtaining the License for a New Physical Appliance

Physical appliances are generally purchased with software licenses on the same contract. The activation IDs associated with software licenses are automatically assigned to the serial number, enabling direct retrieval of license strings or files through the Infoblox Support portal.

To obtain the license for a new physical appliance:

1. In the Infoblox Support portal > overview page, click **Manage My Host and Software Bindings**.  
   A table of serial numbers of physical and virtual appliances owned by your organization appear on the **Hosts** tab.
2. Search for the required host by using the filter options such as **All Hosts** drop-down list and search boxes of various filters to enter the search criteria.  
   For example, to view hosts that have software assigned and SKU starting with TE, select **Hosts with Software** from the drop-down list and enter the SKU in the **SKU** search box.
   
   1. Select the checkbox of the host to which you want to assign software, and then click the **Assign/Unassign Softwares **button at the top.  
      The *Manage Software for Host* &lt;*host name*&gt; page is displayed.
   2. Assign licenses to the appliance or unassign them if not needed:
      
      1. Assign licenses: In the *Software available to be assigned to Host* section, enter the quantity to be assigned in the **Qty to Assign** field of the applicable license, and click **Assign Software**.  
         The assigned license moves to the *Software currently assigned to Host* section.
      2. Unassign licenses: In the *Software currently assigned to Host* section, enter the quantity to be unassigned in the **Qty to Unassign** field of the applicable license, and click **Unassign Software**.
   3. To download the license keys, click the **Download License Keys** button.

## Obtaining the License for an Existing Physical or a Virtual Appliance

To obtain the license for an existing physical or a virtual appliance for which you are unsure of license entitlements or want to obtain a new listing of your license keys:

1. In the Infoblox Support portal > overview page, click **Manage My Host and Software Bindings**.
2. On the **Hosts** tab.
3. Enter the search criteria to find your appliance.
4. Select the checkboxes for all appliances for which you want to download the license keys.
5. Click the **Download License Key** button at the top of the page to view or download the license file in .txt or .csv format.
6. Additionally, you may assign or unassign licenses and download them from the *Manage Software for Host *&lt;*host name*&gt; page.

> **warning**
>
> **Note**
> 
> Each VM License Activation ID must have a corresponding Hardware ID. When you install and launch each virtual machine, record each Hardware ID alongside its VM License Activation ID in a one-to-one ratio. These pairs are essential if you need to contact Infoblox Technical Support.
