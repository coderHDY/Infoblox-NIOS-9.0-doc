---
title: "DHCP Option Data Types (IPv4 and IPv6)"
source: "/space/nios90/1331789828"
pageId: "1331789828"
---
Each DHCP option is identified by a name and an option code number, and specifies a data type. The data type for some options is predefined. For example, in the DHCP option space, the data type for option 1: subnet-mask is an IP address. You cannot change the data type for this option. The data type for some options is user-defined and can be in one of the formats shown in the below table.

*DHCP Option Data Types*

| **Data type** | **Specifies** |
| --- | --- |
| String | An ASCII text string (the same as the text data type) or a list of hexadecimal characters separated by colons  Formatting to distinguish an ASCII text string from a hexadecimal string is important. For details, see the following section |
| Boolean | A flag with a value of either true or false (or on or off ) |
| IP address | A single IP address |
| Array of IP addresses | A series of IP addresses, separated by commas  You can optionally include a space after each comma |
| Text | An ASCII text string |
| 8-, 16-, or 32-bit unsigned integer | A numeric range of the following possible values  8-bit unsigned integer: from 0 to 255  16-bit unsigned integer: from 0 to 65,535  32-bit unsigned integer: from 0 to 4,294,967,295 |
| 8-, 16-, or 32-bit signed integer | A numeric range of the following possible values  8-bit signed integer: from -128 to 127  16-bit signed integer: from -32,768 to 32,767  32-bit signed integer: from -2,147,483,648 to 2,147,483,647 |
| Domain-list | A list of domain names, separated by spaces |

When defining a hexadecimal string for a DHCP option (such as option 43, vendor encapsulated options), use only hexadecimal characters (0-9, a-f, or A-F) without spaces and separated by colons. The accepted form for a hexadecimal string, as presented in a regular expression, is [0-9a-fA-F]{1,2}(:[0-9a-fA-F]{1,2})*

Two examples of correctly written hexadecimal strings:

- aa:de:89:1b:34
- 1C:8:22:A3 (Note that the DHCP module treats a single hexadecimal character, such as "8" as "08".)

A few examples of incorrectly written hexadecimal strings:

- :bb:45:d2:1f – Problem: The string erroneously begins with a colon.
- bb:45:d2:1f: – Problem: The string erroneously ends with a colon.
- bb:4 5:d2:1f – Problem: The string erroneously includes a space between two characters ("4" and "5").
- bb:45:d2:1g – Problem: The string erroneously includes a nonhexadecimal character ("g").

The DHCP module treats incorrectly written hexadecimal strings as simple text strings, not hexadecimal strings. If the string appears in quotes, it is a text string.
