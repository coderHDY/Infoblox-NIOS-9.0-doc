---
title: "Command Execution"
source: "/space/nios90/1375568984"
pageId: "1375568984"
---
If you use XC: name space, then the value can be one of the following:

---

**Note:** The argument will be one or two nested variable specifications separated by ':' but without the '$' symbol.  
The variables inside 'XC' do not have an output format, so you must use only one ':'.

---

- **ASSIGN**: Assigns the value to the specified variable. Note that the value assigned is in the format I/S/B:value for integer, string, and boolean values. Example: ASSIGN:variable:value.
- **DEBUG**: Outputs the specified variable to the debug file (if the log level is not set to DEBUG, this will be ignored), if only the name space is used, the whole name space will be printed.
- **INC**: Increments the variable value. If the value is not a number, NIOS displays an error.
- **DEC**: Decreases the variable value. If the value is not a number, NIOS displays an error.
- **COPY**: Copies one variable into another. Example: COPY:destination:source.
- **DEL**: Removes the variable. This supports only the C:, H:, L:, and S: name spaces.
- **FORMAT**: Formats the value according to what is specified after the second ':'. Currently, NIOS supports the following formats:
- **U**: Converts to uppercase value.
- **L**: Converts to lowercase value.
- **DATE_EPOCH**: Assuming that the value is a date expressed in UTC ISO 8601 date format. For example, 2016-03-13T04:50:31Z will be converted to EPOCH seconds.
- **DATE_ISO8601**: Assuming that the value contains EPOCH seconds. The value is converted to a date string expressed in UTC ISO 8601 date format. For example, 1467152565 will be converted to 2016-06-28T22:22:45Z. If the variable contains milliseconds, they will be preserved. For example 1467152565.57 will be converted to 2016-06-28T22:22:45.570Z.
- **DATE_STRFTIME**: Assuming that the variable contains EPOCH seconds. The value is converted to a date string with the specified format which is passed as the second parameter to the function.
- **PUNYCODE_TO_UTF-8**: Assuming that the variable contains a punycode encoded domain name. The domain name representation will be converted to UTF-8 characters. Note that there might be a failure if the domain name has non-UTF-8 characters in its wire format.
- **TRUNCATE**: Assuming that the variable is a string and it will be truncated as specified. The format is a number (positive or negative) followed by the letter 'l' or 'r'. The number is the starting character of the string (positive will be counted from the beginning, negative will be counted from the end) and f/t defines if the characters are from, after, or to that point. For example, if a string is 12345, then 1f will produce 2345, 1t will produce 1, -1f will produce 5 and -1t will produce 1234.

Format operations will function like other operations if an error occurs, but the variable is not modified. However, the error can be ignored if the log setting is not set to **Debug.** For information about how to set the logging level, see [*Configuring Outbound Endpoints*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints).

The following are some examples of using XC operations to increment and decrement IP address strings, create a network range, or remove a specific IP address.
