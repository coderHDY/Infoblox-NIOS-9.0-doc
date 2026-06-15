---
title: "Modifying Superscopes"
source: "/space/nios90/1467384084"
pageId: "1467384084"
---
To modify a superscope:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Network** tab -> **IPv4 Microsoft superscopes** -> *ms_superscope* checkbox, and then click the Edit icon.
2. The *Superscopes* editor contains the following tabs from which you can modify data:
   
   - **General:** You can modify the name and comment, and enable or disable the superscope. You can also add and delete address ranges from the superscope. Note that when you delete the last DHCP range in a superscope, Grid Manager automatically deletes the superscope as well.
   - **Extensible** **Attributes**: Define extensible attributes for the superscope. These apply only when the superscope is managed in Grid Manager. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.*
   - **Permissions:** Define administrative permissions that apply to the superscope when it is managed in Grid Manager. For information see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Save the configuration and click **Restart** if it appears at the top of the screen.
