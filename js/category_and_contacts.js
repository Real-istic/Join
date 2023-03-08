categoryList = [{
    categoryName: 'Marketing',
    categoryColor: '#de493e'
},
{
    categoryName: 'Finance',
    categoryColor: '#259b24'
},
{
    categoryName: 'Production',
    categoryColor: '#1e88e5'
},
{
    categoryName: 'Sales',
    categoryColor: '#fbc02d'
},
{
    categoryName: 'Human Resources',
    categoryColor: '#9c27b0'
},

{
    categoryName: 'Customer Service',
    categoryColor: '#00897b'
}]

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


userList = [
    {
        "firstName": "Florian",
        "lastName": "Schmidt",
        "email": "florian.schmidt@example.com",
        "phoneNumber": "0123456799",
        "password": "trustno1",
        "backgroundColor": "#FF5733"
    },
    {
        "firstName": "Hannah",
        "lastName": "Wagner",
        "email": "hannah.wagner@example.com",
        "phoneNumber": "0123456792",
        "password": "securepassword",
        "backgroundColor": "#FFC300"
    },
    {
        "firstName": "Julia",
        "lastName": "Schneider",
        "email": "julia.schneider@example.com",
        "phoneNumber": "0123456794",
        "password": "football23",
        "backgroundColor": "#C70039"
    },
    {
        "firstName": "Lena",
        "lastName": "Müller",
        "email": "lena.mueller@example.com",
        "phoneNumber": "0123456790",
        "password": "qwerty",
        "backgroundColor": "#FF5733"
    },
    {
        "firstName": "Marcel",
        "lastName": "Schulz",
        "email": "marcel.schulz@example.com",
        "phoneNumber": "0123456797",
        "password": "monkey123",
        "backgroundColor": "#900C3F"
    },
    {
        "firstName": "Markus",
        "lastName": "Schmidt",
        "email": "markus.schmidt@example.com",
        "phoneNumber": "0123456791",
        "password": "password123",
        "backgroundColor": "#FFC300"
    },
    {
        "firstName": "Paula",
        "lastName": "Becker",
        "email": "paula.becker@example.com",
        "phoneNumber": "0123456793",
        "password": "p@ssw0rd",
        "backgroundColor": "#581845"
    },
    {
        "firstName": "Sabine",
        "lastName": "Meyer",
        "email": "sabine.meyer@example.com",
        "phoneNumber": "0123456796",
        "password": "letmein",
        "backgroundColor": "#FF5733"
    },
    {
        "firstName": "Sophie",
        "lastName": "Hartmann",
        "email": "sophie.hartmann@example.com",
        "phoneNumber": "0123456798",
        "password": "abcdefg",
        "backgroundColor": "#C70039"
    },
    {
        "firstName": "Tim",
        "lastName": "Fischer",
        "email": "tim.fischer@example.com",
        "phoneNumber": "0123456795",
        "password": "iloveyou",
        "backgroundColor": "#900C3F"
    }
]



// ------------------------------


taskList =
    [
        {
            "title": "Creating the Board",
            "firstNames": [
                "Florian",
                "Hannah"
            ],
            "lastNames": [
                "Schmidt",
                "Wagner"
            ],
            "dueDate": "2023-03-02",
            "category": "Marketing",
            "categoryColor": "#de493e",
            "priority": "Urgent",
            "description": "A lot of Work at the Board Area",
            "subtasks": [
                "Coding all day long",
                "24/7 coding",
                "eat, sleep, code, repeat"
            ],
            "subtasksState": [
                false,
                false,
                false
            ]
        },
        {
            "title": "Develop the Tasks",
            "firstNames": [
                "Julia",
                "Hannah",
                "Sophie"
            ],
            "lastNames": [
                "Schneider",
                "Wagner",
                "Hartmann"
            ],
            "dueDate": "",
            "category": "Finance",
            "categoryColor": "#259b24",
            "priority": "Medium",
            "description": "Getting the Tasks started",
            "subtasks": [
                "Coding all day long",
                "Create new icons",
                "Subtask 1"
            ],
            "subtasksState": [
                true,
                true,
                false
            ]
        },
        {
            "title": "Javascript overflow",
            "firstNames": [
                "Tim",
                "Sophie",
                "Sabine",
                "Hannah",
                "Florian"
            ],
            "lastNames": [
                "Fischer",
                "Hartmann",
                "Meyer",
                "Wagner",
                "Schmidt"
            ],
            "dueDate": "2023-03-24",
            "category": "Human Resources",
            "categoryColor": "#9c27b0",
            "priority": "Low",
            "description": "That's the Way!",
            "subtasks": [
                "Coding all day long",
                "Create new icons"
            ],
            "subtasksState": [
                true,
                false
            ]
        }
    ]