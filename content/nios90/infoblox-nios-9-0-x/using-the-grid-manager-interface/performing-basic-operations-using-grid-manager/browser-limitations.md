---
title: "Browser Limitations"
source: "/space/nios90/280268401"
pageId: "280268401"
---
- When you use Internet Explorer 7 or 8 without installing the latest updates, Grid Manager may stop loading a page when you navigate from one tab to another or when you use the back navigation button to go back to a previous page. To solve this problem, you can press Ctrl+F5 to refresh the browser or install the latest updates.
- When you use the zoom function in Internet Explorer 7 running on Microsoft Windows XP, Grid Manager may not properly display some pop up windows. This is a known issue in Internet Explorer 7.
- In Internet Explorer 8, Grid Manager does not display the directory path of an uploaded file. Instead, it displays "fakepath" in place of the directory path. To resolve this issue, you can add Grid Manager as a trusted site or enable the "Include local directory path when uploading files to a server" feature in the browser. For information, refer to the MSDN documentation at [*https://msdn.microsoft.com/en-us/library/ms535128.aspx*](https://msdn.microsoft.com/en-us/library/ms535128.aspx).
- When you use FireFox to access Grid Manager, tooltips do not display for disabled drop-down menu items. In addition, when you run a large query of smart folders, Grid Manager may display a warning message about "Unresponsive Script". Click **Continue** to proceed.
- Depending on the browser you use, Grid Manager may display a dialog box that indicates the system is unavailable during a system restart or reboot.
- Infoblox strongly recommends that you do not log in to Grid Manager from different browser windows using the same user account. Depending on the browser you use, it may cache user information in one session and apply it to another session. This can cause inconsistent behaviors within the browser sessions.
