---
title: "Defining Named ACLs"
source: "/space/nios90/280667593"
pageId: "280667593"
---
Depending on how you plan to use a named ACL and which access control types an operation supports, you can add one or all of the following when you define a named ACL: IPv4 and IPv6 addresses, IPv4 and IPv6 networks, TSIG key based ACEs, DNSone 2.x TSIG keys. You can also add an existing named ACL as a nested ACL to a new or existing named ACL.  
When configuring a named ACL, ensure that you define it correctly for the intended operations using the supported access control types. For example, if you want to apply a named ACL to AAAA filtering, do not include IPv6 addresses or networks in the named ACL because AAAA filtering does not support IPv6 addresses and networks. For information about which access control types in *Operations* *that* *Support* *Access* *Control *table, see [*Operations that Support Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407358)*.*  
To define a named ACL:

1. From the **Administration** tab, select the **Named** **ACLs** tab, and then click the Add icon.
2. In the *Add* *Named* *ACL* wizard, complete the following:
   
   - **Name**: Enter a name for the named ACL. You can enter up to 64 characters. Alphanumeric characters, upper case and lower case letters from A to Z, digits from 0 to 9, along with hyphens, underscores, forward slashes (not back slashes), and dots are allowed. No other characters are allowed.
   - **Comment**: Enter additional information about the named ACL.
3. Click **Next**. Complete the following to add ACEs to the named ACL:
   
   - Click the Add icon and select one of the following access control types from the drop-down list. Depending on your selection, Grid Manager adds a row to the table directly or expands the panel before adding a row.
     
     - **IPv4** **Address**: Select this to add an IPv4 address. Click the **Entry** field and enter the IPv4 address. The **Operation** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv4** **Network**: When you select this, enter the network address in the **Address** field, select the netmask using the slider, and then select **Allow** or **Deny** from the **Permission** drop-down list. Click **Add** and Grid Manager adds the entry to the table.
     - **IPv6** **Address**: Select this to add an IPv6 address. Click the **Entry** field and enter the IPv6 address. The **Operation** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv6** **Network**: When you select this, enter the network address and its netmask in the **Address** field, and then select **Allow** or **Deny** from the **Permission** drop-down list. Click **Add** and Grid Manager adds the entry to the table.
     - **TSIGKey**: In the **AddTSIGKey** panel, complete the following, and then click **Add** to add the TSIG key to the list. The **Operation** column displays **Allow** by default. You cannot change the default permission.
       
       - **Key** **name**: Enter a meaningful name for the key, such as a zone name or the name of the remote name server. This name must match the name of the same TSIG key on other name servers.
         
         Note that the **Key** **name** must be a valid domain name without any space and it cannot begin with DHCP_UPDATER.
       - **Key** **Algorithm**: Select either **HMAC-MD5** or **HMAC-SHA256**.
       - **Key** **Data**: To use an existing TSIG key, type or paste the key in the **Key** **Data** field. Alternatively, you can select the key algorithm, select the key length from the **Generate** **Key** **Data** drop down list, and then click **Generate** **Key** **Data** to create a new key.
     - **DNSone** **2.x** **TSIG** **Key**: Select this when the client is a NIOS appliance running DNS One 2.x code. The appliance automatically populates the value of the key in the **Entry** field. The **Operation** column displays **Allow** by default. You cannot change the default permission.
     - **Any** **Address/Network**: Select this to allow or deny permission for any addresses and networks.
     - **Named** **ACL**: When you select this, Grid Manager displays the *Named* *ACLs* Selector. Select the named ACLs you want to add to the new ACL. If you have only one existing named ACL, Grid Manager automatically adds the named ACL to the list. The selected named ACL becomes a nested ACL in the newly created named ACL.
       
       Note: The **Order** field in the table displays the position of each entry based on the order it is placed in the list. You can modify this number to change the order of an ACE. You can also select the ACE checkbox and use the up and down arrows next to the table to place the entry in the desired position.
4. Click **Next** to enter extensible attributes for the named ACL. For information, see* *[*About Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)
5. Save the configuration.
