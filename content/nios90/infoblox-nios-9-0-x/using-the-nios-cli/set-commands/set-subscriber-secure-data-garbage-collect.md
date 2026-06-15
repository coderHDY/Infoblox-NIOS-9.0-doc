---
title: "set subscriber_secure_data garbage_collect"
source: "/space/nios90/280757020"
pageId: "280757020"
---
You can use the** **`set subscriber_secure_data garbage collect` command to designate the specific member for garbage collection service. To view information about the status of the command, see *[show subscriber_secure_data garbage_collect](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-subscriber-secure-data/show-subscriber-secure-data-garbage-collect)*.

# Syntax

`set subscriber_secure_data garbage_collect {on | off}`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables the member for garbage collection. |
| `off` | Disables the member for garbage collection. |

# Examples

`Infoblox &gt;`` ``set subscriber_secure_data garbage_collect on`

`This member is now configured for garbage collection at 2 AM everyday. Do you want to change the scheduled time for garbage collection (y or n): y`

`Enter garbage collection start time [&lt;1-12&gt; &lt;AM/PM&gt;]: 3 AM`

`Garbage collection is scheduled at 3 AM everyday.`
