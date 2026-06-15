---
title: "Configuration Example: Creating an IPv4 Network Using a Template"
source: "/space/nios90/1394541308"
pageId: "1394541308"
---
This example describes how to create a /24 network template and how to use the template to create a 192.168.2/24 network with the following configurations:

- First address 192.168.2.1 is reserved for the router
- Next 10 addresses (192.168.2.2 to 192.168.2.11) reserved for servers
- Next 10 addresses (192.168.2.12 to 192.168.2.21) reserved for printers
- Next 10 addresses (192.168.2.22 to 192.168.2.31) assigned as fixed addresses
- 100 addresses (192.168.2.32 to 192.168.2.131) reserved for workstations. The appliance assigns these dynamically.
- 10 addresses (192.168.2.74 to 192.168.2.83) are in an exclusion range. If you assigned static addresses to certain hosts in the middle of an address range template, you can exclude the addresses from the address range template so the appliance does not assign these IP addresses to clients

The below figure illustrates the configurations of the 192.168.2/24 network using the network template you create:

*Creating a Network Using a Template*

*[drawio]*

Use the following steps to create the sample network template (shown in the above figure).

1. Create the following DHCP range templates. For information, see Adding IPv4 Range Templates above.
   
   - Server template with the following values:
     
     - **Name:** Servers
     - **Offset:** 2
     - **Number of Addresses:** 10
     - **Comment:** Address range 2 to 11 for Servers
   - Printer template with the following values:
     
     - **Name:** Printers
     - **Offset:** 12
     - **Number of Addresses:** 10
     - **Comment:** Address range 12 to 21 for printers.
   - Workstation template with the following values:
     
     - **Name:** Workstations
     - **Offset:** 32
     - **Number of Addresses:** 100
     - **Comment:** Address range 32 to 131 for DHCP on workstations
   - Exclusion range with the following values. You must modify the *Workstations* template to add the exclusion range. For information, see [*Modifying IPv4 Range Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-range-templates/modifying-ipv4-range-templates)*.*
     
     - **Name:** Exclusion
     - **Offset:** 42
     - **Number of Addresses:** 10
     - **Comment:** Excluding addresses 74 to 83 from the DHCP range 32 to 131.
2. Create a fixed address/reservation template with the following values. For information, see [*Adding IPv4 Fixed Address/Reservation Templates*](/nios90/by-id/1394574276)[About IPv4 DHCP Templates#Adding-IPv4-Fixed-Address%2FReservation-Templates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/About+IPv4+DHCP+Templates#Adding-IPv4-Fixed-Address%2FReservation-Templates)above.
   
   - **Name:** Router
   - **Comment:** Fixed address template
   - **Offset:** 1
   - **Number of Addresses:** 1
3. Create a fixed address/reservation template with the following values. For information, see[* Adding IPv4 Fixed Address/Reservation Templates*](/nios90/by-id/1394574276)* *above.
   
   - **Name:** myFixedAddress
   - **Comment:** Fixed address template
   - **Offset:** 22
   - **Number of Addresses:** 10
4. Create a network template with the following values. For information, see [*Adding IPv4 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-network-templates/adding-ipv4-network-templates).
   
   - **Name:** myNetworkTemplate
   - **Netmask**: Select /24 as the fixed subnet mask for the network
   - **Comment:** Network template for /24 network
   - **Automatically create are verse-mapping zone:** Select this so that the NIOS appliance automatically creates the corresponding reverse-mapping zone for the network.
5. Add the DHCP range templates *Servers*, *Printers*, and *Workstations* to the network template.
6. 6. Add the fixed address/reservation template *myFixedAddress* to the network template.
7. Add a fixed address with the following values:
8. Create a network using the network template *myNetworkTemplate* with the following values. For information, see [*Adding IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks/adding-ipv4-networks).
   
   - **Address:** Enter the IP address 192.168.2.0 of the network that you want to create using the template.
   - **Select template:** Select the network template *myNetworkTemplate*.
9. To verify your configuration, from the **Data Management** tab, select the **DHCP** tab -&gt; **Templates** tab. Select *myNetworkTemplate* and click the Edit icon. In the *Network Template* editor, click the **Templates** tab. The Grid Manager displays the DHCP range templates and fixed address templates.
10. Click **Restart** to restart services.
