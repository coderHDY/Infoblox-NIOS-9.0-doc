---
title: "show subscriber_secure_data"
source: "/space/nios90/319520881"
pageId: "319520881"
---
If you have configured Infoblox Subscriber Services, the command `show subscriber_secure_data` enables you to view information about the subscriber data cached by the collector member. For information about Infoblox Subscriber Services, see [*Infoblox Subscriber Services*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services).

Sub commands of `show subscriber_secure_data` are:

*[children]*

# Syntax

`  show subscriber_secure_data`

# Example

The following example displays the subscriber cached entries:

`Infoblox &gt; show subscriber_secure_data`

`111.111.111.111/32|IPS:10.35.120.10|ACS:Acct-Session-Id=9889732d-34590e08;AN0:User-Name=Helen child;NAS:NAS-IP-Address=10.35.120.10;IPS:NAS-IP-Address=10.35.120.10;SUB:MSISDN=9988182386;SSP:Subscriber-Secure-Policy=0000007f;PCP:Parental-Control-Policy=400000000000000000004000d3;|Sat Aug 26 12:55:36 2017`  
111.111.111.111/32`|IPS:10.120.252.24|ACS:Acct-Session-Id=9944732d-34590e08;AN0:User-Name=IPv6 only;NAS:NAS-IP-Address=10.120.252.24;IPS:NAS-IP-Address=10.120.252.24;SUB:MSISDN=9944182386;PXY:Proxy-All=1;PXP:PXY_PRI=0ac4065f;PXS:PXY_SEC=0ac4065f;SSP:Subscriber-Secure-Policy=7ff7fffb;PCP:Parental-Control-Policy=020003;|Sat Aug 26 12:55:37 2017`  
`2620:10a:6000:2500::6b02/128|IPS:10.36.120.10|ACS:Acct-Session-Id=9979732d-34590e08;AN0:User-Name=Cheap NoPC;NAS:NAS-IP-Address=10.26.120.10;IPS:NAS-IP-Address=10.26.120.10;SUB:MSISDN=9955182386;|Sat Aug 26 12:55:37 2017`

If the `Proxy-All` setting is set to `1` and the `Subscriber-Secure-Policy` and `Parental-Control-Policy` settings do not block this query, then NIOS proxies these queries to the MSP server for further processing. NIOS first sends the query to the primary MSP server (denoted by the PXY_PRI parameter) and if the primary MSP server is not available, NIOS sends the query to the secondary MSP server (denoted by the PXY_SEC parameter). If you want all the queries in a specific category to be resolved directly by NIOS without proxying to an MSP server, use the  `set subscriber_secure_data never_proxy &lt;category hexadecimal_character&gt;` command. The hexadecimal character represents the category that is not proxied to an MSP server. For more information see [*set subscriber_secure_data never_proxy*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-subscriber-secure-data-never-proxy).

For example, if you have configured an Internet Off policy for a subscriber during a particular timeframe, then if the `Proxy-All` setting is set to `1`, the MPS server processes and blocks all live video streams by terminating the connections during that timeframe.

If you want all sporting videos except videos about tennis to be blocked, run the  `set subscriber_secure_data never_proxy &lt;category hexadecimal_character&gt;` command, where &lt;category hexadecimal_character&gt; is the category related to tennis videos. Here, only videos about tennis are allowed to be streamed on NIOS systems; all other videos are blocked.
