# AppInBrowser
View URL in App cordova

---------------------------------------

Instalar Apache Cordova:
npm install -g cordova

Instalar F7:
npm install framework7

Crear un proyecto App:
cordova create app7 template f7 v367 cordova create WithYou com.WithYou.app WithYou template f7 v367

Añadir plataformas:
cordova platform add android (Tener instalado androidStudio+sdk) cordova platform add ios cordova platform add browser

Dentro de la carpeta proyecto:
cordova serve -p 3000 –localtunnel

Método alternativo: cordova emulate browser cordova emulate Android (tener instalado androidStudio+sdk) cordova emulate ios

Se genera el apk del proyecto, para poderlo instalar "a mano". cordova build Android cordova build ios (Para compilar es necesio Ios->XCode) Para hacer pruebas rápidas con cualquier emulador de server local se puede probar (las funciones cordova no estarían disponibles. Ej.: Plugins y configuraciones del entorno.)

¿Como lo instalo?
Mirate este video de un pelado que te dice.
https://www.youtube.com/watch?v=mJpsyNdZ1oY

Doc de framework7:
https://v3.framework7.io/docs/app

Doc. de Cordova:
https://cordova.apache.org/plugins/
