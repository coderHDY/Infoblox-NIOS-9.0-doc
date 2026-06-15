---
title: "Creating Keys"
source: "/space/nios90/1375601735"
pageId: "1375601735"
---
Use the XC:KEYS operation to create keys. This operation should be specified as follows: ${XC:KEYS:{“var_with_dict”}:{“var_for_key_list”}}. It creates a list from the keys of the `var_with_dict` variable and includes it in the `var_for_key_list` variable.  
Having L namespace as



`{`  
`'some_dict': {`  
`'key1': 'value',`  
`'key2': 42,`  
`'key3': ['item1', 'item2']`  
`}`  
`}`  
`After evaluating the ${XC:KEYS:{L:some_dict}:{L:key_list}} variable, the L namespace will contain new variable key_list with the following values:`  
`[`  
`'key1,`  
`'key2,`  
`'key3'`  
`]`
