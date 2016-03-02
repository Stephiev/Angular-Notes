(function () {
    "use strict";

    angular.module("app.notes")
        .controller("NoteController", NoteController)

    NoteController.$inject = ["$firebaseArray"];

    function NoteController($firebaseArray) {

        var vm = this; // vm === viewModel

        // Want to make a connection to firebase and set it to a new
        // firebase instance. Connects our app to a specific firebase
        // app
        var fireNotes = new Firebase('https://mynotes-svvs.firebaseio.com/' + 'notes');

        vm.notes = $firebaseArray(fireNotes);

        // The constructor function, note

        function Note() {
            this.author = '';
            this.note = '';
            this.edit = false;
        }

        // Will be accessible by the view
        vm.newNote = new Note()

        vm.addNote = addNote; // Allows the view to access the addParty function

        vm.editNote = editNote; // Edit a note

        vm.removeNote = removeNote; // Delete note

        vm.saveNoteEdit = saveNoteEdit; // Save an edited note

        vm.cancelNoteEdit = cancelNoteEdit; // Cancel the edit and revert to previous note

        // Functions
        function addNote() {
            vm.notes.$add(vm.newNote);
            vm.newNote = new Note();
        }

        function editNote(note) {
            note.edit = true;
            vm.oldNote = note.note;
        }

        function removeNote(note) {
            vm.notes.$remove(note);
        }

        function saveNoteEdit(note) {
            note.edit = false;
            vm.notes.$save(note);
        }

        function cancelNoteEdit(oldNote, note) {
            note.edit = false;
            note.note = oldNote;
        }
    }
})();
