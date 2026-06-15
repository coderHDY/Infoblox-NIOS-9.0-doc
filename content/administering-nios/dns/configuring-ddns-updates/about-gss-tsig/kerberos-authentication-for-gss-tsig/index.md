---
title: "Kerberos Authentication for GSS-TSIG"
source: "/space/nios90/1412366895"
pageId: "1412366895"
---
A keytab file contains pairs of Kerberos principal names and their corresponding encryption keys. It can contain keys for a single realm or multiple realms. It is possible to infer the KDC from the principal because Windows uses uppercase AD domain names for Kerberos realm names. You must provide the principal name. The principal name may contain Kerberos realm, and the DNS servers for the domain are available for DNS name resolution. Therefore, resolving SRV _kerberos._tcp.REALM. will return the appropriate KDC. New TGTs cannot be acquired when the KDC that issues the TGT fails. If the appliance has successfully authenticated before the KDC failure, the secure updates will continue until the session key and TGT expire. The default expiration on Windows is 10 hours. If the appliance restarts or reboots, secure updates are deferred until the KDC becomes available.

Infoblox recommends restarting the DHCP service on NIOS to avoid any update failures, if the encryption key type is changed on the Microsoft server.  
The following provides information about the traffic flow between the appliance and the KDC:

- Client uses keytab to get TGT for principal from KDC (AS-REQ/AS-REP).
- Client uses TGT to get session ticket from KDC (TGS-REQ/TGS-REP).
- Client uses session ticket to acquire TKEY from DNS server (TKEY/TKEY).
- Client uses TKEY to sign DNS updates (DNS-TSIG/DNS-TSIG).

The DNS server authenticates into the domain when the keytab file is generated on the KDC and its SPN (Service Principal Name) is mapped to an account. The server's private key is known to itself and to the KDC. The KDC generates the ticket and the DNS server allows the update.  
Note the following when you upload multiple keytab files on the appliance:

- NIOS displays an error message and discards the keytab file if the file does not have a recognizable key, SPN, version or encryption type, and it saves the error message in the syslog.
- NIOS considers duplicate keys as invalid keys if the keys have the same SPN, version, and encryption type.
- If NIOS encounters an invalid key during an upload, it will not upload the other keys in the keytab and the operation fails. NIOS saves the warning and error message in the syslog and in Grid Manager.
