---
title: "NAT Groups"
source: "/space/nios90/280274710"
pageId: "280274710"
---
> **warning**
>
> ### Note
> 
> Infoblox NAT and NAT groups do not support NAT IPv6 operation.

NAT groups are necessary if the Grid Master is behind a NAT appliance and there are members on both sides of that NAT appliance. Any members on the same side as the master go into the same NAT group as the master and use their interface addresses for Grid communications with each other. Grid members on the other side of that NAT appliance do not go in the same NAT group as the master and use the master's NAT address for Grid communications. These other members outside the NAT appliance can—but do not always need to be—in a different NAT group. To see when NAT groups become necessary for Grid communications, compare the figure NAT without NAT Groups below with the figures Grid Master in NAT Group and Grid Master and Master Candidate in NAT Groups.

*NAT* *without* *NAT* *Groups*

*[drawio]*

> **warning**
>
> ### Note
> 
> A single or HA member using its MGMT port for Grid communications cannot be separated from the Grid Master behind a NAT appliance. For more information, see [*Using the MGMT Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129).

*Grid* *Master* *in* *NAT* *Group*

*[drawio]*

The same use of NAT groups that applies to a Grid Master also applies to Master Candidates. If there are no other members behind the same NAT appliance as a Master Candidate, then the Master Candidate does not need to be in a NAT group. It always uses its NAT address for Grid communications. If another member is behind the same NAT appliance as the Master Candidate, then both the candidate and that member need to be in the same NAT group so that—if the candidate becomes master—they can use their interface addresses to communicate with each other (see the figure below).  
  
*Grid* *Master* *and* *Master* *Candidate* *in* *NAT* *Groups*

*[drawio]*

Although some members might not need to be in a NAT group, it is good practice to put all members in NAT groups in anticipation of adding or rearranging Grid members within the network. For example, in NAT without NAT Groups – Grid Master and Master Candidate in NAT Groups, Member 4 did not need to be in a NAT group until it became configured as a Master Candidate. At that point, because Member 5 is also behind the same NAT appliance, it became necessary to create NAT Group 2 and add Members 4 and 5 to it. Similarly, if you add another member behind the NAT appliance in front of Member 3, then you must create a new NAT group and add Member 3 and the new member to it. Always using NAT groups can simplify such changes to the Grid and ensure that NAT appliances never interrupt Grid communications.  
To create a NAT group:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab.
2. Expand the Toolbar and select **Grid Properties** -> **Edit**.
3. In the *Grid Properties* editor, select the **NAT Groups** tab.
4. Click the Add icon, and enter a name in the **Name** field and optionally, a comment in the Comment field.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

To add members to the NAT group:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -> **Members** tab.
2. Select a Grid member and click the Edit icon.
3. In the *Grid Member Properties* editor, select the **Network** -> **Advanced** tab and complete the following:
   
   - **Enable NAT Compatibility (IPv4 only):** Select this checkbox. NAT group is not supported by IPv6 appliances.
   - **NAT Group:** From the drop-down list, select the NAT group you previously created.
   - **NAT Addresses:** For a single Grid Master or member, enter the address configured on the NAT appliance that maps to the interface address of the LAN1 port. A single master or member that serves DNS uses this NAT address for Grid communications and—if it serves DNS—DNS messages.

For an HA Grid Master or member, enter the address configured on the NAT appliance that maps to its VIP address. An HA master uses its VIP NAT address when communicating with Grid members. An HA member that serves DNS uses its VIP NAT address for its DNS messages. It uses its LAN1 port NAT address for Grid communications.

- **Node 1 (if HA)**
  
  - **NAT IP Address:** Enter the address configured on the NAT appliance that maps to the interface address of the LAN1 port on Node 1. When Node 1 of an HA member is active, it uses its NAT address for Grid communications.
- **Node 2 (if HA)**
  
  - **NAT IP Address:** Enter the address configured on the NAT appliance that maps to the interface address of the LAN1 port on Node 2. When Node 2 of an HA member is active, it uses its NAT address for Grid communications.

4. Save the configuration and click **Restart** if it appears at the top of the screen.
