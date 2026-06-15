---
title: "Enable Zone Transfers"
source: "/space/nios90/1343293690"
pageId: "1343293690"
---
To allow the NIOS appliance to import zone data from the legacy server at 10.1.4.11, you must configure the legacy server to allow zone transfers to the appliance at 10.1.4.10.

## Legacy BIND Server

1. Open the named.conf file using a text editor and change the allow-transfer statement to allow zone transfers to the appliance at 10.1.4.10. For a sample of the required changes to the named.conf file*.*
2. After editing the named.conf file, restart DNS service for the change to take effect.

## Legacy Windows 2000/2003 Server

Navigate to the [*corpxyz.com*](http://corpxyz.com) *Properties* dialog box, and then add 10.1.4.10 to the list of IP addresses to which you want to allow zone transfers.
