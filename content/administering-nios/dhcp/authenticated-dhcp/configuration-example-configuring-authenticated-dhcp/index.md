---
title: "Configuration Example: Configuring Authenticated DHCP"
source: "/space/nios90/280663058"
pageId: "280663058"
---
In this example, a school (school.edu) has two locations, its main campus, campus1.school.edu, and a satellite campus, campus2.school.edu. It has a captive portal server in each location. In the main campus, the Grid Master also functions as a DHCP server and uses a captive portal server to register DHCP clients. In the satellite campus, two members serve DHCP and use the same captive portal server. The captive portal servers use the same RADIUS authentication server group to authenticate users.

*[drawio]*
