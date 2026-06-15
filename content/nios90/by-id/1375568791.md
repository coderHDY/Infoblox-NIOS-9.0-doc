---
title: "operation PUSH and SHIFT with if_exist set"
source: "/space/nios90/1375568791"
pageId: "1375568791"
---
If `destination_key` is set, the assumption is to push or shift to a dictionary. Otherwise it is to push or shift to a list.

If you are pushing to a list, and the variable already exists, the operation specified there will be executed as follows: SKIP will not modify the original value, NEXT will not modify and jump to the step specified in` if_exists_next`, and ERROR will instead return an error.

If you are pushing to a dictionary, and the variable matches, there is no need to modify the values because they would already be the same. Therefore, SKIP will be a no-operation, NEXT will not modify and jump to the step specified in `if_exists_next`, and ERROR will instead return an error.

The decision for whether a new value exists or not is a simple comparison with the value/attributes of the existing variables in the list or dictionary in `destination_key`. They all have to match for `if_exists` for the operation to be triggered.

If variable denoted by `destination` has a composite value, the semantics is as above, with additional checks. The check is complete before the value is added to the list of children. During the check, the new composite value is compared one by one with the existing values. If the values are the same, the “if_exists” logic is triggered as above.

The following are a few examples using namespace L as follows:

`{`

`   'some_list': ['item1', 'item2'],`

`   'some_dict': {'key1': 'val1', 'key2': 'val2'},`

`   'list_of_lists': [['a', 'b'], ['a', '2'], ['1', '2']],`

`   'composite': {`

`     '&lt;xmla&gt;': True,`

`     'index': {'inner_1': 0, 'inner_2': 1},`

`     'name': 'outer',`

`     'attrs': {'outer_attr': 'outer_val'},`

`     'value': [`

`       {`

`          '&lt;xmla&gt;': True,`

`          'index': {},`

`          'name': 'inner_1',`

`          'attrs': {},`

`          'value': ['inner_1_content']`

`       },`

`       {`

`          '&lt;xmla&gt;': True,`

`          'index': {},`

`          'name': 'inner_2',`

`          'attrs': {'inner_attr': 'inner_val'},`

`          'value': []`

`       }`

`     ]`

`  }`

`}`

### **(1) When PUSH to a list with the item exists:**

`{`

`   'operation': 'PUSH',`

`   'type': 'SINGLE',`

`   'destination': 'L:some_list',`

`   'values': ['item2'],`

`   'if_exists': 'ERROR'`

`}`

It triggers the` ‘if_exits`’ login. ‘`ERROR`’ means stopping the template execution with error, ‘`SKIP`’ means ‘do nothing for this operation’ and ‘`NEXT`’ will jump to the step with name specified in `‘if_exists_next`’.

### **(2) When PUSH to a dictionary with the item exists:**

`{`

`   'operation': 'PUSH',`

`   'type': 'SINGLE',`

`   'destination': 'L:some_dict',`

`   'destination_key': 'key2',`

`   'values': ['val2'],`

`   'if_exists': 'ERROR'`

`}`

It triggers an error. Note that both `key` and `value` should be the same in order to trigger the ‘`if_exists’` logic. If `key` is the same but `value` differs, `value` will be overwritten. If `key` is different, the new `key` with `value` will be added.

### **(3) When PUSH to a list of list with the item exists:**

`{`

`   'operation': 'PUSH',`

`   'type': 'LIST',`

`   'destination': 'L:list_of_lists',`

`   'values': ['a', '2'],`

`   'if_exists': 'ERROR'`

`}`

It triggers an error.

### **(4a) When PUSH to a composite value with the item exists, as follows:**

`{`

`   'operation': 'PUSH',`

`   'type': 'COMPOSITE',`

`   'destination': 'L:composite',`

`   'name': 'inner_1',`

`   'composite_value': 'inner_1_content',`

`   'if_exists': 'ERROR'`

`}`

It triggers an error.

### **(4b) When PUSH to a composite value with the item exists, as follows:**

`{`

`   'operation': 'PUSH',`

`   'type': 'COMPOSITE',`

`   'destination': 'L:composite',`

`   'name': 'inner_2',`

`   'keys': ['inner_attr'],`

`   'values': ['inner_val'],`

`   'composite_value': '',`

`   'if_exists': 'ERROR'`

`}`

It triggers an error.
