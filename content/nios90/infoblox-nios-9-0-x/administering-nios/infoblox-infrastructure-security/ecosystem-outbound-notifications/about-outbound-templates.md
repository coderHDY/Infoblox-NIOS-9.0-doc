---
title: "About Outbound Templates"
source: "/space/nios90/280269564"
pageId: "280269564"
---
The appliance uses outbound templates to convert NIOS events into REST API, DXL, and Syslog messages. Outbound API templates control the integration and contains necessary steps to execute  outbound notifications. Infoblox supports session management and action templates that are available in the Infoblox Community Site at [*https://community.infoblox.com*](https://community.infoblox.com/). You can either modify these existing templates or create new ones through Grid Manager using the existing templates. You use supported variables in these templates to get respective events and define actions you want to take for those events. You can also define additional extensible attributes that are necessary for certain templates. The appliance uses the scripts in these templates to process and send outbound notifications to the endpoints.

The following are the outbound templates that you can create:

- ** Session Management Template**: A session management template contains specific variables about an endpoint, such as the timeout value and rate limiting information. For more information, see [*Creating Session Management Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-session-management-templates).
- **Action Template**: An action template defines the action(s) to be taken on the selected endpoint for the matching event type(s). It contains scripts the appliance uses to query respective event data from NIOS and to perform actions you want to take in response to the events. For more information, see [*Creating Action Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-action-templates).

> **warning**
>
> ### Note
> 
> When you add an outbound template or make changes to an existing one, it may take a few seconds to a few minutes until the changes are propagated to all the members.

You can also export the schema from the appliance and use it to create the outbound templates. For information about how to export template schema, see Exporting Template Schema below. Note that the exported schema is in the IETF JSON Schema format. For information about this schema format, see [*https://tools.ietf.org/html/draft-zyp-json-schema-04.*](https://tools.ietf.org/html/draft-zyp-json-schema-04)

> **warning**
>
> ### Note
> 
> To access online resources about this feature, including training videos and sample outbound templates for supported ecosystem partners, visit the Infoblox Community Site at [*https://community.infoblox.com*](https://community.infoblox.com/).

# Adding Outbound Templates

You can use the supported templates that are available in the Infoblox Community Site at [*https://community.infoblox.com*](https://community.infoblox.com/). You can download these templates make necessary changes and upload them to the Infoblox Grid.

Complete the following to add or upload an outbound template to the Infoblox Grid:

1. **Grid**: From the **Infoblox** **Grid** tab, select the **Ecosystem** tab -&gt; **Templates** tab, and then click the Add icon.   
   or  
   From the **Infoblox** **Grid** tab, select the **Ecosystem** tab, and click **Add** **Template** from the Toolbar.  
   **System**: From the **System** tab, select the **Ecosystem** tab -&gt; **Templates** tab, and then click the Add icon.   
   or  
   From the **System** tab, select the **Ecosystem** tab, and click **Add** **Template** from the Toolbar.
2. In the *Add* *Template* wizard, complete the following:
   
   - Click **Select** to upload an outbound template. In the **Upload** dialog box, click **Select** and navigate to the template, and then click **Upload**. Select the **Overwrite** **the** **existing** **template** checkbox to overwrite an existing template.
3. Click **Add** to add an outbound template. To add a session management template, see [*Creating Session Management Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-session-management-templates) or [*Creating Action Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-action-templates) to create an action template.
4. Optionally, click **View Results** to open the *Syslog Preview* dialog and view all the syslog messages. For more information, see [*Previewing Syslog Events*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard).

# Modifying Outbound Templates

To modify an outbound template:

1. **Grid**: From the **Infoblox Grid** tab, select the **Ecosystem** tab -&gt; **Templates** tab -&gt; *template* checkbox, and then click the Edit icon.  
   or  
   From the **Grid** tab, select the **Ecosystem** tab, select the template that you want to modify, click the Action icon
   
   *[image: media]*
   
   and select **Edit**.  
   **System**: From the **System** tab, select the **Ecosystem** tab -&gt; **Templates** tab -&gt; *template* checkbox, and then click the Edit icon.  
   or  
   From the **System** tab, select the **Ecosystem** tab, select the template that you want to modify, click the Action icon and select **Edit**.
2. The *&lt;Template Name&gt;Template* editor contains the following tabs from which you can modify information:
   
   - **General**: You can modify the **Name** and **Comment** fields. All other fields are automatically propagated with available information, such as the template type, vendor type, event type, and action type. The **Name** field is optional for NIOS 8.3.0 and later releases, but note that it is mandatory for jump operations. When you do not specify a name for the template, an auto-generated value is set for this field. Example: `templatestep#N` or `functionstep#N` where N represents the step number. When you import a template, ensure that the goto functions are sent to named steps and not to automatically named steps.
   - **Contents**: This tab displays the content of the uploaded template file. You can modify the template contents and the appliance validates the content for proper JSON format when you save the configuration. For more information about the format of the templates, see [*Creating Session Management Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-session-management-templates) and [*Creating Action Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-action-templates).
3. Save the configuration.

# Viewing All Outbound Templates

To view the list of outbound templates:

1. **Grid**: From the **Infoblox Grid** tab, select the **Ecosystem** tab, and then click the **Templates** tab.  
   **System**: From the **System** tab, select the **Ecosystem** tab, and then click the **Templates** tab.
2. Grid/System Manager displays the following information:
   
   - **Name**: The outbound template name.
   - **Vendor** **Type**: The vendor type.
   - **Event** **Type**: The event type specified in the template.
   - **Template** **Type**: Displays the template type such as **Session** **Management** or **Event**.
   - **Outbound Type**: The endpoint type. This can be REST, DXL, or Syslog.
   - **Comment**: Comments that were entered for the outbound template.
   - **Added** **On**: Displays the timestamp when the template was uploaded to the Grid Master in this format: YYYY-MM-DD HH:MM:SS, plus time zone.

You can do the following in this tab:

- You can select the Action icon
  
  *[image: media]*
  
  and do the following:
  
  - **Edit**: Select this to modify the outbound template information.
  - **Delete**: Select this to delete a template.
  - **Export**: Select this to export a template.
- Edit the outbound template information.
  
  - Select the outbound template, and then click the Edit icon.
- Delete an outbound template.
  
  - Select the template, and then click the Delete icon.
- Export the list of outbound templates.
  
  - Click the Export icon.
- Print the list of outbound templates.
  
  - Click the Print icon.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria:
  
  1. In the filter section, click **Show Filter** and define filter criteria for the quick filter.
  2. Click **Save** and complete the configuration In the Save Quick Filter dialog box.  
     The appliance adds the quick filter to the quick filter drop-down list in the panel. Note that global filters are prefixed with [G], local filters with [L], and system filters with [S].
- Sort the outbound templates in ascending or descending order by column.

# Deleting Outbound Templates

You can delete a template any time after you have created it.

> **warning**
>
> ### Note
> 
> Before you delete a template, ensure that it is not in use by a notification or an endpoint.

To delete a template:

1. From the **Infoblox** **Grid/System** tab, select the **Ecosystem** tab, and then click the **Templates** tab.
2. Select the template that you want to delete, and click the Delete icon.
3. Click **Yes** in the *Delete* *Confirmation* dialog.

# Exporting Template Schema

The Export Template Schema feature allows you to export the session management and action template schema. You can use the exported schema to validate the templates before uploading them. The exported schema is in IETF JSON Schema format. It is a JSON file that is used to define and validate outbound templates that you want to upload to the appliance. If you want to create your own templates, you must follow this schema format. For information about this format, see [*https://tools.ietf.org/html/draft-zyp-json-schema-04*](https://tools.ietf.org/html/draft-zyp-json-schema-04_).  
Complete the following to export the outbound template schema:

1. From the **Infoblox** **Grid/System** tab, select the **Ecosystem** tab -&gt; select the **Templates** tab.
2. Expand the Toolbar, click **Export Template Schema** -&gt; select **Action Template Schema** to export the action template schema or select **Session Template Schema** to export the session management template schema.
3. If there is only one template version, the appliance downloads the schema to your local system. If there are multiple template versions, the appliance displays the *Export Action Template Schema* or *Export Session Template Schema* dialog. In the dialog, select the outbound template and the template version that you want to export. The template schema is downloaded to your local system.
