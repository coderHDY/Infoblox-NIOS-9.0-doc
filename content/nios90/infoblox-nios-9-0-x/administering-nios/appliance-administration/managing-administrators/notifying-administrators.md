---
title: "Notifying Administrators"
source: "/space/nios90/280408252"
pageId: "280408252"
---
You can notify individual administrators about system status through email, or notify a group of people using an alias email address. If you have configured DNS resolution on your network, the **E-mail** **relay** **configuration** function is not required. If you did not configure the settings on the **DNS** **Resolver** section, you must enter a static IP address of the target system in the **Relay** **Name/IP** **Address** field. The appliance sends e-mail to administrators when certain events occur. This functionality supports both IPv4 and IPv6 networks. Here is a list of events that trigger e-mail notifications:

- Changes to link status on ports and online/offline replication status
- Events that generate traps, except for upgrade failures (ibUpgradeFailure). For a list of events and Infoblox MIBs, see *[SNMP MIB Hierarchy](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy)**.*

The appliance attempts to send the email notification once after an event. It does not try to send the notification again, if the first attempt fails. Infoblox recommends that you use the **Test** **Email** **settings** button to test the email settings and to verify that the recipient received the notification.  
You can define the email settings at the Grid and member levels.

# Grid Level

To notify an administrator of an independent appliance or a Grid:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -&gt; **Edit** from the Toolbar.
2. In the *Grid* *Properties* editor, select the **Email** tab, and then complete the following:
   
   - **Enable** **Email** **notification:** Select this for NIOS to send email notifications.
     
     - **From Email Address:** Enter the email address from which to send email notifications. If this field is blank, the member host name is used by default. For example, no-reply@member_host_name
     - **To Email** A**ddress:** Enter the email address of the administrator. Use an email alias to notify multiple people.
   - **Use** **SMTP** **Relay:** Select this if the NIOS appliance must send email to an intermediary SMTP (Simple Mail Transfer Protocol) server that relays it to the SMTP server responsible for the domain name specified in the email address. Some SMTP servers only accept email from certain other SMTP servers and might not allow email from the NIOS appliance. In this case, specify the DNS name or IP address of a different SMTP server that does accept email from the NIOS appliance and that will then relay it to the SMTP server that can deliver it to its destination.  
     Clear this if it is unnecessary to use an email relay server.
     
     - **SMTP** **Relay** **Name** **or** **Address:** If you have configured DNS resolution, enter the DNS name of the relay server.  
       If DNS resolution is not configured, enter the IP address of the relay server.
3. Optionally, click **Test Email** **settings** to confirm this feature is operating properly.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Member Level

To define email settings for a member:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; *member* checkbox, and then select the Edit icon.
2. In the *Grid* *Member* *Properties* editor, select the **Email** tab, and then click **Override** to override Grid-level settings.
3. Complete the email configuration as described in  Grid Level above.
