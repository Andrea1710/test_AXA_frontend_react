# Test AXA Frontend - React.js

Frontend Test Application using React.js

## Installation

Git Clone the Project and then run

```bash
npm install
```

to download all the dependencies needed, and then run

```bash
npm start
```

to start the React Application which will be running on port 3000.

## Usage

A Browser Tab will be automatically opened at the following URL: http://localhost:3000/.

This Application has been built using pure React.js (Javascript), CSS and 3rd Party Libraries, such as Ant Design.

In order to fetch the JSON data from the Endopoint provided, I used the Native React function 'fetch'.

Then, through the usage and customization of the Data received, I could assemble a detailed Table, showing the Data fetched from the Endpoint.

In this Table, we can:

- filter Gnomes by Name
- open the Image, clicking on the Avatar in the Table
- sort the Gnomes by Age (descending and ascending order)
- filter the Gnomes based on their Hair color
- filter the Gnomes by Profession
- filter the Gnomes by Friends

There are detailed istructions on the Header of the App, clicking on the Button 'Open Instructions', for the Users.

### Details

- I didn't cached the Images because I didn't find a proper way to do it. Anyway, at least in my Browser and with my connection, once downloaded the first time, there has been no particular slowness with the Web App.
- I didn't find a way to properly Test the Application, so I've created two simple tests based on the rendering of the two main Components.

## Author

### Andrea Belluccia
