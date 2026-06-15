---
title: "Configuring dnstap for Violations over TLS"
source: "/space/nios90/1432715686"
pageId: "1432715686"
---
Infoblox supports the transmission of dnstap violations over TLS. This provides a secure method for processing and reporting subscriber service violations, using protocol buffer format and frame stream protocol.

To configure dnstap for violations over TLS, complete the following:

1. From the **Data** **Management** tab, select **DNS**.

1. To configure at the grid level, in the toolbar, click **Grid DNS Properties**.  
   To configure at the member level, click the **Members** tab, select the member checkbox, and click the **Edit** icon.
2. In the *Grid DNS Properties *or *Member DNS Properties *editor, click **Toggle Advanced Mode **and then select the **Logging **tab.
3. Select the **Violations over TLS** checkbox to send the subscriber policy violations over TLS using dnstap.
4. In the **DNSTAP Receiver Address/FQDN** field, enter the IP address or the FQDN from which you want to capture violations over TLS. It supports both IPv4 and IPv6 addresses.
5. In the **DNSTAP Receiver Port field,** enter the port number on which you want to configure the dnstap client system. The default port number is 6000.
6. Click **Save and Close**.

> **warning**
>
> **Note**
> 
> - dnstap supports either violations over TLS or DNS query/response over TLS, but not both.
> - Starting with NIOS 9.0.7, you can simultaneously capture queries/responses and violations for parental control and subscriber response policy zones through dnstap, over TCP only. For more information, see [*set dnstap_violation_over_tcp*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1581023737).
