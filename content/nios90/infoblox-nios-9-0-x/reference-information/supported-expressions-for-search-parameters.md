---
title: "Supported Expressions for Search Parameters"
source: "/space/nios90/280756716"
pageId: "280756716"
---
Regular expressions are text strings that you use to describe search patterns. You can use the following special characters to define regular expressions for search parameters.

| **Special character** | **Purpose** | **Example** | **Meaning** |
| --- | --- | --- | --- |
| () | Defines the scope and precedence of the operator | gr(a\|e)y | Matches “gray” or “grey”. |
| \| | Matches either the regular expression before or after the vertical bar | a\|c | Matches “a” or “c” |
| . | Matches any single character | .at | Matches any text string ending with   “at”, such as “hat”, “cat”, and “bat”. |
| * | Matches the previous regular expression zero or more times | a*bc | Matches zero or multiple occurrences of “a” followed by “bc”, such as “bc”, “abc”, “aabc”, “aaabc”, and so on. |
| + | Matches the previous regular expression one or more times | a+bc | Matches one or more occurrences of “a”, followed by “bc”, such as “abc”, “aabc”, “aaabc”, and so on. |
| ? | Matches the previous regular expression zero or one time | a?bc | Matches zero or one occurrence of “a”, followed by “bc”, such as “bc” or “abc”. |
| ^ | Matches the beginning of a text string | ^c | Matches any string beginning with “c”, such as “cat”. |
| $ | Matches the end of a text string | com$ | Matches any string ending with “com”, such as “Infoblox.com”. |
| [ ] | Matches any character specified in   the brackets | [03]   [abcd]   [15a-d] | Matches “0” or “3”.   Matches “a”, “b”, “c”, or “d”.   Matches “1”, “5”, “a”, “b”, “c”, or “d”. |
| [ n-n] | Matches single characters contained in the specified range, including the start and end points | [0-3]   [a-f] | Matches 0, 1, 2, and 3.   Matches a, b, c, d, e, and f. |
| \{m,n\} | Matches the preceding expression at least m but not more than n times. | a\{3,5\} | Matches “aaa”, “aaaa”, and “aaaaa”. |

> **warning**
>
> **Note**
> 
> You can change a special character—such as the period ( . ), asterisk ( * ), plus sign ( + ), or question mark ( ? )—  
> into a literal character by prefixing it with a backslash ( \ ). For example, to specify a literal period, asterisk,  
> plus sign, or question mark, use the characters within the following parentheses: ( \. ) , ( \* ), ( \+ ), ( \? ), ( \^ ),  
> ( \$ ).
