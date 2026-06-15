---
title: "Modifying DNS Infrastructure Protection Profiles"
source: "/space/nios90/280766293"
pageId: "280766293"
---
You can modify the details associated with a DNS Infrastructure Protection profile. You can edit the rules when you drill down to the ruleset even though a member is associated with the profile.  
To modify a DNS Infrastructure Protection profile:

1. From the **Data** **Management** tab, select the **Security** tab -> **Profiles** tab, select the DNS Infrastructure Protection profile that you want to modify, click the Action icon  and then select **Edit**.
2. The *DNS Infrastructure* *Protection* *Profile* editor contains the following tabs from which you can modify information:
   
   - **General**: All fields are automatically propagated with available information. You can modify the values in the **Basic** and **Advanced** tabs. For more information, see *[Adding DNS Infrastructure Protection Profiles](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668792)*.
   - **Member** **Assignment**: Add or delete members that are associated with the respective DNS Infrastructure Protection profile. Click the Add icon to associate a member with the selected profile. In the *DNS Infrastructure* *Protection* *Member* *Selector* dialog box, select the member you want to associate with the profile. For information, see *[Listing Members](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766329)*. To delete a member that is associated with the profile, select the checkbox next to the respective member and click the Delete icon.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the template. You can also modify the values of the extensible attributes. For information, see as described in *[Modifying Extensible Attributes](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)
3. Save the configuration.

You must publish the changes after modifying a DNS Infrastructure Protection profile. For more information about publishing changes, see *[Publishing Rule Updates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408857)*.

> **warning**
>
> **Note**
> 
> By default, all ruleset versions, events per second per rule, and disable multiple DNS requests via single TCP session are inherited from the Grid unless you click **Override** to change the Grid settings.
