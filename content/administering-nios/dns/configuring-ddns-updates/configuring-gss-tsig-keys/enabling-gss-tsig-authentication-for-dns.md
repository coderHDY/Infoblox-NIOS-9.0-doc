---
title: "Enabling GSS-TSIG Authentication for DNS"
source: "/space/nios90/1394575016"
pageId: "1394575016"
---
For GSS-TSIG based DDNS updates, the SPN of the key used to carry out the update must have 'DNS' in its service class. You can upload a keytab file to the Grid with multiple keys in which each key has an SPN in this format: DNS/&lt;host&gt;@&lt;realm&gt;. You can associate a DNS member or a Grid DNS with one or more keys of the same SPN or realm or of different SPN or realms. You can assign the uploaded keys to member DNS or Grid DNS, but NIOS displays an error when you try to enable GSS-TSIG without a valid key if the assigned key does not have the service class 'DNS' in its SPN.   
To enable GSS-TSIG authentication for DNS and import keytab files:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon. To override an inherited property, click **Override** next to it and complete the appropriate fields.  
   **Standalone** **DNS:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **System** **DNS** **Properties**.
2. In the **GSS-TSIG** -> **Basic** tab of the editor, complete the following:
   
   - **GSS-TSIG:** Select **Enable** **GSS-TSIG** **authentication** **of** **clients** to accept GSS-TSIG signed DDNS updates from clients that belong to different AD domains in which each domain has an unique GSS-TSIG key.
   - **Manage** **Keytab** **Files**: To upload a keytab file, click **Manage** **GSS-TSIG** **keys**. In the *Manage* *GSS-TSIG* *Keys* dialog box, click the Add icon. In the *Upload* dialog box, click **Select**, navigate to the keytab file, select it, and then click **Upload**. You can also delete individual keys. For more information, see Managing GSS-TSIG keys below.
   - **GSS-TSIG** **Keys**: Click the arrow beside the Add icon to either assign keys or upload and assign keys. You can either select **Assign** **Keys** or **Upload & Assign** **Keys** from the drop-down list.
     
     - **Assign** **Keys**: Select **Assign** **Keys** to select a GSS-TSIG key from the *GSS-TSIG* *Key* *Selector*. Click **Principal**, which is displayed as a hyperlink, to select it. For more information about the **GSS_TSIG** **Key** **Selector**, see Selecting Keys in the GSS-TSIG Key Selector below.
     - **Upload & Assign** **Keys**: Select **Upload & Assign** **Keys** to upload and assign keys. In the *Upload* dialog box, select the file and navigate to the file you want to upload. Click **Upload**. The appliance assigns keys in the uploaded file.  
       The following are displayed:
     - **Principal**: The principal member of the key. For GSS-TSIG based DDNS updates, the SPN of the key used to carry out the update must have DNS in its service class. It is of the following form:
       
       ```
                      DNS/&lt;host&gt;@&lt;realm&gt;
       ```
       
       You can either specify an FQDN or an IP address for the &lt;host&gt; of an SPN.
     - **Domain**: The domain name assigned to the DNS member.
     - **Version**: The version of the key.
     - **Encryption type**: The encryption type of the key.
     - **Last update**: The timestamp when the key was uploaded.
3. Save the configuration.

NIOS sorts the data in the table based on the last updated timestamp, by default. Note that sometimes GSS-TSIG updates might stop working after you restart the DNS service because the appliance discards the GSS-TSIG keys, when you restart the DNS service. If this happens, wait several minutes until the Microsoft server performs another handshake using the new key.
