---
title: "Understanding Simple Network Management Protocol"
source: "/space/nios90/280662546"
pageId: "280662546"
---
You can use SNMP (Simple Network Management Protocol) to manage network devices and monitor their processes. An SNMP-managed device, such as a NIOS appliance, has an SNMP agent that collects data and stores them as objects in MIBs (Management Information Bases). The SNMP agent can also send traps (or notifications) to alert you when certain events occur within the appliance or on the network. You can view data in the SNMP MIBs and receive SNMP traps on a management system running an SNMP management application, such as HP OpenView, IBM Tivoli NetView, or any of the freely available or commercial SNMP management applications on the Internet.

*SNMP* *Overview*

*[drawio]*

The NIOS appliance supports SNMPv1, SNMPv2, and SNMPv3. It also adheres to the following RFCs:

- *RFC* *3411,* *An* *Architecture* *for* *Describing* *Simple* *Network* *Management* *Protocol* *(SNMP)* *Management* *Frameworks*
- *RFC* *3412,* *Message* *Processing* *and* *Dispatching* *for* *the* *Simple* *Network* *Management* *Protocol* *(SNMP)*
- *RFC* *3413,* *Simple* *Network* *Management* *Protocol* *(SNMP)* *Applications*
- *RFC* *3414,* *User-based* *Security* *Model* *(USM)* *for* *version* *3* *of* *the* *Simple* *Network* *Management* *Protocol* *(SNMP)*
- *RFC* *3416,* *Version* *2* *of* *the* *Protocol* *Operations* *for* *the* *Simple* *Network* *Management* *Protocol* *(SNMP)*
- *RFC* *3418,* *Management* *Information* *Base* *(MIB)* *for* *the* *Simple* *Network* *Management* *Protocol* *(SNMP)*
- *RFC* *1155,* *Structure* *and* *identification* *of* *Management* *information* *for* *TCP/IP-based* *internets*
- *RFC* *1213,* *Management* *Information* *Base* *for* *Network* *Management* *of* *TCP/IP-based* *internets:MIB-II*
- *RFC* *2578,* *Structure* *of* *Management* *Information* *Version* *2* *(SMIv2)*

# About SNMPv1 and SNMPv2

SNMPv1 is the initial implementation of SNMP. It operates over protocols such as UDP (User Datagram Protocol) and IP (Internet Protocol). SNMPv2 includes improvements in performance and security. It adds new protocol operations such as GetBulk and Inform, which allow the management system to request larger blocks of data from the agent. Both SNMPv1 and SNMPv2 use common strings that are sent in clear text to authenticate clients.  
The NIOS appliance supports SNMPv1 and SNMPv2 in which the SNMPv2 agent acts as a proxy agent for the SNMPv1 management systems. When an SNMPv1 management system sends a query to the appliance, the SNMPv2 proxy agent forwards the request to the SNMPv1 agent. The proxy agent maps the SNMPv1 trap messages to the SNMPv2 trap messages, and then forward the messages to the management system.  
You can enable the appliance to receive queries from SNMPv1 and SNMPv2 management systems. You can also add SNMPv1 and SNMPv2 management systems to receive traps from the appliance. For information about how to configure SNMPv1 and SNMPv2 on the appliance, see *[Configuring SNMP](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp)*.

# About User-Based Security Model in SNMPv3

SNMPv3 adds security and remote configuration enhancements to SNMPv1 and SNMPv2. The NIOS appliance supports the USM (User-based Security Model) in SNMPv3 for the authentication, encryption, and decryption of SNMP data. SNMPv3 uses the same MIB objects as those supported in SNMPv1 and SNMPv2.  
SNMPv3 provides the following security measures:

- Data integrity: Ensure that SNMP data is not maliciously modified by unauthorized entities during its transmission through the network. This protects against unauthorized management operations, such as falsifying the value of a MIB object.
- Authentication: Verify the identities of the origin of the SNMP data to protect against masquerade threats that may temper the identity of users who have the appropriate authorization to send and receive SNMP data.
- Confidentiality: Ensure that unauthorized users cannot eavesdrop on any data exchanges between SNMP agents and management systems, depending on local policies of the systems.
- Timeliness: Ensure that the SNMP data is received in a timely manner to prevent malicious reordering of data by unauthorized entities.

To enable SNMPv3 on the NIOS appliance to provide user-based security, you must first configure SNMPv3 users on the appliance to enable access by SNMP management systems. The appliance supports HMAC-MD5-96 and  
HMAC-SHA-96 hash functions as the authentication protocols, and DES (Data Encryption Standard) and AES (Advanced Encryptions Standard) as the encryption methods for SNMPv3 users. For information, see *[Configuring SNMP](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp)*.
