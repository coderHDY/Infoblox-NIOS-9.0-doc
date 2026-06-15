---
title: "Guidelines for Configuring Inheritable Extensible Attributes"
source: "/space/nios90/1340475240"
pageId: "1340475240"
---
- When you add an inheritable extensible attribute to a parent object, you can choose to have descendants inherit or override the parent's extensible attribute value. You can also choose that the extensible attribute not be added to a descendant.
- When you add a new parent with an inheritable extensible attribute, the options for changes to descendants remain the same as when you add a new inheritable extensible attribute to a parent. For more information, see Configuring Inheritable Extensible Attributes above*.*
- When you add a new descendant to the existing parent with inheritable attributes, the descendant inherits all the extensible attributes. However, you can select if you want to inherit or override the values. If you set the inheritance state to **Not** ** Inherited**, then the extensible attribute will not exist on the descendant, but you can later change the state to **Inherited** or **Overridden**. For more information, see Managing Inheritable Extensible Attributes at the Parent and Descendant Level below.
- When you delete an inheritable extensible attribute associated with the parent, you can either preserve the extensible attribute values on the descendants or delete the inherited extensible attributes. For more information, see Deleting Inheritable Extensible Attributes Associated with Parent Objects below.
- When you delete a parent object and if there is grandparent, then the extensible attribute will be re-parented when you choose preserve. The current inheritance state of the attribute will be retained. If you delete a parent object and if there is no grandparent, then the inheritance state of the extensible attribute is changed to **No** ** Parent** when you choose preserve.
- When you split a network, the extensible attribute will be copied to the newly created networks. For inheritable extensible attributes, the newly created network inherits the extensible attributes and the state is set to **Inherited.** For more information, see Managing Inheritable Extensible Attributes at the Parent and Descendant Level below*.*
- When you join two networks to form a larger network, the *Descendant * *Actions* dialog box is displayed with the following options:  
  **When** **joining** **networks,** **select** **the** **action(s)** **you** **want** **to** **apply** **to** **the** **merged** **networks:**
  
  - **Preserve** **extensible** **attributes** **for** **all** **descendants** **of** **the** **merged** **networks** **and** **change** **the** **inheritance** **state** **to** **No** **Parent:** Select this if you want to preserve the extensible attributes for all descendants of the merged networks. The inheritance state of the attributes will be changed to **No** **Parent**.
  - **Remove** **extensible** **attributes** **from** **descendants** **of** **the** **merged** **networks**: Select this if you want to remove extensible attributes that are inherited by descendants.  
    Note that the options above apply only to extensible attributes which no longer have a parent, due to the merge. If the extensible attributes on descendants are also on the resulting merged network, then they will retain their current state.
    
    When you add multiple inheritable networks, new networks will automatically inherit all extensible attributes from the parent.
