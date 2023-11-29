/*=====================================================================================================*/
// Initialize app:let myApp = new Framework7(); or var $$ = Dom7; (rec. global: var $$ = Dom7;)
/*=====================================================================================================*/
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
/*[F7Views]=======================================================================================[App]*/
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'avcapital',
  // App id
  id: 'com.avcapital.app',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  lazy: {
    threshold: 50,
    sequential: false,
  },
  theme: 'md',
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
    },
    {
      path: '/about/',
      url: 'about.html',
    },
  ]
  // ... other parameters
});
var mainView = app.views.create('.view-main');
/*[Animate on scroll library]==================================================================[global]*/
AOS.init();
/*[JSFunction]==================================================================================[index]*/
// Redirecciona en caso de existir datos del usuario en el dispositivo:
function innobite(url) {
  let target = "_self"; // _self abre la URL en la misma instancia del navegador in-app

  // Definir las opciones para el navegador in-app
  let options = "location=no,hidden=no,zoom=no,hardwareback=yes"; // Opciones adicionales del navegador

  // Abre la URL en el navegador in-app con las opciones configuradas
  let browser = cordova.InAppBrowser.open(url, target, options);


  // Puedes agregar manipuladores de eventos para el navegador in-app si es necesario
  browser.addEventListener("loadstart", function (event) {
    console.log("loadstart");
  });

  browser.addEventListener("loadstop", function (event) {
    console.log("loadstop");
  });

  browser.addEventListener("exit", function () {
    navigator.app.exitApp(); // Cierra la aplicación al presionar dos veces el botón de retroceso dentro de un intervalo de 1 segundo
  });
}
/*[JSFunction]=========================================================================================*/
function print(data){
  console.log(data)
}
/*[JSFunction]=========================================================================================*/
// Redirecciona a pantalla de inicio y elimina toda la data del Storage
function closeSession() {
  localStorage.clear();
  sessionStorage.clear();
  // Redireccionar a la página index
  app.views.main.router.navigate('/index/')
}
/*[JSFunction]=========================================================================================*/
// Dado el ID muestra en pantalla nombre de usuario:
/// Param> idHTML, JsonObjet
function printHTML(id, obj) {
  // Obtener el objeto usuario correspondiente al ID
  try {
    $$(id).text(`${obj !== null ? obj : ''} `);
  } catch (e) {
    $$(id).text("");
  }
}
/*[F7-Function]===========================================================================[deviceready]*/
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  AOS.init(); // Inicializar efectos visuales.
  // Ocultar barra de progreso:
  $$('#progress').css('display', 'none');
  $$('#progress').css('visibility', 'hidden');
  document.addEventListener("backbutton", function () {
    let currentPage = $$('.page-current')[0].f7Page;
    let timeVibrate = 150;
    // Verifica si la ruta actual coincide con '/index/'
    if (currentPage && currentPage.route && currentPage.route.path === '/index/') {
      if (currentPage.lastBackButtonPress && (Date.now() - currentPage.lastBackButtonPress) < 1000) {
        navigator.app.exitApp(); // Cierra la aplicación al presionar dos veces el botón de retroceso dentro de un intervalo de 1 segundo
      } else {
        currentPage.lastBackButtonPress = Date.now(); // Almacena el tiempo de la última presión del botón de retroceso
        app.toast.create({
          text: 'Presione nuevamente para salir',
          position: 'center',
          closeTimeout: 1000
        }).open(); // Muestra un mensaje al usuario indicando que presione nuevamente para salir
      }
    } else if (currentPage && currentPage.router && currentPage.router.history.length > 1) {
      currentPage.router.back(); // Navega a la página anterior utilizando el método back() del router de Framework7
      navigator.vibrate(timeVibrate);
    }

  }, false);
  
});
/*[F7-Function]=============================================================================[EventPage]*/
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  AOS.init();
  // InAppBrowser
  innobite('https://avcapital.com.ar/');
  let currentPage = $$('.page-current')[0].f7Page;
  if (currentPage && currentPage.route && currentPage.route.path === '/index/') {
    innobite('https://avcapital.com.ar/app');
  }
});
