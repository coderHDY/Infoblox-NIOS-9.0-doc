---
title: "About IPv4 Fixed Address/Reservation Templates"
source: "/space/nios90/1393558899"
pageId: "1393558899"
---
You can use an IPv4 fixed address/reservation template to create fixed addresses, reservations and roaming hosts.  
When you create an IPv4 fixed address/reservation template, you can specify an offset and number of addresses. This is used when you include the template in a network template. When you include a fixed address/reservation template in a network template, the DHCP server automatically creates reservations based on the offset and number of addresses you specified in the fixed/address reservation template. It does not create fixed addresses.   
After you create a fixed address/reservation template using the wizard, you can configure additional properties as described in Modifying IPv4 Fixed Address/Reservation Templates below. Then when you use the template to create a fixed address, it inherits the properties of the template.  
If you have deployed the Cloud Network Automation license on the Grid Master, you can configure fixed address templates for cloud delegation. When you configure a template for cloud delegation, all fixed addresses you create using this template will inherit authority delegations from their parent objects. For information about Cloud Network Automation, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).
