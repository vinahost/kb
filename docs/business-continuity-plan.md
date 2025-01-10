# Business Continuity Plan 

## **Purpose**

Business Continuity Plan is the process involved in creating a system of prevention and recovery from potential threats to Vinahost system.
## **Scope**

Covers all systems, Datacenters, personnel, and core services of the company
## **Roles & Responsibilities**

| Role               | Responsibility                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| Technical Manager  | Responsible for all system operation                                                                     |
| System Admin       | Responsible about technology and operation such as virtualization, platform, technical stack, portal,... |
| Network / DC Admin | Responsible about infrastructure, Hardware, DC, Networking                                               |

## **Risks**

#### Major Risks

- Hardware failure (Server, Storages)
- Internet connectivity loss or bandwidth degradation
- Cyberattacks (DDoS, Ransomware)
- Software (3rd Party) miss configuration or glitches
- Terrorist attacks, fire, or natural disasters

#### System Prioritization

1. Customer Production Servers
2. System Backup
3. Portal

## **Procedure**

#### Backup

- Automatic backup Daily, Weekly, Monthly with main services
	- Virtualization: Weekly, Monthly
	- Email, Hosting: Daily, 2-4 per Day.
- Store backup copies on cloud platforms or secondary Datacenters with critical system.

#### Failover

- Activate backup servers, balancing performance.
- DNS solution for redirect traffic or failover

##### Third Party Software #####

Legit third party software
- With Hosting:
	- Panel: Cpanel, Plesk 
	- Security: Imunify360
	- Web Service: Litespeed Enterprise
	- Backup Solution: Jetbackup
	- OS: Cloud Linux Pro License
- Virtualization Platform

##### Cyber Security Measures

- WAF & Anti DDoS solution & system
- IDS / IPS, SIEM system for critical system

##### Hardware Replacement

- Regularly inspect and maintain critical equipment
- Maintain contracts with hardware vendors for replacement parts

### **What triggers the Business Continuity Plan**

##### Incidents Detection

- System automation monitoring eg: Log Monitoring, System Monitoring (Prometheus & grafana), Blackbox Exporter (uptime monitor) or Customer Report
- Notify to the BCP team

##### Assessment and Action Decision

- Determine the severity of the incident.
- Activate appropriate recovery strategies

##### Recovery Execution

**Priority::1: Outage would have immediate impact on Vinahost customer/user operations
1. Downtime servers:
	Effect: Server downtime or hangout.
	Handler: System Admin & Network / DC Admin
	Solution(s):
	1. Virtual Machine Baseline: 
		- Migration to another Hypervisor.
		- Restore virtual machine disk
		- Deploy new machine and restore from backup
		- Take 2-6h  depend on disk size
	1. Dedicate Server Baseline:
		- Restore to Backup Dedicate node.
		- Take 6-12h depend on size of data
2.  Downtime of Datacenters:
	Handler: Network / DC Admin
	- No failover plan currently for normal virtualization and hosting service
	- With critical service such as customer requirement, customer portal & payment, DR will be deploy. Restore and running on another Datacenter.
3.  Software error or cyber attack:
	Effect: Depend on attack
	Handler: System Admin
	Solution(s):
	- We log and track any access that happens on any server in the fleet using log central. Monitoring system with prometheus & granfana. We can handler any access to system.
	- Depend on DDoS volume, we coordinate with the ISP to handler attack.
4. Unavailability of support staff:
	- Effect: emergency response times are greater than intended
	- Sollution(s): We having 3 chanel and support team 247. Customer can contact support@vinahost.vn, livechat.vinahost.vn or 19006046
5. Non critical system:
	- We will not use resource for recovery first. 
	- Find out root cause.

### **Analysis**

#### Verify plan

- Developing basic guidelines, this plan will be distributed as a work in progress to the core team
- The core team will review to verify that all technical details are covered and deficiencies exist
- Managers or team leads will share the relevant parts of the plan to all team members based on their role and department, and verify that they know what to do in the event of an emergency

#### Root Cause Analysis

Any time the business continuity plan is activated, a root cause analysis should be performed to identify lessons-learned. The root cause analysis should review the trigger of the event and recommend remediations that prevent future occurrences of the issue. Additionally, if opportunities for improvements in the response to the specific business continuity scenario are identified, the business continuity plan and applicable procedures should be updated to reflect those lessons learned.

#### Incident Report

- Type of incident:
- Time occurred:
- Affected systems:
- Recovery duration:

### Lessons Learned:

- Areas for improvement in the process.
- Update the BCP to prevent similar issues in the future

## **Business Continuity Test**

#### Testing the plan

The various types of tests that can be conducted include: checklist tests, simulation tests, parallel tests, and full interruption tests Not testing the plan will put both the business and customer confidence at risk

#### Business Continuity Plan Testing Scenarios

There are several types of tests, such as a plan review, a tabletop test, or a simulation test. Some others testing scenarios that can be performed, are given below:

1. Data Loss/Breach/Data Recovery
	- Ransomware and cyberattacks
    - Unintentionally erased files or folders
    - Server/drive crash
    - Datacenter outage
	Restoring backup is the solution. However, who’s responsible for that? What’s the communication plan in this case? What are the priorities? Who needs to be contacted right away? Are there any vendors involved? These and many other questions will be answered during this test.
2. Network Issue:
	- DDoS
	- Internet connectivity loss or bandwidth degradation
	Checking of local network & VPN network working well to handler Issue. Netflow and routing practice

#### Documentation

Maintain detailed documentation of the BCP:

- **Contact Lists:** Keep an updated list of all relevant contacts.
- **Procedures:** Document specific recovery procedures for each service.


> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
> 
> **\>>** [**SERVER**](https://vinahost.vn/thue-may-chu-rieng/) **–** [**COLOCATION**](https://vinahost.vn/colocation.html) – [**CDN**](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)
> 
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**
> 
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**
> 
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**
> 
> **\>> [WEBSITE](http://vinawebsite.vn/)**
> 
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**
