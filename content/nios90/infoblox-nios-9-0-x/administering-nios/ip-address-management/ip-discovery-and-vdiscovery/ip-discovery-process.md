---
title: "IP Discovery Process"
source: "/space/nios90/280666480"
pageId: "280666480"
---
Once an IP discovery starts, the Grid member reports the discovery status, such as **Completed**, **Running**, **Paused**, **Stopped**, or **Error**, in the *Discovery* *Manager* wizard and the *Discovery* *Status* widget on the Dashboard. In the *Discovery* *Status* widget, Grid Manager reports the time when the discovery status was last updated and the numbers of each type of discovered data. For information, see [*Managing Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/managing-discovery).  
When an IP discovery starts, the appliance divides the IP addresses in a network into chunks, with each chunk containing 64 contiguous IP addresses. The discovery process probes each IP address in parallel and in ascending order, reports the detected information, updates the progress report, and then moves on to the next chunk until it hits the last chunk of IP addresses. The appliance then updates the database with the discovered data.  
An IP discovery scans the selected networks in the order the networks appear in the *Discover* *Manager* wizard.  
You can configure discovery processes on the same network, but the same configuration cannot be shared between two discovery processes.  
The below figure illustrates how an IP discovery works.  
  
*IP* *Discovery* *Process*

*[drawio]*
