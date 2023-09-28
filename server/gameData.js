const gameData = [
    {id:0,title:"George Washington",legend:"First president of the United States of America",img:"gwash",link:1,question:"Which location provided the final blow to The British and King George III's rule in America in the American Revolutionary War",answers:[
        {correct:true,answer:"Yorktown"},
        {correct:false,answer:"Saratoga"},
        {correct:false,answer:"Rhode Island"},
        {correct:false,answer:"Gettysburg"}
    ]},
    {id:1,title:"King George III",legend:"British King from 1760 to 1820",img:"george3",link:0,question:"Which location provided the final blow to The British and King George III's rule in America in the American Revolutionary War",answers:[
        {correct:true,answer:"Yorktown"},
        {correct:false,answer:"Saratoga"},
        {correct:false,answer:"Rhode Island"},
        {correct:false,answer:"Gettysburg"}
    ]},
    {id:2,title:"Henry VIII",legend:"King of England from 1509 to 1547",img:"henry8",link:3,question:"King Henry married Catherine of Aragorn, when his brother, her husband, died. Who was his brother?",answers:[
        {correct:false,answer:"Prince John"},
        {correct:false,answer:"Prince Edward"},
        {correct:true,answer:"Prince Arthur"},
        {correct:false,answer:"Prince Charles"}
    ]},
    {id:3,title:"Catherine of Aragorn",legend:"First wife of King Henry VIII",img:"catha",link:2,question:"King Henry married Catherine of Aragorn, when his brother, her husband, died. Who was his brother?",answers:[
        {correct:false,answer:"Prince John"},
        {correct:false,answer:"Prince Edward"},
        {correct:true,answer:"Prince Arthur"},
        {correct:false,answer:"Prince Charles"}
    ]},
    {id:4,title:"William I the Conqueror",legend:"King of England from 1066 to 1087",img:"wills1",link:5,question:"King Harold lasted less than a year as King, and was succeeded by William, but which King directly preceded the two combatants",answers:[
        {correct:false,answer:"King George IV"},
        {correct:false,answer:"King Canute"},
        {correct:false,answer:"King Alfred the Great"},
        {correct:true,answer:"King Edward the Confessor"}
    ]},
    {id:5,title:"King Harold II",legend:"British King in 1066",img:"harold",link:4,question:"King Harold lasted less than a year as King, and was succeeded by William, but which King directly preceded the two combatants",answers:[
        {correct:false,answer:"King George IV"},
        {correct:false,answer:"King Canute"},
        {correct:false,answer:"King Alfred the Great"},
        {correct:true,answer:"King Edward the Confessor"}
    ]},
    {id:6,title:"Leonardo Da Vinci",legend:"Painter, draughtsman, engineer, scientist, theorist, sculptor, and architect during the Renaissance",img:"leovi",link:7,question:"Two of the most feted artists of their own and of any time period, each famously despised the other. Which of the following works was not produced by either artist",answers:[
        {correct:false,answer:"The Last Supper"},
        {correct:true,answer:"The Birth of Venus"},
        {correct:false,answer:"The Creation of Adam"},
        {correct:false,answer:"Vitruvian Man"}
    ]},
    {id:7,title:"Michelangelo",legend:" Italian sculptor, painter, architect, and poet during the Renaissance",img:"michel",link:6,question:"Two of the most feted artists of their own and of any time period, each famously despised the other. Which of the following works was not produced by either artist",answers:[
        {correct:false,answer:"The Last Supper"},
        {correct:true,answer:"The Birth of Venus"},
        {correct:false,answer:"The Creation of Adam"},
        {correct:false,answer:"Vitruvian Man"}
    ]},
    {id:8,title:"Karl Marx",legend:"German Philospher (1818 to 1883)",img:"kmarx",link:9,question:"Two of the most influential philosphers of all time, but which work was not written by either",answers:[
        {correct:false,answer:"Das Kapital"},
        {correct:true,answer:"The Republic"},
        {correct:false,answer:"Nihilism"},
        {correct:false,answer:"Ubermensch"}
    ]},
    {id:9,title:"Friedrich Nietzsche",legend:"German Philosopher (1844 to 1900)",img:"neitz",link:8,question:"Two of the most influential philosphers of all time, but which work was not written by either",answers:[
        {correct:false,answer:"Das Kapital"},
        {correct:true,answer:"The Republic"},
        {correct:false,answer:"Nihilism"},
        {correct:false,answer:"Ubermensch"}
    ]},
    {id:10,title:"King George I",legend:"King of England from 1714 to 1727",img:"g1",link:11,question:"The first four King Georges of England ruled in succession, but which George was reputed to have gone mad",answers:[
        {correct:false,answer:"King George I"},
        {correct:false,answer:"King George II"},
        {correct:true,answer:"King George III"},
        {correct:false,answer:"King George IV"}
    ]},
    {id:11,title:"King George IV",legend:"King of England from 1820 to 1830",img:"g4",link:10,question:"The first four King Georges of England ruled in succession, but which George was reputed to have gone mad",answers:[
        {correct:false,answer:"King George I"},
        {correct:false,answer:"King George II"},
        {correct:true,answer:"King George III"},
        {correct:false,answer:"King George IV"}
    ]},
    {id:12,title:"Julius Caesar",legend:"Roman general and dictator",img:"jc",link:13,question:"These two prominent Romans went from friends to rivals with fatal consequences, but who popularised the line 'Et Tu Brutus'",answers:[
        {correct:false,answer:"Mary Shelly"},
        {correct:false,answer:"William Wordsworh"},
        {correct:false,answer:"Charles Dickens"},
        {correct:true,answer:"William Shakespeare"}
    ]},
    {id:13,title:"Marcus Junius Brutus",legend:"Roman Politician and Orator",img:"brut",link:12,question:"These two prominent Romans went from friends to rivals with fatal consequences, but who popularised the line 'Et Tu Brutus'",answers:[
        {correct:false,answer:"Mary Shelly"},
        {correct:false,answer:"William Wordsworh"},
        {correct:false,answer:"Charles Dickens"},
        {correct:true,answer:"William Shakespeare"}
    ]},
    {id:14,title:"Queen Elizabeth I",legend:"Queen of England from 1558 to 1603",img:"qe1",link:15,question:"Cousins and rulers at the same time, the two never met, although they had a profound effect on each other. Which of the following events did not happen in the Elizabethan Era",answers:[
        {correct:false,answer:"The Great Fire of London"},
        {correct:true,answer:"The Guy Fawkes Plot"},
        {correct:false,answer:"The Spanish Armada"},
        {correct:false,answer:"The Colonisation of North America"}
    ]},
    {id:15,title:"Mary Queen of the Scots",legend:"Queen of Scotland from 1542 to 1587",img:"mqs",link:14,question:"Cousins and rulers at the same time, the two never met, although they had a profound effect on each other. Which of the following events did not happen in the Elizabethan Era",answers:[
        {correct:false,answer:"The Great Fire of London"},
        {correct:true,answer:"The Guy Fawkes Plot"},
        {correct:false,answer:"The Spanish Armada"},
        {correct:false,answer:"The Colonisation of North America"}
    ]},
    {id:16,title:"Neil Armstrong",legend:"The first man on the moon",img:"na",link:17,question:"The first man in space and the first man on the moon. But which man made object has travelled the furthest from the Earth",answers:[
        {correct:true,answer:"Voyager 1"},
        {correct:false,answer:"Voyager 2"},
        {correct:false,answer:"Voyager 3"},
        {correct:false,answer:"Voyager 4"}
    ]},
    {id:17,title:"Yuri Gagarin",legend:"The first man in space",img:"yg",link:16,question:"The first man in space and the first man on the moon. But which man made object has travelled the furthest from the Earth",answers:[
        {correct:true,answer:"Voyager 1"},
        {correct:false,answer:"Voyager 2"},
        {correct:false,answer:"Voyager 3"},
        {correct:false,answer:"Voyager 4"}
    ]},
    {id:18,title:"King James I",legend:"King of England from 1603 to 1625",img:"c2",link:19,question:"Four Stuart Kings ruled England, but which one lost his head",answers:[
        {correct:false,answer:"James I"},
        {correct:true,answer:"Charles I"},
        {correct:false,answer:"Charles II"},
        {correct:false,answer:"James II"}
    ]},
    {id:19,title:"King Charles II",legend:"King of England from 1630 to 1649",img:"j1",link:18,question:"Four Stuart Kings ruled England, but which one lost his head",answers:[
        {correct:false,answer:"James I"},
        {correct:true,answer:"Charles I"},
        {correct:false,answer:"Charles II"},
        {correct:false,answer:"James II"}
    ]}
];
module.exports = gameData;