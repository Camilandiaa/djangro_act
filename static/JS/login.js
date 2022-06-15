$(function(){
    $("#boton_registro").click(function(){

        var usuario1 = $("#id_usuario").val();
        var pass = $("#id_pass").val();

        if (usuario1 == "admin"){
            if(pass == 1234){
                alert("usuario buenardo ")
            }
            else{
                alert("usuario o contraseña incorrecto")
            }
        }
        else{
            alert("usuario o contraseña incorrecto") 
        }



    })
});