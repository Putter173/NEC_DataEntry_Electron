# NEC_DataEntry_Electron

## To do:
* Code Cleanup & Comments

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
        ├── assets
        │   └── icon.ico                # Application Icon                
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
Note: Make sure to have both "Git" and "Node Js + Npm" already installed and setup on your computer.

    git clone https://github.com/Putter173/NEC_DataEntry_Electron.git
    cd NEC_DataEntry_Electron
    npm i
    npm start
    
### Build/Package File
Note: Current only tested for windows  / This repository has only been built on Windows previously.<br>
Important: Please follow the steps in "Get Started" before continuing.
    
    npm run build-installer

Setup exacutable will then be located in the generated "dist" folder
Un-packed exacutable will be located in "dist/win-unpacked"
    
   
## Google Account used for API
Email: nec.lab.sut@gmail.com <br />
Password: necLab2021

### Link to Google Sheets connected to this app
https://docs.google.com/spreadsheets/d/1aDmAtZ5HRVz3LEqLyKWQHfIf9oVbjalmMcn4fLeqht0
