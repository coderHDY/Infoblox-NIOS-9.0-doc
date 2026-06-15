---
title: "Action Template Variable Formata"
source: "/space/nios90/1375568948"
pageId: "1375568948"
---
The following sequences are substituted with dynamic data:

`${&lt;data namespace&gt;:&lt;output format&gt;:&lt;name of the data or operation dependent values&gt;}`

The sequences cannot contain the following characters as variable names: {, }, [, and ]. Therefore, if names contain keys of dictionary/EA variables, they must be quoted with the \ character. Example: *${E::SOME_EA{name with \{ embedded \] braces or brackets}*. But if the \ character is desired, it must be quoted as \. Note that variable substitution happens only once, it is not nested (i.e. if the value contains ${...}, it will not be recursively substituted). Also, the dynamic data is not supported for instance and template variables which are assumed to be immediate values.  
The following types of variables allow further qualifiers after the variable name. The qualifiers are always mandatory. Therefore, if a variable is a list or a dictionary, then you must specify [ ] or { }.

- EA (Extensible Attribute) variables or dictionaries. In general, you must specify {EAname} for EA variables or dictionaries. For example, if you specify ${E::NETWORK_EA{City}}, it means the city EA from the network EAs. Note that data specific portion is mandatory for EA variables.
- List variables. You can specify the list index using square brackets. For example, for a list of DNS names if you specify ${E::DNS_NAMES[0]}, this indicates the first DNS name in the list.

You can also use { } or [ ] to signify the full dictionary or list that is supported only in some encodings. Optionally, you can specify the output format. The following output formats are supported:

- **J**: The output is in the form of JSON formatted variable. It supports deserializing lists as well as dictionaries. Note that strings will have double quotes prepended/appended when serialized with J.
- **j**: The output is in the form of JSON formatted variable. It supports deserializing lists as well as dictionaries without the leading or trailing double quotes, if the variable is a string.
- **X**: The output is in the form of XML formatted variable. It supports only deserializing lists, such as &lt; item &gt;..</item > sequence.
- **U**: The output is in the form of url encoded variable. It supports deserializing lists and the output will be a string (comma separated value.)
- **A**: The output will be a variable, which is as-is.
- **S**: The output is in the form of a string. This is the default for JSON if you do not specify any output format. By default, even numbers will be serialized as JSON strings, meaning the output in a JSON quoted template for a numerical value of 1234 will be "1234".
- **N**: The output is in the form of numbers. For example, if the variable is a boolean, the output will be 0, 1, etc.
- B: The output will be a boolean, that is true/false.
- **L**: The length of the variable. This is supported only for lists (the length of the list) and dictionaries (the number of keys).
- **T**: The type of the variable. This can be one of the following characters: 'S' for strings, 'L' for lists, 'D' for dictionaries, 'B' for booleans, 'N' for numbers, and 'O' for otherwise.

The default is set by the template quoting option and by using a variable. If you have not set the template quoting, then JSON will be set, by default. If you have set the template quoting, the output format will be as specified, unless the variable is in the following fields:

- **Headers**: Any variable inside a headers block is serialized by default, as ASIS.
- **Parameters**: Any variable inside a parameters block is serialized by default, as URL.
- **Path**: Any variable inside a path block is serialized by default, as ASIS.
