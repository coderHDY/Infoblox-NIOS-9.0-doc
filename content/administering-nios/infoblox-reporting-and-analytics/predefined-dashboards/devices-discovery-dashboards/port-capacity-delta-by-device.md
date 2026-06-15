---
title: "Port Capacity Delta by Device"
source: "/space/nios90/1471480460"
pageId: "1471480460"
---
The *Port* *Capacity* *Delta* *by* *Device* dashboard provides three Start/End time ranges by which each measured device illustrates how many interfaces move into and out of the three key functional states for each port: Administratively Up/ Operationally Up, Administratively Up/Operationally Down and Administratively Down/Operationally Down.  
For example, consider a port that is in the Administratively Up/ Operationally Up status on a given device at the beginning of a one-week measurement (**Start**), and that it is the only port that changes state for that device in the measurement period. At the end of the measurement period (**End**), it goes into an Administratively Up/Operationally Down state. At first, the Administratively Up/ Operationally Up **Start** counter reflects the discovered state at the beginning of the measurement period. When the port changes state, and its change is discovered, the Administratively Up/ Operationally Up **End** counter decrements by 1; the Administratively Up/ Operationally Down **Start** counter increases by 1. The data format is similar to the Port Capacity Utilization by Device report except that each data point divides into two values (**Start** and **End**), reflecting the delta.  
You can filter by device name or network view, or both.  
This dashboard displays the following categories of information in table format:

- **Device** **Name**: Name of the listed device.
- **Admin** **Up,** **Operation** **Up** **Start**: count at the starting time of measurement of device interfaces in Admin Up/Operational Up status.
- **Admin** **Up,** **Operation** **Up** **End**: count at the ending time of measurement device interfaces in Admin Up/Operational Up status.
- **Admin** **Down,** **Operation** **Down** **Start**: count at the starting time of measurement of device interfaces in Admin Down/Operational Down status.
- **Admin** **Down,** **Operation** **Down** **End**: count at the ending time of device interfaces in Admin Down/Operational Down status.
- **Admin** **Up,** **Operation** **Down** **Start**: count at the starting time of measurement of device interfaces in Admin Up and Operational Down status.
- **Admin** **Up,** **Operation** **Down** **End**: count at the ending time of device interfaces in Admin Up and Operational Down status.
- **Total** **Available**: The total number of available ports for the listed device.
- **Network** **View**: The Grid Manager Network View to which the device is associated.
