### Features
- [X] Clean up username and login controllers.
- [X] Make View Events page and connect with controller and service.
- [x] Modify user.js schema file to include events.
- [x] Display data to DOM with GET req.
- [x] Filter out events from GET events req. Removed [] from schema - eliminates empty fields.
- [ ] Ignore empty [] events arrays. Remove hashkeys from db query.



#Notes
- for POST events: 
    db.users.updateOne({ username: "" }, { $push: { events: { name: "", description: ""  } } });
- [ ] My events: add feature so that items marked as "attending" also show up.np

- use ng-init to call function on page load.
to find entire records where events exists.
    dbEvents.find({"events" : {$exists: true} });

### Schedule
Create README with detailed steps, plan database structure. Simplify Create User page and Home pages to plain templates. Research: how to get Calendar selector on page. Create Events (view  all) page and connect with controllers and services. Create Schema file.
10-16 Mon   DONE!

Connect server to Mongo database. Create GET req for all database events to display on DOM. Create basic append format. Research: how to arrange chronologically, angular.js styling.
10-17 Tues

Create User Home page. Work out POST req for adding an event. Research activity types, and common accessibility needs. 
10-18 Wed

Secure icons for activities/needs. Develop Create Event page, connect to POST req and controller/service.
10-19 Thurs

Finish gathering icons. Create Find Event page and work out POST req for filtered data.
10-20 Fri

Plan out styling elements. Preliminary logo design.
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
