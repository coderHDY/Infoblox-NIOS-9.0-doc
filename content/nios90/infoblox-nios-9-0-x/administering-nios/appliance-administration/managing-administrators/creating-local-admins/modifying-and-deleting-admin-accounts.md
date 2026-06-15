---
title: "Modifying and Deleting Admin Accounts"
source: "/space/nios90/1480917308"
pageId: "1480917308"
---
You can modify and delete admin accounts that you create, but you can only partially modify the default superuser account "admin"—and only when you are logged in as a superuser account. Furthermore, because there must always be a superuser account on the appliance, you can only remove the default "admin" account after you create another superuser account.

To modify an admin account:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Admins** tab -&gt; *admin_account* checkbox, and then click the Edit icon.  
   or  
   From the **Administration** tab, select the **Administrators** tab -&gt; **Groups** tab -&gt; *admin_group* -&gt; *admin_account *checkbox, and then click the Edit icon.
2. The *Administrator* editor provides the following tabs from which you can modify data:
   
   - **General**: In the **General** **Basic** tab, modify the data of the admin account.
     
     Note that if the **Use AWS SSH authentication keys** option was previously disabled and is allowed when modifying an existing admin account, then password-only authentication is blocked. If the **Use AWS SSH authentication keys** option was earlier enabled and is now disabled, then password-only authentication is allowed.  
     On the **General ** **Advanced** tab, complete the following:
     
     - **Time** ** Zone**: Select a time zone from the drop-down list if you want to specify the time zone for the administrator. By default, the appliance automatically detects the time zone from the management system that the administrator uses to connect to the appliance. The appliance uses this time zone when it displays the timestamps for relevant data.
     - **Enable ** **Certificate ** **Authentication**: Select the checkbox to enable the certificate authentication service. You must also specify the serial number of the client certificate and associate a CA certificate that signs the client certificate. For more information, see  [*Enabling*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[*Certificate*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[*Authentication*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[*Service*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[*for*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[*a*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[*User*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic/Authenticating+Admins+Using+Two-Factor+Authentication#bookmark484)
   - **Extensible ** **Attributes**: Add and delete extensible attributes that are associated with the admin account. You can also modify the values of the extensible attributes. For information, see [  ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*About*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*Extensible*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)
3. Save the configuration and click **Restart** if it appears at the top of the screen.

To delete an admin account:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Admins** tab -&gt; *admin_account* checkbox, and then click the Delete icon.  
   or  
   From the **Administration** tab, select the **Administrators** tab -&gt; **Groups** tab -&gt; *admin_group* -&gt; *admin_account *checkbox, and then click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes**.

When you remove a Grid member from the Grid, local admin accounts are not removed and you will still be able to see these admin accounts.
