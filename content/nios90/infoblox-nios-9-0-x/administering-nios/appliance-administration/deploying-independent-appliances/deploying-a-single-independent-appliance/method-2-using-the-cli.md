---
title: "Method 2 – Using the CLI"
source: "/space/nios90/1330807582"
pageId: "1330807582"
---
You can use the Infoblox CLI to make an initial network configuration through the set network command. To access the CLI, make a direct serial connection from your management system.

1. Connect a console cable from the console port on your workstation to the male DB-9 console port on the NIOS appliance. The DB-9 pin assignments follow the EIA232 standard. You can use one RJ-45 rollover cable and two female RJ-45-to-female DB-9 adapters, or a female DB-9-to-female DB-9 null modem cable.
   
   *Console* *Connection*
   
   *[drawio]*
2. Use a serial terminal emulation program, such as Hilgraeve Hyperterminal® (provided with Windows® operating systems), to launch a session. The connection settings are as follows:
   
   - **Bits per second**: 9600
   - **Data bits**: 8
   - **Parity**: None
   - **Stop bits**: 1
   - **Flow control**: Xon/Xoff
3. Log in to the appliance using the default username and password (**admin** and **infoblox**).
4. At the Infoblox command prompt, enter **set** **network** to change the network settings, such as the IP address, netmask, and gateway for the LAN1 port. You can configure either IPv4 or IPv6 address for the LAN1 port.  
   Note that In the following example, the variable ip_addr1 is the IP address of the LAN1 port and ip_addr2 is the IP address of the gateway for the subnet on which you set the ip_addr1 address. Infoblox appliances support IPv4 and IPv6 networking configurations in all deployments cited in this chapter. You can set the LAN1 port to an IPv6 address and use that address to access the NIOS UI.
   
   
   
   You can configure an IPv4 address for the LAN1 port as follows:
   
   ` Infoblox &gt; set network   `
   
   ` NOTICE: All HA configuration is performed from the GUI. This interface is used only to configure a standalone node or to join a Grid.`
   
   ` Enter IP address: ip_addr1`
   
   ` Enter netmask: netmask`
   
   ` Enter gateway address: ip_addr2`
   
   ` Configure IPv6 network settings? (y or n): y`
   
   ` Enter IPv6 address [Default: none]: 2001:db8:a22:a00::29 `
   
   `Enter IPv6 Prefix Length [Default: none]: 64`
   
   ` Enter IPv6 gateway [Default: none] 2001:db8:a22:a00::1`
   
   ` Become Grid member? (y or n): n   `
   
   To avoid configuring IPv6 network settings, you can press **N** at the command line.
   
   You can configure an IPv6 address for the LAN1 port as follows:
   
   `Infoblox &gt; set network `
   
   `NOTICE: All HA configuration is performed from the GUI. This interface is used only to configure a standalone node or to join a grid. `
   
   `Enter IP address : 2620:010A:6000:2400:0000:0000:0000:6508 `
   
   `Enter IPv6 Prefix Length: 64`
   
   ` Enter IPv6 gateway [Default: none]: 2620:010A:6000:2400:0000:0000:0000:0001`
   
   ` Configure IPv4 network settings? (y or n):n`
   
   ` Become grid member? (y or n): n`
   
   To configure IPv4 network settings, you can press **Y** at the command line and configure IPv4 address, netmask, and the gateway address. After you confirm your network settings, the Infoblox application automatically restarts. You can press **N** to avoid configuring IPv6 on the command line. After you confirm your network settings, the Infoblox application automatically restarts.
5. Cable the LAN1 port to a network. For information about installing and cabling the appliance, refer to the user guide or installation guide that was shipped with the product.
