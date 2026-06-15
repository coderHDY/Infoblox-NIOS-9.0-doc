---
title: "Managing AVPs (Attribute Value Pairs)"
source: "/space/nios90/280857063"
pageId: "280857063"
---
The subscriber site receives the subscriber security policies and parental control policies as AVPs from the RADIUS server. You can create AVPs that are not available in the list of predefined AVPs and manage the AVPs in the following ways:

*[toc]*

- Create an user-defined AVP, as described in Adding AVPs below.
- View the list of AVPs, described in Viewing AVPs below.
- Modify the properties of an user-defined AVP, as described in Modifying AVPs below.
- Delete an user-defined AVP, as described in Deleting AVPs below.

> **warning**
>
> **Note**
> 
> The configured AVPs are applicable for all the subscriber sites.

# Adding AVPs

To add an user-defined AVP:

1. From the **Data Management** tab -&gt; **DNS** tab -&gt; **Subscriber Services Deployment** tab -&gt; **AVPs** tab, and then click the Add icon.
2. In the* Add AVP* wizard, complete the following:
   
   - **Name**: Enter the name of the AVP (Attribute Value Pair).
   - **User Defined**: Indicates whether the AVP is an user-defined AVP.
   - **Type**: Enter the AVP type as defined in RFC 2865 and RFC 2866. If the AVP type is vendor specific, you can enter the value 26.
   - **Vendor ID**: Specify the vendor ID, if the AVP ID is vendor specific.
   - **Vendor Type**: Specify the vendor type, if the AVP type is vendor specific.
   - **Value Type**: Select the type of value from the drop-down list:
   - **Comment**: You can enter additional information about the AVP.
   - **Make this AVP available as an option in**: Select one of the following:
     
     - **All fields**: Select this if you want the AVP to be available in all lists in *Subscriber Secure Properties* editor.
     - **Only to these fields**: Select this if you want the AVP to be available only in specific fields in the *Subscriber Secure Properties* editor. Click the Add icon in the table. The appliance adds a row to the table. Click the row and select the field name from the drop-down list.
3. Save the configuration.

# Modifying AVPs

To modify an user-defined AVP:

1. From the** Data Management** tab -&gt; **DNS** tab -&gt; **Subscriber Services Deployment** tab -&gt; **AVPs** tab, click the **Action** icon next to the user-defined AVP name and select **Edit** from the menu.
2. In the *AVP Properties* editor, modify the AVP information, as described in the previous section, Adding AVPs.
3. Save the configuration.

Note that you cannot modify the properties of a predefined AVP. You can only view the information in the* AVP Properties* editor.

# Deleting AVPs

You can delete only user-defined AVPs.

To remove an user-defined AVP:

1. From the **Data Management** tab -&gt; **DNS** tab -&gt; **Subscriber Services Deployment** tab -&gt; **AVPs** tab, click the **Action** icon next to the user-defined AVP name and select **Delete** from the menu.
2. In the *Delete Confirmation (AVP)* dialog box, click **Yes**.

# Viewing AVPs

To view all the predefined and user-defined AVPs:

1. From the **Data Management** tab -&gt; **DNS** tab -&gt; **Subscriber Services Deployment** tab -&gt; click the** AVPs** tab.
2. Grid Manager displays the following information for each AVP:

- **Actions**: Click the Action icon next to a selected user-defined AVP and choose from the following:
  
  - **Edit**: Modify certain general properties.
  - **Delete**: You can delete only user-defined AVP.
- **Name**: The name of the AVP.
- **User Defined**: Indicates whether the AVP is predefined or user-defined AVP.
- **Type**: The type of AVP.
- **Vendor ID**: The vendor ID.
- **Vendor Type**: The vendor type.
- **Value Type**: Indicates the value type. Example: string, integer, IPv4 address, IPv6 address, byte, etc.
- **Comment**: Information about the AVP.
- **Restricted To**: Indicates whether the AVP is restricted to domains.

You can also do the following:

- Edit the AVP information.
  
  - Select the AVP, and then click the Edit icon.
- Delete an user-defined AVP.
  
  - Select the user-defined AVP, and then click the Delete icon.
- Export the list of AVPs.
  
  - Click the Export icon.
- Print the list of AVPs.
  
  - Click the Print icon.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches. This is not applicable for **Restricted To** column.
- Create a quick filter to save frequently used filter criteria:
  
  - In the filter section, click **Show Filter** and define filter criteria for the quick filter.
  - Click **Save** and complete the configuration In the *Save Quick Filter* dialog box.
- The appliance adds the quick filter to the quick filter drop-down list in the panel. Note that global filters are prefixed with [G], local filters with [L], and system filters with [S].
- Sort the AVPs in ascending or descending order by column. This is not applicable for **Restricted To** column.
