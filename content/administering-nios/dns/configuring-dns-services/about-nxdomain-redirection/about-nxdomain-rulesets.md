---
title: "About NXDOMAIN Rulesets"
source: "/space/nios90/1420099886"
pageId: "1420099886"
---
An NXDOMAIN ruleset is a list of rules that a DNS member uses to determine its response to recursive queries for A records it does not have. Each rule consists of a domain name specification or pattern, and an associated action.  
Domain names can contain any printable character. You can use certain metacharacters to create domain name patterns that are used to match the domain names in DNS queries. Pattern matching is case-insensitive. Patterns support the following metacharacters:

- Use the caret character (**^**) to indicate the beginning of a pattern. For example, **^foo** matches [http://foo.com](http://foo.com)  but not [http://barfoo.com](http://barfoo.com) . The caret character has a special meaning only if it is specified at the beginning of a pattern.
- Use the dollar sign character (**$**) to indicate the end of a pattern. The dollar sign character has a special meaning, only if it is specified at the end of the pattern. For example, **.com$** matches [**corpxyz.com**](http://corpxyz.com) but not [**corpxyz.com.net**](http://corpxyz.com.net).  
  When the pattern contains a **$** at the end, NIOS automatically adds a period (**.**) before the **$**. For example, if you enter **.com$**, NIOS saves it as **.com.$**. The period indicates that the pattern specifies a complete domain name that ends with the root label.
- Use the asterisk character (*) as a wildcard that can match zero or more characters in one or more labels of a domain name. For example, **xf*oy** matches [**xfooy.com**](http://xfooy.com), but not **xfoobary**.  
  A pattern that contains a single asterisk (*)** (or an equivalent expression, such as *"^**$"{*}) matches any domain name.
- Use the backslash character (**\)** with one of the metacharacters (**$**, **^**, *** and **{**}) to remove their special meaning. If **\ **is followed by any other character, that character is taken as an ordinary character, as if \ is not present. For example, **foo\\\.bar** matches **foo\.bar**, and **\*** matches a literal asterisk in a domain name.

No other characters have any special meaning. Note in particular that the period character (".") only matches a period used as a separator in a domain name.  
The action specifies how the DNS member responds when a domain name in a query matches a pattern. The action can be one of the following: **Pass**, **Modify** or **Redirect**.

- **Pass:** The DNS member resolves the query and forwards the response to the DNS client, even if it is an NXDOMAIN response.
- **Modify:** The DNS member resolves the query and forwards the response to the DNS client, only if it is not an NXDOMAIN response. But if the member receives an NXDOMAIN response, it sends the client a synthesized response that includes predefined IP addresses.
- **Redirect:** The DNS member does not resolve the query. Instead, it sends the client a synthesized response that includes predefined IP addresses.

You can configure multiple rulesets. The DNS member applies the rulesets and their rules in the order in which they're specified in the configuration. If multiple rulesets contain rules with duplicate patterns, the DNS member applies the first rule it encounters and ignores the other rules.
