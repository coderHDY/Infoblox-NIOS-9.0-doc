---
title: "Importing the Keytab File and Enabling GSS-TSIG Authentication"
source: "/space/nios90/1333854456"
pageId: "1333854456"
---
Before you can enable GSS-TSIG authentication, you must import the keytab file from the Kerberos account for the NIOS appliance. To import the keytab file:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
2. In the *Member* *DNS* *Properties* editor, click **Toggle Advanced Mode**.
3. When the additional tabs appear, click **GSS-TSIG** and do the following:  
   If a principal name and version number are listed, there is a keytab file loaded on the appliance. Compare this information with that for the NIOS appliance account on the Kerberos server to make sure that they match. If there is no keytab file on the NIOS appliance or if the loaded keytab file does not match that on the Kerberos server, you must load the correct keytab file.
   
   - Click **Upload**, click **Browse** to navigate to the keytab file, and then click **Upload**.
   - **Enable GSS-TSIG authentication of clients**: Select this checkbox.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

Each time you export a keytab file from a Kerberos server running on Windows Server 2003, the version number of the keytab file increases incrementally. Because the version number on the keytab file that you import to the NIOS appliance must match the version that is in use on the Kerberos server, you should select the last keytab file that is exported from the Kerberos server if you have exported multiple keytab files. (A Kerberos server running on Windows 2000 does not increase the version number of keytab files with each export.)
