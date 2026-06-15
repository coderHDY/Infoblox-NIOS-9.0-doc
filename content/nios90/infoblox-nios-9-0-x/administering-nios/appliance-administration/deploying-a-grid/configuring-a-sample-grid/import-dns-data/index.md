---
title: "Import DNS Data"
source: "/space/nios90/1341292589"
pageId: "1341292589"
---
Using the *Infoblox Data Import Wizard*, import DNS data from the legacy hidden primary server at 10.0.1.5 to the new hidden primary server at 10.0.1.10 (the Grid Master). The following are three phases to this task:

*[children]*

1. Before Using the Wizard:
   
   - Save the named.conf file from the legacy server to a file in a local directory on your management system.
   - Enable the legacy server to perform zone transfers to the NIOS appliance.
   - Configure three name server groups for the Grid and allow the Grid Master/hidden primary DNS server at 10.0.1.10 to receive DDNS updates from the Grid members at 10.0.2.10, 10.1.1.10, and 10.3.1.10. These members act as secondary DNS servers and DHCP servers.
2. Using the Wizard: Define the source, destination, and type of DNS data in the DNS configuration file (named.conf) that you want to import.
3. After Using the Wizard: Check the imported DNS configuration file.

In this example, all the DNS data is in BIND 9 format. The *Data Import Wizard* supports various types of DNS formats, such as the following:

- BIND 4, 8, and 9
- Microsoft
- Lucent VitalQIP
- Nortel NetID
