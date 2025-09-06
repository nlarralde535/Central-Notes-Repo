---
tags:
  - Plates/HaveToDo/WorkStuff
aliases:
createdDate: 09-06-2025
---

# What is TMMi?

The Test Maturity Model integration is a staged test process improvement model, following the same 5-level maturity structure elaborated by the [CMMI](https://cmmiinstitute.com/cmmi/intro) and which can be applied to individual teams or entire organizations. 
From the framework document: 
 - 1.2 Background and History
```
The TMMi uses the concept of maturity levels for process evaluation and improvement. Furthermore process areas, goals and practices are identified. The TMMi has been developed to support organizations with evaluating and improving their test process. Within the TMMi, testing evolves from a chaotic, ill-defined process with a lack of resources, tools and well-trained testers to a mature and controlled process that has defect prevention as its main objective.
```
  - 1.4.6 Improvement Approach
```
The TMMi provides a full framework to be used as a reference model during test process improvement. It does not provide an approach for test process improvement such as the IDEAL (Initiating, Diagnosing, Establishing, Acting,
And Learning) model [IDEAL].
```

# What is the Objective of this presentation?

 - to explain the Manged maturity level (level 2), the level at which I believe WebPros operates
 - to compare current WebPros processes with those called for by the Managed maturity level

# What is TMMi Maturity Level 2: Managed ?

The Managed maturity level is characterized by the following:

  - Testing becomes a managed process and is clearly separated from debugging
	  - a company-wide or program-wide test strategy is established
	  - Risk management techniques are used to identify the product risks based on documented requirements
	  - test plans are developed that define what testing is required, when, how and by whom, all based on predefined requirements
	  - Commitments are established with stakeholders and revised as needed
	  - The status of the work products and the delivery of testing services are visible to management
  - Testing is still perceived by many stakeholders as being a project phase that follows coding
  - Testing is multi-level: there are component, integration, system and acceptance test levels
  - For each identified test level there are specific testing objectives defined in the organization-wide or program-wide test strategy
  - The main objective of testing in a TMMi level 2 organization is to verify that the product satisfies the specified requirements.
  - Post code, execution-based testing is still considered by many stakeholders the primary testing activity

There are 5 "**Process Areas (PA)**" associated with the Managed maturity level, each is defined by a set of "**Specific Goals (SG)**", which are themselves made up of a corresponding set of "**Specific Practices (SP)**", or activities that are considered important in achieving the associated goal. 

- PA 2.1 Test Policy and Strategy
	- SG 1 Establish a Test Policy
		- SP 1.1 Define test goals
		- SP 1.2 Define test policy
		- SP 1.3 Distribute the test policy to stakeholders
	- SG 2 Establish a Test Strategy
		- SP 2.1 Perform generic product risk assessment
		- SP 2.2 Define a test strategy
		- SP 2.3 Distribute the test policy to stakeholders
	- SG 3 Establish Test Performance Indicators
		- SP 3.1 Define test performance indicators
		- SP 3.2 Deploy test performance indicators
- PA 2.2 Test Planning
	- SG 1 Perform a Product Risk Assessment
		- SP 1.1 Define product risk categories and parameters
		- SP 1.2 Identify product risks
		- SP 1.3 Analyze product risks
	- SG 2 Establish a Test Approach
		- SP 2.1 Identify items and features to be tested
		- SP 2.2 Define the test approach
		- SP 2.3 Define entry criteria
		- SP 2.4 Define exit criteria
		- SP 2.5 Define suspension and resumption criteria
	- SG 3 Establish Test Estimates
		- SP 3.1 Establish a top-level work breakdown structure
		- SP 3.2 Define test life cycle
		- SP 3.3 Determine estimates for test effort and cost
	- SG 4 Develop a test plan
		- SP 4.1 Establish the test schedule
		- SP 4.2 Plan for test staffing
		- SP 4.3 Plan stakeholder involvement
		- SP 4.4 Identify test project risks
		- SP 4.5 Establish the test plan
	- SG 5 Obtain Commitment to the Test Plan
		- SP 5.1 Review test plan
		- SP 5.2 Reconcile work and resource levels
		- SP 5.3 Obtain test plan commitments
- PA 2.3 Test Monitoring and Control
	- SG 1 Monitor Test Progress against Plan
		- SP 1.1 Monitor test planning parameters
		- SP 1.2 Monitor test environment resources provided and used
		- SP 1.3 Monitor test commitments
		- SP 1.4 Monitor test project risks
		- SP 1.5 Monitor stakeholder involvement
		- SP 1.6 Conduct test progress reviews
		- SP 1.7 Conduct test progress milestone reviews
	- SG 2 Monitor Product Quality against Plan and Expectations
		- SP 2.1 Check against entry criteria
		- SP 2.2 Monitor defects
		- SP 2.3 Monitor product risks
		- SP 2.4 Monitor exit criteria
		- SP 2.5 Monitor suspension and resumption criteria
		- SP 2.6 Conduct product quality reviews
		- SP 2.7 Conduct product quality milestone reviews
	- SG 3 Manage Corrective Actions to Closure
		- SP 3.1 Analyze issues
		- SP 3.2 Take corrective action
		- SP 3.3 Manage corrective action
- PA 2.4 Test Design and Execution
	- SG 1 Perform Test Analysis and Design using Test Design Techniques
		- SP 1.1 Identify and prioritize test conditions
		- SP 1.2 Identify and prioritize test cases
		- SP 1.3 Identify necessary specific test data
		- SP 1.4 Maintain horizontal traceability with requirements
	- SG 2 Perform Test Implementation
		- SP 2.1 Develop and prioritize test procedures
		- SP 2.2 Create specific test data
		- SP 2.3 Specify intake test procedure
		- SP 2.4 Develop test execution schedule
	- SG 3 Perform Test Execution
		- SP 3.1 Perform intake test
		- SP 3.2 Execute test cases
		- SP 3.3 Report test incidents
		- SP 3.4 Write test log
	- SG 4 Manage Test Incidents to Closure
		- SP 4.1 Decide disposition of test incidents in configuration control board
		- SP 4.2 Perform appropriate action to fix the test incident
		- SP 4.3 Track the status of test incidents
- PA 2.5 Test Environment
	- SG 1 Develop Test Environment Requirements
		- SP 1.1 Elicit test environment needs
		- SP 1.2 Develop the test environment requirements
		- SP 1.3 Analyze the test environment requirements
	- SG 2 Perform Test Environment Implementation
		- SP 2.1 Implement the test environment
		- SP 2.2 Create generic test data
		- SP 2.3 Specify test environment intake test procedure
		- SP 2.4 Perform test environment intake test
	- SG 3 Manage and Control Test Environments
		- SP 3.1 Perform systems management
		- SP 3.2 Perform test data management
		- SP 3.3 Coordinate the availability and usage of the test environments
		- SP 3.4 Report and manage test environment incidents

# Comparison: Level 2 vs. WebPros

### PA 2.1 Test Policy and Strategy

#### Scope:

```
The process area Test Policy and Strategy involves the definition and deployment of a test policy and test strategy at an organizational level. Within the test strategy, test levels are identified. For each test level, at a minimum, test
objectives, responsibilities, main tasks and entry/exit criteria are defined. To measure test performance and the accomplishment of test (improvement) objectives, test performance indicators are defined and implemented.
```

#### Terminology & Definitions:

**test policy** = High-level documentation describing the principles, approach and major objectives of the organization regarding testing.
**test strategy** = A description of how to perform testing to reach test objectives under given circumstances.
**test levels** =
```
(from ISTQB Certified Tester Foundation Level Syllabus v4.0.1, Pg 28)

Test levels are groups of test activities that are organized and managed together. Each test level is an instance of the test process, performed in relation to software at a given phase of development, from individual components to complete systems or, where applicable, systems of systems.

In this syllabus, the following five test levels are described:
 - component (unit) testing
 - component integration testing
 - system (E2E) testing
 - system integration (E2E) testing
 - Acceptance testing

Test levels are distinguished by the following non-exhaustive list of attributes, to avoid overlapping of test activities:
 - Test object
 - Test objectives
 - Test basis
 - Defects and failures
 - Approach and responsibilities
```
**test approach** = A test approach is the manner in which testing tasks are implemented, especially the selection and combination of test levels, test types, and test techniques for static and dynamic testing, as well as other test practices such as scripted testing,
manual testing, back-to-back testing, etc. The test approach chosen by the test management role is a key decision in formulating an appropriate test strategy for a given context. (Certified Tester Advanced Level Test Management v3.0, pg 15)
#### Specific Goals:

- SG 1 Establish a Test Policy
	- **SP 1.1 Define test goals**
		- Study business needs and objectives
		- Define test goals traceable to business needs and objectives
		- Review the test goals with stakeholders
	- **SP 1.2 Define test policy**
		- Define the test policy based on the defined test goals
		- Review the test policy with stakeholders
	- SP 1.3 Distribute the test policy to stakeholders

The organization's Test Policy depends on there being defined Test Goals which are traceable to business needs and objectives. 

Examples of Test Policy contents: 
- https://tryqa.com/what-is-test-policy-what-does-it-contain/
- https://www.linkedin.com/advice/1/what-main-differences-between-test-strategy-plan

---

- SG 2 Establish a Test Strategy
	- **SP 2.1 Perform generic product risk assessment**
		- Identify and select stakeholders that need to contribute to the generic risk assessment
		- Identify generic product risks using input from stakeholders
		- Identify the relevant stakeholders associated with each generic product risk
		- Categorize and group generic product risks according to the defined risk categories
		- Prioritize the generic product risks for mitigation
	- **SP 2.2 Define a test strategy**
		- Define the test strategy providing clear linkage to the defined test policy and goals
	- SP 2.3 Distribute the test strategy to stakeholders


Test Strategy + Test Approach definition:
```
According to this syllabus and the Glossary, a test strategy is a description of how testing will be performed in order to achieve test objectives under given circumstances. A test strategy defines the overall scope, approach, and resources for testing a system or a product. It is typically documented in a
test plan or as part of other documents, depending on the context of the testing. A test strategy is influenced by the organizational test strategy, which is a high-level test strategy that describes how testing is done in an organization.

A test approach is the manner in which testing tasks are implemented, especially the selection and combination of test levels, test types, and test techniques for static and dynamic testing, as well as other test practices such as scripted testing, manual testing, back-to-back testing, etc. The test approach chosen by the test management role is a key decision in formulating an appropriate test strategy for a given context.

ISTQB Certified Tester Advanced Level
Test Management Syllabus v3.0
```

With respect to outlining the contents of a Test Strategy, both the TMMi Framework document and the ISTQB Certified Tester Advanced Level Test Management Syllabus v3.0, make reference to ISO 29119-3 

---

- SG 3 Establish Test Performance Indicators
	- **SP 3.1 Define test performance indicators**
		- The test performance indicators are defined based upon the test policy and goals, including a procedure for data collection, storage and analysis.
		- Define the test performance indicators traceable to the test policy and goals
	- SP 3.2 Deploy test performance indicators



---
---



### PA 2.2 Test Planning

#### Scope:
```
The process area Test Planning involves performing a product risk assessment on the test object and defining a differentiated test approach based on the risks identified. It also involves developing estimates for the testing to be performed, establishing necessary commitments, and defining and maintaining the plan to guide and manage the testing. A test plan is required for each identified test level.
```
#### Terminology & Definitions: 

**test object** = The software work product to be tested
**test approach** = A test approach is the manner in which testing tasks are implemented, especially the selection and combination of test levels, test types, and test techniques for static and dynamic testing, as well as other test practices such as scripted testing,
manual testing, back-to-back testing, etc. The test approach chosen by the test management role is a key decision in formulating an appropriate test strategy for a given context. (Certified Tester Advanced Level Test Management v3.0, pg 15)
**test type** = functional, non-functional, black/white box, confirmation, regression, static (linting/code reviews)
**test technique** = A procedure used to define test conditions, design test cases, and specify test data. (...)
**test basis** = The body of knowledge used as the basis for test analysis and test design.
**test levels** =
```
(from ISTQB Certified Tester Foundation Level Syllabus v4.0.1, Pg 28)

Test levels are groups of test activities that are organized and managed together. Each test level is an instance of the test process, performed in relation to software at a given phase of development, from individual components to complete systems or, where applicable, systems of systems.

In this syllabus, the following five test levels are described:
 - component (unit) testing
 - component integration testing
 - system (E2E) testing
 - system integration (E2E) testing
 - Acceptance testing

Test levels are distinguished by the following non-exhaustive list of attributes, to avoid overlapping of test activities:
 - Test object
 - Test objectives
 - Test basis
 - Defects and failures
 - Approach and responsibilities
```
**test plan** = 
```
(from ISTQB Certified Tester Foundation Level Syllabus)

The typical content of a test plan includes:

  •Context of testing (e.g., test scope, test objectives, test basis)
  •Assumptions and constraints of the test project
  •Stakeholders (e.g., roles, responsibilities, relevance to testing, hiring and training needs)
  •Communication (e.g., forms and frequency of communication, documentation templates)
  •Risk register (e.g., product risks, project risks)
  •Test approach (e.g., test levels, test types, test techniques, test deliverables, entry criteria and
exit criteria, independence of testing, metrics to be collected, test data requirements, test environment requirements, deviations from the test policy and test strategy)
  •Budget and schedule
  
More details about the test plan and its content can be found in the ISO/IEC/IEEE 29119-3 standard.
```

#### Specific goals:

 - SG 1 Perform a Product Risk Assessment
	 -  **SP 1.1 Define product risk categories and parameters**
	 -  **SP 1.2 Identify product risks**
	 - SP 1.3 Analyze product risks

---

 - SG 2 Establish a Test Approach
	- **SP 2.1 Identify items and features to be tested**
		- The items and features to be tested, and not to be tested, are identified based on the product risks.
	- **SP 2.2 Define the test approach**
		- The test approach is defined to mitigate the identified and prioritized product risks.
	- **SP 2.3 Define entry criteria**
		- The entry criteria for testing are defined to prevent testing from starting under conditions that do not allow for a thorough test process.
	- **SP 2.4 Define exit criteria**
		- The exit criteria for testing are defined to determine when testing is complete.
	- SP 2.5 Define suspension and resumption criteria

---

( **This section is important but difficult to summarize** )
- SG 3 Establish Test Estimates
	- **SP 3.1 Establish a top-level work breakdown structure**
		- identify test work products to be developed and/or to be reused
		- Identify test tasks to be performed related to the test work products
	- **SP 3.2 Define test life cycle**
		- This ^ step is massively important, refer to the documented sub practices
		- Identify major milestones for each test life cycle phase
	- **SP 3.3 Determine estimates for test effort and cost**
		- Estimate the test effort and cost for the test work products to be created and testing tasks to be performed
		- Document assumptions made in deriving the estimates
##### Terminology & Definitions:
**test work product** = See ISTB Foundation Level syllabus v4.0.1 sec 1.4.3 Testware
**test life cycle** = See [Software Test Life Cycle](https://www.geeksforgeeks.org/software-testing-life-cycle-stlc/)
		- Requirements Analysis --> Test Planning --> Test Case Development --> Test Environment Setup --> Test Execution --> Test Closure

---

- SG 4 Develop a test plan
	- **SP 4.1 Establish the test schedule**
		- The test schedule, with predefined stages of manageable size, is established and maintained based on the developed test estimate and defined test life cycle
		- Document assumptions made in defining the test schedule
	- SP 4.2 Plan for test staffing
	- **SP 4.3 Plan stakeholder involvement**
		- Stakeholders are identified from all phase of the test life cycle by identifying the type of people and functions needing during the testing activities.
	- **SP 4.4 Identify test project risks**
	- **SP 4.5 Establish the test plan**
		- The test plan is established and maintained as a basis for managing testing and guiding the communication with the stakeholders. The results of previous practices are documented in an overall test plan, tying together the information in a logical manner.
##### Terminology & Definitions:
**test plan** = **See** ISTB Foundation Level syllabus v4.0.1 sec 5.1 Test Planning, **See** TMMi Framework R1 3 pg 41 Establish a Test Plan

---

- SG 5 Obtain Commitment to the Test Plan
	- SP 5.1 Review test plan
	- SP 5.2 Reconcile work and resource levels
	- **SP 5.3 Obtain test plan commitments**
		- Obtain commitments from relevant stakeholders responsible for performing and supporting the execution of the test plan.




---
---




### PA 2.3 Test Monitoring and Control

#### Scope:
```
The process area Test Monitoring and Control involves monitoring the test progress and product quality against documented estimates, commitments, plans and expectations, reporting on test progress and product quality to stakeholders, taking control measures, (e.g., corrective actions, when necessary) and managing the corrective actions to closure.
```

#### Specific Goals: 

- SG 1 Monitor Test Progress against Plan
	- **SP 1.1 Monitor test planning parameters**
		- Monitor test progress against the test schedule
		- Monitor the test cost and expended test effort
		- Document the significant deviations in the test planning parameters
	- SP 1.2 Monitor test environment resources provided and used
	- **SP 1.3 Monitor test commitments**
		- Monitor test commitments achieved against those identified in the test plan
	- SP 1.4 Monitor test project risks
	- **SP 1.5 Monitor stakeholder involvement**
		- Once the stakeholders are identified and the extent of their involvement within testing is specified in the test plan, that involvement must be monitored to ensure that the appropriate interactions are occurring.
	- **SP 1.6 Conduct test progress reviews**
		- Progress reviews are reviews to keep stakeholders informed. Reviews are often held both internally with test team members and externally with stakeholders outside testing. These reviews are typically informal reviews held regularly, e.g., weekly, bi-weekly or monthly.
	- SP 1.7 Conduct test progress milestone reviews

---

- SG 2 Monitor Product Quality against Plan and Expectations
	- **SP 2.1 Check against entry criteria**
		- At the start of the test execution phase check the status against the entry criteria identified in the test plan.
	- SP 2.2 Monitor defects
	- SP 2.3 Monitor product risks
	- SP 2.4 Monitor exit criteria
	- SP 2.5 Monitor suspension and resumption criteria
	- **SP 2.6 Conduct product quality reviews**
		- Product quality reviews are reviews conducted to keep stakeholders informed. Reviews are often held both internally with test team members and externally with stakeholders outside testing. These reviews are typically informal reviews held regularly, e.g., weekly, bi-weekly or monthly.
	- SP 2.7 Conduct product quality milestone reviews

---

- SG 3 Manage Corrective Actions to Closure
	- **NOTE:** this section covers the situation when test progress or product quality deviate significantly from the test plan or expectations.
	- SP 3.1 Analyze issues
	- SP 3.2 Take corrective action
	- SP 3.3 Manage corrective action



---
---



### PA 2.4 Test Design and Execution

#### Scope:
```
The process area Test Design and Execution addresses the test preparation phase including the application of test design techniques to derive and select test conditions and test cases. It also addresses the creation of specific test
data, the execution of the tests using documented test procedures and incident management.
```

#### Specific Goals:

- SG 1 Perform Test Analysis and Design using Test Design Techniques
	- SP 1.1 Identify and prioritize test conditions
	- SP 1.2 Identify and prioritize test cases
	- SP 1.3 Identify necessary specific test data
	- **SP 1.4 Maintain horizontal traceability with requirements**
		- Maintain requirements traceability to ensure that the source of test conditions is documented
		- Generate a requirements / test conditions [traceability matrix](https://www.geeksforgeeks.org/requirement-traceability-matrix/#what-is-requirement-traceability-matrixrtm)
		- Set up the traceability matrix such that monitoring of requirements coverage during test execution is facilitated

---

- SG 2 Perform Test Implementation
	- SP 2.1 Develop and prioritize test procedures
	- SP 2.2 Create specific test data
	- **SP 2.3 Specify intake test procedure**
		- The intake test is specified. This test, sometimes called the confidence or smoke test is used to decide at the beginning of test execution whether the test object is ready for detailed and further testing.
		- Define a list of checks to be executed during the intake test using the entry criteria as defined in the test plan as an input
	- SP 2.4 Develop test execution schedule

---

- SG 3 Perform Test Execution
	- SP 3.1 Perform intake test
	- SP 3.2 Execute test cases
	- SP 3.3 Report test incidents
	- SP 3.4 Write test log

---

- SG 4 Manage Test Incidents to Closure
	- SP 4.1 Decide disposition of test incidents in configuration control board
	- SP 4.2 Perform appropriate action to fix the test incident
	- SP 4.3 Track the status of test incidents



---
---



### PA 2.5 Test Environment

#### Scope:
```
The process area Test Environment addresses all activities for specifying test environment requirements, implementing the test environment and managing and controlling the test environment. Management and control of the test environment also includes aspects such as configuration management and ensuring availability. The Test Environment process area scope includes both the physical test environment and the test data.
```

#### Specific Goals:

- SG 1 Develop Test Environment Requirements
	- SP 1.1 Elicit test environment needs
	- SP 1.2 Develop the test environment requirements
	- SP 1.3 Analyze the test environment requirements

---

- SG 2 Perform Test Environment Implementation
	- SP 2.1 Implement the test environment
	- SP 2.2 Create generic test data
	- SP 2.3 Specify test environment intake test procedure
	- SP 2.4 Perform test environment intake test

---

- SG 3 Manage and Control Test Environments
	- SP 3.1 Perform systems management
	- SP 3.2 Perform test data management
	- SP 3.3 Coordinate the availability and usage of the test environments
	- SP 3.4 Report and manage test environment incidents



---
# End of Level 2
---
