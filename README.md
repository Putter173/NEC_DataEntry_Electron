# NEC_DataEntry_Electron

## To do:
* Add Upload process notification
* Add UI support for Infinite Local Arrays
* Fix UI scrolling Issue
* Code Cleanup & Comments
* Add App Name
* Add App Icon

## Current Repository File Structure

    .
    ├── package-lock.json
    ├── .gitattributes
    ├── .gitignore
    ├── README.md                       # This README.md file
    ├── package.json                    # Contains Repository Metadata
    ├── main.js                         # Contains Electron's Main Process - Along with all of it's functions
    └── app
        ├── index.html                  # Main/Only HTML File (Basically the front-end)
        ├── data
        │   ├── googleLoginCreds.json   # Credentials for Google Sheets API
        │   └── temporaryData.json      # Contains Local (User Generated) Array Data
        ├── css
        │   ├── extra.css               # Contains Extra CSS code
        │   └── bulma.min.css           # Contains the Bulma CSS Framework
        └── js
            ├── mainFunctions.js        # Contains Data Entry UI Javascript Functions
            ├── barFunctions.js         # Contains (Right) Bar UI Javascript Functions
            └── dbFunctions.js          # Contains Javascript Functions that deal with Local (User Generated) Arrays
            
## Get Started
    git clone https://github.com/Putter173/NEC_DataEntry_Electron.git
    cd NEC_DataEntry_Electron
    npm i
    npm start
   
## Google Account used for API
Email: nec.lab.sut@gmail.com <br />
Password: necLab2021

### Link to Google Sheets connected to this app
https://docs.google.com/spreadsheets/d/1aDmAtZ5HRVz3LEqLyKWQHfIf9oVbjalmMcn4fLeqht0
