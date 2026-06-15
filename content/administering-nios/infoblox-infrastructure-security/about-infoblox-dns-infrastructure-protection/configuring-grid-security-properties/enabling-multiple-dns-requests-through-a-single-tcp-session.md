---
title: "Enabling Multiple DNS Requests through a Single TCP Session"
source: "/space/nios90/280275855"
pageId: "280275855"
---
The advanced appliance inspects only one DNS request sent over a single TCP connection. To avoid accepting possible malicious data following a valid DNS request, the appliance terminates the TCP connection after handling the initial DNS request over TCP. You can modify this default Grid setting at the Grid or member level.  
To modify this setting, do the following:

1. **Infoblox Grid**: From the **Data** **Management** tab, select the **Security** tab, and then click **Grid** **Security** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **Security** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.  
   **Profiles**: From the **Data** **Management** tab, select the **Security** tab -> **Profiles** tab -> *profile* checkbox, and then click the Edit icon.
2. In the *Grid* *Security* *Properties* or *Member* *Security* *Properties* editor, select the **DNS Infrastructure** **Protection** tab -> **Advanced** tab, and complete the following:
   
   - **Disable** **multiple** **DNS** **requests** **via** **single** **TCP** **session**: This is selected by default to avoid accepting possible malicious data following a valid DNS request. When this is selected, the appliance handles the initial DNS request through TCP and then terminates the TCP session to block subsequent DNS traffic, except for an SOA query sent by a client that is accepted in the allow-transfer ACL. This exception covers the case in which an AXFR query follows the SOA query through the same TCP connection. This field is read-only when you use a DNS Infrastructure Protection profile instead of a ruleset. For more information, see [*Configuring Grid Security Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270078).
3. Save the configuration.

> **warning**
>
> Note
> 
> The **Disable** **multiple** **DNS** **requests** **via** **single** **TCP** **session** checkbox is enabled by default when DNS Infrastructure Protection is enabled.
