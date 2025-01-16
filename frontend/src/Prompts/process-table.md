Create a detailed business process table for [PROCESS NAME] following the structure and writing style outlined below:

---

### Context:

[PROCESS DESCRIPTION]

---

### Requirements:

1. **Table Structure:**

   Create an 8-column table with these headers:

   - **Sr. No.:** Sequential numbering for main steps and sub-steps.
   - **Step:** Define the step name (e.g., Input, Process Step). Use hierarchical numbering for sub-steps (e.g., Activity #X.Y).
   - **Description:** Provide a detailed explanation of the activity, including dependencies, triggers, and specific actions.
   - **Input:** Clearly specify the events, data, or prerequisites that trigger the step.
   - **Output:** Define the deliverables or results of each step.
   - **Responsible:** Identify the stakeholder, team, or individual responsible for execution.
   - **System:** Mention the platform or tool used in the process.
   - **SLA:** State the timeframe for completion.

2. **Formatting Guidelines:**
   - **Step Name for Sr. No. 0:** Always label the first step as **Input**. Its **Description** must clearly outline how the process is triggered.
   - For subsequent steps, provide a clear progression of the process in a hierarchical structure:
     - Use bold numbering for main steps (e.g., 1**.**)
     - Sub-steps should follow "Activity #X.Y" formatting for granularity (e.g., **Activity 1.1**).
   - **Key Details in Description:**
     - Include bullet points for additional clarity.
     - Describe exceptional conditions, customer types, or mappings as needed.
3. **Content Requirements:**
   - Ensure **Input** is the initial event that triggers the process, and describe it thoroughly in Step 1.
   - For subsequent steps:
     - **Input Triggers:** Specify the prerequisite conditions.
     - **Outputs:** Highlight measurable results.
     - **Responsibilities and Systems:** Clearly assign accountability and outline technical/system dependencies.
4. **Special Considerations:**
   - Include all system integrations and specify manual vs. automated activities.
   - Highlight any exception handling, special conditions, and unique business rules.
   - Distinguish between customer types or profiles if applicable.

---

### Example Process Format Desired:

| **Sr. No.** | **Step**                                                      | **Description**                                                                                                                                                                                                                                 | **Input**                                  | **Output**                                              | **Responsible** | **System** | **SLA**   |
| ----------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------- | --------------- | ---------- | --------- |
| 0.          | Input                                                         | The process is triggered upon SECS ID creation and COF signing completion from the COF Preparation and Document Validation Process. SECS IDs are mapped to unique SAP IDs for domestic customers and used directly for international customers. |                                            |                                                         |                 |            |           |
| **1.**      | **Auto trigger to set-up data and customer profile creation** | **Activity #1.1:** System auto triggers to set-up customer billing master data. **Activity #1.2:** System imports COF PO details from SFDC into billing system and creates customer profile.                                                    | Completed SECS ID creation and COF signing | Auto triggered for data setup/ Created customer profile | Billing Team    | SFDC       | Automated |

---

### Output Style Expectations:

- Ensure the **Input step (Sr. No. 0)** clearly outlines the trigger conditions for the process. It only consists of description and step name as input.
- Subsequent steps should show a logical progression with detailed descriptions and structured numbering.
- Use bullet points and sub-sections within descriptions to maintain clarity and readability.
- Highlight manual and automated activities and any exception handling procedures where applicable.
