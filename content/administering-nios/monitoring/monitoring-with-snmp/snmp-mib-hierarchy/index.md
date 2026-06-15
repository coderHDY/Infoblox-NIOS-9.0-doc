---
title: "SNMP MIB Hierarchy"
source: "/space/nios90/280760493"
pageId: "280760493"
---
In addition to implementing its own enterprise MIBs, Infoblox supports the standard MIBs defined in *RFC-1213,* *Management* *Information* *Base* *for* *Network* *Management* *of* *TCP/IP-based* *internets:* *MIB-II.*  
The Infoblox MIBs are part of a universal hierarchical structure, usually referred to as the MIB tree. The MIB tree has an unlabeled root with three subtrees. The below figure illustrates the branch of the MIB tree that leads to the Infoblox enterprise MIBs. Each object in the MIB tree has a label that consists of a textual description and an OID (object identifier). An OID is a unique dotted-decimal number that identifies the location of the object in the MIB tree. Note that all OIDs begin with a dot (.) to indicate the root of the MIB tree.  
As shown in the figure below, Infoblox is a branch of the Enterprise subtree. IANA (Internet Assigned Numbers Authority) administers the Enterprise subtree, which is designated specifically for vendors who define their own MIBs. The IANA-assigned enterprise number of Infoblox is 7779; therefore, the OIDs of all Infoblox MIB objects begin with the prefix .1.3.6.1.4.1.7779. In addition, IB-DNSSERV and IB-DHCPSERV are branches of the Enterprise subtree as well.  
The Infoblox SNMP subtree branches down through two levels, ibProduct and ibOne, to the Infoblox MIBs: ibTrap, ibPlatformOne, ibDNSone, ibDHCPOne, and ibDataplaneOne. The ibTrap MIB defines the traps that NIOS appliances send, and the ibPlatformOne, ibDNSone, ibDHCPOne, and ibDataplaneOne MIBs provide information about the appliance. For detailed information about these MIBs, see [*Infoblox MIBs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1430192757).   
  
*MIB* *Hierarchy*

*[drawio]*
