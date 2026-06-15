---
title: "Enabling Read-only API Access on the Grid Master Candidate"
source: "/space/nios90/1340803217"
pageId: "1340803217"
---
Enable read-only API access on the Grid Master Candidate to scale read/write API requests on the Grid Master and improve its performance. This access is disabled by default on new installations.

The appliance logs all API logins in the audit log and syslog. View these logs for the Grid Master Candidate under the **Administration** -&gt; **Logs** tab.

## Limitations of Enabling Read-Only API Access on the Grid Master Candidate

Note the following limitations when enabling read-only API access on the Grid Master Candidate:

- When enabled on an HA Grid Master Candidate, access to the API service is limited to the active node. If the API service is disabled for an admin group, users in that group cannot access the read-only API service on the Grid Master Candidate, even if read-only API access is enabled. Users must have at least read-only permission to access the API service.
- Enabling read-only API access disables Grid member to Grid Master URL redirection.

## Enabling Read-Only API Access on the Grid Master Candidate

To enable read-only API access on the Grid Master Candidate:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_Master_Candidate* checkbox, then click the Edit icon.
   
   - In the *Grid* *Member* *Properties* editor, select the **General** tab -&gt; **Basic** tab, then:  
     **Read** **Only** **API** **access**: This field appears only when the Grid member is a Master Candidate. Select this checkbox to enable read-only API access. This setting allows only read-only API access, not write access. Note that enabling this disables GUI access via the Grid Master Candidate's IP address.
2. Save the configuration.
