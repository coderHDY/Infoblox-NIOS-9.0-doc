---
title: "Enabling GSS-TSIG Authentication for DHCP"
source: "/space/nios90/1393560117"
pageId: "1393560117"
---
You can enable GSS-TSIG authentication at the Grid or member level and associate it with one or more keys of the same SPN or realm. When you enable GSS-TSIG authentication, make sure that you upload the keytab file from the Kerberos account for the Infoblox DHCP server. You can import keytab files with multiple keys to the Grid or to individual members. You can assign the uploaded keys to member DHCP or Grid DHCP. The appliance displays a warning message if you assign a GSS-TSIG key with service class "DNS" in its SPN to a DHCP member.   
The appliance displays an error message in the following cases:

- if you assign keys of different realms to a DHCP member or Grid DHCP.
- when you try to enable GSS-TSIG without a valid key.

The AD domain controller stores the keytab file in the directory in which you generated the keytab file. You can copy this file to a management system that connects to the NIOS appliance or launch the NIOS Grid Manager on the AD domain controller and import the keytab file to the NIOS appliance.  
To enable GSS-TSIG authentication for DHCP and import keytab files:

1. **Grid:** From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid** **DHCP** **Properties**.   
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Members** tab -> *member* checkbox -> Edit icon. To override an inherited property, click **Override** next to it and complete the appropriate fields.  
   **Standalone** **DHCP:** From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **System** **DHCP** **Properties**.
2. In the **IPv4** **DDNS** -> **Basic** tab or the **IPv6** **DDNS** -> **Basic** tab of the editor, complete the following:
   
   - **DDNS** **Updates:** Select **Enable** **DDNS** **Updates** to enable the DHCP servers in the Grid to send DDNS updates.
   - **DDNS** **Domain** **Name**: Specify the domain name of the network that the appliance uses to update DNS. For IPv4 clients, you can specify this at the network, network template, range, and range template levels. For IPv6 clients, you can specify this at the Grid, member, network, shared network, and network template levels.
   - **DDNS** **Update** **TTL**: You can set the TTL used for A record and PTR records updated by the DHCP server. The default is shown as zero. If you do not enter a value here, the appliance by default sets the TTL to half of the DHCP lease time with a maximum of 3600 seconds. For example, a lease time of 1800 seconds results in a TTL of 900 seconds, and a lease time of 86400 seconds results in a TTL of 3600 seconds.
   - **DDNS** **Update** **Method**: Select the method used by the DHCP server to send DDNS updates. You can select either **Interim** or **Standard** from the drop-down list. The default is **Interim**. When you select **Interim**, TXT record will be created for DDNS updates and when you select **Standard**, DHCID record will be created for DDNS updates. But in the **IPv4** **DDNS** -> **Advanced** tab or the **IPv6** **DDNS** -> **Advanced** tab, if you have selected **No** **TXT** **Record** mode for the DHCP server to use when handling DNS updates, then TXT record or DHCID record is not created for DDNS updates.  
     If you change the DDNS update method from **Interim** to **Standard** or vice versa, then the DHCP server changes the DHCID type used from TXT record to DHCID record or vice versa as the leases are renewed.  
     This is supported for clients that acquire both IPv4 and IPv6 leases. Infoblox recommends you to configure different DDNS update method for IPV4 leases and IPv6 leases, **Interim** for IPv4 lease and **Standard** for IPv6 lease.
   - **GSS-TSIG**: Complete the following:
     
     - **Enable** **GSS-TSIG** **Updates:** Select this to enable the DHCP server to send GSS-TSIG authenticated DDNS updates. The DHCP server uses the KDC server configured in the member properties. Therefore. the **Enable GSS-TSIG Updates** field must be overridden in the *Member DHCP Properties *dialog box to use the KDC configured in the *Member DHCP Properties *dialog box.
     - **Manage** **Keytab** **Files**: To upload a keytab file, click **Manage** **GSS-TSIG** **keys**. In the *Manage* *GSS-TSIG* *Keys* dialog box, click the Add icon. In the *Upload* dialog box, click **Select**, navigate to the keytab file, select it, and then click **Upload**. You can also delete individual keys. For more information about managing GSS-TSIG keys, see Managing GSS-TSIG keys below.
     - **Domain** **Controller:** Enter the resolvable host name or IP address of the AD domain controller that hosts the KDC for the domain.
     - **Principal**: The principal member of the key. For GSS-TSIG based DDNS updates, the SPN of the key used to carry out the update does not require the server class 'DHCP.' You can either specify an FQDN or an IP address for the &lt;host&gt; of an SPN.
     - **GSS-TSIG Key:** Select the name of the GSS-TSIG key from the drop-down list that you want the Grid to use. This is only available if you have uploaded a keytab file. Click the arrow beside the Add icon to either assign keys or upload and assign keys. You can either select **Assign Keys** or **Upload & Assign Keys** from the drop-down list.
       
       - **Assign** **Keys**: Select **Assign** **Keys** to select a GSS-TSIG key from the *GSS-TSIG* *Key* *Selector*. Click **Principal**, which is displayed as a hyperlink, to select it. For more information about the **GSS_TSIG** **Key** **Selector**, see Selecting Keys in the GSS-TSIG Key Selector below.
       - **Upload & Assign** **Keys**: Select **Upload & Assign** **Keys** to upload and assign keys. In the *Upload* dialog box, select the file and navigate to the file you want to upload. Click **Upload**. The appliance assigns the keys contained in the selected keytab file.
     - The following are displayed in the table:
       
       - **Version**: The version of the key.
       - **Encryption** **type**: The encryption type of the key.
       - **Last** **update**: The timestamp when the key was uploaded.
   - **Zones** **this** **member** **can** **update** **securely**: Click **Display** to list the external zones to which the Grid member can send secured DDNS updates.
   - **Lease** **Renewal** **Update**: Select **Update** **DNS** **on** **DHCP** **Lease** **Renewal** to enable the DHCP server to update DNS when a DHCP lease is renewed.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
