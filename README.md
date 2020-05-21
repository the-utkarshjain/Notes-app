# Notes-app
Command line application to save notes

## Installation

1. ### Installing node
   Install node with 
   ```console
   $ brew install node
   ```
2. ### Verifying installation
   Run this to check if the installation went right
   ```console
   $ node -v
   $ npm -v
   ```
   If you get a ouput like this, then everything was installed perfectly.
   ```console
   14.2.0
   6.14.4
   ```
3. ### Clone the repository
   Clone this repository with
   ```console
   $ git clone https://github.com/the-utkarshjain/Notes-app.git
   ```
4. ### Install the application
   Using the terminal get into the folder and run
   ```console
   $ npm install -g .
   ```
### Use

* note --help : This will show all the available commands.
* note \<command name\> --help: This will show the description and the required command line arguments.
* note add --title="\<title\>" --body="\<body\>" : This command will add a note with the provided title and body.
* note remove --title="\<title\>" : This command will remove any note with the matching title.
* note read --title"\<title\>"" : This command will read the note with matching title.
* note list: This command will print all the notes you have saved.

## Uninstallation

To unistall the application run
```console
$ npm uninstall -g notes-app
```
