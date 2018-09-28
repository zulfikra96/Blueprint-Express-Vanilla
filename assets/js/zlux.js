function views(view)
{
    document.getElementById('App').innerHTML = view
}


function eventListener(args,callback)
{
    if(callback) callback(args)
}


