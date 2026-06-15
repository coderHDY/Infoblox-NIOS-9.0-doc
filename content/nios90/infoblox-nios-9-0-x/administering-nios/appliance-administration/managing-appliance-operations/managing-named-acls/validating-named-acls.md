---
title: "Validating Named ACLs"
source: "/space/nios90/1356857351"
pageId: "1356857351"
---
When you add or modify a named ACL, the appliance does not automatically validate the ACEs in the list. In addition, when you import named ACLs or ACEs to a named ACL, no automatic validation is performed. To avoid unintended consequences, ensure that you validate your named ACLs before you save them or use them for access control.

> **warning**
>
> ### Note
> 
> When you click the Validate icon in the *Add* *Named* *ACL* wizard or *Named* *ACL* editor, the appliance validates all the entries in the named ACL, even if you have selected only one or a few entries in the wizard or editor.

The following examples demonstrate the importance of validating named ACLs:   
**Example** **1**  
You configure a named ACL "foo" that includes a Deny permission to 10.0.0.0/16. You then assign "foo" to DNS zone transfers. You later import an "Allow/10.0.0.0/24" entry to "foo" through CSV import. The appliance appends the entry to the end of "foo." When you perform an ACL validation on "foo" after a DNS service restart, the appliance displays a warning message indicating that the new "Allow/10.0.0.0/24" entry is now included in the previously   
configured "Deny/10.0.0.0/16" entry. Since DNS service works on a first-match access control basis, zone transfers will not be allowed for the 10.0.0.0/24 network, which is probably not your original intent. You can then modify the named ACL to correct this error. On the other hand, if you do not perform the ACL validation, the appliance is not notified about the new network entry in "foo." As a result, you are not notified about the denial of zone transfers to 10.0.0.0/24.  
**Example** **2**  
You add a nested named ACL "bar" as the first entry to the named ACL "foo." You then add a "Deny All" entry right after "bar" (as the second entry). You later import a new "Allow All" entry to "bar" through CSV import. The "Allow All" entry will be appended to the end of "bar." When you perform an ACL validation on "foo" after the CSV import, the appliance detects a conflict between the "Allow All" (in "bar") and "Deny All" (right after "bar") permissions and displays a warning. Imagine if you do not perform the ACL validation on "foo," the appliance is not notified about the new "Allow All" entry in "bar" and therefore cannot detect the conflict between the "Allow All" and "Deny All" entries. As a result, almost all hosts will get zone transfers, which may not be the outcome you have intended.

> **warning**
>
> ### Note
> 
> It is important that you manually validate each named ACL after a CSV import to ensure data and performance integrity. The appliance does not automatically perform ACL validation.

To validate a named ACL:

1. From the **Administration** tab, select the **Named** **ACLs** tab -&gt; *named_acl* checkbox, and then click the Validate icon.   
   or  
   In the *Add* *Named* *ACL* wizard or *Named* *ACL* editor, click the Validate icon.
2. Grid Manager validates all the ACEs in the named ACL and displays a system message at the top of the screen indicating whether all ACEs in the named ACL are valid or not, depending on the validation results. When the appliance detects conflicts or issues related to specific ACEs, it displays the results in a CSV file. You can save the file or open it. Grid Manager displays the following information in the file:
   
   - **Defined** **ACL**: The name of the named ACL.
   - **Type** **of** **Issue**: The type of issue found. This can be one of the following:
     
     - **Optimize**: An ACE is a duplicate of a previous entry or an ACE configuration can be a subset of another entry. See optimized suggestions in the **Issue** field.
     - **Conflict**: The same IP address or network has a conflicting permission. Re-configure the ACE based on your requirements.
     - **Warning**: An ACE is a subset of a previously configured entry, but it has a conflicting permission.
   - **ACE** **A**: The ACE that has a conflict or an optimized issue with ACE B.
   - **ACE** **B**: The ACE that has a conflict or an optimized issue with ACE A.
   - **Issue**: Detailed information and optimized suggestions about the conflict or issue.

> **warning**
>
> ### Note
> 
> It may take a long time to validate a named ACL that contains a large number of ACEs.
