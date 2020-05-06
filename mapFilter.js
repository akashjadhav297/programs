function getShortMessages(messages){
    messages = messages.filter(x=> x.message.length<50);
    newMessages = messages.map(x=> x.message)
    //console.log(messages);
    console.log(newMessages);
}

var messages = [
    {
        message:'Testing aaaaaaaaaaaaaa'
    },
    {
        message:'testing bbbbbbbbbbbbbb'
    },
    {
        message:'Testing cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'
    }
]
getShortMessages(messages);