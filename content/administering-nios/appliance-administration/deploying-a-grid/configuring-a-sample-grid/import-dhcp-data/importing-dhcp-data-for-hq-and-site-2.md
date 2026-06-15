---
title: "Importing DHCP Data for HQ and Site 2"
source: "/space/nios90/1340737692"
pageId: "1340737692"
---
## Importing DHCP Data for HQ and Site 2

1. Save the DHCP configuration file from your legacy DHCP server at 10.0.2.20 to a local directory.
2. Visit [*https://support.infoblox.com*](https://support.infoblox.com+), log in with your support account, and download the *Data Import Wizard*. The *Data Import Wizard* application downloads to a container within a Java sandbox on your management system and immediately launches, displaying the *Welcome* page.
3. After reading the information in the left panel, click **Next**.
4. Select Import to Infoblox Appliance, enter the following, and then click **Next**:
   
   - **Hostname or IP address**: **10.0.1.10**
   - **Username**: **admin**
   - **Password**: **1n85w2IF**
5. Select the following, and then click **Next**:
   
   - What kind of data would you like to import? **DHCP/IPAM**
   - Which legacy system are you importing from? **ISC DHCP**
   - Which appliance will be serving this data? **10.0.2.10**
6. Type the path and file name of the DHCP configuration file saved from the legacy server, and then click **Next**.  
   Or  
   Click **Browse**, navigate to the file, select it, click **Open**, and then click **Next**.
7. In the *Global DHCP Configuration* table, double-click the *Value* cell for the *domain-name-servers* row, and change the IP addresses to **10.0.2.10**.
8. When satisfied with the data, click **Import**.  
   You can view the status of the importation process and a summary report in the *Data Import Wizard* Log.
9. To enable DDNS updates, log in to the Grid Master, from the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid** **DHCP** **Properties**.
10. In the **DDNS** -> **Basic** tab of the *Grid DHCP Properties* editor, select **Enable** **DDNS** **Updates**.
11. Save the configuration and click **Restart** if it appears at the top of the screen.
12. To check the imported DHCP configuration file, from the **Data** **Management** tab, select the **DHCP** tab, -> **Members** tab -> **10.0.2.10** checkbox. Expand the Toolbar and click **View** **DHCP** **Configuration**.
13. In the DHCP configuration file, check that all the imported subnets are present, and navigate to the beginning of the file and check that you see the `       ddns-updates on     ` statement. (If you see `       ddns-updates     ` **off**, enable DDNS updates for the Grid as explained in steps 9**-**12.)
