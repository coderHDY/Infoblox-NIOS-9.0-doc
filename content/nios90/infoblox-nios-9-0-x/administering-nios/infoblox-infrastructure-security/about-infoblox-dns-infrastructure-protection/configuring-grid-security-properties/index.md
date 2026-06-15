---
title: "Configuring Grid Security Properties"
source: "/space/nios90/280270078"
pageId: "280270078"
---
After you have installed valid threat protection licenses, you can configure rule update settings for the Grid. The Grid settings apply to all members in the Grid. You can select to use an existing DNS Infrastructure Protection ruleset or use a DNS Infrastructure Protection profile. A DNS Infrastructure Protection profile defines specific security settings and ruleset that you want to apply to a specific member or a group of members. For more information about rulesets, see [*Understanding DNS Infrastructure Protection Rulesets and Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/understanding-dns-infrastructure-protection-rule). For information about DNS Infrastructure Protection profiles, see [*Configuring DNS Infrastructure Protection Profiles*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/configuring-dns-infrastructure-protection-profil). You can override only the global **Event** **per** **second** filter (in the **Basic** tab) and the **Disable** **multiple** **DNS** **requests** **via** **single** **TCP** **session** option (in the **Advanced** tab) in the *Member* *Security* *Properties* editor by selecting a member and clicking Edit.  
To configure rule settings for the Grid or an individual member:

1. **Grid**: From the **Data** **Management** tab, select the **Security** tab, and then click **Grid** **Security** **Properties** from the Toolbar.
2. In the *Grid* *Security* *Properties* editor, select the **DNS Infrastructure Protection** tab -&gt; **Basic** tab, and complete the following:
   
   - **Active** **Ruleset** **Version**: To activate and apply a specific ruleset to the Grid, select the ruleset from the drop-down list.
   - **Active** **Ruleset** **Comment**: Displays information about the selected ruleset from the **Comment** field of the ruleset.  
     In the *DNS Infrastructure* *Protection* *Ruleset* *Updates* section, define the rule update policy. The appliance automatically performs rule updates by default. You can choose to manually publish rule updates. For information about how to manually update rules, see [*Manually Uploading Rulesets*](/nios90/by-id/280408834) and [*Publishing Rule Updates*](/nios90/by-id/280408857).
   - **Latest** **Available** **Ruleset**: Displays the version string of the last published ruleset. This field changes each time when the ruleset is updated.
   - **Last Checked For Updates**: Displays the timestamp and time zone when you manually upload a ruleset file or automatically download the latest rule update file from the Infoblox rule update server. This field changes the timestamp only when there is a change in the ruleset. The appliance does not update this field if there is no change in the ruleset for the manual upload or automatic download.
   - **Rule Update Policy**: Select the rule update policy from the drop-down list to determine whether updates are being applied automatically or manually. When you select **Automatic**, the appliance automatically switches to the newly downloaded ruleset and publishes the changes when a ruleset update is applied. This schedule is recurrent and occurs every 24 hours. Note that the download happens either 15 minutes before or after the time specified. Select **Manual** to manually download updated rulesets and publish them. Note that you must have a valid Threat Protection Update license installed in order to perform ruleset updates. For information about how to perform a manual update, see [*Manually Uploading Rulesets*](/nios90/by-id/280408834) and [*Publishing Rule Updates*](/nios90/by-id/280408857).
   - **Enable Automatic Ruleset Downloads**: Select this to enable automatic ruleset downloads. Note that starting with NIOS 8.0.0, ruleset downloads might take longer than previous releases; but there is no functional impact during the downloads.

> **warning**
>
> ### Note
> 
> When you select this, ensure that you configure and enable a valid DNS resolver for the Grid in the *Grid* *Properties* editor so the appliance can successfully access the updated ruleset file.

If your network environment does not allow direct HTTP or HTTPS communication with the Internet through a firewall from a secure location in which the Grid Master or the standalone appliance resides, you can configure the Advance Appliance to use a proxy server so you can receive automatic DNS Infrastructure Protection updates through this connection. Configured proxy settings are for the entire Grid. You cannot configure proxy settings for individual members. For information about how to configure proxy servers, see [*Configuring Proxy Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-proxy-servers).

- **Test** **Connection**: Click this to test the connectivity between the Advance Appliance and the server from which you receive the rule update files. Grid Manager displays a message indicating whether the connection is successful.
- **Download** **Rules** **Now**: Click this to immediately download the latest rule update file from the Infoblox rule update server, provided that the connection between the appliance and the server is successful.  
  In the Schedule section, define the schedule for automatic ruleset downloads. The following options are enabled only when you have selected **Enable** **Automatic** **Ruleset** **Downloads**:
  
  - **Default**: Select this to set the default schedule settings for automatic ruleset downloads. When you select the default schedule, download starts anywhere between 12 AM and 6 AM local time.
  - **Custom**: Select this to schedule downloads at a later date and time. Click the Calendar icon to select the date and time.

> **warning**
>
> ### Note
> 
> When you schedule automatic ruleset downloads, the downloads are performed within 15 minutes before or after the scheduled time. If you have multiple Grid members configured for downloads, the same offset time applies to all members when the first member is unreachable. Downloads to the next reachable member do not happen right after a download fails on the unreachable member. The offset time is put in place to prevent all members from performing downloads at the same time.

In the DNS infrastructure Protection Logging section, define the events per second per rule value to allow the appliance to log events in the syslog:

- **Events** **per** **Second** **per** **Rule**: Specify the number of events logged per second per rule. The default value is one and the maximum value is 700. Setting the value to 0 (zero) disables NIOS from logging events for the rules. NIOS displays an error message when you enter a value greater than the maximum value. You can override this event filter at the member level. For guidelines about using this setting, see [*Using the Events Per Second Rule Setting*](/nios90/by-id/281247745).

3. To save the configuration, click **Save & Close**. To publish changes, click **Publish** if it appears at the top of the screen. Note that NIOS does not require restarting of the DNS Infrastructure Protection service after rule updates.

> **warning**
>
> ### Note
> 
> When you enable the **Enable Automatic Ruleset Downloads** option and set the **Rule Update Policy** to Manual, and download a new ruleset manually, you need to click **Save & Close** to retain the existing customized rules. If you click **Cancel **or close the wizard, the existing customized ruleset will be replaced by the downloaded ruleset.

> **warning**
>
> **Note**
> 
> From NIOS 9.0.7 onwards, **Advanced DNS Protection (ADP) **and **Threat Insight (TI)** files are securely downloaded from the Infoblox Portal. If Infoblox Portal access is not available, the system will automatically switch to the older download location. This enhances security by using CA-signed certificates.
