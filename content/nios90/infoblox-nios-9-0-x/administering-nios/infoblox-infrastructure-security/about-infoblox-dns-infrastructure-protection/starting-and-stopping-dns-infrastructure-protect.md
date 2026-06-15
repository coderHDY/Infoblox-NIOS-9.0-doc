---
title: "Starting and Stopping DNS infrastructure Protection Service"
source: "/space/nios90/280270147"
pageId: "280270147"
---
After you install the Threat Protection licenses on the appliance, you can start the DNS Infrastructure Protection service so you can monitor and mitigate DNS threats on that appliance.  
To start or stop DNS Infrastructure Protection service:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Services** tab, click the DNS Infrastructure Protection service link, and then select the *member* checkbox.
2. From the Toolbar, click **Start** to start the service or **Stop** to stop the service.

Note that when you stop DNS Infrastructure Protection service, the appliance does not provide visibility or protection against network floods or DNS threats. After you enable DNS Infrastructure Protection service, you can configure rule settings, add custom rules, and evaluate system rules to ensure that mitigation to DNS threats is handled properly. You can also temporary disable the DNS Infrastructure Protection service when necessary. For information about how to configure Grid security settings, see *[Configuring Grid Security Properties](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/configuring-grid-security-properties)*.

> **warning**
>
> **Note**
> 
> Starting the DNS Infrastructure Protection service may cause a change in BIND behaviour in handling multiple TCP DNS queries from the same client. To avoid this, you can disable multiple DNS requests by selecting the **Disable** **multiple** **DNS** **requests** **via** **single** **TCP** **session** checkbox. For more information see, *[Enabling Multiple DNS Requests through a Single TCP Session](/nios90/by-id/280275855)*.

Note that under normal circumstances when the system is not experiencing any attack, enabling the DNS Infrastructure Protection service may have a significant performance impact. When the system is under attack, enabling the DNS Infrastructure Protection service may have a higher performance impact. You might also notice a significant increase in the memory usage due to the DNS Infrastructure Protection service. You cannot replicate Grid, member, and profile by level DNS Infrastructure Protection configuration changes during a scheduled full upgrade.
