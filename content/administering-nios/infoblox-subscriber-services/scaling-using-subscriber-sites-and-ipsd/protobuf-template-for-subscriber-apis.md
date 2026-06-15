---
title: "Protobuf Template for Subscriber APIs "
source: "/space/nios90/1471512785"
pageId: "1471512785"
---
The following is a sample template that you can use for creating subscriber API requests at API client and sent to NIOS API server .

// This file contains the protobuf schemas for gRPC based API Server at IB-NIOS

// Copyright (c) 2024 Infoblox Inc. All Rights Reserved.

// Date: October 31, 2023

// Version: 0.4

syntax = "proto3";

package IbGrpc;

//IbGrpcServer defines the gRPC services for interacting with API.

service IbGrpcServer {

//gRPC API Server Health Check.

rpc Check(ApiHealthCheckRequest) returns (ApiHealthCheckResponse);

//gRPC API request for subscribers’s CRUD operation in NIOS subscriber cache.

//Response status of operation (Cache query count is optional for GET operation).

rpc ProcessSubscriberData (stream ApiRequestMessage) returns (stream ApiResponseMessage) {}

}

//NIOS gRPC API service health check request

message ApiHealthCheckRequest {

//Service name must be "SUBSCRIBER SERVICE HEALTH CHECK".

string service = 1;

}

//NIOS gRPC API service health check response

message ApiHealthCheckResponse {

enum ServingStatus {

UNKNOWN = 0;           //Indicates the service's health status is not known.

SERVING = 1;           //Indicates the service is operational and serving requests.

NOT_SERVING = 2;       //Indicates the service is currently not operational or unavailable.

SERVICE_UNKNOWN = 3;   //Indicates that the service name provided is incorrect or not recognized.

}

ServingStatus status = 1; //The current health status of the requested service.

}

// NIOS Subscriber cache supported operation

enum CacheOperationType {

CACHE_OP_UNSPECIFIED = 0;   //Unspecified Cache Operation.

SUB_COUNT = 1;              //Get subscriber cache count.

SUB_CREATE = 2;             //Create subscriber info with policy for IPv4/IPv6/IPv4 CGNAT addresses.

SUB_UPDATE = 3;             //Update subscriber info or policy for IPv4/IPv6/IPv4 CGNAT addresses.

SUB_DELETE = 4;             //Delete subscriber for IPv4/IPv6/IPv4 CGNAT addresses.

}

//NIOS Subscriber cache supported operation modifier for SUB_UPDATE

enum CacheOperationModifierType {

CACHE_OP_TYPE_UNSPECIFIED = 0; //Unspecified Cache Operation Modifier.

SUB_ADD_INFO = 1;         //Add subscriber info for an existing subscriber.

SUB_UPDATE_INFO = 2;           //Update subscriber info only for IPv4/IPv6/IPv4 CGNAT addresses for SUB_UPDATE.

SUB_UPDATE_POLICY = 3;         //Update subscriber policy only for IPv4/IPv6/IPv4 CGNAT addresses for SUB_UPDATE.

}

//Subscriber IPv4 information

message SubInfoV4 {

//IPv4 address or IPv4 CGNAT address

fixed32 ipv4 = 1;

//IPv4 prefix or IPv4 CGNAT prefix

uint32 prefix_v4 = 2;

//IPv4: NULL or IPv4 CGNAT port

string ips = 3;

//48 bit mac address

bytes local_id = 4;

}

//Subscriber IPv6 information

message SubInfoV6 {

//Subscriber IPv6 Address

bytes ipv6 = 1;

//Subscriber IPv6 Prefix

uint32 prefix_v6 = 2;

//48 bit mac address

bytes local_id = 3;

}

//Subscriber information

message SubscriberInfo {

repeated SubInfoV4  sub_info_v4_list = 1;    //List of sub_info_v4 for IPv4 addresses and/or IPv4 CGNAT addresses for the subscriber.

repeated SubInfoV6  sub_info_v6_list = 2;    //List of sub_info_v6 for IPv6 addresses for the subscriber.

}

//Subscriber Policies

message SubscriberPolicy {

//Subscriber Secure policy(max size 64 bits).

//Example: AABBCCDDEEFF0011

bytes subscriber_secure_policy = 1;

//Parental control Policy (Max size 128 bits).

//Example: AABBCCDDEEFF0011AABBCCDDEEFF0011

bytes parental_control_policy = 2;

//Parental control categories (Max size 128 bits).

//Example: AABBCCDDEEFF0011AABBCCDDEEFF0011

bytes parental_control_categories = 3;

//List of Allowed domains,

//max 15 domain names (comma separated).

//Example: “[http://abc.com](http://abc.com) ,[http://facebook.com](http://facebook.com) ,[http://www.xyz.co.uk](http://www.xyz.co.uk) ”

string allowed_list = 4;

//List of Blocked domains,

//max 15 domain names (comma separated).

//Example: “[http://abc.com](http://abc.com) ,[http://facebook.com](http://facebook.com) ,[http://www.xyz.co.uk](http://www.xyz.co.uk) ”

string blocked_list = 5;

//Unknown category policy

bool unknown_category_policy = 6;

//Flags for device discovery and Violations for now, other uses in the future.

//Bit 0: No Device discovery,

//Bit 1: No Device violation.

bytes op_code = 7;

}

//Subscriber cache API request message

message ApiRequestMessage {

//A unique identifier for an api request/response,

//For co-relating api request & response at gRPC client.

//Example: 12345

uint64 uid = 1;

//Request Type for supported operations on NIOS Subscriber cache.

//Example: SUB_CREATE for adding subscriber record

CacheOperationType request_type = 2;

//Request Operation type. Used incase the request_type == SUB_UPDATE.

CacheOperationModifierType request_update_type = 3;

//Subscriber Policies.

//Only ADD or REPLACE supported,

//UPDATE/MERGE is not supported.

//Need to send all latest policies for policy update or SUB_CREATE.

SubscriberPolicy sub_policy = 4;

//Subscriber Identifier (Max size 255 bytes).

//Example: "vodafone_home"

string subscriber_id = 5;

//Sub info with list of IPv4/IPv4 CGNAT/IPv6 addresses

//that needs to be added.

SubscriberInfo sub_info_add = 6;

//Sub info with list of IPv4/IPv4 CGNAT/IPv6 addresses

//that needs to be deleted.

SubscriberInfo sub_info_del = 7;

//Sub info with list of IPv4/IPv4 CGNAT/IPv6 addresses.

//Used to fetch the policy for specific cases of SUB_UPDATE_INFO operation.

SubscriberInfo sub_info_policy_src = 8;

}

//Subscriber cache API response message

message ApiResponseMessage {

//A unique identifier for an api request/response,

//for co-relating api request & response at gRPC client.

uint64 uid = 1;

//Response status code - zero  on success, non-zero on failure.

//0-SUCCESS

//1-FAILURE

//2-NOTFOUND

//3-SERVICE_UNAVAILABLE

//4-ALREADY_EXISTS

//5-INVALID_ARGS/INVALID_INPUT

//6 - POLICY_UNAVAILABLE

sint32 response_status = 2;

//Response message - depend on response_status.

string response_message = 3;

//Total subscriber count in subscriber cache at NIOS site.

uint64 cache_entry_count = 4;

}

//Metadata for ProcessSubscriberData() RPC:

//Following Metadata should be sent in order to map responses to

//appropriate gRPC client(POD).

//'bucket_id' : 'Unique ID to identify gRPC client  in string format'

//Field required based on operation:

//The field of subscriber_id is mandatory in all of below API requests.

//SUB_CREATE - Create subscriber info with policy

//API request should be sent with policy and sub_info_add as below.

//sub_policy : mandatory - Allot decide the default policy if no policy configured.

//sub_info_add: At least one list is not NULL.

//sub_info_v4_list with all the IPv4 and IPv4 CGNAT addresses to be added with the given policy.

//sub_info_v6_list with all the IPv6 addresses to be updated with the given policy.

//In sub_info_v4_list/sub_info_v6_list, all the fields in SubInfoV4/SubInfoV6 are mandatory.

//SUB_DELETE - Delete the subscriber info

//API request can be sent without policy and sub_info_del as below.

//sub_info_del: At least one list is not NULL. Allot make sure to send whatever IPv4/CGNAT/v6 addresses to be deleted for the subscriber_id.

//sub_info_v4_list with all the IPv4 and IPv4 CGNAT addresses to be deleted.

//sub_info_v6_list with all the IPv6 addresses to be deleted.

//In sub_info_v4_list/sub_info_v6_list, all the fields in SubInfoV4/SubInfoV6 are mandatory.

//SUB_UPDATE – Update subscriber info or policy

//SUB_UPDATE_INFO - Update subscriber info only, no policy update

//API request is sent without policy but with sub_info_del and sub_info_add as below:

//sub_info_del: At least one list can’t be NULL.

//sub_info_v4_list with all the IPv4 and IPv4 CGNAT addresses to be deleted if any.

//sub_info_v6_list with all the IPv6 addresses to be deleted if any.

//sub_info_add: At least one list can’t be NULL.

//sub_info_v4_list  with all the IPv4 and IPv4 CGNAT addresses to be added if any.

//sub_info_v6_list  with all the IPv6 addresses to be added if any.

//In sub_info_v4_list/sub_info_v6_list, all the fields in SubInfoV4/SubInfoV6 are mandatory.

//SUB_UPDATE_POLICY - Update policy only, no subscriber info update

//API request is sent with policy and sub_info_add as below.

//sub_info_policy : mandatory

//sub_info_add: At least one list is not NULL. Allot needs to send a complete IPv4/CGNAT/IPv6 address list for the subscriber_id.

//sub_info_v4_list with all the IPv4 and IPv4 CGNAT addresses to be updated with the given policy.

//sub_info_v6_list with all the IPv6 addresses to be updated with the given policy.

//Mandatory fields for API response

//uid

//response_status

//response_message

//response_type

Collapse
