---
title: "Selecting Keys in the GSS-TSIG Key Selector"
source: "/space/nios90/1394575055"
pageId: "1394575055"
---
NIOS displays the keys that you have uploaded using the keytab files. You can choose a filter and an operator to view specific keys that you have uploaded. The *GSS-TSIG* *Key* *Selector* wizard is displayed only when you select **Assign** **Keys** in the *Properties* editor. For more information about how to assign keys to DNS and DHCP objects, see Enabling GSS-TSIG Authentication for DNS and Enabling GSS-TSIG Authentication for DHCP above respectively.  
To select a key from the *GSS-TSIG* *Key* *Selector*, complete the following:

1. Click **Show** **Filter** to filter the values:
   
   - Select a value from the drop-down list to filter your values: **Domain**, **Encryption** **type**, **In** **use**, **Last** **update**, **Principal**, and **Version**.
   - Select one of these operators from the drop-down list: **equals**, **does** **not** **equal**, **begins** **with**, and **does** **not** **begin** **with**.
   - Enter the value that you want to search in the text box.  
     Click **Hide** **Filter** to hide the filter. Alternatively, you can enter a value in the text box for **Find** and click **Go** to search specific keys from the keytab files.
2. The following details are displayed in the table:
   
   - **Principal**: The principal name that is mapped to the keytab file. Click **Principal** to assign the key to the DNS or DHCP object.
   - **Domain**: The name of the domain that is mapped to the keytab file.
   - **Version**: The version of the keytab file.
   - **In use:** Indicates whether the keytab file is in use or not.
   - **Members**: The members associated with the keytab file.
   - **Encryption type**: The encryption type of the key.
   - **Last update**: The timestamp when the key was last uploaded.
