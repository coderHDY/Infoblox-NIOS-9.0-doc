---
title: "Variable Exampless"
source: "/space/nios90/1375143279"
pageId: "1375143279"
---
The following are variable examples.

---

**Note:** The XC: examples refer to the operations discussed in the Command Execution section.

---



| **Variables  and  Results** |
| --- |
| Variable: ${E::FQDN}  Result: Substitute the FQDN value from the event. |
| Variable: ${I::QUARANTINE}  Result: Substitute the quarantine value from the template instance. |
| Variable: ${XC:COPY:{L:epoch_timestamp}:{E:timestamp}}${XC:FORMAT:DATE_EPOCH:{L:epoch_timestamp}}  Result: Copy the event timestamp value into a local epoch_timestamp variable. |
| Variable: ${XC:COPY:{L:custom_timestamp}:{E:timestamp}}${XC:FORMAT:DATE_STRFTIME:{L:custom_timestamp}:{%a, %d %b %Y %H:%M:%S}}  Result: Copy the event timestamp value to a local custom_timestamp variable and format it. In this example, the result might be Wed, 18 Jun 2015 16:13:11. |
| Variable: ${XC:INC:{S:SERIAL}}${S::SERIAL}  Result: Increment the state 'SERIAL' value and substitute its value |
| Variable: ${XC:COPY:{S:SERIAL}:{H:X-customheader}}  Result: Copy the state SERIAL value to a custom HTTP header for future requests |
| Variable: ${XC:DEL:{H:X-loginvalue}}  Result: Removes the specified HTTP header. |
| Variable: ${XC:DEL:{C:logincookie}}  Result: Removes the specified cookie. |
| Variable: ${XC:ASSIGN:{L:INT}:{I:123}}  Result: Assign the integer 123 to the value INT in the L name space. |
| Variable: ${XC:ASSIGN:{L:BOOL}:{B:true}}  Result: Assign true to the value BOOL in the L name space. |
| Variable: ${XC:ASSIGN:{L:STR}:{S:some } random string}}  Result: Assign the string some } random string to the value STR in the L name space. |
| Variable: ${XC:DEBUG:{L:INT}}  Result: Output the value of the L name space INT variable to the debug file. |
| Variable: ${XC:DEBUG:{L:}}  Result: Output the values in the whole L name space to the debug file. |
| Variable: ${XC:FORMAT:TRUNCATE:{L:VAR}:{-1f}}  Result: Truncate L:VAR to the last character. |
