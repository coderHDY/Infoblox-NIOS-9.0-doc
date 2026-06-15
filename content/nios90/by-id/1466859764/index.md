---
title: "Adding Fixed Addresses/Microsoft Reservations"
source: "/space/nios90/1466859764"
pageId: "1466859764"
---
To add a reservation from Grid Manager, add a fixed address and Grid Manager synchronizes it to the Microsoft server as a reservation. You can create fixed addresses from scratch or use fixed address templates. For information about fixed address templates, see [*Adding IPv4 Fixed Address/Reservation Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates).  
To add a fixed address:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. Expand the Toolbar and click **Add** -&gt; **Fixed** **Address**.
3. In the *Add* *Fixed* *Address* wizard, select one of the following and click **Next**:
   
   - **Add** **Fixed** **Address**   
     or
   - **Add** **Fixed** **Address** **using** **Template**  
     Click **Select** **Template** and select the template that you want to use.
4. Complete the following:
   
   - **Network:** Click **Select Network** to select the network to which you want to add the fixed address. If you are adding the fixed address from a specific network, the appliance displays the network address here. You can still select a different network by clicking **Select Network**.
   - **IP Address:** Enter the IPv4 address for the fixed address, or click **Next Available IP** to obtain the next available IP address.
   - **MAC Address:** Enter the MAC address of the host.
   - **Name**: Enter a name for the fixed address. This is required for reservations on Microsoft servers.
   - **Configure On:**  
     **None:** Select this if you do not want this synchronized to the Microsoft server.  
     **Microsoft** **Server:** Select the Microsoft server that serves this fixed address.
   - **Comment:** Optionally, enter additional information. The text in this field appears in the Description field of the Microsoft reservation after the fixed address is synchronized. Note that due to a length limit set by the Microsoft DHCP server, after you synchronize DHCP data, the Description field can display only up to 128 characters even though NIOS allows up to 256 characters for this field.
5. Click **Next**, and optionally set operational parameters for the fixed address. Otherwise, the fixed address inherits its parameters from its scope.
   
   - **Routers**: In the table, enter the IP address of the router that is connected to the same network as the DHCP client. Click the Add icon to add more routers.
   - **Domain Name**: Enter the name of the domain for which the Microsoft DHCP serves DHCP data. The DHCP server includes this domain name in Option 15 when it responds with a DHCPOFFER packet to a DHCPDISCOVER packet from a client.
   - **DNS Servers**: In the table, enter the IP address of the DNS server to which the DHCP client sends name resolution requests. The DHCP server includes this information in the DHCPOFFER and DHCPACK messages.
   - **Broadcast Address**: Enter the broadcast IP address of the network to which the DHCP server is attached.
6. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*Extensible*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)
7. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or
   
   - Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
