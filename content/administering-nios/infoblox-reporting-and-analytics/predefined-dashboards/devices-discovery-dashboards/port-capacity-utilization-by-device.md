---
title: "Port Capacity Utilization by Device"
source: "/space/nios90/1471219263"
pageId: "1471219263"
---
The *Port* *Capacity* *Utilization* *by* *Device* provides the devices' overall port status for the specified time, without stating devices' or individual ports' operating state. Each device's count of unused interfaces, within each network view, appears exactly once in the dashboard. By default, the table sorts by ascending Device Name. By default, this dashboard lists all devices, across all network views. You can filter by device name or network view, or both. Grid Manager takes snapshots of data for Port Capacity reports every six hours.  
You will see three distinct port configuration combination counts per device:

- Administratively Up, Operationally Up
- Administratively Up, Operationally Down
- Administratively Down, Operationally Down

This dashboard displays the following information in table format:

- **Device** **Name**: The name of the device associated with the port status counts.
- **Admin** **Up,** **Operation** **Up**: The count of device interfaces in Admin Up/Operational Up status.
- **Admin** **Down,** **Operation** **Down**: The count of device interfaces in Admin Down/Operational Down status.
- **Admin** **Up,** **Operation** **Down**: The count of device interfaces in Admin Up and Operational Down status.
- **Total** **Available**: Total number of interfaces available for the device, whether provisioned or not.
- **Network View:** The network view containing the listed device.
