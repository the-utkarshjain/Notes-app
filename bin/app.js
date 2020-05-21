#!/usr/bin/env node

const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command : 'add',
    describe : 'Add a note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(yargs){
        notes.addNotes(yargs.title, yargs.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder:{
        title:{
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(yargs){
        notes.removeNotes(yargs.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'Read a particular note',
    builder:{
        title:{
            describe:'Title of the note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(yargs){
        notes.readNotes(yargs.title)
    }
})

yargs.parse()
