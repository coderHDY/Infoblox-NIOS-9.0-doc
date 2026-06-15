---
title: "Using a cloud-init Template To Join a Grid Member"
source: "/space/nios90/1366983544"
pageId: "1366983544"
---
You can use the following cloud-init template to join an IB-V815 member instance to a Grid:

`#infoblox-config remote_console_enabled: y default_admin_password: infoblox`  
` temp_license: nios IB-V815 dns dhcp enterprise sw_tp tp_sub`

`lan1:`   
     `v4_addr: 10.2.0.140`  
     `v4_netmask: 255.255.255.0`  
     `v4_gw: 10.2.0.1`

`mgmt:`

`v4_addr: 10.1.0.77`  
` v4_netmask: 255.255.255.0`  
` v4_gw: 10.1.0.1`

`gridmaster:`

`token: xqyv+gEcPiUp9ETdHqmS2VcPIHEd81/U ip_addr: 10.39.8.109`  
` join_intf: mgmt`  
` certificate:-----BEGIN`

`CERTIFICATE-----MIIDdzCCAl8CEBgaTP/XX2lAxDokwClJub4wDQYJKoZIhvcNAQEFBQAwejELMAkGA1UEBh`  
` MCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExEjAQBgNVBAcTCVN1bm55dmFsZTERMA8GA1UEChMISW5mb2Jsb3gx FDASBgNVBAsTC0VuZ2luZWVyaW5nMRkwFwYDVQQDExB3d3cuaW5mb2Jsb3guY29tMB4XDTE3MDMwNTE0NTE1M1 oXDTE4MDMwNTE0NTE1M1owejELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExEjAQBgNVBAcTCVN1`  
` bm55dmFsZTERMA8GA1UEChMISW5mb2Jsb3gxFDASBgNVBAsTC0VuZ2luZWVyaW5nMRkwFwYDVQQDExB3d3cuaW 5mb2Jsb3guY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsRf7VSVyYgRZCsdEgqU5m531Pk0H qOlZ5CqWrcyGiKDYrbByPGATWSOKcQ9opUMj7VF3vttXOoY/f2pI8OAKrOr8ADWh70fqXFDWFAYsxGmP0dkFTd NajI0reIrlYE0tF3FTBOZiXixfTUsI0hX96xNMU/0tHptloQxXz9+Uolf7ovFi6D0QBwjtBHmcVYhIJh0CfRUm MsIZgCupKVfwXNo3BMQfyNKsePjfVvoxCWTXF+KfAv3JSOOARbwuAZiYcMl2rdKb+8vBq4+IaMwr83QaJV8cph Ahyt5s7PebgS+GJLWzcIdUXSecDl3HEpJxLMnV0ko8ZByN5T4mywz6GQIDAQABMA0GCSqGSIb3DQEBBQUAA4IB`  
` AQCWYwlB8Z5usHU0HL2WgyMkAZW8PYsjQNlv/aI/0kEkiJsvZc5H72frgbTA+whnz/CqsRu8Rd06VEi+3UqR7n`  
` +0wRwSL6gWmlVBLNP3BZfsTKn0Bhd89hzUrSGtK07xF/kY2qUEb6LnJ91B1O46h7LUJutmzSPK2w10yY295kLe NhQgG35oMWgztc7II6V7ViTnkqzEPWxILV0W1odIAodG46eycOCu5NPRWpN/FRn9gzSvL03YilJ4d/bii31s0S BZumFP+Q5e0i7bcElTmmhy5gsweITpfybUrFZAhXNs09832Ej11Q3lVKL42IDsiXTKIFwbG+cNM7b7zfC0Oj81`  
` ----END CERTIFICATE`



You can use the following OpenStack cloud-init template to join an IB-V1415 member instance to a Grid:

`#infoblox-config remote_console_enabled: y default_admin_password: infoblox`  
` temp_license: nios IB-V1415 dns dhcp enterprise sw_tp tp_sub`  
` #temp_license: nios IB-FLEX `

`lan1:`



` v4_addr: 10.2.0.28`  
` v4_netmask: 255.255.255.0`  
` v4_gw: 10.2.0.1`

`ha:`



` v4_addr: 10.2.0.30`  
` v4_netmask: 255.255.255.0`  
` v4_gw: 10.2.0.1`

`mgmt:`

`v4_addr: 10.1.0.29`  
` v4_netmask: 255.255.255.0`  
` v4_gw: 10.1.0.1`

`gridmaster:`

`token: 0rPidqD1Iau91adaIL7zlO7sZb0qxuk1 ip_addr: 10.39.52.19`  
` join_intf: mgmt `

`certificate: -----BEGIN`

`CERTIFICATE-----MIIDdzCCAl8CEChqLtGPEl/kEVjEE488HtkwDQYJKoZIhvcNAQEFBQAwejELMAkGA1UEBh`  
` MCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExEjAQBgNVBAcTCVN1bm55dmFsZTERMA8GA1UEChMISW5mb2Jsb3gx FDASBgNVBAsTC0VuZ2luZWVyaW5nMRkwFwYDVQQDExB3d3cuaW5mb2Jsb3guY29tMB4XDTE3MDIyMjA5MDEyOV oXDTE4MDIyMjA5MDEyOVowejELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExEjAQBgNVBAcTCVN1 bm55dmFsZTERMA8GA1UEChMISW5mb2Jsb3gxFDASBgNVBAsTC0VuZ2luZWVyaW5nMRkwFwYDVQQDExB3d3cuaW 5mb2Jsb3guY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA02LEbIeAjjRZhBQSsPRIMoeR6GZC`  
` SftQV+DPHPQAmvzPeJqaH8obCcRi6pfrPToxTKRCde7W87Tdy/uurZVXbJNWdtW7xhfelFVmdFuUGR+PId7oJd nd9qmBLmUUPRniQDkk5pM8+g+olWjXPv2yn+zad+LaZpXUslP7TSfVvIeo6t2lwsUUxyozUnGLN9Pm91u/k/pz Cog2e+3y/F2WPYQzmAC5KU5vY8Rl8iX8z/03eHhnVFITSrk15xgE5IQtlJG5C/RksFt/b5gcAFqh/7yUhCPvW2 pd8/xw/caXsY2nFUC1b3jgUg+EfXpXE7EMD/thxqkhMNNK9GOhPrbVdQIDAQABMA0GCSqGSIb3DQEBBQUAA4IB AQBiTz2cbVfUHIoQiLefSaf5Yv1fM6AyZ/sjPlVjYa0DBOdn4n1iiIL0tibPML3v3SVd2suAFPLmZdf1XTqkaT rN8SLE0RR7fS/7Nz7eibPlXWGgeY6se8Br9cLWm+1AP7ugAPvjSZxBn87Spz6BfZKQ7L1NKHeqfu0UDuUvv2rO tdlbRSHhb0INmm20LlMmLwmLxTCg/o7W2YaJa9lggyzz20oaZHGD1dLEP+mh2TsRyX/fxXYpwiAvmZ/VkccLgC xcj/fU44hxLfFa+Ibz5sjYp1gExYfGFwUBDuf/7ftrBNh90qcXzXncrQAebGBHhRYtsDpRnpWH+qGAzTdJXTm8`  
`---END CERTIFICATE---`



To configure an IB-FLEX Grid Master using the **Flex** **Grid** **Activation** license, you can use the following cloud-init template:

`#infoblox-config`

`remote_console_enabled: y`  
`hardware_type: IB-FLEX`  
`temp_license: flex_grid`  
`lan1:`

`v4_addr: 10.39.51.33`  
` v4_netmask: 255.255.255.0`  
` v4_gw: 10.39.51.1`

`mgmt:`

`v4_addr: 10.39.50.22`  
` v4_netmask: 255.255.255.0`  
` v4_gw: 10.39.50.1`

`lan2:`

`nic_bonding_enabled: Y`  
` bonding_failback_interface: lan1`

`mac:`

`mgmt: fa:16:3e:14:3a:ae`  
` lan1: fa:16:3e:01:29:0b`  
` ha: fa:16:3e:25:43:8a`  
` lan2: fa:16:3e:8e:26:4c`
