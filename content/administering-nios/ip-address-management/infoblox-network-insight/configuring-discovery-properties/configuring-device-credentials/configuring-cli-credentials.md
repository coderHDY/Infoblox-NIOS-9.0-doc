---
title: "Configuring CLI Credentials"
source: "/space/nios90/1343292849"
pageId: "1343292849"
---
SNMP protocols provide a powerful means of querying devices for broad arrays of information. The CLI discovery feature is required for port control tasks, including port configuration and network provisioning or de-provisioning. CLI credentials are also used to change the description or port state of discovered devices and to collect additional data from devices, similar to SNMP. By default, Probe appliances inherit their member discovery properties, including CLI credential sets, from the Grid level. Enable passwords are entered in separate records and kept as a separate list in Grid Manager.

For CLI credentials, you define a global set of Admin account/password tuples, as well as Enable passwords, at the Grid level. You can also specify credentials and Enable passwords for individual devices at the member level. Should such a credential not work for a given device, or if command-line access is lost for a device, Network Insight re-guesses credentials from the Grid-level credential list, including vendor defaults if available.

> **warning**
>
> ### Note
> 
> You can test username/password credentials or an Enable password credential. You can also combine a username/password credential and an Enable password credential as part of the same test.

To add a CLI credential, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then click **Discovery**.
2. For the Grid: Click **Edit** > **Grid** **Discovery** **Properties** in the Toolbar.  
   For the Probe member: Select a *member* checkbox, and then click **Edit** > **Member** **Discovery** **Properties** in the Toolbar.
3. Click the **Credentials** tab > **CLI** tab.
4. To override the inherited Grid settings for a Probe member, click **Override**.
5. Click the Add icon to add a new CLI username/password entry to the list. Select the **Credential** **Type**, which can be one of two choices.
6. In **Login** **Credentials**, click the Add icon and specify the credential details in the corresponding cells:
   
   - **Protocol**: Select **SSH** or **Telnet**. Infoblox recommends the use of SSH.
     
     - **SSH**: SSH credentials require both a username and a password. The default protocol is SSH.
     - **Telnet**: In Network Insight, Telnet credentials must use both a username and a password.
       
       Note that should you choose to use a Telnet-based credential, Network Insight requires both the username and password for the login account. This also applies when you override the CLI credentials on objects such as a fixed address, host, or IPv4 reservation. For more information, see the section [Defining CLI Credentials for Objects](#)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/edit-v2/26775252#ConfiguringDiscoveryProperties-bookmark1420)below.
   - **Name**: Username for the CLI login account.
   - **Password**: Login password for the CLI login account.
   - **Credential Group**: For the Grid, select a group to which you want to assign the credential. For the Probe member, the table displays settings that were configured on the Grid, but only the default credential group is used for the member. You can edit the credentials list making up the default group by clicking **Override**.
   - **Comment**: A text comment describing the CLI login account.
   - **Order**: By default, Network Insight inserts the new credential record at the bottom of the credentials list, which is reflected by its **Order** value, showing the order used for attempting the use of CLI credentials. Enter a new value in the **Order** field if you want the new credential to be in a position other than the last in order.
7. In **Enable** **Credentials**, click the Add icon and specify the credential details in the corresponding cells:
   
   - **Protocol**: SSH or Telnet. Infoblox recommends the use of SSH.
   - **Password**: Enable password for device configuration access.
   - **Credential Group**: For the Grid, select a group to which you want to assign the current credential. For the Probe member, this setting is inherited and cannot be changed.
   - **Comment**: A text comment about the credential.
   - **Order**: By default, Network Insight inserts the new record at the bottom of the list, reflected by its **Order** value, showing the order used for attempting use of the CLI credentials. Enter a new value in the **Order** field if you want the new credential to be in a position other than the last in order.
8. Optionally, you can test the credentials you added to the list. For more information, see Testing SNMP and CLI Credentials below.
9. Click **Save** **&** **Close**.
