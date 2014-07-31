# myGuardian

myGuardian is an Angular.js app which connects to the Guardian.com API and displays the last 10 stories for any categories specified in settings. When a story is available to view within the application the user will be taken to a new view, otherwise external stories are shown as such and link directly to the Guardian website.

Category level responses from the Guardian API are stored either in the browsers local storage or as cookies depending on browser support and uses this information until an admin defined time limit is reached, at which point a fresh call is made and the stored data replaced.

As of verson 1.0 live blogging or live sports coverage that's available to view within the application will automatically refresh the story's body content every 60 seconds.

This project makes use of Sass Bootstrap.

## Configuration

There are three files that require editing to set up the application

### app.js

Three settings are held in the root scope of the application:

**showFields** - set to 'all' by default. Change this to be more selective by adding the fields you want to be included separated by a comma.

**format** - set to 'json' by default. The application deals with JSON encoded data, but this can be changed to XML if the related code is updated to reflect this.

**timeDiff** - set to '5' by default. This is the number of minutes for which localStorage data should be kept before being updated.

### sectionConfig.json

Add the categories you want to display from the Guardian website here and they'll display in the main navigation and allow the app to query the API with the correct paths.

'Title' is used in the navigation and shown as a sub-title to indicate the current section being viewed. 

'Path' is used as the URL for that section and used in API calls to call the correct content from The Guardian.

**Example:**

```javascript
"politics": {
    "title" : "Politics",
    "path" : "politics"
  }
```

You can also have sub-categories which will be added to the main navigation in a dropdown under a category name.

**Example:**

```javascript
"football": {
    "title": "Football",
    "subcategories" : {
        "allFootball" : {
          "title" : "All Football",
          "path" : "football"
          },
        "premierleague": {
            "title" : "Premier League",
            "path" : "football/premierleague"
          },
          "laliga": {
            "title" : "La Liga",
            "path" : "football/laligafootball"
          },
          "bundesliga" : {
            "title" : "Bundeslia",
            "path" : "football/bundesligafootball"
          },
          "seriea" : {
            "title" : "Serie A",
            "path" : "football/serieafootball"
          }
      }
  }
```

### query.php

This file holds your Guardian API Key and sits between the application and the API whenever a call requires an API Key to be included.

Change line 3:

```php
$apiKey = "API Key Here";
```
