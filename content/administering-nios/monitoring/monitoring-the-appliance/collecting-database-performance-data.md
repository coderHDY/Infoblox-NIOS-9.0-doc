---
title: "Collecting Database Performance Data"
source: "/space/nios90/280760719"
pageId: "280760719"
---
The NIOS appliance provides Ptop logs that consist of database metrics that you can use to determine the health of the NIOS database and baseline its performance. The metrics help you to ascertain the impact of changes such as adding a Grid member or enabling features such as Grid replication for DNS zones or multi-master DNS, on the database performance.

You can download the Ptop logs by using the WAPI calls and then use the logs for further analysis. These WAPI calls allow you to download only the Ptop logs instead of the whole support bundle.

To download the Ptop log files, perform the following steps. The steps are showing sample WAPI requests.

1. Run the following command to get the URL for downloading the Ptop logs:  
   `$curl -k1 -u admin:infoblox -H "Content-Type: application/json" -X POST`` ``https://10.12.21.107/wapi/v2.13.6/fileop?_function\=get_log_files`` ``-d '{"include_rotated":false,"log_type":"PTOPLOG","node_type":"ACTIVE"}'`  
     
   The output includes the token for this transaction and the URL from where to download the Ptop logs as follows:  
   `{`  
   `"token": "eJytUEFuwyAQvPOR5BLM2jEkvaVyI1WqEimp1OPKBuwi2YYCqZK+vhA2jZ2WFmR0rrbuj1\nQNIl7Ryiv8hoPXFAltLMve1Ge6V21vnEm9OBNG1s8aR74koiEbuLGaOZEYkyMhJXkaVya3Je6Ksz\n/obRTHpBXE32UIs156LiQDeMiRK2JJwXFz8mmCfCe4wuPBQFMAoloyVQYKLIXVQm2YvYmjm+HV6Ou2YFUNaMV5yB4ExUdeGidaMdaGw9Hb7S/yJLGZWi5/G7t5UjXVwBKnCCmX\ndtBFnNw/mQL4EUEvOzw97fO7JiGeHPCcOogE9kKO3kWn9nbcgh79+1Ds3sLhE/tQ/GzhnbJqy6567j3wFfoFk=\n",`  
   `"url": "``https://10.12.21.107/http_direct_file_io/req_id-DOWNLOAD-1125063601760735/ptoplog.tar.gz``"`  
   `}`
2. Download the Ptop log files using the obtained URL:  
   `$curl -k1 -u admin:infoblox -H "Content-type:application/force-download" -O ``https://10.12.21.107/http_direct_file_io/req_id-DOWNLOAD-1125063601760735/ptoplog.tar.gz`
3. To ensure that the URL does not remain open for a long time, use the token obtained in step 1 and close the URL as follows:  
   `$curl -k -u admin:infoblox -H 'Content-Type:application/json' -X POST`` ``https://10.12.21.107/wapi/v2.13.6/fileop?_function=downloadcomplete`` ``-d '{"token": "eJytUEFuwyAQvPOR5BLM2jEkvaVyI1WqEimp1OPKBuwi2YYCqZK+vhA2jZ2WFmR0rrbuj1\nQNIl7Ryiv8hoPXFAltLMve1Ge6V21vnEm9OBNG1s8aR74koiEbuLGaOZEYkyMhJXkaVya3Je6Ksz\n/obRTHpBXE32UIs156LiQDeMiRK2JJwXFz8mmCfCe4wuPBQFMAoloyVQYKLIXVQm2YvYmjm+HV6Ou2YFUNaMV5yB4ExUdeGidaMdaGw9Hb7S/yJLGZWi5/G7t5UjXVwBKnCCmX\ndtBFnNw/mQL4EUEvOzw97fO7JiGeHPCcOogE9kKO3kWn9nbcgh79+1Ds3sLhE/tQ/GzhnbJqy6567j3wFfoFk=\n"}'`  
   `{}`
