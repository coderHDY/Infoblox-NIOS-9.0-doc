---
title: "show clusterd_info"
source: "/space/nios90/280397444"
pageId: "280397444"
---
The `show clusterd_info` command displays clusterd run-time information.

# Syntax

`show clusterd_info`

This command has no arguments.

# Example

`Infoblox &gt; show check_auth_ns`

`Waiting 5 sec while clusterd is creating dump file...`  
`g_am_master_vnode: true (configured as a master node)`  
`g_clusterd_max_nodes: 350`  
`g_active_GM_openvpn_serv_cnt (actual count of OpenVPN servers to run): 1`  
`g_first_join_attempt: false`  
`g_using_conn_config_file (using conn info sent by grid master): false`  
`g_delay_master_run (postpone starting master): false`  
`g_dirty_shutdown: false`  
`g_running_one (are the ONE services running?): true`  
`g_is_real_unit (true for real HW): true`  
`g_power_down_if (power-down unused interfaces): true`  
`g_is_vnios (true for vNIOS): false`  
`g_udp_vrrp (true for Platforms that use UDP based VRRP): false`  
`g_am_active_master (am I the current grid master?): true`  
`g_am_master_vnode (am I part of grid master vnode?): true`  
`g_was_master: true`  
`g_ha_enabled (is HA enabled?): false`  
`g_active (am I the active node in an HA pair?): true`  
`g_vpn_server_setup (is the VPN server setting up): false`  
`g_directing_upgrade (are we directing the upgrade of the grid?): false`  
`g_reverted (a flag indicating that the member just reverted): false`  
`g_need_grid_upgrade_state_update: false`  
`g_upgrade_lite (lite upgrade in progress): false`  
`g_partner_upgrade_mode: UPGRADE_NONE`  
`g_db_locked_for_snapshot: false`  
`g_rollback_failed (meaningul only if g_db_locked_for_snapshot is set): false`  
`g_removing (am I being removed?): false`  
`g_start_proxyd (should proxyd be running?): false`  
`g_partial_replication_disabled (last known state): false`  
`g_am_logging_member: false`  
`g_failover_syncing: false`  
`g_tftp_limit (grid-wide tftp storage limit, in MB): 500`  
`g_subgrid_cnt (number of subgrids): 0`  
`g_using_external_time_servers (is using external NTP time servers): false`
