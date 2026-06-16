---
title: "Determining Interface Capabilities"
source: "/space/nios90/1455292566"
pageId: "1455292566"
---
One key piece of information that Network Insight compiles from discovery involves an assessment of interface *capabilities*. The Interfaces table provides a hidden column titled **Capabilities** with a description of the relevant capabilities of each interface in the discovered device.

1. From the **Data** **Management** tab, select the **Devices** tab. The Devices Home page displays a list of all devices currently found and catalogued by discovery.
2. Click the Action icon for a chosen device and choose **Interfaces** from the popup menu.
3. Click the right end of a column header and choose **Columns** **–&gt;** **Edit** **Columns** from the drop-down menu.
4. Select the **Capabilities** checkbox and click **Apply**.

The text listing for the Capabilities field may be too long to display in the Interfaces table. Hover the mouse over any table row to display the complete entry for the **Capabilities** field:

*Capabilities* *information* *for* *the* *selected* *interface*

![Capabilities information for the selected interface](/assets/1455292566/8f053e25-7193-482d-8813-5b9831f61c6b.jpg)



Critical values in the Capabilities field include the following:

- Provision IPv4 Network – Yes or No
- Provision IPv6 Network – Yes or No
- De-Provision IPv4 Network – Yes or No
- De-Provision IPv6 Network – Yes or No
- Interface has no IP Address – Appears only if no IP address is defined for the interface
- Edit Data VLAN – Yes or No
- Edit Voice VLAN – Yes or No
- Edit Admin Status – Yes or No
- Edit Description – Yes or No

The values you see in this field provide notification when you are unable to set certain values for any interface. When discovery queries devices for their device type, OS version support and other factors, Network Insight compiles the information into table formats that help you to determine issues or exceptions in the network.  
For example, loopback interfaces are "always up" and hence do not support an Admin Status configuration and show **Edit** **Admin** **Status** **=** **No**. If an interface does not have an IP address, it cannot be de-provisioned and hence shows a **De-provision** **Network** **=** **No**. That same device may not support IP addresses or VLANs because it is only a L2 Ethernet switch, and shows **Edit** **VLAN** **=** **No** and **Provision** **IPv4** **Network** **=** **No**, among others.  
If a device shows a **Provision** **IPv4** **Network** **=** **Yes** and **Provision** **IPv6** **Network** **=** **No**, it indicates that the device supports only IPv4, perhaps due to OS software version.  
Other cases may involve the following reasons:

- **Edit** **Admin** **Status** **=** **No**:
  
  - Device not supported
  - Vendor not supported
  - Model not supported
  - Port does not support Admin settings (Loopback, Virtual)
- **Edit** **VLAN** **=** **No**:
  
  - Device not supported
  - Device type not supported for VLAN assignment (Router, L2 switch)
  - Vendor not supported
  - model not supported
- **Edit** **Voice VLAN** **=** **No**:
  
  - Device not supported
  - Vendor not supported (Cisco is the only supported device type)
  - Device not licensed
  - Model not supported
- **Provision** **IPv4** **Network=No/Provision** **IPv6** **Network=No**:
  
  - Device not supported
  - Vendor not supported for network provisioning
- **De-Provision** **IPv4** **Network=No/De-Provision** **IPv6** **Network=No**:
  
  - Device not supported
  - Vendor not supported for network provisioning
  - Device type not supported for network provisioning (Router)
- **Edit** **Description=No**
  
  - Device not supported
  - Vendor not supported
  - Model not supported
