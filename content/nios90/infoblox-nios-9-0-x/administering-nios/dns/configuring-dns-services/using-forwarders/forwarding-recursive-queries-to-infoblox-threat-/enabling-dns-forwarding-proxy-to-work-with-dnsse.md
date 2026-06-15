---
title: "Enabling DNS Forwarding Proxy to Work with DNSSEC"
source: "/space/nios90/1468629137"
pageId: "1468629137"
---
If NIOS has DNSSEC validation enabled, and if DNS Forwarding Proxy forwards a query to the Infoblox Cloud for a domain that is DNSSEC signed and that the Infoblox Threat Defense Cloud redirects rather than blocks, NIOS will receive the response and try and validated it using DNSSEC. Because the response is a redirect and not the original response, NIOS will see the query as invalid and return a SERVFAIL message to the client that made the original query rather than the redirect IP. While this still results in the user not being able to access the domain, it means the users is not redirected to the redirect web page.

In addition, SERVFAIL can indicate general resolution failure in the cloud (e.g. the Infoblox Cloud couldn’t resolve the domain but the domain does exist). In either case, NIOS will interpret SERVFAIL from DNS Forwarding Proxy as a signal to revert to local resolution.

When the DNS Forwarding Proxy is healthy and returns a SERVAIL to NIOS, if NIOS has the **Fall back to the default resolution process if Infoblox Threat Defense Cloud does not respond **option enabled, then NIOS will ignore any configured global forwarder and will use Root Hints to try and resolve the domain. If the NIOS appliance does not have network permissions to query the Internet (e.g. firewall permits DNS traffic only to Infoblox cloud) then there will be a delay of several seconds before the client gets the SERVFAIL answer.

> **info**
>
> **Note**
> 
> If **Fall back to the default resolution process if Infoblox Threat Defense Cloud does not respond **is enabled, then an attacker might block the Infoblox Cloud from resolving a specific domain which would result in Infoblox Cloud returning SERVFAIL to NIOS which would cause NIOS to try and resolve the domain directly. This might permit attacker DNS traffic flow to bypass DNS Exfiltration detection in Infoblox Cloud (assuming that DNS Exfiltration detection is  not being run locally on NIOS).

1. Enable DNS Forwarding Proxy on NIOS by clicking **Manage** -&gt; **On-Prem Hosts** in the Infoblox Portal Configuration.
2. On Grid Manager, Disable the **Fall back to the default resolution process if Infoblox Threat Defense Cloud does not respond** option.
3. Enable DNSSEC validation as described in [*Enabling DNSSEC Validation*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/configuring-recursion-and-validation-for-signed-).
4. Ensure that the configuration is verified before removing trust anchors. Trust anchors are essential for DNSSEC validation, as they verify the authenticity of DNS responses. To configure trust anchors, see [* Enabling DNSSEC Validation*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/configuring-recursion-and-validation-for-signed-).
