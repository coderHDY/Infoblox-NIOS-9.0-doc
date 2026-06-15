---
title: "Viewing Detailed Lease Information"
source: "/space/nios90/280662976"
pageId: "280662976"
---
You can view detailed information about a specific lease. To view detailed information of a specific lease:

1. From the **Data** **Management** tab, select **DHCP** tab -> **Leases** -> **Current** **Leases** -> *lease* checkbox, and then click the **Lease** **Details** icon.  
   or  
   From the **Data** **Management** tab, select the **IPAM** tab, drill down to the IP Map, IP List, or IP address panel, and then click **Lease** **Details** from the Toolbar.
2. In the *Lease* *Detailed* *Information* viewer, Grid Manager displays the following for each type of lease:  
   For IPv4 leases, it displays the fields **Member**, **MAC** **address**, **Host**, **Start**, **End**, **Binding** **State**, **Username **as described in [*Viewing Current Leases*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663001), plus the following information:
   
   - **Lease Issue**: The date and time when the lease was issued. Displayed in the lease event details report only.
   - **Event**: The action taken. This can be one of the following: **Issued**, **Renewed**, **Freed**, or **Abandoned**. Displayed in the lease event details report only.
   - **Served by**: The member that provides DHCP services to the lease.
   - **Next Binding State**: The subsequent binding state when the current lease expires. The lease state and the next binding state can be one of the following:
     
     - **Free**: The lease is available for clients to use.
     - **Active**: The lease is currently in use by a DHCP client.
     - **Static**: The lease is a fixed address lease.
     - **Expired**: The lease was in use, but the DHCP client never renewed it, so it is no longer valid.
     - **Released**: The DHCP client returned the lease to the appliance.
     - **Abandoned**: The appliance cannot lease this IP address because the appliance received a response when pinging the address.
     - **Backup**: You have enabled DHCP Failover and the lease is owned by the secondary peer.
   - **Billing Class**: The billing class of the lease.
   - **Option 82 Agent ID**: The agent ID of the relay agent filter (option 82). A relay agent can append DHCP option 82, relay agent information, to a message that it forwards from a DHCP client to a DHCP server.
   - **Option 82 Circuit ID**: The circuit ID of the relay agent filter (option 82).
   - **Option 82 Remote ID**: The remote ID of the relay agent filter (option 82).
   - **Option 82 Link Selection**: An IP address, provided by the DHCP relay agent, in the subnet from which the DHCP server allocated the leased IP address to the client.
   - **Option 82 Server ID Override**: The IP address, provided by the DHCP relay agent, that the DHCP server used as the value in the server identifier option of the response sent to the client.  
     For more information about the sub options for Option 82, see [*About the DHCP Relay Agent Option (Option 82)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370).  
     The agent, circuit, and remote IDs for option 82 can be displayed in hexadecimal or plain text format. By default, Grid Manager displays them in hexadecimal format. You can change the logging format, as described in [*Defining Logging Format for DHCP Option 82*](#).
   - **Option**: Agent circuit ID and remote ID data sent by a DHCP relay agent in all DHCP options.
   - **UID**: (User ID) The client identifier that the DHCP client sends the appliance (in DHCP option 61) when it acquires the lease. Not all DHCP clients send a UID.
   - **TSFP**: (Time Sent From Partner) The time — from the point of view of a remote DHCP failover peer — when the current lease state ends.
   - **CLTT**: (Client Last Transaction Time) The time of the last transaction with the DHCP client for this lease.
   - **TSTP**: (Time Sent To Partner) The time — from the point of view of the local DHCP failover peer — that the current lease state ends.  
       
     For IPv6 leases, it displays most of the same fields as IPv4 leases, plus the following information:
   - **DUID:** The DUID of the IPv6 DHCP client that received the lease for an IPv6 address.
   - **Prefix Bits:** The prefix length.
   - **Preferred Lifetime:** The length of time that a valid address is preferred. A preferred address can be used with no restrictions. When this time expires, the address becomes deprecated.
