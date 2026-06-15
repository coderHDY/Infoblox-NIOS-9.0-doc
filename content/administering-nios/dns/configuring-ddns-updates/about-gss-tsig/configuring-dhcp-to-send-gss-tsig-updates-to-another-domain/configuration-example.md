---
title: "Configuration Example"
source: "/space/nios90/1412399777"
pageId: "1412399777"
---
Following are the steps to configure the example shown in the figure Sending Secure DDNS Updates to a DNS Server in Another Domain above:

On the Active Directory domain controller:

1. Create a user account for the Infoblox DHCP server. The user account is **ibdhcp**.
2. ```
   Generate the keytab file and export it to your management system. If the domain controller is running Windows Server 2003:
   ktpass -princ ibdhcp/ib.child.corpxyz.com@CHILD.corpxyz.COM -mapuser ibdhcp@CHILD.corpxyz.COM -pass infoblox -out ibdhcp.ktb -ptype krb5_nt_principal -crypto des-cbc-md5 +desonly
   ```
   
   

On the Infoblox DHCP server:

1. Enable GSS-TSIG at the member level.
2. From the **DHCP** tab, click the **Members** tab -> *member* checkbox -> Edit icon.
3. On the **DDNS** -> **Basic** tab of the editor, complete the following:
   
   - **Override**: Select this checkbox.
   - **DDNS Updates**: Select the **Enable DDNS Updates** checkbox.
   - **GSS-TSIG:** Select **Override**, and then complete the following:
     
     - **Enable GSS-TSIG Updates**: Select this checkbox.
     - **Domain Controller (KDC)**: Enter [**ad.child.corpxyz.com**](http://ad.child.corpxyz.com). This is the KDC in the domain of the DHCP server.
     - **Manage Key tab Files**: Click **Manage Key tab Files**. In the *Manage GSS-TSIG Keys* dialog box, click the Add icon. Click **Select**, navigate to the keytab file, select the keytab file that you just uploaded, **ibdhcp/ib.child.corpxyz.com@CHILD.corpxyz.COM**, and then click **Upload**. Click **Close**.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
5. Configure the external forward mapping zone, [corpxyz.com](http://corpxyz.com):
   
   1. On the **DHCP** tab, expand the Toolbar, and then click **Configure DDNS**.
   2. In the *DNS Updates to External Zones* table of the *DDNS Properties* editor, click the Add icon and complete the following fields in the *Add External DDNS Zone* panel:
      
      - **Zone Name**: Enter [**corpxyz.com**](http://corpxyz.com).
      - **DNS Server Address**: Enter the IP address of the primary DNS server to which the Infoblox DHCP server sends DDNS updates. In the example, the DNS server is [ns.corpxyz.com](http://ns.corpxyz.com). Therefore, enter its IP address, which is **10.23.2.24**.
      - **Security:** Choose **GSS-TSIG** from the drop-down list, complete the following, and then click **Add**:
        
        - **Active Directory** **Domain:** Choose [**child.corpxyz.com**](http://child.corpxyz.com).
        - **DNS** **Principal:** Enter **DNS/ns1.corpxyz.com@corpxyz.COM**.
6. Save the configuration and click **Restart** if it appears at the top of the screen.
