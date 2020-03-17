$(function(){
    initLoad();
    $.ajax({
        data:{},
        url: 'https://demo.danidoble.com/apigallery/api/image?api_token=uic7Jg4meK8QGfLA0Mm11yPS2EjpTXSFxuTynkVipfj5682Ln44UX2hNbHvV',
        type: 'GET',
        dataType: 'json',
        beforeSend: function(){
            console.log("Solicitando imagenes");
        },
        success: function(data){
            if(data.error == false){
                $.each(data.images,function(index,val){
                    $("#flex").append('<div class="m-1"><img class="lazyload responsive-img materialboxed" src="img/loading.png" data-src="'+val.url+'" alt="'+val.categorias+'"></div>');
                });
            }
            initLoad();
        }
    });
})
function initLoad(){
    lazyload();
    $('.materialboxed').materialbox();
}