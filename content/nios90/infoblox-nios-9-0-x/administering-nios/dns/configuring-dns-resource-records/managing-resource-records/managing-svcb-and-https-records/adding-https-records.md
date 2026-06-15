---
title: "Adding HTTPS Records"
source: "/space/nios90/1946124453"
pageId: "1946124453"
---
1. From the** Data Management** tab, select the **DNS **tab, expand the Toolbar and click **Add **-&gt; **Record **-&gt; **Add HTTPS Record**.
2. In the *Add HTTPS Record wizard*, do the following:
   
   - **Display  input  as**: Select either Attrleaf pattern (_port.scheme.domain) or Free  format. Grid Manager selectsAttrleaf pattern by default.
   - **Port**: For the HTTPS record, the port value will be pre-defined as 443.
   - **Scheme**: For the HTTPS record, the port value will be pre-defined as _https
   - **Name**: Enter the host name that you want to map to a service endpoint. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the host. To create a wildcard record, enter an asterisk (*) in this field.
   - **DNS View**: This field displays the DNS view to which the DNS zone belongs.
   - **Host Name Policy**: Displays the host name policy of the zone.
   - **Priority**: Enter the priority value for the record. The value of this field will be 0 for alias mode and in the range of 1-65535 for service mode.
   - **Target Name**: Enter the domain name of the service endpoint.The domain name of either the alias target (for alias mode) or the alternative endpoint (for service mode).
   - **SvcParams**: Optionally, enter key=value pairs describing the alternative endpoint at TargetName.The SVC supported keys are :
     
     - key 0 - mandatory
     - key 1 - alpn
     - key 2 - no-default-alpn
     - key 3 – port
     - key 4 – ipv4hint
     - Key 5 - ech
     - key 6 - ipv6hint
   - **Comment**: Optionally, enter additional information about the record.
   - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.

Click **Next **to define extensible attributes. Save the configuration and click **Restart **if it appears at the top of the screen.
