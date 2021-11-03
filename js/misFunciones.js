function traerInformacionRoom(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaRoom(respuesta.items)
        }

    });
}


function pintarRespuestaRoom(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].room+"</td>";
        myTable+="<td>"+items[i].stars+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementoRoom("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}

function guardarInformacionRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            traerInformacionRoom();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            traerInformacionRoom();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoRoom(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionRoom();
            alert("Se ha Eliminado.")
        }
    });
}

function traerInformacionClient(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta.items)
        }

    });
}


function pintarRespuestaClient(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoClient("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}

function guardarInformacionClient(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionClient(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClient();
            alert("Se ha Eliminado.")
        }
    });
}

function traerInformacionMessage(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta.items)
        }

    });
}


function pintarRespuestaMessage(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}

function guardarInformacionMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMessage();
            alert("Se ha Eliminado.")
        }
    });
}

