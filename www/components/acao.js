// This is a JavaScript file

$(document).on('click',"#alertaUm",function(){
   navigator.notification.alert("Mensagem de alerta 1");

});

$(document).on('click',"#alertaDois",function(){
  function retorno(){

  }
   navigator.notification.alert("Mensagem de alerta 2", retorno,"Aviso","Blz" );
   
});
$(document).on('click',"#alertaTres",function(){
   function onConfirm(buttonIndex){
     if(buttonIndex == 1){
      navigator.notification.alert('Escolheu a opção sim!');
   }else{
      navigator.notification.alert('Escolheu a opção não!');
   }
   }

   navigator.notification.confirm("Escolha sim ou não!",onConfirm,"Escolha", ['Sim','Não']);

});
$(document).on('click',"#alertaQuatro",function(){
  navigator.notification.beep(2);

});
$(document).on('click',"#codigoBarra",function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Falha na leitura do código: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

});

