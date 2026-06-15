---
title: "Creating a Single Grid Master"
source: "/space/nios90/684884041"
pageId: "684884041"
---
Although using an HA master is ideal because of the hardware redundancy it provides, you can also use a single appliance as the Grid Master. You can create a single Grid Master in either IPv4, IPv6, or dual mode (IPv4 and IPv6). Infoblox recommends frequent backups if the Grid Master is a single appliance, and there is no Master Candidate. For information about which vNIOS appliance supports configuration as a single Grid Master, see [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).

Setting up an appliance as a single Grid Master is very easy. If the appliance has the DNSone package with the Grid upgrade, it is already a Grid Master. You simply need to define the network settings for its LAN1 port. The various procedures for defining the network settings for the LAN1 port of a single independent appliance apply here as well. Therefore, you can use the following procedures to define the network settings for the LAN1 port of the appliance that you want to make a single Grid Master:

- **Console port**: See –[*Method 1 – Using the CLI*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274626)[*.*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274626/Deploying+a+Single+Independent+Appliance#Method2%E2%80%93UsingtheCLI)

You can also use the NIOS *Grid Setup Wizard* to create a single Grid Master. In addition to providing a simple method accompanied by helpful information, the setup wizard allows you to change the admin password and configure time settings for the appliance.

# Using the Setup Wizard

To create a single Grid Master using the *Grid Setup Wizard, *complete the following:

1. Connect the power cable from the NIOS appliance to a power source and turn on the power.
2. Connect an Ethernet cable from the LAN1 port on the appliance to a switch on the network.
3. If you have not changed the default IP address (192.168.1.2/24) of the LAN1 port through the CLI—and the subnet to which you connect the appliance does not happen to be 192.168.1.0/24—put your management system in the 192.168.1.0/24 subnet and connect an Ethernet cable between your management system and the NIOS appliance.
4. Open a web browser and make an HTTPS connection to the IP address of the LAN1 port. To reach the default IP address, enter: *https://192.168.1.2* .  
   Several certificate warnings appear during the login process. This is normal because the preloaded certificate is self-signed (and, therefore, is not in the trusted certificate stores in your browser) and has the host name [*www.infoblox.com*](https://www.infoblox.com/)[,](http://www.infoblox.com/) which does not match the destination IP address you entered in step 3. To stop the warning messages from occurring each time you log in to the GUI, you can generate a new self-signed certificate or import a third-party certificate with a common name that matches the FQDN (fully qualified domain name) of the appliance. For information about certificates, see [*Managing Certificates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280266962)*.*
5. Log in using the default username **admin** and password **infoblox**.
6. Read the Infoblox *End-User License Agreement*, and then click **I Accept**. Note that if you want to view the privacy policy of Infoblox, then click **Infoblox Privacy Policy**. Grid Manager displays the policy on a new browser tab.
7. The *Grid Setup Wizard* appears. On the first screen, select **Configure** **a** **Grid** **Master** and click **Next**.
8. On the next screen, specify the Grid properties and click **Next**:
   
   - **Grid Name**: Enter a text string that the Grid Master and appliances joining the Grid use to authenticate each other when establishing a VPN tunnel between them. The default Grid name is **Infoblox**.
   - **Shared Secret**: Enter a text string that the Grid Master and appliances joining the Grid use as a shared secret to authenticate each other when establishing a VPN tunnel between them. The default shared secret is **test**.  
     For nodes with FIPS/CC enabled, combined length of the **Shared Secret** and **Grid Name** fields must not exceed 100 characters.
   - **Confirm Shared Secret**: Enter the shared secret again.
   - **Hostname:** Enter a valid domain name for the appliance.
   - **Type of Network Connectivity**: Select the type of network connectivity for the Grid Master from the drop-down list:
     
     - **IPv4 and IPv6**: Select this to configure a dual mode Grid Master.
     - **IPv4**: Select this to configure an IPv4-only Grid Master.
     - **IPv6**: Select this to configure an IPv6-only Grid Master.
       
       Note:
       
       - Infoblox recommends that you back up the configuration after you convert a Grid to a different mode.
       - Restoring the old backup by performing a forced restore, may prevent the Grid members from rejoining the Grid Master after the restore.
   - **Is** **the** **Grid** **Master** **an** **HA** **pair?**: Select **No**.
9. On the next screen, configure the network settings and click **Next**:
   
   1. **Ports and Addresses**: This table lists the network interfaces based on the type of network connectivity of the Grid Master. For IPv4 Grid Master, specify the network information for LAN1 (IPv4) port and for IPv6 Grid Master, specify the network information for LAN1 (IPv6) port. For a dual mode Grid Master, specify the network information for both LAN1 (IPv4) and LAN1 (IPv6). Note that you cannot change the LAN1 private IP address in vNIOS for AWS.  
      Enter correct information for the following by clicking the field:
      
      - **Interface**: Displays the name of the interface. You cannot modify this.
      - **Address**: Type the IPv4 or IPv6 address depending on the type of interface. An IPv6 address is a 128-bit number in colon hexadecimal notation. It consists of eight 16-bit groups of hexadecimal digits separated by colons (example: 2001:db8:0000:0123:4567:89ab:0000:cdef or 2001:db8::123:4567:89ab:0:cdef).
      - **Subnet Mask (IPv4) or Prefix Length (IPv6)**: Specify an appropriate subnet mask for the IPv4 address or prefix length for the IPv6 address. The prefix length ranges from 2 to 127.
      - **Gateway:** Type the IPv4 or IPv6 address of the default gateway depending on the type of interface. For the IPv6 interface, you can also type **Automatic** to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.
        
        Note that you can now define a link-local address as the default IPv6 gateway and isolate the LAN segment, so the local router can provide global addressing and access to the network and Internet. For information about the link-local address limitations, see the **Gateway** field description in the [*HA Master – Node 1*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/684327064) section.
      - **VLAN** **Tag**: For a VLAN, enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
      - **Port Settings**: From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
10. Optionally, enter a new password and click **Next**. The password must be a single alphanumeric string that is at least four characters long. The password is case-sensitive.
11. Select the time zone of the Grid Master and indicate whether the Grid Master synchronizes its time with an NTP (Network Time Protocol) server, and then click **Next**.
   
   - If you choose to enable NTP, click the Add icon and enter the IP address of an NTP server. Entries may be an IPv4 or IPv6 address. You can enter IP addresses for multiple NTP servers.
   - If you choose to disable NTP, set the date and time for the appliance.
12. The last screen displays the settings you specified in the previous panels of the wizard. Verify that the information is correct and click **Finish**. The application restarts after you click **Finish**.

> **warning**
>
> ### Note
> 
> The *Grid* *Setup* wizard provides options such as not changing the default password and manually entering the time and date. However, changing the password and using an NTP server improves security and accuracy (respectively), and so these choices are presented here.
> 
> Record and retain this information in a safe place. If you forget the shared secret, you need to contact Infoblox Technical Support for help. When you add an appliance to the Grid, you must configure it with the same Grid name, shared secret, and VPN port number that you configure on the Grid Master.

The last screen of the setup wizard states that the changed settings require the appliance to restart. When you click **Finish**, the appliance restarts.

The setup of the single master is complete. From now on, when you make an HTTPS connection to the appliance, use its new IP address.

In a dual mode Grid Master, the communication protocol for all the services is set to IPv4, by default. You can change the default communication protocol for the services. For information, see [*Changing the Communication Protocol for a Dual Mode Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)*.*
