# Let's Do This - tech test

This is my attempt at the tech test for [Let's Do This](https://www.letsdothis.com/gb), which asked for an array of JSON objects containing booking data to be sorted into startlists for each race, along with functionality for each event organiser to see how much they've made in ticket sales.

For this I created a front-end application using React containing a search function that enables the user to filter a table of data by runner name, event, race title or organiser, returning a total for the ticket sales in each instance.

I also created dynamic routes for each runner containing some key information, and with more time I would like to have done this for each race and organisation. 

Ideally I would have created an in-depth admin panel with a dropdown selector for each organisation on the home page, providing them with an in-depth look at startlists for each race and a breakdown of ticket sales for each one.

Additionally I would have preferred to fetch the data with a GET request but I noticed some weird errors stemming from what seemed to be multiple bookings with the same IDs, so in the end I stored the data locally so I could manually change these duplicates.

## Instructions for Use

* Clone this repository
* Install dependencies by running `npm install` in the terminal
* Run `npm start` and navigate to [http://localhost:3000](http://localhost:3000) in the browser if it doesn't take you there automatically
