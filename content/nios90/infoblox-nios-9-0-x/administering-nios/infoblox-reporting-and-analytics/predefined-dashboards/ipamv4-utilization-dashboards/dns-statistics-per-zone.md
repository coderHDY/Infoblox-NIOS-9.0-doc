---
title: "DNS Statistics per Zone"
source: "/space/nios90/1380909083"
pageId: "1380909083"
---
Since every DNS view can have multiple zones and each zone can have multiple records, this dashboard highlights the list of all zones and provides statistics based on every DNS Zone. This dashboard allows you to identify how many and what type of DNS records each zone is serving and use these statistics for more effective planning.  
The *DNS* *Statistics* *per* *Zone* displays the following information:

- **Timestamp**: Timestamp of events.
- **Zone**: FQDN of zone.
- **Function**: Zone function: [Forward-Mapping, IPv4 Reverse-Mapping, IPv6 Reverse-Mapping]
- **Signed**: Boolean to indicate if the zone is signed.
- **Hosts**: Number of hosts.
- **LBDN**: Number of LBDNs assigned to the zone. Note that if an LBDN is assigned to multiple zones or views, the appliance displays it separately for each zone or view.
- **Total Records**: Number of total resource records, Host are not counted.
  
  - A Records: number of A records.
  - AAAA Records: number of AAAA records.
  - CNAME Records: number of CNAME records.
  - DNAME Records: number of DNAME records.
  - DNSKEY Records: number of DNSKEY records.
  - DS Records: number of DS records.
  - MX Records: number of MX records.
  - NAPTR Records: number of NAPTR records.
  - NSEC Records: number of NSEC records.
  - NSEC3PARAM Records: number of NSEC3PARAM records.
  - NSEC3 Records: number of NSEC3records.
  - NS Records: number of NS records.
  - PTR Records: number of PTR records.
  - RRSIG Records: number of RRSIG records.
  - SOA Records: number of SOA records.
  - SRV Records: number of SRV records.
  - TXT Records: number of TXT records.
  - Other Records: number of other records.
