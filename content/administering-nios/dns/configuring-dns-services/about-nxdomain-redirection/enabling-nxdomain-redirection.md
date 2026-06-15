---
title: "Enabling NXDOMAIN Redirection"
source: "/space/nios90/1420198225"
pageId: "1420198225"
---
Only DNS members with recursion enabled can support NXDOMAIN redirection.  
You can enable this feature at the Grid level, and override it for a member or DNS view with recursion enabled. You must specify at least one IP address as the redirection destination. You can specify different redirection IP addresses and rulesets for each Grid member or DNS view, and you can also define members that do not provide redirection. This is useful when you want to define a set of "opt out" servers for DNS clients that do not want to be redirected.  
You can also enable the DNS member to log queries that match rules with an action of "Redirect" or "Modify". The logs include the queried domain name, source IP address, the pattern of the matched rule, and the name of the corresponding ruleset. The DNS member does not log queries that matched rules with an action of "Pass".  
To enable NXDOMAIN redirection:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
    **Member:** From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.  
   **DNS** **View:** From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab -> *dns_view* checkbox -> Edit icon.  
   **Standalone** **DNS**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **System** **DNS** **Properties**.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. If the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor is in basic mode, click **Toggle** **Advanced** **Mode**.
3. Click **NXDOMAIN** and complete the following:
   
   - **Enable** **NXDOMAIN** **redirection** **(recursive** **members** **only):** Select this option to enable recursive DNS members to synthesize their responses to DNS queries for A records.
   - **Rulesets:** Click the Add icon to add an NXDOMAIN ruleset. Use the up and down arrows to move rulesets up and down in the list. The appliance applies them in the order they are listed.
   - **Redirect** **to** **IPv4** **addresses:** Click the Add icon and enter the IPv4 addresses that the DNS server includes in its synthesized response for A type queries.
   - **Redirect** **to** **IPv6** **addresses:** Click the Add icon and enter the IPv6 addresses that the DNS server includes in its synthesized response for AAAA type queries.
     
     Note that you can add up to 12 IP addresses, combination of both IPv4 and IPv6, for NXDOMAIN redirection.
   - **TTL:** Specify how long the DNS client caches the A record with the redirected IP address.
   - **Log** **redirected** **queries:** Select this checkbox to log the redirected queries to syslog.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
