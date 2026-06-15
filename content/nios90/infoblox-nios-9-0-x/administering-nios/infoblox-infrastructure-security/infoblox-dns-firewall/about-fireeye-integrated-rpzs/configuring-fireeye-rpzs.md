---
title: "Configuring FireEye RPZs"
source: "/space/nios90/1406271489"
pageId: "1406271489"
---
You must create an RPZ zone and map the FireEye alerts with an RPZ rule to receive alerts from FireEye. These alerts will then be translated into appropriate RPZ rules that are added to the FireEye RPZ. You can also define a time limit for a specific alert type or set the alert type to live forever. When you define a lifetime, the alert type will be active for the specified number of days or weeks in the NIOS appliance, and will then expire after the specified time. After you configure the FireEye integrated RPZ, the NIOS Grid receives alerts from the FireEye appliance and creates RPZ rules for some of the alerts received. FireEye appliance sends alert messages with basic authentication. You must configure a username and password on the NIOS appliance prior to receiving any alerts from the FireEye appliance.

> **warning**
>
> ### Note
> 
> The NIOS appliance treats the FireEye integrated RPZ as a local RPZ. Thus, you cannot assign an external primary name server to the zone.

An alert contains the malware URL along with a valid FQDN. The NIOS appliance can only map an alert to a RPZ rule if the FQDN is present. If an alert doesn't contain the FQDN, then the alert is ignored by the NIOS appliance. Once the alert is processed and properly mapped to an RPZ rule, it remains in the database until you delete it manually. You can get more information about the alerts, which are sent by the FireEye appliance, from the syslog.

> **warning**
>
> ### Note
> 
> You can configure feeds from multiple FireEye appliances. To enable or disable FireEye integration module feeds from individual appliances, you must enable or disable user access of the particular FireEye appliance. Note that the FireEye feeds will not be in the RPZ format, but when you configure a FireEye integrated RPZ, the NIOS appliance creates a new URL through which the FireEye appliance sends alerts.



To configure a FireEye integrated RPZ:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, and then click the *Add* icon.
2. When you click the *Add* icon, either the *Add* *Response* *Policy* *Zone* *Wizard* or the *Add* *DNS* *View* wizard is displayed based on the following:
   
   - When you click the *Add* icon, the *Add* *Response* *Policy* *Zone* *Wizard* is displayed if you have not created additional DNS views and only have the default view.
3. If you have configured multiple DNS views, you must drill-down to the corresponding view to assign a FireEye Integrated RPZ. Click the *Add* icon and the *Add* *Response* *Policy* *Zone* *Wizard* is displayed. To create a new DNS view for your FireEye integrated RPZ, click the *Add* icon and complete the details in the *Add* *DNS* *View* wizard. For information adding and modifying a DNS view, see [*Adding a DNS view*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90draft/pages/73282458)*.*
4. In the *Add* *Response* *Policy* *Zone* *Wizard*, select **Add** **FireEye-Integrated** **Response** **Policy** **Zone**, click **Next** and specify the following:
   
   - **Name:** Enter the name of the FireEye integrated RPZ. It can be a combination of alphanumeric characters. You can enter up to 256 characters.
   - **DNS** **View:** The name of the view that you have selected is displayed by default. You can select a view from the drop-down list to associate it with the FireEye integrated RPZ.
   - **Policy** **Override**: Select a value from the drop-down list. You can override the policy actions that are specified in the rule level.
     
     - **Log** **Only** **(Disabled)** – Select this if you want to disable an RPZ rewrite using rules in the RPZ. If the response to the recursive query matches any RPZ rule, then the rule is logged, but the response will not be altered. Note that this option will not override RPZ rules in other RPZ zones, if they take precedence. Select this option to preview the rules in the syslog before they take effect.
     - **None** **(Given)** – Select this if you want to use the policy from the rule level.
     - **Block** **(No** **Data)** – Select this to send a response that contains no data in it.
     - **Block** **(No** **Such** **Domain)** – Select this if you want the user to receive a DNS response that indicates there is no domain. All the policy actions in an RPZ are replaced with a NXDOMAIN block.
     - **Passthru** – Select this if you want to send an actual response without modification. All the policy actions in an RPZ are replaced with the passthru action.
     - **Substitute** **(Domain** **Name)** – Select this if you want to replace all the policy actions in an FireEye integrated RPZ with the specified substitution action.
       
       - **Domain** **Name**: This appears only when you select **Substitute** **(Domain** **Name)** from the **Policy** **Override** list. Enter the domain name that you want the client to receive instead of the actual domain name, which is malicious or unauthorized.
   - **Comment**: Optionally, enter additional information about the FireEye integrated RPZ.
   - **Disable:** Select the checkbox to disable the FireEye integrated RPZ without deleting its configuration. Clear the checkbox to enable the FireEye integrated RPZ. For information, see [*Enabling and Disabling Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/locking-unlocking-enabling-disabling-zones)*.* Note that disabling the FireEye integrated RPZ may take a longer time to complete depending on the size of the data.
5. Click **Next** to define rule mapping:
   
   - **Server URL**: The appliance displays the URL that you use when configuring the FireEye appliance. This URL is used to handle alerts, which is sent by the FireEye appliance. It handles alerts based on the standard authentication. The URL generated by the NIOS appliance consists of the Grid Manager IP address, network view, and DNS view of the FireEye zone. If you change the IP address, network view, zone or DNS view after you have configured a FireEye RPZ, the URL will change accordingly. Thus FireEye will not be able to send alerts to the updated URL. You must update the URL in the FireEye appliance to send alerts to the NIOS appliance. The **Server URL** is generated in this format:
     
     https://&lt;host address&gt;/alert/feye/&lt;network view&gt;/&lt;dns view&gt;/&lt;zone&gt;
   - **Rule** **Mapping**: You can map a **FireEye** **alert** **type** with an RPZ policy. Select an **RPZ** **policy** **type** from the drop-down list. Note that the **FireEye** **alert** **type** is read-only. The NIOS appliance applies corresponding RPZ policy type when the FireEye appliance sends an alert to the NIOS appliance. You can also specify a time limit for each FireEye RPZ rule depending on the FireEye alert type. NIOS displays default lifetime value for each alert type. You can change the default lifetime of the alert type. When you define a value, the value must be greater than zero. When you select **Live** **Forever** from the drop-down list, the alert type will never expire and will be stored in the database until further notice. The NIOS appliance will use the default time if you do not specify a value. You can specify the expiration time in days or weeks only. The following table lists the FireEye alerts, RPZ policy types, and the time limit for a specific FireEye alert:

*FireEye* *Rule* *Mapping*

| **FireEye Alert Type** | **RPZ Policy Type** | **Lifetime** |
| --- | --- | --- |
| Domain Match  Infection Events  Callback Events  Malware Object  Web Infection | Select a value from the drop-down list for a FireEye alert when a malware object is detected: **None**, **Passthru**, **Block** **(No** **Such** **Domain)**, **Block** **(No** **Data)**, and **Substitute** **(Domain** **Name)**. The drop-down list displays **Passthru**, by default. For more information about the **RPZ** **Policy** **Types**, see [*Configuring Rules for RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs). | Specify a lifetime for each FireEye alert in **Days**, **Weeks**, or select **Live** **Forever** from the drop-down list. The following are the default values for different alert types:  - Domain Match - 1 week - Infection Events - 1 day - Callback Events - 1 week - Malware Object - 1 day - Web Infection - 1 day      Click on the default value to change the lifetime value. |

When you edit the lifetime of an existing alert type, NIOS deletes the alert type based on the new lifetime setting. It also updates the expiration time for the corresponding alert type. Note that there might be an impact on the performance when you delete expired FireEye RPZ rules.

- **Override rule mapping for APT events:** Select a value from the drop-down list to override rule mapping for Advanced Persistent Threats. Events that are marked as APT events by FireEye override rules that are set for other event types. The values in the drop-down list are:
  
  - **NoOverride** – Select this if you want to use the policy from the rule level and do not want to override the rule mapping settings. This value is displayed in the drop-down list, by default.
  - **Passthru** – Select this if you want the user to see the actual response without modification. All the policy actions in an RPZ are replaced with the passthru action.
  - **Block (No Such Domain) **– Select this if you want the user to receive a NXDOMAIN as the DNS response. All the policy actions in an RPZ are replaced with a NXDOMAIN block.
  - **Block** **(No** **Data)** – Select this if you want the user to receive a response that indicates that there is no data.
    
    - **Substitute (Domain Name)** – Select this if you want to replace all the policy actions in an RPZ with the substitution action that is specified.
  - **Substituted** **Domain** **Name**: This appears only when you select **Substitute** **(Domain** **Name)** from the **Policy** **Override** list either for APT events or for FireEye alerts. Enter the domain name that you want the client to receive instead of the actual domain name, which is malicious or unauthorized.

1. Click **Next** to associate the FireEye integrated RPZ with at least one primary name server:

- Define the name servers for the FireEye integrated RPZ. A Grid name server must be recursive when primary Grid name server is used as an RPZ source. A FireEye integrated RPZ may or may not have a recursive server. For example, there could be a Grid that has only primary Grid name server for a FireEye integrated RPZ to act as an RPZ source for an external set of name servers.  When you select **All Recursive Name Servers** from the list, all the recursive name servers in the Grid are added as secondary servers for the zone. For information on specifying primary or secondary name servers, see [*Assigning Zone Authority to Name Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers). For information on specifying name server groups, see [*Using Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/using-name-server-groups). For information about all recursive name servers, see [*Configuring RPZs for All Recursive Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/enabling-recursion-for-rpzs).

1. Save the configuration and click **Next** to define extensible attributes.

1. Click **Restart** if it appears at the top of the screen.
