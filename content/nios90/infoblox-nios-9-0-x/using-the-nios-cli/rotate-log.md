---
title: "rotate log"
source: "/space/nios90/280855921"
pageId: "280855921"
---
The **rotate** **log** command rolls, or rotates, specified log files. When the audit log, syslog file, and IF-MAP log each reaches its maximum size, the NIOS appliance automatically writes the file into a new file by adding a .0 extension to the first file and incrementing subsequent file extensions by 1. The maximum file size is 100 MB for the audit log, 300 MB for the syslog file, and 120 MB for the IF-MAP log.  
 Files are compressed during the rotation process, adding a .gz extension following the numerical increment (*file*.*#*.gz). The first file starts with .0 and subsequent file extensions are incremented by one until it reaches nine. For example, the current log file moves to *file*.0.gz, the previous *file*.0.gz moves to *file*.1.gz, and so on through *file*.9.gz. A maximum of 10 log files (0-9) are kept. When the eleventh file is started, the last log file (*file*.9.gz) is deleted, and subsequent files are renumbered accordingly.  
 When the debug log file reaches its maximum size, which is 300 MB, the appliance rotates it, but does not compress it. The appliance retains only one previous debug log file to which it adds a .old extension.  
 This command is useful for diagnostic purposes. To export a file to the management system for viewing, you can include it in the support bundle.  
 To download the support bundle:

1. From the **Grid** tab or **System** tab, select the **Grid** **Manager** tab or **System** **Manager** tab, and then click **Download**-&gt; **Support** **Bundle** from the Toolbar.
2. Select all options to include configuration and core file information in the output file, then save the tar file to a secure location on the management system.

# Syntax

`rotate log {syslog | debug | audit}`  
`rotate file groupname filename [filename2, filename3, ...}`



| **Argument** | **Description** |
| --- | --- |
| `syslog`` ` | Syslog file |
| `debug`` ` | Debug log file |
| `audit`` ` | Audit log file |



# Examples

`Infoblox &gt; ``rotate`` ``log`` ``debug`  
` The selected log file has been rotated to infoblox.log.0.gz `

`Infoblox &gt; ``rotate`` ``log`` ``audit`  
` The selected log file has been rotated to audit.log.0.gz`
