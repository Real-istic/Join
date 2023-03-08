/**
 * the main render window
 */
let contentDiv = document.getElementById('content');

/* if adding changes are made in this Clipboard, these changes must be made in the add_task.js, too. (function clearTask) !! */
let taskClipboard = {
        'title': '',
        'firstNames': [],
        'lastNames': [],
        'dueDate': '',
        'category': '',
        'categoryColor': '',
        'priority': '',
        'description': '',
        'subtasks': [],
        'subtasksState': []
    }
