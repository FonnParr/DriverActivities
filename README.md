# DriverActivities
React assessment project for Logistics

# Description
The _Home_, _Vehicles_ and _About_ pages all have placeholders.

The _Drivers_ page contains the 7 day driver activity logs.

# Getting Started
1. Clone the project.

`git clone https://github.com/FonnParr/DriverActivities.git`

2. Install dependencies.

`npm i`

3. Start the app.

`npm start`

# Future development
The next step for this app would be to update the activity duration totalers, such that they accept a start date and duration. The filter out any activities that are outside this range.

Also, there is an edge-case to consider for activities starting before midnight and continuing on a following day.

I might consider automatically filtering-out any drivers with no activities.