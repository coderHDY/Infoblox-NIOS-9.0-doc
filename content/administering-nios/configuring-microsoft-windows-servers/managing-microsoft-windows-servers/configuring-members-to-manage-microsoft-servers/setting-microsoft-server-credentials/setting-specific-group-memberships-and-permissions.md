---
title: "Setting Specific Group Memberships and Permissions"
source: "/space/nios90/1381630597"
pageId: "1381630597"
---
If your security policy precludes adding user accounts to the Administrators group, you can add the user account to individual groups and grant only the required permissions. For guidelines and more information, see the following:

[http://support.microsoft.com/kb/325349](http://support.microsoft.com/kb/325349)

To add the user account of the Grid member to individual groups and grant specific permissions:

- To enable the member to synchronize DNS data with the Microsoft server, add its user account to the DnsAdmins Group.
- To enable the member to synchronize DHCP data with the Microsoft server, add its user account to the Dhcp Administrators Group.
- To enable the Grid member to monitor, start, and stop the DNS and DHCP services, grant the user account permissions on the Service Control Manager (SCM), as follows:
  
  1. Grant permissions to the SCM on each managed Microsoft server. For more information, refer to the section* DNS* *Server* *Service* *Permissions* at [http://technet.microsoft.com/en-us/library/gg638675.aspx](http://technet.microsoft.com/en-us/library/gg638675.aspx) .  
     To find additional information, you can also search for "Least Privilege Setup" on the Microsoft sites.
  2. Grant permissions to the DNS and/or DHCP service on each managed server by doing one of the following:
     
     - Use the `sc` command line utility to remotely configure each managed DNS or DHCP server.  
       Note that you need to know the SID of the user account and its current permissions. You can retrieve the SID of the user account by using the `dsquery` and `dsget` commands.
     - Use the Domain Controller Policy editor to define a global policy that applies to all DNS or DHCP services running in a domain or on domain controllers. For additional information, refer to [*http://support.microsoft.com/kb/324802.*](http://support.microsoft.com/kb/324802)
