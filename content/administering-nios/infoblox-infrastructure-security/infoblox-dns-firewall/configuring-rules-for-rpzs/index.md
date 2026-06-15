---
title: "Configuring Rules for RPZs"
source: "/space/nios90/280269891"
pageId: "280269891"
---
You can define different RPZ rules to block DNS resolution for malicious or unauthorized hostnames or redirect clients to a walled garden by substituting responses. Depending on the nature of the rule and its usage, each rule is designed to match a hostname, domain name, or IP address, specification or pattern, and an associated action.

These rules are applicable to local RPZs, including FireEye integrated RPZs, except for the RPZ client IP address or network rules which are not applicable for FireEye integrated RPZs. For RPZ feeds, rules are imported from external servers. You cannot change the content of an RPZ feed, but you can override the actions in an RPZ feed.

The RPZ rules are triggered based on the order of the RPZ zones that you have configured. When you configure one or more RPZ rules with the same FQDNs or IP addresses in different RPZ zones, then the RPZ rules in the top-level RPZ zone are triggered first.

To configure RPZ rules:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, click *DNS_View* -> *Zone* and then click **Add** -> select a **Rule**.
2. The rules are classified as follows:
   
   - **Passthru** **Rule**
   - **Block** **(No** **Such** **Domain)** **Rule**
   - **Block** **(No** **Data)** **Rule**
   - **Substitute** **(Domain** **Name)** **Rule**
   - **Substitute** **(Record)** **Rule**
3. Complete the details in the corresponding editor.
4. Save the configuration and click **Next** to define extensible attributes.

You cannot define the above rules for an RPZ feed. An RPZ feed uses rules defined by external servers. When you click on an RPZ feed, the appliance displays a dialog box that provides various options to export the rules of the configured external servers in .CSV format.

For more information, view the [Configuring RPZ Rules](https://launchpad.education.infoblox.com/student/collection/1769027/path/2447605/activity/2376930) video in Launchpad. Note that Launchpad is free for all customers, but login is required to access it.

In this section:

*[children]*
