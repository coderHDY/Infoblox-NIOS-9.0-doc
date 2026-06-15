---
title: "Enabling Audit Log Rolling"
source: "/space/nios90/1393918152"
pageId: "1393918152"
---
When the audit log reaches its maximum size, which is 100 MB, the appliance automatically writes the file into a new file by adding a .0 extension to the first file and incrementing subsequent file extensions by 1. Files are compressed during the rotation process, adding a` .gz` extension following the numerical increment (`file.#.gz`). The sequential incrementation goes from zero through nine. When the eleventh file is started, the tenth log file (`file.9.gz`) is deleted, and subsequent files are renumbered accordingly. For example, the current log file moves to *f*`ile.0.gz`, the previous `file.0.gz` moves to `file.1.gz`, and so on through `file.9.gz`. A maximum of 10 log files (0-9) are kept. To list the audit log files and their sizes, log in to the Infoblox CLI and run the `show logfiles` command.  
To enable audit log rolling:

1. On the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab, and then click **Grid** **Properties** -> **Edit** in the Toolbar.
2. In the *Grid* *Properties* editor, on the **Security** tab, select **Enable** **Audit** **Log** **Rolling**.
