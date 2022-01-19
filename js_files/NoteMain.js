import App from "./App.js"

const root = document.getElementById("app")
const app = new App(root)

// const view = new NotesView(app, {
//   onNoteAdd() {
//     console.log("Lets add a note")
//   },
//   onNoteSelect(id) {
//     console.log("Note selected: " + id)
//   },
//   onNoteDelete(id) {
//     console.log("Note Deleted" + id)
//   },
//   onNoteEdit(newTitle, newBody) {
//     console.log(newTitle)
//     console.log(newBody)
//   }

// })

// const notes = NotesApi.getAllNotes()

// view.updateNoteList(notes)
// view.updateActiveNote(notes[0])
