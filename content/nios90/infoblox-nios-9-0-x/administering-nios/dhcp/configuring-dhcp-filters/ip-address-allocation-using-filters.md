---
title: "IP Address Allocation Using Filters"
source: "/space/nios90/280663312"
pageId: "280663312"
---
To control the assignment of addresses from specific address ranges to specific hosts, the NIOS appliance provides the following filters:

- A MAC address filter to which you add MAC addresses as filter criteria. For information, see *[Configuring MAC Address Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters)*.
- A relay agent filter with configured circuit ID and remote ID as specified by the relay agent (DHCP option 82). For information, see *[About Relay Agent Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/about-relay-agent-filters)*.
- An option filter in which you specify DHCP options and matching values. For information, see *[Configuring Option Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters)*.
- A NAC filter in which you specify authentication results from a RADIUS authentication server group as filter criteria. For information, see *[About NAC Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters)*.

When the appliance receives an address request, it checks if the request matches a filter. If it does not, the appliance assigns an address from the address range with the highest available IP address. If the request matches at least one class filter for a range, the appliance applies the following rules:

- If there are grant address filters applied to that range, the request must match one of the class filters or the appliance does not grant an address from that range.
- If there are deny address filters applied to that range, the request must not match any of the filters. If the request matches a deny filter, the appliance does not grant an address from that range.
- If an address range has a combination of grant and deny filters, the request must:
  
  - Match a grant filter
  - Not match a deny filter

Two rules govern the behavior of the appliance in relation to DHCP filters:

1. Depending on your filter configuration, the appliance checks if any data in an address request (such as the MAC address of the client, DHCP options 77 and 82, etc.) matches any filters applied to an address range.
2. The appliance checks for available addresses in the address ranges containing the highest addresses first. ("Highest" means closest to 255.255.255.255, and "lowest" means closest to 0.0.0.0.)

These two rules can work in coordination. For example, when the appliance receives an address request, it first checks if the request matches any filter. If it matches more than one filter assigned to different address ranges, the appliance first applies the filter that belongs to the range with the highest IP addresses. If that address does not grant an address lease (because the filter action is Deny or all address leases in that range are already in use), the appliance then applies the matching filter for the range with the next higher set of IP addresses. If the appliance still has not granted a lease from the address ranges whose filters match data in the request and there are unfiltered address ranges, the appliance attempts to assign an address from one of these ranges, again beginning with the range having the highest IP addresses. The figure DHCP Address Assignment with Multiple Filters below presents an example illustrating the sequence in which the appliance assigns addresses when a request matches a MAC address filter. For information about MAC address filters, see *[Configuring MAC Address Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters)*.

*Figure* *31.4* *DHCP* *Address* *Assignment* *with* *Multiple* *Filters*

*[drawio]*



| **if** | **then** |
| --- | --- |
| the appliance receives a request that matches a filter for one address range, | it applies the action specified in the filter for that address range. If it does not assign an address from that range (the action is deny or the action is grant but all addresses in that range are in use), the appliance then checks if it can assign an address from an unfiltered address range (if there are any), starting with the range with the highest addresses first, as shown in *[IP Address Allocation](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/ip-address-allocation)*. |
| the same filter applies to multiple address ranges and the appliance receives an address request matching that filter, | it checks the address range with the highest IP addresses matching that filter. If the appliance does not assign an address from that range, it checks the filtered address range with the next highest IP addresses, and so on. If it still has not assigned an address, the appliance starts checking unfiltered address ranges (if there are any), again beginning with the range with the highest address first. |
| multiple filters for the same address range conflict with each other (one filter grants a lease and another denies it) and a requesting client matches both filters, | the filter denying the lease takes precedence. For example, if a requesting client matches both a MAC address filter (granting a lease) and a user class filter (denying a lease) for the same address range, the appliance denies the lease. When faced with a choice to either allow or deny a lease based on equal but contradictory filters, the appliance takes the more secure stance of denying it. |
