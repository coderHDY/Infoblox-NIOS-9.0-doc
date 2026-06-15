---
title: "Adding SVCB Records"
source: "/space/nios90/1946189984"
pageId: "1946189984"
---
Starting from **NIOS 9.0.7**, you can add **SVCB** and **HTTPS** DNS records.

1. From the** Data Management** tab, select the **DNS **tab, expand the Toolbar and click **Add **-> **Record **-> **Add SVCB Record**.
2. In the Add *SVCB Record wizard*, do the following:
   
   - **Display  input  as**: Select either Attrleaf pattern (_port.scheme.domain) or Free  format. Grid Manager selects Attrleaf pattern by default. In this format, you can choose port and scheme values from the list. When you select Free  format, you cannot specify these values.
   - **Port**: Select a value from the drop-down list to indicate the port on which the TLS-based service is active.  
     The values in the drop-down list are:
     
     - 21 (FTP)
     - 22 (SSH)
     - 23 (Telnet)
     - 25 (SMTP)
     - 53 (DNS)
     - 80 (HTTP)
     - 88 (Kerberos)
     - 389 (LDAP)
     - 443 (HTTPS)
     - 464 (KPASSWD)
     - 3268 (GC)
   - **Scheme**: Select a value from the drop-down list to indicate the scheme that is used for secure communication. The values in the drop-down list are:
     
     - _http
     - _ftp
     - _dns
     - _gc
     - _https
     - _kerberos
     - _kpasswd
     - _ldap
     - _smtp
     - _ssh
     - _telnet
   - **Name**: Enter the host name that you want to map to a service endpoint. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the host. To create a wildcard record, enter an asterisk (*) in this field.
   - **DNS View**: This field displays the DNS view to which the DNS zone belongs.
   - **Select Zone**: Click to select a zone. You can select a signed zone or an unsigned zone to associate with a SVCB resource record.
   - **Priority**: Enter the priority value for the record. The value of this field will be 0 for alias mode and in the range of 1-65535 for service mode.
   - **Target Name**: Enter the domain name of the service endpoint.The domain name of either the alias target (for alias mode) or the alternative endpoint (for service mode).
   - **SvcParams**: Optionally, enter key=value pairs describing the alternative endpoint at TargetName.The SVC supported keys are :
     
     - key 0 - mandatory
     - key 1 - alpn
     - key 2 - no-default-alpn
     - key 3 – port
     - key 4 – ipv4hint
     - Key 5 - ech
     - key 6 - ipv6hint
   - **Comment**: Optionally, enter additional information about the record.
   - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.

Click **Next **to define extensible attributes. Save the configuration and click **Restart **if it appears at the top of the screen.
