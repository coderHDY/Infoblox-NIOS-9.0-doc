---
title: "show dhcpv6_gss_tsig"
source: "/space/nios90/280658592"
pageId: "280658592"
---
The `show dhcpv6_gss_tsig` commands provide information about an Infoblox DHCP server for IPv6 that is configured to send GSS-TSIG authenticated DDNS updates to an AD integrated DNS server. You can use these commands to verify your configuration and troubleshoot potential issues. You can also test whether the appliance can communicate with the Key Distribution Center (KDC) and the DNS server.

# Syntax

`show dhcpv6_gss_tsig config show dhcpv6_gss_tsig keytab`   
 ` show dhcpv6_gss_tsig test dns {ns-ip}`   
 ` show dhcpv6_gss_tsig test kdc {kdc-ip} {principal}`

| **Argument ** | **Description** |
| --- | --- |
| `config` | Displays configuration information and runs tests to verify the configuration. |
| `keytab` | Displays information about the keytab file that is in use by the appliance. |
| `dns` | Tests the configuration by verifying that the destination DNS server is reachable.   You must enter the IP address of the destination DNS server. |
| `kdc` | Tests the configuration by obtaining a test Ticket Granting Ticket (TGT)) from the configured KDC.   You must specify the following:  - IP address of the AD domain controller that hosts the KDC for the domain - The Kerberos principal you specified when you generated the keytab file, in the following format: *username/instance*@*REALM*      - *username/instance*: The AD user name for the NIOS appliance and the FQDN of the appliance. This entry must be the same on the AD domain controller and the Infoblox appliance.   - *REALM*: The Kerberos realm in uppercase. |
