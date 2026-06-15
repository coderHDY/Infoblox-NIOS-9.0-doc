---
title: "Joining IPv6 Networks"
source: "/space/nios90/1432786488"
pageId: "1432786488"
---
Joining multiple networks into a larger network is the opposite of splitting a network. You can select a network and expand it into a larger network with a smaller netmask. A smaller netmask defines fewer networks while accommodating a larger number of IP addresses. Joining or expanding a network allows you to consolidate all of the adjacent networks into the expanded network. Adjacent networks are all networks that fall under the netmask of the newly-expanded network.  
To join or expand a network:

1. From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network* checkbox, and then click **Join** from the Toolbar.
2. In the *Join* *Network* editor, do the following:
   
   - **Address**: Displays the network address. You cannot modify this field.
   - **Netmask**: Enter the netmask of the expanded network.
   - **Automatically** **create** **reverse-mapping** **zone**: Select this checkbox to configure the expanded network to support reverse-mapping zones . The appliance automatically creates reverse-mapping zones only if the netmask is between /4 through /128, in increments of 4 (that is, /4, /8, /12, and so on until /128).
3. Click **OK**.
