---
title: "Configuring DDNS Features"
source: "/space/nios90/280272318"
pageId: "280272318"
---
You can enable the DHCP server to support certain DDNS features for IPv4 and IPv6 clients. These features affect the behavior of the DHCP server and how it handles DDNS updates. The following sections describe the different features you can set.

# Resending DDNS Updates

You can enable the DHCP server to make repeated attempts to send DDNS updates to a DNS server. The DHCP server asynchronously updates DNS for a particular lease and sends the DHCP ACK to the client requesting the lease. If the update fails, the DHCP server still provides the lease and sends the DHCP ACK to the client. The DHCP server then continues to send the updates until it is successful or the lease of the client expires. You can change the default retry interval, which is five minutes.  
You can enable this feature for the Grid and for individual Grid members.

# Generating Host Names for DDNS Updates

Some IPv4 and IPv6 clients do not send a host name with their DHCP requests. When the DHCP server receives such a request, its default behavior is to provide a lease but not update DNS. You can configure the DHCP server to generate a host name and update DNS with this host name when it receives a DHCP request that does not include a host name. It generates a name in the following format: dhcp-*ip_address*, where *ip_address* is the IP address of the lease. For example, if this feature is enabled and the DHCP server receives a DHCP REQUEST from an IPv4 DHCP client with IP address 10.1.1.1 and no host name, the DHCP server generates the name dhcp-10-1-1-1 and appends the domain name, if specified, for the DDNS update. Likewise, if an IPv6 client with IP address 2001:db8:a23:0:0:0:0:d sends a request, the DHCP server generates the name dhcp-2001-db8-a23-0-0-0-0-d and appends the domain name, if specified, for the DDNS update.

# Updating DNS for IPv4 Clients with Fixed Addresses

By default, the DHCP server does not update DNS when it allocates an IPv4 or IPv6 fixed address to a client. You can configure the DHCP server to update the A and PTR record of IPv4 clients with a fixed address. When you enable this feature and the DHCP server adds A and PTR records for a fixed address, the DHCP server never discards the records. When the lease of the client terminates, you must delete the records manually. Note that the DHCP server does not send DDNS updates for IPv6 fixed addresses and hosts. You can define fixed address settings for the Grid, Grid members, IPv4 networks, and IPv4 shared networks.

# Configuring DDNS Features

You can configure DDNS features for a Grid, its member, IPv4 and IPv6 networks and shared networks, and IPv4 DHCP address ranges. You cannot set DDNS features for IPv6 DHCP ranges. To configure DDNS features:

1. **Grid:** From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid** **DHCP** **Properties**.   
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Members** tab -> *member* checkbox-> Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Networks** tab -> **Networks** -> *network* checkbox -> Edit icon.  
   **Shared** **Network**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Networks** tab -> **Shared** **Networks** -> *shared_network* checkbox -> Edit icon.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Networks** tab -> **Networks** ->* network* -> *addr_range* checkbox -> Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the **DDNS** -> **Advanced** tab for the Grid and member, or the **DDNS** -> **Basic** tab for the network, do the following:
   
   - **Update** **Retry:** You can set this for a Grid and its members only.
     
     - **Retry** **Updates** **When** **Server** **Becomes** **Available:** Select this checkbox.
     - **Retry** **interval** **(Minutes):** You can optionally set the retry interval. The default is five minutes.
   - **Generate** **Hostname**
     
     - **Generate** **Hostname** **if** **not** **Sent** **by** **Client:** Select this checkbox to enable the DHCP server to generate a hostname and update DNS with this hostname, when the DHCP request of a client does not include a hostname.
   - **Fixed** **Address** **Updates:** You can set this for IPv4 fixed addresses only. This option is available in the **IPv4** **DDNS** **Advanced** tab of the *Grid* *DHCP* *Properties* and *Member* *DHCP* *Properties* editors, and in the **IPv4** **DDNS** **Basic** tab of the IPv4 *DHCP* *Network* and *Shared* *Network* editors.
     
     - **Update** **Fixed** **Addresses:** Select this checkbox to allow he DHCP server to send updates to DNS forIPv4 fixed addresses.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

When a lease expires, the DHCP server removes the A, AAAA, and PTR records that it updated. It does not remove any records that the client updated.

# Replacing Host Names for DDNS Updates

In situations where you need to restrict the use of specific characters in a host name for DDNS updates, you can configure a hostname rewrite policy. Such policy accepts certain characters and replaces others in host names specified in IPv4 DHCP requests. When you create a hostname rewrite policy, you enter a list of valid characters that the appliance accepts in the host name. You also specify a character that the appliance uses to replace invalid characters. You can create multiple hostname rewrite policies on the appliance, but you can only enable one policy at any given time. The appliance provides a default policy that includes **a-z0-9_** as valid characters and dash (**-**) as the replacement character. You cannot modify or delete the default policy.  
When you enable a hostname rewrite policy, the appliance replaces host names with the newly translated host name when it issues DHCP leases and sends DDNS updates for IPv4 DHCP clients. For information about how to add and enable a hostname rewrite policy, see Adding and Enabling a Hostname Rewrite Policy below.  
Before you enable a hostname rewrite policy, consider the following:

- You must enable DDNS updates before the hostname rewrite policy can take effect.
- You can use a hostname rewrite policy only if MS code pages are disabled.
- The policy supports only IPv4 DHCP clients.
- If DHCP option 81 support is enabled and updating DDNS is in the request, the appliance sends updates for A records directly to the DNS server and DHCP only updates the PTR record. When this happens, there can be a mismatch in the host name between the A and PTR records.
- Changes made to a hostname rewrite policy apply only to subsequent DDNS updates.

When an IPv4 DHCP client requests an IP address, it includes its host name in DHCP option 12. If you enable a hostname rewrite policy, the appliance uses the newly translated host name when it issues a lease to the client.  
The client can also include a FQDN in option 81, in which it instructs the server whether to perform DDNS updates. If the client sends a FQDN in option 81, the appliance replaces the entire FQDN based on the policy. For example, if the FQDN in option 81 is dev.bldg12.corpxyz.com, the appliance replaces invalid characters in the entire FQDN even though the host name can be dev or dev.bldg12. For example, if your hostname rewrite policy specifies valid characters as **a-z** and the replacement character is -, the newly translated FQDN is dev.bldg--.corp---.com. For information about client FQDN in option 81, see [*About the Client FQDN Option*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405256).  
Note that when multiple IPv4 DHCP clients specify host names that map to the same translated host name, the appliance allocates leases to all clients, but it only sends DDNS updates to the first client request. When it tries to update DNS for subsequent clients, the updates fail.  
You can add and enable a hostname rewrite policy for the entire Grid. You can also override the policy at a member level, as described in Overriding a Grid Hostname Rewrite Policy below.

## Adding and Enabling a Hostname Rewrite Policy

To add and enable a hostname rewrite policy, complete the following:

1. From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid** **DHCP** **Properties**.
2. In the *Grid* *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. In the **IPv4** **DDNS** -> **Advanced** tab, click the Add icon in the **Hostname** **Rewrite** **Policy** section:
   
   - **Policy** **Name**: Enter the policy name. Each policy name must be unique.
   - **Valid** **Characters**: Enter a list of valid characters you want to keep in the host name. Ensure that you consider the following rules:
     
     - You can include only printable ASCII characters and space.
     - The appliance includes period (**.**) as a valid character by default. You do not need to specify it.
     - You can also use shortcuts for a series or range of characters. For example, when you enter **a-d**, the appliance includes the following: A, B, C, D, a, b, c, and d. When you enter **0-5**, the appliance includes the following: 0, 1, 2, 3, 4, and 5. In a character range, ensure that the start character is less than the end character.
     - If you want to use dash (**-**) as a character, ensure that you put it in front of the valid character pattern. Otherwise, the appliance treats the string as a range of characters.
     - You can build a POSIX regular expression based on the string you enter here, but you cannot enter an empty string.
     - You cannot use the meta character (**^**) as a start or end character in a range. For example, **a-^** is invalid. You also cannot use duplicate characters as character sets. For example, **aa** is invalid.
   - **Replace** **Invalid** **Characters** **with**: Enter a character the appliance uses to replace invalid characters. Only enter one printable ASCII character. You cannot enter multiple characters or use space as the replacement character.
   
   To test the hostname policy before adding it to the system, enter a sample hostname in the **Sample** **Host** **Name** field, and then click **Test**. The appliance displays the translated hostname. You can change the policy and test it again until you get the desired result.Click the Add icon to add the new hostname rewrite policy to the table. The appliance comes with a default policy that includes **a-z0-9_** as valid characters and dash (**-**) as the replacement character. Grid Manager displays the following for each policy:
   
   - **Policy** **Name**: The name of the hostname rewrite policy.
   - **Valid** **Characters**: Valid characters for the host name.
   - **Replace Invalid Characters with**: The character used to replace invalid characters in the host name. You can also select a hostname policy and click the Edit icon to modify it, or click the Delete icon to delete it. You cannot modify or delete the default policy. For information about how to modify a policy, see Modifying a Hostname Rewrite Policy below*.*
4. Complete the following to enable the hostname rewrite policy:
   
   - **Enable** **hostname** **rewrite** **policy**: Select this checkbox to use a hostname rewrite policy for DHCP leases and DDNS updates for IPv4 DHCP clients. From the drop-down list, select the hostname policy you want to use.
5. Save the configuration.

## Modifying a Hostname Rewrite Policy

To modify a hostname rewrite policy, complete the following:

1. From the **Data Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid DHCP Properties**.
2. In the *Grid DHCP Properties* editor, click **Toggle Advanced Mode**.
3. In the **IPv4 DDNS** -> **Advanced** tab, do the following in the **Hostname Rewrite Policy** section:
   
   - Select a policy from the table, and then click the Edit icon.
   - In the Edit Hostname Rewrite Policy section, modify and test the policy as described in Adding and Enabling a Hostname Rewrite Policy above.
     
     Note that if you enable the policy at the Grid level, you can modify all information, including the policy name. If you enable the policy at the member level, you can modify any information, except for the policy name.
4. Click **Save**. The appliance updates the policy in the table.
5. Save the configuration.

## Overriding a Grid Hostname Rewrite Policy

You can override a Grid hostname rewrite policy at the member level. To override a Grid policy, complete the following:

1. From the **Data** **Management** tab, select the **DHCP** tab and click the **Members** tab -> *member* checkbox -> *Edit* icon.
2. In the *Member* *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. In the **IPv4** **DDNS** -> **Advanced** tab, click **Override** in the **Hostname** **Rewrite** **Policy** section, and then complete the following:
   
   - **Enable** **hostname** **rewrite** **policy**: Select this checkbox to use a hostname rewrite policy, or deselect the checkbox to disable the policy.
   - When you enable this feature, select a policy that you want to use from the drop-down list. Grid Manager displays all hostname rewrite policies that you have configured on the appliance in the drop-down list. After you select a policy, Grid Manager displays the policy name, valid characters, and the replacement character.
4. Save the configuration.
