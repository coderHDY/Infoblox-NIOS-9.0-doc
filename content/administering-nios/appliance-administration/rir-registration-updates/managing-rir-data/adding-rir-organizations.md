---
title: "Adding RIR Organizations"
source: "/space/nios90/1423605884"
pageId: "1423605884"
---
Before you can submit any RIR updates to the RIPE database, you must first add the RIR organization and its corresponding data to NIOS. You can also create additional organizations for ISP customers.  
To add an organization:

1. From the **Administration** tab, select the **RIR** tab, and then click **Add** -> **RIPE** **Organization**.
2. In the *Add* *RIPE* *Organization* wizard, complete the following:
   
   - **Internet** **Registry:** The default is **RIPE**. This is the RIR that allocates address blocks to your organization. You cannot change this.
   - **Organization** **Name**: Enter the name of the organization that holds the resources allocated by RIPE NCC. You can enter up to 256 characters. Enter the name in this format: A list of words separated by white space. A word can be made up of letters, digits, the character underscore "_", and the character hyphen "-". The first character of a word must be a letter or digit and the last character of a word must be a letter, digit or a period. For example, you can enter `           SPRINT REGION2.`
   - **Organization** **ID:** Enter the handle or ID of the organization. You can enter up to 23 characters. Enter the ID in this format: Start with **ORG-** followed by two to four characters, then followed by up to five digits and a source specification. Note that the first digit cannot be "0". The source specification starts with "-" followed by the source name that contains up to nine characters in length. For example, you can enter ** **  
     `ORG-CA1-RIPE`** ** or `           ORG-CB2-TEST         `.
   - Maintainer: Enter the name of the maintainer for this organization. This is required. You can enter up to 256 characters; however, note that the RIPE database has an 80 characters limit for this field. A maintainer is any registrant or person to whom the authority to update has been delegated by another registrant either directly or indirectly, and who holds an identifier that allows updates to be authenticated and authorized. Data entered here must match exactly how the maintainer appears in RIPE.  
     Enter the maintainer name in this format: Use letters, digits, the character underscore "_", and the character hyphen "". The first character must be a letter, and the last character must be a letter or a digit. You cannot use the following words (they are reserved by RPSL): any, as-any, rs-any, peer, as, and, or, not, atomic, from, to, at, action, accept, announce, except, refine, networks, into, inbound, outbound. Also note the following: Names starting with certain prefixes are reserved for certain object types. For example, names starting with "as" are reserved for as set names. Names starting with "rs-" are reserved for route set names. Names starting with "rtrs-" are reserved for router set names. Names starting with "fltr-" are reserved for filter set names. Names starting with "prng-" are reserved for peering set names. Names starting with "irt-" are reserved for irt names.
   - **Password:** Enter the maintainer password. This is required. You can enter up to 256 characters.
   - **Retype** **Password:** Enter the same password.
   - **Maintainer** **Email**: Enter the originating or source email address of the maintainer. This is required.
   
   **RIR** **Organizational** **Attributes**: This table lists all predefined RIR attributes associated with the RIR organization. Click the **Value** field of an attribute in the table to enter a value. The **Required** field indicates whether a value for the corresponding attribute is required.  
   You can add custom attributes by clicking the Add icon and select an attribute from the drop-down list. You can also delete an RIR attribute by selecting its checkbox and clicking the Delete icon.  
   For information about the RIR Organizational Attributes table, attributes and how to enter their values, see [*Managing RIR Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963).
   
   Note that you cannot leave an optional RIR attribute value empty. If you do not have a value for an RIR attribute, you must delete it from the table. You can enter up to 256 characters for all RIR attributes.
3. Save the configuration. Note that you cannot schedule the creation, modification, or deletion of an RIR organization.
