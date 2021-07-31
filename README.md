# NEC_DataEntry_Electron

## To do:
* Link to Google Sheets
* Add UI support for Infinite Local Arrays
* Code Cleanup

## Current Repository File Structure

    .
    ├── .DS_Store
    ├── package-lock.json
    ├── .gitattributes
    ├── .gitignore
    ├── README.md                     # This README.md file
    ├── package.json                  # Contains Repository Metadata
    ├── main.js                       # Electron's Main Process Lies here - Along with all of it's functions
    └── app
        ├── .DS_Store
        ├── index.html                # Main/Only HTML File (Basically the front-end)
        ├── data
        │   └── temporaryData.json    # Contains Local (User Generated) Array Data
        ├── css
        │   ├── extra.css             # Contains Extra CSS code
        │   └── bulma.min.css         # Contains the Bulma CSS Framework
        └── js
            ├── mainFunctions.js      # Contains UI Javascript Functions
            └── dbFunctions.js        # Contains Javascript Functions that deal with Local (User Generated) Arrays
