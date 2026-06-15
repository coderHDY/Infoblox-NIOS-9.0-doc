---
title: "Defining Substitute Rules for SVCB Records"
source: "/space/nios90/1583972447"
pageId: "1583972447"
---
An SVCB (Service Binding) record is a DNS resource record that maps a domain name to a service endpoint. To define a specific name-to-service mapping, you can add an SVCB record to a previously defined authoritative forward-mapping zone.

Complete the following to add an SVCB record:

- **Display input as**: Select either Attribute Leaf format (_port._scheme.domain) or Free format. Grid Manager selects Attribute Leaf format by default. In this format, you can choose port and scheme values from the list. When you select Free format, you cannot specify these values.

- **Port**: Select a value from the drop-down list or enter a port value if a non-default port number is to be specified for the scheme. The values in the drop-down list are: 21 (FTP), 22 (SSH), 23 (Telnet), 25 (SMTP), 53 (DNS),80 (HTTP), 88 (Kerberos), 389 (LDAP), 443 (HTTPS), 464 (KPASSWD), and 3268 (GC).

- **Scheme**: Select a value from the drop-down list to indicate the scheme that is used for secure communication. The values in the drop-down list are: _http , _ftp , _dns, _gc, _https, _kerberos, _kpasswd, _ldap, _smtp, _ssh, _telnet.

> **warning**
>
> **Note**:
> 
> When you select Strict format, Port and Protocol values are set to 443 (HTTPS) and _tcp, by default. You can change these values. When you select Free format, you cannot edit the mentioned values.

- **Name**: Enter the host name that you want to map to a service endpoint. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the host. To create a wildcard record, enter an asterisk (*) in this field.
- **Select Zone**: Click to select a zone. You can select a signed zone or an unsigned zone to associate with an SVCB resource record. Click Clear to clear the Name that you have entered.
- **FQDN**: This is displayed by default. You cannot modify the value.
- **Priority**: Enter the priority value for the record. The value of this field will be 0 for alias mode and in the range of 1-65535 for service mode.
- **Target Name**: Enter the domain name of the service endpoint. The domain name of either the alias target (for alias mode) or the alternative endpoint (for service mode).
- **VC Parameters**: Enter key=value pairs describing the alternative endpoint at Target Name. The SVC supported keys are : 21 (FTP), key 0 - mandatory , key 1 - alpn, key 2 - no-default-alpn , key 3 – port, key 4 – ipv4hint, Key 5 - ech , key 6 - ipv6hint
- **SVC Parameter Key**: When you select additional-params as the Parameter Type, enter the numeric key value manually (e.g., key7, key8). For predefined types, this field is automatically set.
- **SVC Parameter Value**: Enter a value corresponding to the parameter key. The value format depends on the parameter type, such as IP addresses for hints, port numbers, or protocol identifiers (e.g., h2, h3).
- **Mandatory**: Select this checkbox if the resource record (RR) will not function correctly for clients that ignore this SVC parameter key. This setting indicates that the selected parameter is essential for proper interpretation by the client.

> **warning**
>
> **Note**:
> 
> You cannot explicitly add key0 - mandatory as a parameter.

- **Comment**: Optionally, enter additional information about the record.
- **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it
