---
title: "set subscriber_secure_data add"
source: "/space/nios90/280266321"
pageId: "280266321"
---
If you have configured Infoblox Subscriber Services, you can use the `set subscriber_secure_data add` command to add a specific subscriber record to the subscriber database. For information about Infoblox Subscriber Services, see *[Infoblox Subscriber Services](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services)*. You can use  `set subscriber_secure_data delete` command to delete a subscriber record.

# Syntax

`set subscriber_secure_data add &lt;ip_addr&gt; &lt;prefix&gt; &lt;local_id&gt; &lt;ip_space_desc&gt; &lt;data_string&gt; [flags]`

| **Argument** | **Description** |
| --- | --- |
| `&lt;ip_addr&gt;` | Specify the IPv4 or IPv6 address of the subscriber. |
| `&lt;prefix&gt;` | Specify the prefix length. |
| `&lt;local_id&gt;` | Specify the Local ID, which is the MAC address of the subscriber device. To indicate a record without a Local ID, enter N/A. |
| `&lt;ip_space_desc&gt;` | Specify the IP space discriminator. To indicate a record without an IP space discriminator, enter N/A. |
| `&lt;data_string&gt;` | The cache data string is a concatenation of “AVPTAG:AVP-NAME=Value” separated by ';'. |
| `[flags]` | This is optional. You can specify the following:   S - For the non-expiring static record.   B - If a blacklist or whitelist domains are configured for the subscriber. |

The AVPTAG can include the following tags:

> **warning**
>
> **Note**
> 
> The following tags are for the AVPs available in the list of predefined AVPs. You can also add tags for user-defined AVPs.



- **SUB**: Indicates the subscriber ID AVP, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `SUB:IMSI=602030100000057`.
- **NAS**: Indicates the NAS contextual information AVP, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `NAS:NAS-PORT=168496141`.
- **IPS**: Indicates the IP space discriminator AVP, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `IPS:NAS-IPv6-Address=2620:010a:6000:22f2::006e`.
- **PCP**: Parental-Control-Policy. It is a 128-bit value provided by the Service Providers. Example: `PCP:Parental-Control-Policy=400000`.
- **DCP**: Dynamic-Category-Policy. It is an indication to resolve domains categorized as dynamic. If Dynamic AVP is set, then all domains categorized as dynamic are forwarded to Infoblox Harmony. If Dynamic AVP is not set, then the domains categorized as dynamic would either be blocked or allowed depending on the parental control policy. Example: `DCP`:`Dynamic-Category-Policy=0`.
- **SSP**: Subscriber-Secure-Policy. It is a 32-bit value provided by the Service Providers. Example: `SSP:Subscriber-Secure-Policy=5F`.
- **EXP**: The date and time when the profile expires. Example: `EXP:Expire-Profile=Mon May 29 10\\:23\\:56 2017`.
- **AN0**: Indicates the AVP configured in ancillary position 0 in the ancillary list, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `AN0:Class=0x010x000x120x000x12`.
- **AN1**: Indicates the AVP configured in ancillary position 1 in the ancillary list, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `AN1:IMEI=8635800299072601`.
- **AN2**: Indicates the AVP configured in ancillary position 2 in the ancillary list, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `AN2:NAS-Port-Identifier=portid-1232`.
- **AN3**: Indicates the AVP configured in ancillary position 3 in the ancillary list, that is configured in the *Subscriber Services Properties* editor of the Grid. Example: `AN3:User-Name=user1`.

---

**Note**: The ancillary fields are numbered as AN0, AN1, AN2 etc. You cannot add more than five ancillary AVPs.

---

- **ACS**: The accounting session ID. Example: `ACS:Acct-Session-Id=29de847acde415ab`.

# Example 1

`set subscriber_secure_data add 2620:10a:6000:7814::50b 128 003048d5d928 N/A "ACS:Acct-Session-Id=29de847acde415ab;LID:003048d5d928;IPS:NAS-IPv6-Address=2540:010a:6000:22f2::006e;AN0:APN=corp1;SUB:IMSI=602030100000045;AN3:User-Name=user1;AN2:NAS-Port-Identifier=portid-1232;NAS:NAS-PORT=168496141;SSP:Subscriber-Secure-Policy=00000001;DYN:Dynamic-Category-Policy=0;PCP:Parental-Control-Policy=400000;"`

# Example 2

`set subscriber_secure_data add 10.32.1.145 32 AABBCC112233 corp1 "ACS:Acct-Session-Id=32de327aced215ab;SUB:IMSI=301030100000026;LID:AABBCC112233;NAS:NAS-PORT=168496141;PCP:Parental-Control-Policy=20001;EXP:Expire-Profile=Mon May 29 10\\:23\\:56 2017;DCP:Dynamic-Category-Policy=0;SSP:Subscriber-Secure-Policy=5F;"`

# Format of a Subscriber Record

The following is an example of a subscriber record in the subscriber cache:

`10.32.1.145/32 | IPS:corp1 | ACS:Acct-Session-Id=32de327aced215ab;SUB:IMSI=301030100000026;LID:003048d5d928;NAS:NAS-PORT=168496141;PCP:Parental-Control-Policy=20001;EXP:Expire-Profile=Mon May 29 10\\:23\\:56 2017;DCP:Dynamic-Category-Policy=0;SSP:Subscriber-Secure-Policy=5F | 2017-06-05 21:20:51`
