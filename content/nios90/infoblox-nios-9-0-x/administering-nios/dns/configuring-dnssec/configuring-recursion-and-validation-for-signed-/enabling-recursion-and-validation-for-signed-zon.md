---
title: "Enabling Recursion and Validation for Signed Zones"
source: "/space/nios90/1502871993"
pageId: "1502871993"
---
The following are the tasks to enable recursion and validate recursively derived data:

1. Enable DNSSEC on the appliance. For information, see [*Enabling DNSSEC*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/enabling-dnssec).
2. Enable validation and configure the trust anchor of each signed zone. For information, see Enabling DNSSEC Validation below.  You must configure at least one trusted DNSKEY RR.
3. Enable recursion on the appliance. For information, see [*Enabling Recursive Queries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-recursive-queries).
4. Complete any of the following:
   
   - Configure the forward, delegated, stub or root zones for the signed zones. For information, see [*Configuring Delegated, Forward, and Stub Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-delegated-forward-and-stub-zones) and [*Creating a Root Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-forward-mapping-zone).
   - Configure global forwarders and custom root name servers, if needed. For information, see [*Using Forwarders*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/using-forwarders) and [*About Root Name Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/about-root-name-servers).
