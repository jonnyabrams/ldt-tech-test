# Let's Do This - tech test

Steps:

Initially preferred fetching data with GET request but noticed some strange errors that seemed to be stemming from a number of the runners having the same ID, so I decided to store the JSON data locally (as runnersData.js) so I could manually change these duplicates more easily

created a React table with columns for runner name (interpolated first and last names together, both capitalised), event, race and organiser

implemented search function with a live running total for ticket sales that changed dynamically depending on what's showing on the screen, so can show totals by organiser, event, race or even names (not sure why you'd want a total for people named Stephen, but you can have it!)

created a Home component to display all this and did some extremely basic CSS for it


## Would like to do:

Testing

Admin panel with dropdown selector for each organiser
