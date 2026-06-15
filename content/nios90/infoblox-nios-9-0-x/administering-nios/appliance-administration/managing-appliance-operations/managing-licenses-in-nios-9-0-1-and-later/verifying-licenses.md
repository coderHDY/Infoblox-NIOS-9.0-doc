---
title: "Verifying Licenses"
source: "/space/nios90/1446281966"
pageId: "1446281966"
---
When installing new feature licenses in NIOS, to check their validity, compare them with the existing licenses, and detect conflicts, click **Verify License(s)**. If the validation passes, you can view the list of licenses that will be applied and those that will be discarded or overwritten. You can then confirm or cancel the installation.

> **warning**
>
> **Note**  
> Only static and Grid-wide license types are verified.

To verify the static and Grid-wide licenses that are currently assigned or allocated to NIOS and vNIOS appliances:

1. Log in to Grid Manager on the Grid Master or System Manager on an independent appliance.
2. Select the **System** tab -&gt; **Licenses** tab -&gt; **Member** tab or Select the **Grid** tab -&gt; **Licenses** tab -&gt; **Member** tab or **Grid-Wide** tab.
3. Click** Add** dialog.  
   You can either upload the CSV file to the Grid or copy the license information from the .txt file and paste it in the **Paste License(s)** field.  
   Note that when you paste multiple licenses, ensure to paste each string on a new line.
4. Click **Verify License(s)**.   
   The *Verifying license*s dialog box displays the following information:
   
   - **TYPE**: License type, for example nios or DNS.
   - **Hardware/Grid License ID**: Hardware ID or License Unique Id.
   - **Name**: Grid member name.
   - **License String**: New and Existing license(s) string.
   - **Expiration**: New and Existing expiration dates of the license(s).
   - **Status**: Valid or Invalid.
   - **Message**: An appropriate message if it is Invalid. N/A, if it is valid.
5. Click **Save All Valid License(s)**. After this step, you can view the results.

> **warning**
>
> **Note**
> 
> For information about viewing, backing up, and removing licenses, see [*Managing Licenses in NIOS 9.0.0*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0).
