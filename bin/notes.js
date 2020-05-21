const fs = require('fs')
const chalk = require('chalk')

const success = chalk.bold.green
const error = chalk.bold.rgb(255,50,0)
const underline = chalk.underline

const time = () => {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var dateTime = date+' '+time;
    return dateTime
}


const saveNotes = (data) => fs.writeFileSync('notes.json', JSON.stringify(data))

const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(buffer)
    }catch(e){
        return []
    }
}

const addNotes = (title, body) => {
    const data = loadNotes()
    const duplicateNote = data.find((note) => note.title === title)

    if(!duplicateNote){
        console.log(success("\nNote added!"))
        console.log('Title' + ': ' + title)
        console.log('Body' + ': ' + body)
        console.log('dateTime' + ': ', time() + '\n')

        data.push({
            title: title,
            body: body,
            dateTime: time()
        })
        saveNotes(data)
    }
    else{
        console.log(error("\nA note with same title exists.\nFailed to add the note.\n"))
    }
}

const listNotes = () => {
    const data = loadNotes()
    if(data.length === 0){
        console.log(error('\nYou haven\'t added any notes yet. Please add a note using ' + chalk.cyan('\'note add\' ') + 'command.\n'))
    }
    data.forEach(element => {
        console.log('\nTitle' + ': ', element.title)
        console.log('Body' + ': ', element.body)
        console.log('dateTime' + ': ', element.dateTime + '\n')
    });
}

const readNotes = (title) =>{
    const data = loadNotes()
    const note = data.find((node) => node.title === title)

    if(note){
        console.log('\nTitle' + ': ', note.title)
        console.log('Body' + ': ', note.body + '\n')
    }
    else{
        console.log(error('No note found.'))
    } 
}

const removeNotes = (title) => {
    const data = loadNotes()
    const keepnotes = data.filter((note) => note.title !== title)

    if(data.length > keepnotes.length){
        console.log(success('\nNote removed.\n'))
        saveNotes(keepnotes)
    }
    else{
        console.log(error('\nNo note with matching title found.\n'))
    }
}

module.exports = {
    addNotes : addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}