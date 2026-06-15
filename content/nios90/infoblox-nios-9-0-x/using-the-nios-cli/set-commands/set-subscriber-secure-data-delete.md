---
title: "set subscriber_secure_data delete"
source: "/space/nios90/280757041"
pageId: "280757041"
---
If you have configured Infoblox Subscriber Services, you can use the `set subscriber_secure_data delete` command to delete a specific subscriber record from the subscriber cache. For information about Infoblox Subscriber Services, see *[Infoblox Subscriber Services](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services)*.

# Syntax

`set subscriber_secure_data delete &lt;ip_addr&gt; &lt;prefix&gt; &lt;local_id&gt; &lt;ip_space_desc&gt;`

| **Argument** | **Description** |
| --- | --- |
| `&lt;``ip_addr``&gt;` | Specify the IPv4 or IPv6 address of the subscriber. |
| `&lt;prefix&gt;` | Specify the prefix length. |
| `&lt;local_id&gt;` | Local ID present in the incoming EDNS0 packet. |
| `&lt;ip space desc&gt;` | The IP space discriminator. To indicate a record without an IP space discriminator, enter N/A. |

# Example

`Infoblox &gt; set subscriber_secure_data delete 10.32.1.145 32 AABBCC112233 corp1`

`10.32.1.145/32|LID:aabbcc112233|IPS:corp1|FLG:|ACS:Acct-Session-Id=32de327aced215ab;SUB:IMSI=301030100000026;LID:AABBCC112233;NAS:NAS-PORT=168496141;PCP:Parental-Control-Policy=20001;EXP:Expire-Profile=Mon May 29 10\\:23\\:56 2017;DCP:Dynamic-Category-Policy=0;SSP:Subscriber-Secure-Policy=5F;|Thu Dec 20 10:53:41 2018`

`Record successfully deleted`
