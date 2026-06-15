---
title: "Verifying the Configuration"
source: "/space/nios90/1412399742"
pageId: "1412399742"
---
After you configure the AD domain controller and the Infoblox DHCP server, you can view the syslog of the Infoblox DHCP server to verify if it successfully established a security context with the AD domain controller. The DHCP server displays a series of messages similar to the following:

```
dhcpd: Enabled GSS-TSIG for zone corpxyz. using principal jdoe/anywhere@corpxyz.LOCAL.

dhcpd: GSS-TSIG security thread has started.

dhcpd: GSS-TSIG security update starting at 1222389338.

dhcpd: Acquiring GSS-TSIG credential for jdoe/anywhere@corpxyz.LOCAL.

dhcpd: Acquired GSS-TSIG credential for jdoe/anywhere@corpxyz.LOCAL(good for 3568s).

dhcpd: Security context established with server 10.34.123.4 for principal[ jdoe/anywhere@corpxyz.LOCAL|mailto:jdoe/anywhere@corpxyz.LOCAL] (good for 568s).

dhcpd: GSS-TSIG security update complete at 1222389338. Next update in 360s.
```

In addition, you can log in to the Infoblox CLI and use the show dhcp_gss_tsig CLI command to troubleshoot your configuration. For information about this command, refer to the *Infoblox CLI Guide*.
