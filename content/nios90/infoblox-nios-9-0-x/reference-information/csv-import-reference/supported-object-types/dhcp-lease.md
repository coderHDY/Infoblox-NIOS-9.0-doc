---
title: "DHCP Lease"
source: "/space/nios90/280791937"
pageId: "280791937"
---
> **warning**
>
> **Note**
> 
> Infoblox supports CSV export for DHCP lease, but does not support CSV import.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| header-lease | String | Yes |  |  | Example: Lease |
| agent_id | String |  |  |  | Determined based on the value of "option" |
| billing_class | String |  |  | billing_class |  |
| binding_state | Enum{FREE, BACKUP, ACTIVE, EXPIRED, RELEASED, ABANDONED, RESET} |  |  | binding_state |  |
| circuit_id | String | No |  | agent_circuit_id | This field is required when match_option = CIRCUIT_ID. Example: 11 |
| duid | String | Yes | DUID | duid | Example: 0001 |
| ends | DateTime |  |  | ends | Lease end time |
| fingerprint | String | Yes | DHCP Fingerprints | fingerprint | An array of DHCP fingerprints. |
| fingerprint-class | String | No | Next Server | next_server | Example: blue.domain.com |
| ip_address | IP address | Yes | IP Address | ipv4addr | Example: 10.0.0.11 |
| link_selection | IP address |  | IP address |  | Example: 10.0.0.0 |
| mac_address | MAC address | No | MAC Address | mac | This field is required if match_option = MAC_ADDRESS, or if you are importing a reservation. Example: aa:d1:dd:10:ff:02 |
| next_binding_state | Enum{FREE, BACKUP, ACTIVE, EXPIRED, RELEASED, ABANDONED, RESET} |  |  | next_binding_state | Example: FREE |
| protocol | String | Yes | protocol | protocol | Protocol type. This can be IPV4 or IPV6. |
| remote_id | Integer | No | Remote ID | remote_id_name | Example: 50 |
| server_host_name | String | No |  |  | Indicates the name of the server host. Example: infoblox.localdomain |
| server_id_override | IP address |  | IP address |  | Example: 10.0.0.1 |
| starts | DateTime |  |  |  | Lease start time |
| uid | String | Yes | UID | uid |  |
| username | String |  | Username | username |  |
