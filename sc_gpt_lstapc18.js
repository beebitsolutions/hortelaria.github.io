    (function () {
        var carga_gpt = function () {
            console.log('carga_gpt.js');

            var element = document.createElement('script');
            var posicionscript = document.getElementsByTagName('script')[0];
            var url = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
            element.async = true;
            element.type = 'text/javascript';
            element.src = url;


            console.log(posicionscript);

            posicionscript.parentNode.insertBefore(element, posicionscript);
        };
        // Revisamos el consentimiento cada 0.1s
        var contador = 0;
        var intervaloConsentimiento = setInterval(function () {
            contador += 1;
            // Si no responde en 60 segundos
            if (contador === 600)
                clearInterval(intervaloConsentimiento);
            if (typeof window.__tcfapi !== 'undefined') { // Check if window.__tcfapi has been set
                clearInterval(intervaloConsentimiento);
                window.__tcfapi('addEventListener', 2, function (tcData, isOk) {
                    if (isOk) {
                        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
                            if (!tcData.gdprApplies) {

                                carga_gpt();
                            }
                            else {
                                // REVISAMOS CONSENTIMIENTO Purpose 1 de almacenamiento y acceso de datos
                                var tieneConsentimientoAlmacenamientoyAccesoDatos = tcData.purpose.consents[1] || false;
                                if (tieneConsentimientoAlmacenamientoyAccesoDatos) {
                                    // Revisamos consentimiento del id de google (el 755 en el iab)  https://iabeurope.eu/vendor-list-tcf-v2-0/
                                    var tieneConsentimientoGoogle = tcData.vendor.consents[755] || false;
                                    if (tieneConsentimientoGoogle) {
                                        // Insertamos
                                        carga_gpt();
                                    }
                                }
                            }
                        }
                    }
                });
            }
            contador++;
        }, 100);
    })();