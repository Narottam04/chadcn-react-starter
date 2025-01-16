Create a detailed process table for generating a Visio-compatible process map from the given input. Use the following structure and ensure alignment with Visio format requirements:

- Process Step ID: Unique identifier for each step (e.g., P100, P200).
- Process Step Description: Detailed description of each step in the process.
- Next Step ID: Identifier(s) of the subsequent steps (can include conditions like Yes/No or Pass/Fail).
- Connector Label: Label to describe transitions (if applicable, e.g., Yes, No, Pass, Fail).
- Shape Type: Type of Visio shape (e.g., Start, Process, Data, Decision, Document, End, Subprocess).
- Function: Team or individual responsible for the step.

### Input Example:

**Process Name:** Billing Pipeline  
**Short Process Description:** Setting up billing pipeline for a company  
**Process Table:**  
| Sr. No. | Description | Responsible |  
|---------|-----------------------------------------------------------------------------------------------------|----------------------------|  
| 0 | The billing process is initiated upon completion of service delivery and the generation of an invoice. | |  
| 1 | Activity 1.1: The billing system generates an invoice. Activity 1.2: The system validates the invoice. | Billing Team |  
| 2 | Activity 2.1: The invoice is routed for approval. Activity 2.2: Approvers review the invoice. | Approvers (Finance/Sales) |

### Output Example (Visio-Compatible Format):

| Process Step ID | Process Step Description                                                                     | Next Step ID | Connector Label | Shape Type | Function                  |
| --------------- | -------------------------------------------------------------------------------------------- | ------------ | --------------- | ---------- | ------------------------- |
| P100            | Start                                                                                        | P200         |                 | Start      |                           |
| P200            | The billing process is initiated upon completion of service delivery and invoice generation. | P300         |                 | Process    | Billing Team              |
| P300            | The billing system generates an invoice and validates it for accuracy and completeness.      | P400         | Pass, Fail      | Decision   | Billing Team              |
| P400            | Approved invoice is routed to approvers for review.                                          | P500, P600   | Yes, No         | Process    | Approvers (Finance/Sales) |

### Instructions:

- Ensure the column names align exactly with Visio mapping needs.
- Use the given Process Table input to define sequential steps, conditions, and responsible functions.
- If any decisions are involved, include connector labels (e.g., Yes/No or Pass/Fail).
- Maintain clarity in descriptions for accuracy in the generated diagram.
