---
title: "Obtaining Static Licenses"
source: "/space/nios90/1495269964"
pageId: "1495269964"
---
You can retrieve a static license key in CSV (comma-separated values) or .txt format. It contains the serial number, hardware ID, license type, end date, and license string.

You can either upload the CSV file to the appliance or copy the license information from the .txt file and paste it in the **Paste License(s)** field on the **Infoblox Grid** tab -&gt; **Licenses** tab -&gt; **Member** tab -&gt; **Add** dialog box in Grid Manager. For more information, see the [*Adding Permanent or Subscription Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0/adding-permanent-or-subscription-licenses) section.

To obtain permanent static licenses from Infoblox:

1. Sign in to the support portal at [*https://support.infoblox.com*](https://support.infoblox.com/) using Google Chrome for best performance.
2. Click **My Products**.  
   An overview page that contains a graphical representation of software entitlements (assigned and unassigned), host appliances with and without assigned software, and statuses of existing contracts.
3. *For partners only*: In the **Select an End Customer** drop-down list, select the account for which you want to obtain licenses.
4. To obtain the license for a new VM that you create as a host:
   
   1. Click **Create VM/Grid and Assign Software**.
   2. In the *Create Virtual Machine* dialog box:
      
      - **Virtual Host Hardware ID**: Specify the hardware ID of the virtual host.  
        A virtual appliance serial number consists of 32 alphanumeric characters.
      - **VM Model**: Choose the license technology from the drop-down list as **DDI (for NIOS and BloxOne)** or **NetMRI**.
   3. Click **Save & Assign Software**.  
      The *Manage Software of Host* &lt;*host name*&gt; page is displayed for the host you created.
   4. In the *Software available to be assigned to Host* section, enter the quantity to be assigned in the **Qty to Assign** field of the applicable license.
   5. Click **Assign Software** to assign the licenses.
      
      ![image](/assets/1495269964/ae302d9c-6612-4e9f-9773-9ed11fab3b5e.png)
   6. Click the **Download License Keys** button to download the licenses.
5. To obtain the license for a new physical appliance:
   
   1. On the overview page, click **Manage My Host and Software Bindings**.  
      A table of serial numbers of physical and virtual appliances owned by your organization appear on the **Hosts** tab.
   2. Search for the required host by using the filter options such as **All Hosts** drop-down list and search boxes to enter the search criteria.  
      For example, to view hosts that have software assigned and SKU starting with TE,  select **Hosts with Software** from the drop-down list and enter the SKU in the **SKU** search box.
   3. Select the checkbox of the host to which you want to assign software, and then click **Assign/Unassign Softwares**.  
      The *Manage Software for Host* &lt;*host name*&gt; page is displayed.
   4. Assign licenses to the appliance or unassign them if not needed:
      
      1. In the *Software available to be assigned to Host* section, enter the quantity to be assigned in the **Qty to Assign** field of the applicable license, and click **Assign Software**.
      2. In the *Software currently assigned to Host* section, enter the quantity to be unassigned in the **Qty to Unassign** field of the applicable license, and click **Unassign Software**.
   5. Click the **Download License Keys** button to download the licenses.
6. To obtain the license for an existing physical or a virtual appliance for which you are unsure of license entitlements or want to obtain a new listing of your license keys:
   
   1. On the **Hosts** tab.
   2. Enter the search criteria to find your appliance.
   3. Select the checkboxes for all appliances for which you want to download the license keys.
   4. Click the **Download License Key** button at the top of the page to view or download the license file in .txt or .csv format.
   5. Additionally, you may assign or unassign licenses and download them from the *Manage Software for Host *&lt;*host name*&gt; page as explained in step 5.

> **warning**
>
> **Note**
> 
> Each VM License Activation ID should have a Hardware ID associated with it. As you install and spin up each virtual machine, establish written records for each Hardware ID with the VM License Activation IDs in a one-to-one ratio. These value pairs are necessary should you need to contact Infoblox Technical Support.
