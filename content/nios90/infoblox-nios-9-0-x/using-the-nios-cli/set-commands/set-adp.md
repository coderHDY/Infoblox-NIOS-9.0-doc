---
title: "set adp"
source: "/space/nios90/280659133"
pageId: "280659133"
---
The **set** **adp** command enables or disables DNS Infrastructure Protection on the supported platform. You can use this command only if **Threat** **Protection** (hardware based) or **Threat** **Protection** **(software** **add-on)** licenses are installed on the platform.

# Syntax

`set adp`

# Commands for DNS Infrastructure Protection (software add-on):

- `set adp log &lt;level&gt;:` Use this command to set the DNS infrastructure protection log level, where log level is between **0** **(emergency)** and **6** **(info)**. The default value is **6** **(info)**.
- `set adp log &lt;emergency|alert|critical|error|warning|notice|info&gt;:` Use this command to set the DNS infrastructure protection log level.
- `set adp monitor-mode &lt;on|off&gt;:` Use this command to enable or disable the DNS infrastructure protection monitor mode on the respective member. The default value is **off**.

# Syntax

`set adp log &lt;level&gt;`  
` set adp log &lt;emergency|alert|critical|error|warning|notice|info&gt; set adp monitor-mode &lt;on|off&gt;`

# Commands for DNS Infrastructure Protection (hardware-based):

- `set adp log &lt;level&gt;`: Use this command to set the DNS infrastructure protection log level, where log level is between **0** **(emergency)** and **7** **(debug)**. The default value is **6** **(info)**.
- `set adp log &lt;emergency|alert|critical|error|warning|notice|info|debug&gt;`: Use this command to set the DNS infrastructure protection log level.
- `set adp monitor-mode &lt;on|off&gt;`: Use this command to enable or disable the DNS infrastructure protection monitor mode on the respective member. The default value is **off**.

# Syntax

`set adp log &lt;level&gt;`  
` set adp log &lt;emergency|alert|critical|error|warning|notice|info|debug&gt; set adp monitor-mode &lt;on|off&gt; `
