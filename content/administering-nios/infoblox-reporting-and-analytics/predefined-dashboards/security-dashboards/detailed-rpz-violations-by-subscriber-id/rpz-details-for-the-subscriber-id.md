---
title: "RPZ Details for the Subscriber ID"
source: "/space/nios90/1428849634"
pageId: "1428849634"
---
The *RPZ Details for the Subscriber ID* sub-dashboard displays details of the RPZ hits for a specific subscriber.

This sub-dashboard displays the following information in table format:

- **Subscriber ID**: The subscriber ID.
- **Client ID**: The IP address of the client that queried the domain name that is listed in the RPZ ruleset.
- **Anchor IP Address**: The IPv4 or IPv6 address of the subscriber along with the netmask or prefix.
- **IP Space Discriminator**: The name of the IP space discriminator.
- **NAS Contextual Information**: The NAS contextual information.
- **Accounting-Session-ID**: The subscriber session ID.
- **Domain Name**: The domain name queried by the subscriber.
- **RPZ Entry**: The RPZ rule that was triggered based on subscriber queries. For parental control related events, this column displays the blocked domain.
- **RPZ Severity**: The severity level associated with the RPZ rule that was triggered.
- **Mitigation Action**: The ruleset specified for the blocked domain name or IP address.
- **Guest**: The guest indicator that identifies unknown Local ID behind a home gateway network. For fixed line or home router deployments, a guest indicator value '1' indicates guest device and '0' indicates subscriber device.
- **Local ID**: The MAC address of the subscriber device. For fixed line or home router deployments, if the guest indicator value in the **Guest** field displays '1' then the **Local ID** field displays the MAC address of the guest device.
- **Ancillary field 1**: The AVP configured in ancillary position 1 in the ancillary list.
- **Ancillary field 2**: The AVP configured in ancillary position 2 in the ancillary list.
- **Ancillary field 3**: The AVP configured in ancillary position 3 in the ancillary list.
- **Ancillary field 4**: The AVP configured in ancillary position 4 in the ancillary list.
- **Ancillary field 5**: The AVP configured in ancillary position 5 in the ancillary list.
- **Time**: The date and time when the hit was received.
