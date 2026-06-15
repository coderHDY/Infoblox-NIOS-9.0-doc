---
title: "Modifying Superscopes"
source: "/space/nios90/1467384084"
pageId: "1467384084"
---
To modify a superscope:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Network** tab -&gt; **IPv4 Microsoft superscopes** -&gt; *ms_superscope* checkbox, and then click the Edit icon.
2. The *Superscopes* editor contains the following tabs from which you can modify data:
   
   - **General:** You can modify the name and comment, and enable or disable the superscope. You can also add and delete address ranges from the superscope. Note that when you delete the last DHCP range in a superscope, Grid Manager automatically deletes the superscope as well.
   - **Extensible** **Attributes**: Define extensible attributes for the superscope. These apply only when the superscope is managed in Grid Manager. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.*
   - **Permissions:** Define administrative permissions that apply to the superscope when it is managed in Grid Manager. For information see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Save the configuration and click **Restart** if it appears at the top of the screen.
