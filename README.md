### Features
- [X] Clean up username and login controllers.
- [X] Make View Events page and connect with controller and service.
- [x] Modify user.js schema file to include events.
- [x] Display data to DOM with GET req.
- [x] Filter out events from GET events req. Removed [] from schema - eliminates empty fields.
- [x] Ignore empty [] events arrays for display using ng-if.
- [x] Create append format for DOM display of events.
- [x] Added location details to schema and other files.
- [x] Arrange events on DOM chronologically by sorting into single array in service.
- [x] Converted info to events page and sourced controller.
- [x] Added basic PUT req from server to dB to create event. Set up DOM to server connection.
- [x] Send info from service to server to dB with testObj event.
- [x] Add inputs for new create event to DOM.
- [x] Send new event info from DOM to dB.
- [x] Refactored access tags array into access tags object with boolean values.
- [x] Added access buttons. Modified schema. Basic functionality of access tags complete.


#Notes
- filter results to weeelchair = true. (first part returns users with a wheelchair value = true anywhere; second part only shows events with wheelchair = true):
db.users.find( { "events.access_tags.wheelchair": true}, {events: {$elemMatch:  { access_tags: {"wheelchair": true, "deafness": false } } } } );
- find two values, remove id's, but will still return some empty users... :
db.users.find( { $and: [ { "events.access_tags.wheelchair": true }, { "events.access_tags.deafness": true } ] }, {events: {$elemMatch:  { access_tags: {"wheelchair": true, "deafness": true } } }, _id: 0 } );

- sample time:   2014-01-09T16:00:00.000Z
- For icons, go to bookmarked office of disability rights and use content or link to relevant pages, so users can hover over an icon to "find out more" (what that means).
- check: make sure in get events function in user.service.js, that "events: []" are removed before displaying on DOM (if problematic, use ng-if to remove)
- syntax for create new event (POST):
    db.users.updateOne({ username: "" }, { $push: { events: { name: "", description: "", location: { name: '', street: '', city: '', state: '', zip: ''}, time_start: "", time_end: "", count: null, access_tags: [], content_tags: []  } } });
- [ ] My Events pg: add feature so that items marked as "attending" also show up.
Angular material notes:
- Angular material: "dialogs" for prompts/alerts.
- material.angular.io --> getting started.
- hammer.js -- angular accessible
- import themes to style.css. (themes found in node_modules-angular after npm installing)

- use ng-init to call function on page load.
to find entire records where events exists.
    dbEvents.find({"events" : {$exists: true} });

### Schedule
Create README with detailed steps, plan database structure. Simplify Create User page and Home pages to plain templates. Research: how to get Calendar selector on page. Create Events (view  all) page and connect with controllers and services. Create Schema file.
10-16 Mon       DONE!

Look into deleting a field from mongoDB if field length reaches 0. Connect server to Mongo database. Create GET req for all database events to display on DOM. Create basic append format. Research: how to arrange chronologically.
10-17 Tues      DONE!

Create User Home page. Work out POST req for adding an event (using info pg?). Develop Create Event page, connect to POST req and controller/service. Research activity types, and common accessibility needs, angular.js styling
10-18 Wed       DONE!

Plan out POST req (sending filter data, retrieving data - use /events route) for filtering data for Find Event page. Plan out how icons will push items into tag arrays and test. Research: look for some sample icons.
10-19 Thurs

Finish gathering icons. Create Find Event page and work out POST req for filtered data. Research: using Angular-style popups for selections on Create Event page instead of form. Create My Events page. Connect to new /myEvents route : POST req to grab all events, PUT req to select and delete an event. 
10-20 Fri

Plan out styling elements. Preliminary logo design. Talk to Amber about accessibility needs, discuss icon usage. Secure icons for use.
10-21 Saturday

10-22 Sunday

Add basic styling. Finish logo. Build My Events page and POST req for logic.
10-23 Mon

Refine styling and practice deploying to Heroku with database. Bug fixes.
10-24 Tues

Testing with screen-reader. Position items on page according to keyboard -driven logic. Bug fixes, testing, stretch goals.
10-25 Wed

Bug fixes, testing, stretch goals.
10-26 Thurs

Practice presentation. Deploy to Heroku.
10-27 Fri

Weekend - last minute details, presentation polish.
10-28 - 10-29 Sat, Sun

Solo presentation.
10-30 Mon



### Stretch Goals

- [ ] Add slide show of sample events, or graphic elements on home page in place of description of app.
- [ ] Add feature to allow users to delete events they have created. Two options: call delete function with icon placed next to User’s created events, or have separate “My Events” page containing only that user’s events.
- [ ] Integrate Google Calendar API so users can add event to their own calendar.
- [ ] Possibly use Yelp or Foursquare API to get additional data.
- [ ] Add page for users to save places that are accessible.

# add to readme:
## Screen Shot (of app)
## Deployment (notes on how to deploy)

# Accessible Activities

--> Link to Heroku deployment <--

Accessible Activities is a full-stack web application which will increase activity options for persons with special needs, and facilitate activity planning for caregivers. The app will allow users to create and view events with accessibility designations. Users who do not create an account will still be able to view the events, and will be able to filter available events by content type and/or accessibility needs. As an example, a user with deafness may click on tags for deafness and movies to find events such as movie showings at theatres with closed captioning or an interpreter. Another user may select the wheelchair-accessible and animals tags to find an event like a visit to a dog park with paved sidewalks. The Accessible Activities app has two goals: to make it easier for people to find social events friendly to their accessibility needs, and to help caregivers connect with other caregivers to increase the number of these activities.

## Built With

MEAN stack, Mongo Database, Express, Angular.js, Node.js.

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Installing

Run ```npm install``` in terminal.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

## Author

* Mike Pettman

## Acknowledgments

* Scott Bromander and Kris Szafranski for base passport code.
