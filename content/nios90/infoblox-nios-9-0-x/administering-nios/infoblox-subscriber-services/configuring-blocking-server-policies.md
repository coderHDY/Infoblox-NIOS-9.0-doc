---
title: "Configuring Blocking Server Policies"
source: "/space/nios90/280400656"
pageId: "280400656"
---
In addition to the default blocking servers that you specify when adding subscriber sites, you can also create service policies that can be associated with specific servers. These servers act as blocking servers and any traffic or web pages that conform to the service policies that you create are blocked and redirected to the blocking VIP addresses.

# Adding a Blocking Server Policy

To create or add a blocking server policy:

1. From the **Data Management** tab -&gt; **DNS **tab -&gt; **Subscriber Services Deployment** tab, expand the vertical Toolbar and click **Blocking Server Associations**.
2. Click the Add icon.
3. In the **Name** field, specify a name for the policy.
4. In the **Parental Control Policy** field, specify the hexadecimal value of the parental control policy that you want to add. For a list of the different types of parental control policies and their hexadecimal values, refer to the supplemental documentation provided by Infoblox or contact your Infoblox representative.
5. Click the **Add** button.

The policy that you created is displayed in the table. You can then associate IP addresses with the policy that you created. For more information, see *[Scaling Using Subscriber Sites and IPSD](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/scaling-using-subscriber-sites-and-ipsd)*.

# Editing a Blocking Server Policy

To edit an existing blocking server policy:

1. From the **Data Management** tab -&gt; **DNS **tab -&gt; **Subscriber Services Deployment** tab, expand the vertical Toolbar and click **Blocking Server Associations**.
2. Select the policy that you want to edit and click the Edit icon.
3. Edit either the name of the policy or its hexadecimal value.
4. Click **Save**.

# Deleting a Blocking Server Policy

To delete an existing blocking server policy:

1. From the **Data Management** tab -&gt; **DNS **tab -&gt; **Subscriber Services Deployment** tab, expand the vertical Toolbar and click **Blocking Server Associations**.
2. Select the policy that you want to delete and click the Delete icon.
3. Click **Save**.
