export default class NotesView {
  constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
    this.root = root
    this.onNoteSelect = onNoteSelect
    this.onNoteAdd = onNoteAdd
    this.onNoteEdit = onNoteEdit
    this.onNoteDelete = onNoteDelete
    this.root.innerHTML = `
      <div class="notes_side">
        <button class="add_note" type="button">Add Entry</button>
        <div class="all_notes"></div>
      </div>

      <div class="notes_preview">
        <input id="journal" class="j_title" type="text" placeholder="Enter Title">
        <textarea id="journal" class="j_body" rows="10" placeholder="How are you feeling today?"></textarea>
      </div>
    `;

    const btnAddNote = this.root.querySelector(".add_note");
    const inpTitle = this.root.querySelector(".j_title");
    const inpBody = this.root.querySelector(".j_body");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd()
    })

    inpTitle.addEventListener("blur", () => {
      const updatedTitle = inpTitle.value.trim();
      const updatedBody = inpBody.value.trim();
      this.onNoteEdit(updatedTitle, updatedBody)
    })

    inpBody.addEventListener("blur", () => {
      const updatedTitle = inpTitle.value.trim();
      const updatedBody = inpBody.value.trim();
      this.onNoteEdit(updatedTitle, updatedBody)
    })

    // console.log(this._createListItemHTML(300, "Hey", "yeah", new Date()))

    this.updateNotePreviewVisibility(false)

  }
  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60
    return `
    <div class="noteItem" data-note-id="${id}">
      <div class="notes_title">${title}</div>
      <div class="notes_body">
        ${body.substring(0, MAX_BODY_LENGTH)}
        ${body.length > MAX_BODY_LENGTH ? "..." : ""}
      </div>
      <div class="notes_update">
      ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
      </div>
    </div>
    `
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".all_notes")
    //Empty List
    notesListContainer.innerHTML = ""
    for (const note of notes) {
      const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated))
      notesListContainer.insertAdjacentHTML("beforeend", html);
    }
    // Add the select/delete events for each list item
    notesListContainer.querySelectorAll(".noteItem").forEach(noteListItem => {
      noteListItem.addEventListener("click", () => {
        console.log("testing view file selected")
        console.log(noteListItem.dataset.noteId)
        this.onNoteSelect(noteListItem.dataset.noteId)
        console.log(noteListItem.dataset.noteId)
      })
      noteListItem.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you want to delete this note?")
        if (doDelete) {
          this.onNoteDelete(noteListItem.dataset.noteId)
        }
      })
    });
  }
  updateActiveNote(note) {
    this.root.querySelector('.j_title').value = note.title
    this.root.querySelector('.j_body').value = note.body

    this.root.querySelectorAll(".noteItem").forEach(noteListItem => {
      noteListItem.classList.remove("noteItem--selected")
    })
    this.root.querySelector(`.noteItem[data-note-id="${note.id}"]`).classList.add('noteItem--selected')
  }
  updateNotePreviewVisibility(visible) {
    this.root.querySelector(".notes_preview").style.visibility = visible ? "visible" : "hidden"
  }
}