let inpNewTask = $('#inpNewTask')
let btnadd = $('#btnadd')
let btnReset = $('#btnReset')
let btnclear = $('#btnclear')
let btnSort=$('#btnSort')
let ultask = $('#ultask')
function sorti () {
    $('#ultask .done').appendTo(ultask)
}
function additem () {
    let itemlist =  $('<li>',{
        'class':'list-group-item',
         text : inpNewTask.val()
        
        })
        itemlist.click(()=>{
            itemlist.toggleClass('done')
        })
    ultask.append(itemlist)
    inpNewTask.val('')
}
function clearDone() {
    $('#ultask.done').remove()
}

inpNewTask.keypress((event)=>{
    if(event.which==13){
        additem()
    }
})
btnadd.click(additem)
btnSort.click(sorti)
btnclear.click(clearDone)
