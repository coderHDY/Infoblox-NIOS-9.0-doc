---
title: "Configuring Infoblox DNS Infrastructure Protection"
source: "/space/nios90/280760341"
pageId: "280760341"
---
To enable and configure Infoblox DNS Infrastructure Protection on supported Infoblox appliances, complete the following:

1. Obtain valid Threat Protection, Threat Protection (Software add-on) and Threat Protection Update licenses from Infoblox and install them on the Infoblox Advance Appliances. For information about license requirements, see *[/wiki/spaces/nios90draft/pages/73293788](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/supported-dns-infrastructure-protection-applianc)*.
2. Optionally, you can set up an HA pair using the same appliance models for both the active and passive nodes. For information about HA pairs, see *[/wiki/spaces/nios90draft/pages/73274223](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/about-ha-pairs)*. Note that you cannot configure Advance Appliances as an HA Grid Master or HA Grid Master candidate.
3. Enable DNS Infrastructure Protection service, as described in *[/wiki/spaces/nios90draft/pages/73293821](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/starting-and-stopping-dns-infrastructure-protect)*. For an HA pair, enable the service on both the active and passive nodes.
4. Configure DNS Infrastructure Protection rule settings for the Grid, including automatic or manual rule updates, as described in *[/wiki/spaces/nios90draft/pages/73294017](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/configuring-grid-security-properties)*. If your network configuration requires rule updates to go through a proxy server, you can configure the appliance to use a proxy server to send rule updates. For more information, see *[/wiki/spaces/nios90draft/pages/73276601](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-proxy-servers)*. You can also delegate ruleset updates to specific Grid members and change the default interface to an alternate interface, as described in Configuring Members and Interfaces for Automatic Updates, see *[/wiki/spaces/nios90draft/pages/73276601](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-proxy-servers)*. Define DNS Infrastructure Protection profiles for the Grid or specific members, as described in *[/wiki/spaces/nios90draft/pages/73294356](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/configuring-dns-infrastructure-protection-profil)*.
5. Optionally, you can do the following:
   
   - Override the default Grid setting that disables multiple DNS requests through one TCP session, as described in *[/wiki/spaces/nios90draft/pages/73294050](/nios90/by-id/280275855)*.
   - Direct incoming DNS queries to be handled by DNS Cache Acceleration before being passed to DNS Infrastructure Protection, as described in *[/wiki/spaces/nios90draft/pages/73294073](/nios90/by-id/280275835)*.
   - Modify system rules, as described in *[/wiki/spaces/nios90draft/pages/73294603](/nios90/by-id/280668768)*.
   - Create custom rules using rule templates, as described in creating custom rules, see *[/wiki/spaces/nios90draft/pages/73293912](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/understanding-dns-infrastructure-protection-rule/custom-rules)*.

After you have successfully set up Infoblox DNS Infrastructure Protection, you can do the following:

- View the current DNS Infrastructure Protection rules, as described in *[/wiki/spaces/nios90draft/pages/73294640](/nios90/by-id/280766170)*.
- Modify system and custom DNS Infrastructure Protection rules, as described in *[/wiki/spaces/nios90draft/pages/73294557](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/managing-dns-infrastructure-protection-rules)*.
- Manually upload rule updates, as described in *[/wiki/spaces/nios90draft/pages/73294169](/nios90/by-id/280408834)*.
- Publish uploaded rule updates, as described in *[/wiki/spaces/nios90draft/pages/73294149](/nios90/by-id/280408857)*.
- For manual updates, compare differences between two rulesets and merge parameter changes from an old ruleset into a new one, as described in *[/wiki/spaces/nios90draft/pages/73294193](/nios90/by-id/280668919)*.
- Monitor DNS Infrastructure Protection related events and reports, as described in *[/wiki/spaces/nios90draft/pages/73294674](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/monitoring-dns-infrastructure-protection-events)*.
- Set the DNS Infrastructure Protection service in monitor mode, as described in *[/wiki/spaces/nios90draft/pages/73293843](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/enabling-and-disabling-monitoring-mode)*.
- Add DNS Infrastructure Protection profiles, as described in *[/wiki/spaces/nios90draft/pages/73294530](/nios90/by-id/280668792)*.
- Clone DNS Infrastructure Protection profiles, as described in *[/wiki/spaces/nios90draft/pages/73294503](/nios90/by-id/280766264)*.
- Modify DNS Infrastructure Protection profiles, as described in *[/wiki/spaces/nios90draft/pages/73294476](/nios90/by-id/280766293)*.
- Merge DNS Infrastructure Protection profiles, as described in *[/wiki/spaces/nios90draft/pages/73294458](/nios90/by-id/280408741)*.
- Inherit Grid rule settings for a DNS Infrastructure Protection profile, as described in *[/wiki/spaces/nios90draft/pages/73294439](/nios90/by-id/280275797)*.
- Delete a DNS Infrastructure Protection profile, as described in *[/wiki/spaces/nios90draft/pages/73294414](/nios90/by-id/280408771)*.
- View the current DNS Infrastructure Protection profiles, as described in *[/wiki/spaces/nios90draft/pages/73294388](/nios90/by-id/280668825)*.
