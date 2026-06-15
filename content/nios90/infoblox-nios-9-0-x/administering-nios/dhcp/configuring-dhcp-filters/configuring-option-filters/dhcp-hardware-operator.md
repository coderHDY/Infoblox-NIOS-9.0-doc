---
title: "DHCP Hardware Operator"
source: "/space/nios90/1394573978"
pageId: "1394573978"
---
You can define the Hardware Operator option and add it as a match rule to an option filter. This option enables the appliance to match the hardware type and MAC address of the DHCP client, which it derives from the hardware type, hlen (hardware length) and chaddr (client hardware address) fields of the client's DHCP Discover and Renew packets.  
To add Hardware Operator to an option filter, fill in the fields as follows:

- In the first drop-down list, select **Hardware** **Operator**. Note that because it is not a DHCP Option, it does not have an actual option number.
- In the second drop-down list, select one of the following operators: **equals**, **does** **not** **equal**, **substring** **equals** and **substring** **does** **not** **equal.**  
  If the operator is **substring** **equals** or s**ubstring** **does** **not** **equal**, specify the offset and length.
- In the text field, enter the string that represents the hardware type and MAC address to match. For example, the htype value is 1 for the Ethernet hardware type. The hardware types (hrd) are defined at [*http://www.iana.org/assignments/arp-parameters/arp-parameters.xml*](http://www.iana.org/assignments/arp-parameters/arp-parameters.xml)[.](http://www.iana.org/assignments/arp-parameters/arp-parameters.xml#hardware-type-rules)

This filter rule assumes that the values exist in the DHCP packets.  
The following table provides examples of rules that include the Hardware Operator option. The entry in the first drop-down list for all rules is **Hardware** **Operator**.   
*Hardware* *Operator* *Sample* *Rules*

|   **Rule** **Description** | **Second** **Drop-Down** **List** **(operator)** | **Text** **Field** **(string)** |   **Offset** |   **Length** |
| --- | --- | --- | --- | --- |
| Match a hardware type and MAC address. | equals | 01:00:C0:B0:AA:BB:CC |  |  |
| Match hardware type only. | substring equals | 01 | 0 | 1 |
| Match the vendor MAC prefix (first three bytes of MAC address). | substring equals | 00:C0:B0 | 1 | 3 |
