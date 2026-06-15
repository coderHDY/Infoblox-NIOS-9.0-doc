---
title: "Configuring SNMPv3 Credentials"
source: "/space/nios90/1343096290"
pageId: "1343096290"
---
SNMPv3 allows the use of two secret keys for every credential — one for authentication and another for encryption. Network Insight allows flexible application of keys — authentication but no encryption, for example. You define users in one of the three following ways:

- SNMPv3 user with no authentication or privacy credentials.
- SNMPv3 user with authentication but no privacy credentials.
- SNMPv3 user with both authentication and privacy credentials.

To add an SNMPv3 credential, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then click **Discovery**.
2. For the Grid: Click **Edit** > **Grid** **Discovery** **Properties** in the Toolbar.  
   For the Probe member: Select the *member* checkbox, and then click **Edit** > **Member** **Discovery** **Properties** in the Toolbar.
3. Click the **Credentials** tab > **SNMPv3** tab.
4. To override the inherited Grid settings for a Probe member, click **Override**.
5. Click the Add icon and specify the credential details in the corresponding cells:
   
   - **Name**: The username for the credential.
   - **Auth Protocol**: Select one of the listed authentication protocols.
   - **Auth Password**: The password to use with the authentication protocol.
   - **Privacy Protocol**: Select one of the listed privacy protocols.
   - **Privacy Password**: The password to use with the privacy protocol.
   - **Credential Group**: For the Grid, select a group to which you want to assign the credential. For the Probe member, the table displays settings that were configured on the Grid, but only the default credential group is used for the member. You can edit the credentials list making up the default group by clicking **Override**.
   - **Order**: The order for attempting the use of the credential.
   - **Comment**: A text comment about the credential.
6. Optionally, you can test the credentials you added to the list. You can test SNMPv3 credentials against any device or any IP address, at the Grid level or from any Probe member or network view. For more information, see Testing SNMP and CLI Credentials below.
7. Click **Save** **&** **Close** to save changes.

To find a specific SNMPv3 entry, enter the value in the **Go To** field and click **Go**.

To remove an SNMPv3 authentication entry, select the checkbox and click the Delete icon.

To export the entire list of community strings in a table file readable by a spreadsheet program, click the Export icon and choose Export Data in Infoblox CSV Import Format. To export just the subset of data that is visible in the dialog, click the **Export** icon and choose **Export Visible Data**. A **Show** **Passwords** option allows the secret keys to be visible in the import.
