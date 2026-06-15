---
title: "Multilingual Support"
source: "/space/nios90/280759058"
pageId: "280759058"
---
The NIOS appliance supports UTF-8 (Unicode Transformation Format-8) encoding for the following:

- Hostnames for Microsoft Windows clients that support Microsoft Windows code pages. For information about Configuring UTF-8 Encoding for Hostnames, see [*Configuring UTF-8 Encoding for Hostnames*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties).
- Input fields through Grid Manager.

UTF-8 is a variable-length character encoding standard for Unicode characters. Unicode is a code table that lists the numerous scripts used by all possible characters in all possible languages. It also has a large number of technical symbols and special characters used in publishing. UTF-8 encodes each Unicode character as a variable number of one to four octets (8-bit bytes), where the number of octets depends on the integer value assigned to the Unicode character. For information about UTF-8 encoding, refer to [*RFC*](http://tools.ietf.org/html/rfc3629)[ ](http://tools.ietf.org/html/rfc3629)[*3629*](http://tools.ietf.org/html/rfc3629) (*UTF-8,* *a* *transformation* *format* *of* *ISO* *10646*) and the *ISO/IEC* *10646-1:2000* *Annex* *D*. For information about Unicode, refer to *The* *Unicode* *Standard*.  
Depending on the OS (operating system) your management system uses, you must install the appropriate language files in order to enter information in a specific language. For information about how to install language files, refer to the documentation that comes with your management system.

# UTF-8 Supported Fields

The NIOS appliance supports UTF-8 encoding in all of the comment fields and most input fields. You can enter non-English characters in these data fields through Grid Manager and the Infoblox API. When you use the Infoblox API, all the non-ASCII strings must be UTF-8 encoded so that you can use Unicode characters. The NIOS appliance does not support UTF-8 encoding for data that is configurable through the Infoblox CLI commands.  
In general, the following items support UTF-8 encoding:

- All the predefined and user-defined extensible attributes.
- All the comment fields in Grid Manager.
- File name fields for FTP and TFTP backup and restore operations.
- The login banner text field. When you use the serial console or SSH, the appliance cannot correctly display the UTF-8 encoded information that you enter for the login banner.

> **warning**
>
> ### Note
> 
> For data fields that do not support UTF-8 encoding, the appliance displays an error message when you use non-English characters.

# UTF-8 Support Limitations

The NIOS appliance has the following UTF-8 support limitations:

- Object names that have data restrictions due to their usage outside of the Infoblox database do not support UTF-8 encoding. For example, IP addresses and Active Directory domain names.
- When importing a database, most of the ASCII control characters cannot be encoded. This might cause failures in upgrades or database restore operations.
- Search is based on the Unicode standard. Depending on the language, you might not be able to perform a case-sensitive search.
- Binary data is encoded as text.
- UTF-8 encoding does not fully support regular expressions. It matches constant strings. However, It does not encode characters that are inside square brackets or followed by regular expressions such as *, ?, or +.
- You can use UTF-8 characters to authenticate both the User Name and Password through the Infoblox GUI, but not through the Infoblox CLI.
- You cannot use UTF-8 characters to name a custom DHCP fingerprint. For information about DHCP fingerprint detection, see [*DHCP Fingerprint Detection*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/configuring-dhcp-fingerprints-and-fingerprint-de/dhcp-fingerprint-detection).
