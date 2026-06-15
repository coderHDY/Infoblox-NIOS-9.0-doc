---
title: "Sample Cloud API Requests for Automatic Pre-Provisioning"
source: "/space/nios90/1471480754"
pageId: "1471480754"
---
Creating a Member:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X POST https://10.40.240.88/wapi/v2.2/member -d '{"platform": "VNIOS", "host_name": "test1.com", "vip_setting": {"address": "1.1.1.1", "gateway": "1.1.0.2", "subnet_mask": "255.255.0.0"}}'`

Getting a Member:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X GET https://10.40.240.88/wapi/v2.2/member`

Adding Pre-Provisioned Information for the Member:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X PUT https://10.40.240.101/wapi/v2.2/member/b25lLnZpcnR1YWxfbm9kZSQ3:test1.com -d '{"pre_provisioning": {"hardware_info": [{"hwmodel": "CP-V1405", "hwtype": "IB-VNIOS"}], "licenses": ["cloud_api", "dhcp", "dns", "enterprise", "vnios"]}}'`

Creating and Delegating a Network View:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X POST https://10.40.240.88/wapi/v2.2/networkview -d '{"name":"testnv", "extattrs":{"Tenant ID":{"value": "1011"} , "CMP Type":{"value":"vm130ctest"}, "Cloud API Owned":{"value":"True"}} }`

Creating and Delegating a Network:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X POST https://10.40.240.88/wapi/v2.2/network -d '{"network":"21.0.0.0/8", "network_view":"default", "cloud_info":{"delegated_member": {"ipv4addr": "1.1.1.1","name":"test1.com"}},"extattrs":{ "Tenant ID":{"value": "1011"} , "CMP Type":{"value":"vm130ctest"}, "Cloud API Owned":{"value":"True"}} }'`

Undelegating a Network:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X PUT https://10.40.240.88/wapi/v2.2/network/ZG5zLm5ldHdvcmskMjEuMC4wLjAvOC8w:21.0.0.0/8/ default -d '{"cloud_info": {"delegated_member": null }}'`

Creating and Delegating an Authoritative Zone

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X POST https://10.40.240.88/wapi/v2.2/zone_auth -d '{"fqdn": "test.com", "grid_primary": [{"name": "test1.com", "stealth": false}], "view": "default", "extattrs":{ "Tenant ID":{"value": "1011"} , "CMP Type":{"value":"vm130ctest"}, "Cloud API Owned":{"value":"True"}}}'`

Deleting a Member:

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X DELETE https://10.40.240.88/wapi/v2.2/member/b25lLnZpcnR1YWxfbm9kZSQ3:test1.com`

Creating Token for the Pre-Provisioned Member (note that only superuser can create a token; you must configure superusers admin groups with cloud API access):

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X POST` `https://10.40.240.88/wapi/v2.2/member/b25lLnZpcnR1YWxfbm9kZSQ3:test1.com?_function=create_token`

Reading Token for the Pre-Provisioned Member (note that only superuser can create a token; you must configure superusers admin groups with cloud API access):

`curl -H "Content-Type: application/json" -k1 -u cloud:cloud -X POST https://10.40.240.88/wapi/v2.2/member/b25lLnZpcnR1YWxfbm9kZSQ3:test1.com?_function=read_token`
