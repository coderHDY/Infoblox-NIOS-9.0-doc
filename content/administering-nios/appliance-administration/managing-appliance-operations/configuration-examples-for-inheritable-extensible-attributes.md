---
title: "Configuration Examples for Inheritable Extensible Attributes"
source: "/space/nios90/280765105"
pageId: "280765105"
---
All examples in this section are based on the inheritance chain Network View -> Network Container -> Network -> Range  
-> Host/Fixed Address/Reservation, in which network view is at the top level and host, fixed address and reservation at the bottom of the inheritance chain.

# Example 1

When you add an extensible attribute to the top object, the inheritance state is set to **No** **Parent**. For example, if you add a new inheritable extensible attribute, **Building**, to a network view, the inheritance state of this extensible attribute is set to **No** **Parent** for the network view.

# Example 2

When you add an extensible attribute **Site** to the parent object **Network** that has a descendant **Range,** you can define **Site** as inheritable and add it to the **Network.** The descendant, **Range**, may or may not have the same extensible attribute. Infoblox displays a list of options that lets you either inherit the value or retain or override the existing value of the extensible attribute at the descendant level. Another option is to inherit the value of **Site**, only if the value for this attribute in **Range** is same as that in **Network**. You can also decide if **Range** should acquire the same value for **Site**, if it is not defined for **Range**. This change can be inherited by the descendants of **Range**.  
Depending on your configuration, the inheritance state of the extensible attribute can display **Inherited**, **Overridden** **or** **Not** **Inherited**. If the object is at the top of the inheritance chain (Network View), then the inheritance state is not displayed. The inheritance state is set to **No** **Parent** only if an object has a parent, but the parent does not have the inherited extensible attribute.

# Example 3

Examples in this section show different results when you add a new inheritable extensible attribute to an object located at the top or in the middle of the inheritance chain based on the following:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container |  |  |  |
| 10.0.0.0/16 | Network | Region | ABC | Native |
| 10.1.0.0/16 | Network |  |  |  |

**Example** ** 3.1:** ** ****Add an extensible attribute Region with value DEF to 10.0.0.0/8**** **

You select the following options for the existing extensible attribute:

- For descendants that already have this extensible attribute, the existing extensible attribute will always be set to **Inherit**.
- For descendants that do not have this extensible attribute, the descendants will inherit this extensible attribute.

**Result**:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | DEF | Native |
| 10.0.0.0/16 | Network | Region | DEF | Inherited from 10.0.0.0/8 |
| 10.1.0.0/16 | Network | Region | DEF | Inherited from 10.0.0.0/8 |

**Example** ** 3.2:** ** ** ** ****Add an extensible attribute Region with value DEF to 10.0.0.0/8**** **

You select the following options for the existing extensible attribute:

- For descendants that already have this extensible attribute, the existing extensible attribute will always be set to **Override**.
- For descendants that do not have this extensible attribute, the descendants will not inherit this extensible attribute (extensible attribute is set to **Do** ** not** ** Inherit**).

**Result**:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | DEF | Native |
| 10.0.0.0/16 | Network | Region | ABC | Overridden |
| 10.1.0.0/16 | Network | Region |  |  |

**Example** ** 3.3:** ** ** ** ****Add an extensible attribute Region with value DEF to 10.0.0.0/8**** 8**

You select the following options for the existing extensible attributes:

- For descendants that already have this extensible attribute, the existing extensible attribute will always be set to **Inherit**.
- For descendants that do not have this extensible attribute, the descendants will not inherit this extensible attribute (extensible attribute is set to **Do ** **not** ** Inherit**).

**Result**:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container   | Region | DEF | Native |
| 10.0.0.0/16 | Network | Region | DEF | Inherited,  Source 10.0.0.0/8 |
| 10.1.0.0/16 | Network | Region |  |  |

# Example 4

Examples in this section show different results when you remove an existing inheritable extensible attribute from an object located at the top or in the middle of the inheritance chain based on the following:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | DEF | Native |
| 10.0.0.0/16 | Network | Region | DEF | Inherited from  10.0.0.0/8 |
| 10.1.0.0/16 | Network | Region | ABC | Overridden |

**Example** ** 4.1:** ** ****Remove extensible attribute Region with value DEF from 10.0.0.0/8**** **

You select the following option for the existing extensible attribute:

- Remove extensible attributes with inheritance state set to **Inherited**. Extensible attributes with the state set to **Overridden** are not removed.

**Result**:



| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region |  |  |
| 10.0.0.0/16 | Network | Region |  |  |
| 10.1.0.0/16 | Network | Region | ABC | Overridden |

**Example** **4.2:** **Remove** **extensible** **attribute** **Region** **with** **value** **DEF** **from** **10.0.0.0/8** You select the following option for the existing extensible attribute:

- Preserve all descendant extensible attributes, whether the state is set to **Inherited** or **Overridden**. **Result**:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container |  |  |  |
| 10.0.0.0/16 | Network | Region | DEF | Native |
| 10.1.0.0/16 | Network | Region | ABC | Native |

# Example 5

Examples in this section show different results when you remove parent object based on the following:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | DEF | Native |
| 10.0.0.0/16 | Network Container | Region | DEF | Inherited from 10.0.0.0/8 |
| 10.1.0.0/24 | Network | Region | DEF | Inherited from 10.0.0.0/8 |
| 10.1.0.0/24 | Network | Region | ABC | Overriden |
| 10.10.0.0/16 | Network Container | Region | GHI | Overriden |
| 10.10.0.0/24 | Network | Region | GHI | Inherited from 10.10.0.0/16 |
| 10.10.0.0/24 | Network | Region | JKL | Overridden |

**Example** **5.1:** **Removing** **object** **10.0.0.0/8** **from** **the** **parent** **level** You select the following option for the existing extensible attribute:

- Remove extensible attributes with the inheritance state set to **Inherited**. Extensible attributes with the state set to **Overridden** are not removed.

**Result**:

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/16 | Network Container |  |  |  |
| 10.0.0.0/24 | Network |  |  |  |
| 10.0.1.0/24 | Network | Region | ABC | Overridden |
| 10.10.0.0/16 | Network Container | Region | GHI | Overridden |
| 10.10.0.0/24 | Network | Region | GHI | Inherited from 10.10.0.0/16 |
| 10.10.1.0/24 | Network | Region | JKL | Overridden |

**Example** **5.2:** **Removing** **object** **10.0.0.0/8** **from** **the** **parent** **level**   
You select the following option for the existing extensible attribute on descendants:

- Preserve all extensible attributes on the descendant.

**Result**:

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/16 | Network Container | Region | DEF | Native |
| 10.0.0.0/24 | Network | Region | DEF | Inherited from 10.0.0.0/16 |
| 10.0.1.0/24 | Network | Region | ABC | Overridden |
| 10.10.0.0/16 | Network Container | Region | GHI | Native |
| 10.10.0.0/24 | Network | Region | GHI | Inherited from 10.10.0.0/16 |
| 10.10.1.0/24 | Network | Region | JKL | Overridden |

**Example** **5.3:** **Remove** **object** **10.10.0.0/16** **from** **the** **parent** **level**   
You select the following option for the existing extensible attribute on descendants:

- Remove extensible attributes with the inheritance state set to **Inherited**. Extensible attributes with the state set to **Overridden** are retained.

**Result**:

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | DEF | Native |
| 10.0.0.0/16 | Network Container | Region | DEF | Inherited from 10.0.0.0/8 |
| 10.0.0.0/24 | Network | Region | DEF | Inherited from 10.0.0.0/8 |
| 10.0.1.0/24 | Network | Region | ABC | Overridden |
| 10.10.0.0/24 | Network | Region |  |  |
| 10.10.1.0/24 | Network | Region | JKL | Overridden |

**Example** **6**   
Examples in this section show different results after you add an object in the middle of the inheritance chain based on the following:

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Owner | Admin | Native |
| 10.0.0.0/16 | Network Container | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.0.0.0/24 | Network | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.0.1.0/24 | Network | Owner | Joe | Overridden |
| 10.10.0.0/24 | Network | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.10.1.0/24 | Network | Owner | Annie | Overridden |

**Example** **6.1:** **Adding** **object** **10.10.0.0/16** **without** **extensible** **attributes** You select the following option for the existing extensible attribute:

- Retain values if the extensible attribute already exists, and inherit the attribute from the parent object if it does not exist.

**Result**:

| **Object** | **Type** | **Extensible** **Attribute** | **Extensible** **Attribute** **Value** | **Inheritance** **State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Owner | Admin | Native |
| 10.0.0.0/16 | Network Container | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.0.0.0/24 | Network | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.0.1.0/24 | Network | Owner | Joe | Overridden |
| 10.10.0.0/16 | Network Container | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.10.0.0/24 | Network | Owner | Admin | Inherited from 10.0.0.0/8 |
| 10.10.1.0/24 | Network | Owner | Annie | Overridden |

**Example** **7**   
Examples in this section show different results after you modify inheritable extensible attributes with multiple values based on the following:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container |  |  |  |
| 10.0.0.0/16 | Network Container | Region | MNO | Native |
|  |  | Region | PQR | Native |



**Example** **7.1:** **Adding** **extensible** **attribute** **Region** **with** **value** **GHI** **to** **10.0.0.0/8** You select the following option for the existing extensible attributes:

- The descendants that already have this extensible attribute will inherit the value from the parent object.

**Result**: Multiple values will be replaced with the single inherited value.

| **Object** | **Type** | **Extensible** **Attribute** | **Extensible** **Attribute** **Value** | **Inheritance** **State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | GHI | Native |
| 10.0.0.0/16 | Network Container | Region | GHI | Inherited from 10.0.0.0/8 |

**Example** **7.2:** **Adding** **extensible** **attribute** **Region** **with** **value** **GHI** **to** **10.0.0.0/8** You select the following option for the existing extensible attributes:

- The descendants that already have this extensible attribute will override the value.

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Region | GHI | Native |
| 10.0.0.0/16 | Network | Region | DEF | Overridden |
|  |  | Region | ABC | Overridden |

# Example 8

Examples in this section show different results after you modify existing inheritable extensible attribute of an object, but you do not have required permission to modify some descendants. For information about admin permissions, see* **[About Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** | **Permission** |
| --- | --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Owner | Sam | Native | Write |
| 10.0.0.0/16 | Network Container | Owner | Sam | Inherited from 10.0.0.0/8 | Read |
| 10.0.0.0/24 | Network | Owner | Sam | Inherited from 10.0.0.0/8 | Read |
| 10.0.1.0/24 | Network | Owner | Bob | Overridden | Write |
| 10.10.0.0/16 | Network Container | Owner | John | Inherited from 10.0.0.0/16 | Read |
| 10.10.1.0/24 | Network | Owner | Max | Overridden | Read |
| 10.20.0.0/16 | Network Container | Owner | Sam | Inherited from 10.0.0.0/8 | Write |
| 10.20.0.0/24 | Network | Owner |  |  | Read |
| 10.20.1.0/24 | Network | Owner |  |  | Read |

**Example** **8.1:** **Removing** **object** **10.0.0.0/8**   
You select the following option for the existing inheritable extensible attribute:

- Retain extensible attribute values on descendants that are inherited from this parent object.

**Result:**

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** | **Permission** |
| --- | --- | --- | --- | --- | --- |
| 10.0.0.0/16 | Network Container | Owner | Sam | Native | Read |
| 10.0.0.0/24 | Network | Owner | Sam | Native | Read |
| 10.0.1.0/24 | Network | Owner | Bob | Overridden | Write |
| 10.10.0.0/16 | Network Container | Owner | John | Overridden | Read |
| 10.10.0.0/24 | Network | Owner | John | Inherited from 10.10.0.0/16 | Read |
| 10.10.1.0/24 | Network | Owner | Max | Overridden | Read |
| 10.20.0.0/16 | Network Container | Owner | Sam | Native | Write |
| 10.20.0.0/24 | Network |  |  |  | Read |
| 10.20.1.0/24 | Network |  |  |  | Read |

**Example** **8.2:** **Removing** **object** **10.0.0.0/8**   
You select the following option for the existing inheritable extensible attribute:

- Remove extensible attribute values from descendants that are inherited from this parent object.

The appliance displays an error message when you remove an extensible attribute that is associated with a descendant for which you do not have required permission.  
**Result:**

| **Object** | **Type** | **Extensible**** ****Attribute** | **Extensible**** ****Attribute**** ****Value** | **Inheritance**** ****State** | **Permission**   |
| --- | --- | --- | --- | --- | --- |
| 10.0.0.0/16 | Network Container |  |  |  |    |
| 10.0.0.0/24 | Network |  |  |  |    |
| 10.0.1.0/24 | Network | Owner | Bob | Overridden | Write   |
| 10.10.0.0/16 | Network Container | Owner | John | Overridden | Read   |
| 10.10.0.0/24 | Network | Owner | John | Inherited from 10.10.0.0/16 | Read |
| 10.20.0.0/16 | Network | Owner | Max | Overridden | Read |
| 10.20.0.0/24 | Network Container |  |  |  | Write |
| 10.20.1.0/24 | Network |  |  |  | Read |

# Example 9

Examples in this section show different results after you join multiple networks, based on the following:

| **Object** | **Type** | **Extensible**** **** Attribute** | **Extensible ****Attribute **** ****Value**** ** | **Inheritance ****State**** ** |
| --- | --- | --- | --- | --- |
| 10.1.0.0/16 | Network | Owner | John | Native |
| 10.1.0.1 | Fixed Address | Owner | John | Inherited from 10.1.0.0/16 |
| 10.2.0.0/16 | Network | Owner | Sam | Native |
| 10.2.0.1 | Fixed Address | Owner | Jane | Overridden |

**Example** ** 9.1:** ** Joining** ** networks ** **10.0.0.0/8** ** with** ** 10.1.0.0/16**   
You select the following option for the existing extensible attribute:

- Join networks 10.0.0.0/8 with 10.1.0.0/16.

**Result**:

| **Object** | **Type** | **Extensible** **Attribute** | **Extensible** **Attribute** **Value** | **Inheritance** **State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Owner | John | Native |
| 10.1.0.1 | Fixed Address | Owner | John | Inherited from 10.0.0.0/8 |
| 10.2.0.1 | Fixed Address | Owner | Jane | Overridden |

**Example** **9.2:** ** Joining ** **networks ** **10.0.0.0/8 ** **with** ** 10.2.0.0/16**   
You select the following option for the existing extensible attribute:

- Join networks 10.0.0.0/8 with 10.2.0.0/16.

| **Object** | **Type** | **Extensible** **Attribute** | **Extensible** **Attribute** **Value** | **Inheritance** **State** |
| --- | --- | --- | --- | --- |
| 10.0.0.0/8 | Network Container | Owner | Sam | Native |
| 10.1.0.1 | Fixed Address | Owner | Sam | Inherited from 10.0.0.0/8 |
| 10.2.0.1 | Fixed Address | Owner | Jane | Overridden |
