# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### [ticket-1] : Update Facilities table structure.
- We need to assign Facility's custom ID to each agent working for the facility.
- We will add 'facility_reference' field, its data type is varchar[50]. It is not Primary key, no auto-increment

### [ticket-2] : Create a function to generate a custom Facility Referece based on Facility information.
- The function will return `[facility_table_id]-[substr(FacilityName, 10)]` as facility reference.
- This function should be executed when facility is created or updated its name.

### [ticket-3] : Add `facility_reference` in `getShiftByFacility` function's response.
- We need to add the feature to get `facility_reference` from Facilities table by Facility's ID in `getShiftByFacility`.
- And we must return the `facility_reference` value in its response.

### [ticket-4] : Update `generateReport` function.
- We need to pass `facility_reference` variable and its value instead of Agent'ID for the parameters of `generateReport` function.
- When we generate a PDF, we will add the `facility_reference` and display it.

That's all.



