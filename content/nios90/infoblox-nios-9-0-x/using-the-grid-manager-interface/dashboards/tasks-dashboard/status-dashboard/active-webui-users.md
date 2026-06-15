---
title: "Active WebUI Users"
source: "/space/nios90/1457193794"
pageId: "1457193794"
---
The *Active* *WebUI* *Users* widget provides information about the users who are logged in to Grid Manager or System Manager. It does not include users who are using the Infoblox API or are logged in to the serial console.

You can add only one *Active* *WebUI* *Users* widget to the Dashboard. You must have a superuser account to add this widget to the Dashboard.

It displays the following information about each user:

- **User** **ID:** The user name.
- **Source Address:** The IP address of the management station the user used to connect to Grid Manager.
- **Logged In Since:** The date and time the user logged in.
- **Idle Time:** The number of minutes the user has not had any activity on Grid Manager. Note that the idle session timeout is 2 hours, so the idle time is cleared every 2 hours.
- **User Agent:** The system used to access Grid Manager, such as the browser version and platform information. You can sort the columns and hide or display each one. You can also export the list to a .csv file.
