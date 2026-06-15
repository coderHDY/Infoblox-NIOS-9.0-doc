---
title: "About Lights Out Management"
source: "/space/nios90/280407172"
pageId: "280407172"
---
Infoblox LOM (Lights Out Management) is an implementation of the remote management and monitoring of Infoblox appliances that are LOM ready, such as the Trinzic 2010 appliances.  
The LOM feature is useful when you want to monitor your platforms remotely or consolidate your data centers. When you monitor your systems remotely, you can avoid issues such as overheating of a problematic system by remotely powering down the system. To conserve energy, you can also power up and down any systems based on service requirements.  
You can enable LOM for the entire Grid and override the Grid settings for specific members. You can also configure LOM on independent appliances and HA pairs.

> **warning**
>
> ### Note
> 
> You can configure LOM only on physical appliances that support LOM. This port automatically negotiates a speed of up to 1000 Mbps. Devices connected to the LOM port must be configured to auto-negotiate and must not have a fixed speed of 1000 Mbps.

LOM is disabled by default. Before you can configure LOM and remotely manage the appliance, ensure that the IPMI (Intelligent Platform Management Interface) port on your appliance is properly connected to the network. Consider the following security measures before you enable the IPMI interface for LOM:

- Use an authentication method other than the RAKP (Remote Authenticated Key-Exchange Protocol) for the IPMI interface. Any implementation that uses the RAKP can become vulnerable.
- Secure the network to which the IPMI interface is connected. Infoblox recommends that you use a separate and secure network for all IPMI traffic.
- Use strong passwords for all IPMI users, with at least 10 characters to reduce susceptibility to attacks.

When configuring IPMI user accounts, passwords must comply with the following rules:

1. Password length must be between 8 and 20 characters.
2. Password cannot be the reverse of the username.
3. Password must contain at least **three** of the following character types:
   
   - Uppercase letters (A–Z)
   - Lowercase letters (a–z)
   - Numbers (0–9)
   - Special characters: !$%&()*+./&lt;=&gt;?@[\]^_`{|}~-,;#

If the password does not meet these requirements, the system displays an error message.

- IPMI is disabled by default. DO NOT enable IPMI on the appliances if it is not being used.

By default, IPMI uses UDP port 623. You can then enable LOM and add LOM users through the Infoblox GUI. When you add LOM users, you can assign them specific roles so they can perform only certain functions. When you add a LOM user, you can configure the user to be an "operator" or a "user" depending on the functions you want the user to perform. An operator can access an appliance remotely and perform the following functions:

- Access the serial console
- Reset the appliance
- Power up and down the appliance
- Monitor system status, such as CPU usage and system temperature

A user role can only monitor system status. Users with this role cannot perform any other functions remotely.  
After you set up and configure your appliance, perform the following tasks through Grid Manager to enable LOM and set up LOM users:

1. Enable LOM for the Grid or members that support IPMI, as described in  Enabling LOM below.
2. Add LOM users based on your organizational needs, as described in  Adding LOM User Accounts below.
3. Configure the IPMI network interface on the appliance, as described in Configuring the IPMI Network Interface, see [*Configuring SNMP*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp).
4. After you have configured LOM and set up the IPMI interface, install a utility such as IPMItool on your Linux management system. For information about IPMItool, visit the IPMItool web site at [http://ipmitool.sourceforge.net](http://ipmitool.sourceforge.net). For the most commonly used commands and examples, see  IPMI Commands and Examples below.

You can also do the following from Grid Manager after you configure LOM:

- Enable and disable LOM for the Grid or members, as described in  Enabling LOM below.
- Modify LOM settings, as described in  Modifying LOM Settings below.
- View LOM users, as described in  Modifying LOM Settings below.
