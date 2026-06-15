---
title: "Managing GSS-TSIG keys"
source: "/space/nios90/1393560167"
pageId: "1393560167"
---
You can upload a keytab file that contains one or multiple GSS-TSIG keys and delete multiple keys through the* Manage* *GSS-TSIG* *Keys* wizard. To manage multiple GSS-TSIG keys, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab, expand the Toolbar and click **Manage** **GSS-TSIG** **Keys.**
2. In the *Manage* *GSS-TSIG* *Keys* wizard, the following are displayed:
   
   - **Principal**: The principal name that is mapped to the keytab file.
   - **Domain**: The name of the domain that is mapped to the keytab file.
   - **Version**: The version of the keytab file.
   - **In** **use:** Indicates whether the keytab file is in use or not.
   - **Members**: The members associated with the keytab file. Click the hyperlink and the *Members* dialog box is displayed. It displays the list of members that are associated with the keytab file.
   - **Encryption** **type**: The encryption type of the key.
   - **Last** **update**: The timestamp when the key was last uploaded.
3. Click the Upload Keytab File icon to upload a new keytab file. In the *Upload* dialog box, click **Select** and navigate to the keytab file. Click **Upload** to upload the file.

To delete a GSS-TSIG key, select the appropriate key and click the Delete icon.
