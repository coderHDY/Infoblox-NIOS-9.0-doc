---
title: "Guidelines for Using ECS and ECS Forwarding"
source: "/space/nios90/1420100314"
pageId: "1420100314"
---
The following are the guidelines for using ECS and ECS forwarding:

- When recursive ECS is enabled, the appliance applies ECS handling for queries that meet both of the following criteria:
  
  - If the source prefix length is not set to zero.
  - If the query name matches one of the listed whitelisted zone names.
- If you enable ECS forwarding, all queries that contain a valid ECS option will be forwarded to the authoritative server.
- Queries with the source prefix length set to zero will be forwarded unchanged, regardless of whether ECS forwarding is enabled or disabled.
- When recursive ECS and ECS forwarding are enabled, then response to queries that contain a valid ECS option with a non-zero source prefix length will contain an ECS option.
- When recursive ECS is enabled and ECS forwarding is disabled, and if the original query contains a valid ECS option with a non-zero source prefix length, then the resolver returns a REFUSED response.

To enable recursive ECS and configure DNS resolver parameters, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.
2. In the *Grid* *DNS* *Properties* editor, click the **Advanced** subtab of the **Queries** tab and complete the following:
   
   - **Enable** **Recursive** **ECS**: Select this checkbox to enable recursive resolution using ECS. This is disabled by default. If recursive ECS is enabled, the appliance applies ECS handling for queries that meet both of the following criteria:
     
     - If the source prefix length is not set to zero.
     - If the query zone name is listed in the whitelisted domains.
   - **Enable** **ECS** **Forwarding**: Select this checkbox to enable ECS forwarding. If you enable ECS forwarding, all queries containing a valid ECS option will be forwarded to the authoritative server.
     
     **Note:** Queries with the source prefix length set to zero will be forwarded unchanged, regardless of whether ECS forwarding is enabled or disabled.
   - **Query Zone Permissions**: Click the Add icon to add a list of query zone names that are subject to ECS recursion and the corresponding permission. Grid Manager adds a row to the table. Complete the following:
     
     - **Zone Name**: Enter the zone name.
     - **Permission**: Select **Allow** or **Deny** from the drop-down list.
   - **IPv4SourcePrefix**: Specify the IPv4 source prefix length. You can enter a value between 1 and 24. The default value is 24.
   - **IPv6SourcePrefix**: Specify the IPv6 source prefix length. You can enter a value between 1 and 56. The default value is 56.
