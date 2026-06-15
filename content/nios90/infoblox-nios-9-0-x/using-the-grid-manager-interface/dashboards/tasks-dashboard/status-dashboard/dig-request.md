---
title: "Dig Request"
source: "/space/nios90/1457652437"
pageId: "1457652437"
---
The *Dig* *Request* widget enables you to perform a DNS lookup on the Grid Master or on the specified Grid member and displays the output of the dig command.

> **warning**
>
> ### Note
> 
> When RPZ license is installed on both the Grid Master and the Grid member, the RPZ rule might not be triggered if you perform dig on the Grid member from the Grid Master.

To perform a DNS lookup using the dig command, complete the following:

- **Run dig command on**: Select one of the following. The default is **Grid Master**.
  
  - **Grid Master**: Select this to perform a DNS lookup on the Grid Master.
  - **Grid Member**: Select this to perform a DNS lookup on the Grid member. Click **Select Member** to select a Grid member. If there are multiple members, the *Member Selector* dialog box is displayed, from which you can select a member. Click the required member name in the dialog box. You can also click **Clear** to clear the displayed member and select a new one.
- **Name Server to Query(Optional)**: Optionally, specify the name server on which you want to perform a DNS lookup. You can enter either the name, IPv4 address, or IPv6 address of the name server.
- **Record Type**: Select the resource record type from the drop-down list. You can select **Any** to query all the resource record types or select one of the following from the drop-down list: **A**, **AAAA**, **CAA, CNAME**, **DNAME**, **MX**, **NAPTR**, **NS**, **PTR**, **SRV**, **TXT**, **AXFR**. If the record type is **Unknown**, then directly enter the type of unknown record. For example, for an unknown record of type RP, enter **RP.** The default is **Any**.
- **Send Recursive Query**: Select this to send recursive queries for the domain. This checkbox is selected by default.
- **Domain Name to Query**: Enter the domain name to query.

Click **Perform** **Dig**. The widget displays the status and output of the dig command.  
Note that if you have installed RPZ license and enabled RPZ logging in the Grid, you can view RPZ syslog messages by clicking **View** **RPZ** **Syslog** if the specified domain name matches the RPZ rule.
