/* 

    Desafío - Incorporando librerías
    Alumno: Marco Valdés

*/
// Variable que toma ultimopais desde el localStorage:
let antiguoUsuario = localStorage.getItem('ultimopais')
// Comprueba si se había consultado un país anteriormente:
if(antiguoUsuario != null) {
    // Si no es la primera visita al sitio, convertimos el objeto a JS:
    let visitaAnterior = JSON.parse(localStorage.getItem('ultimopais'));
    // Por último da la bienvenida con el último país consultado:
    mensajeBienvenida(visitaAnterior);
}
document.getElementById("numerodepaises").innerHTML = `Actualmente <span>${numeroDePaisesQueRequierenPermiso()}</span> nacionalidades lo requieren`;
// Crea elemento select:
let listadoPaises = document.createElement("select");
// Le añade la clase .selector-pais
listadoPaises.classList.add("selector-pais");
// Agrega primera opción al select de "Selecciona el país" con el valor 0:
listadoPaises.innerHTML = `<option value="0">Selecciona el país</option>`;
// Por cada país agrega un elemento option con el id y el nombre del país:
for(let i = 0; i < paises.length; i++){
    listadoPaises.innerHTML += `<option value="${paises[i].id}">${paises[i].pais}</option>`;
}
// Selecciona el elemento al cual se agregará el elemento:
let header = document.getElementById("header");
// Agrega el elemento al HTML:
header.append(listadoPaises);
// En el caso de existir un cambio en el elemento select:
const paisSeleccionado = document.querySelector('.selector-pais');
paisSeleccionado.addEventListener('change', (evento) => {
// Guardamos el valor de la opción seleccionada en la variable país:
let pais = evento.target.value;
// Si se elige la opción por defecto "Elige el país que emitió el pasaporte" escondemos todo lo que esté fuera del header:        
const seleccionPais = (pais == 0) ? document.getElementById('pais-seleccionado').style.display = "none" : document.getElementById('pais-seleccionado').style.display = "flex";
// Busca el país seleccionado en el Array paises por el ID:
const buscarId = paises.find(elpais => elpais.id == pais);
// Guardamos nombre del país, su bandera y si requiere o no de permiso en un objeto:
const ultimoPaisVisitado = {pais: buscarId.pais, bandera: buscarId.emoji, permiso: buscarId.permiso};
// Lo transformamos en un objeto en formato JSON:
const enJSON = JSON.stringify(ultimoPaisVisitado);
// Guardamos el objeto en el localStorage:
localStorage.setItem('ultimopais', enJSON)
// Modifica src de bandera:
let banderaPais = document.getElementById("bandera-pais");
banderaPais.src = `img/banderas/${buscarId.bandera}`;
// Modifica nombre del país:
let tituloPais = document.getElementById("nombre-pais");
tituloPais.innerHTML = `${buscarId.pais.toLocaleUpperCase()}`;
let descripcionPais = document.getElementById("descripcion-pais");
// Variable que contiene el valor de la propiedad permiso -> si: requiere / no: no requiere
let requiereVisa = buscarId.permiso;
// Constante que comprueba si el país se encuentra acogido al Convenio Alianza Pacífico:
const cap = paisesCap.includes(buscarId.id);
// Si el país no requiere de permiso previo, imprime lo siguiente:
if(requiereVisa === 'no' && buscarId.id !== 7) {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>no requerirás</strong> de autorización previa o visa para ingresar al país.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em> se te otorgará un permiso de permanencia transitoria al momento de ingresar al país.</p>
                                 <ul>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si el país seleccionado requiere permiso previo pero se encuentra exento de visa previa si el extranjero cuenta con Residencia Definitiva en alguno de los países del Convenio Alianza Pacífico, imprime lo siguiente:
else if(cap === true) {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país, salvo que seas titular de residencia permanente vigente en Colombia, México o Perú, en cuyo caso estarás exento del requisito de autorización previa o visa (Convenio Alianza del Pacífico) y se te otorgará un permiso de permanencia transitoria al ingresar al país.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, y no eres titular de residencia definitiva vigente en Colombia, México o Perú, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si se selecciona Antillas Holandesas imprime lo siguiente:
else if(pais == 7) {
    descripcionPais.innerHTML = `<p class="p-justify"><strong>No requerirás</strong> de permiso previo o visa para ingresar a Chile. A Aruba, Bonaire, Curazao, Saba, San Eustaquio y San Martín se le aplican las mismas condiciones que a nacionales de Países Bajos.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p> 
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em> se te otorgará un permiso de permanencia transitoria al momento de ingresar al país.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si el país es China (id: 37), imprime lo siguiente:
else if(pais == 37) {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país, salvo que seas titular de una Visa de Turismo otorgada por Canadá o por Estados Unidos <em>(todos los tipos de Visas otorgadas, excepto la Visa C)</em> con a lo menos 6 meses de vigencia, o Green Card, en cuyo caso estarás exento del requisito de autorización previa o visa.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>      
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, y no eres titular de una Visa de Turismo otorgada por Canadá o por Estados Unidos <em>(todos los tipos de Visas otorgadas, excepto la Visa C)</em> con a lo menos 6 meses de vigencia, o Green Card, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si el país es India (id: 79) o República Dominicana (id: 153), imprime lo siguiente:
else if(pais == 79 || pais == 153) {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país, salvo que seas titular de una Visa otorgada por Estados Unidos <em>(Todos los tipos excepto la Visa C)</em> con a lo menos 6 meses de vigencia, o Green Card, en cuyo caso estarás exento del requisito de autorización previa o visa.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, y no eres titular de una Visa otorgada por Estados Unidos <em>(Todos los tipos excepto la Visa C)</em> con a lo menos 6 meses de vigencia, o Green Card, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (US$): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (días): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si el país es Australia (id: 12), imprime lo siguiente:
else if(pais == 12) {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (US$): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (días): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si el país es Venezuela (id: 196)
else if (pais == 196) {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país, salvo que seas titular de Residencia Definitiva vigente en Argentina, en cuyo caso estarás exento del requisito de autorización previa o visa.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, y no eres titular de Residencia Definitiva vigente en Argentina, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Si el país requiere de permiso previo o visa y no existen excepciones, imprime lo siguiente:
else {
    descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país.</p>
                                 <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                 <h3>TURISMO</h3>
                                 <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                 <ul>
                                    <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                    <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                    <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                    <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                    <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                 </ul>
                                 <p class="p-justify"><strong>Fuente:</strong> <a href="https://www.diariooficial.interior.gob.cl/publicaciones/2020/05/14/42655/01/1760615.pdf" target="_blank">Resolución Exenta N° 1.542 de 2020 del Ministerio de Relaciones Exteriores de Chile - Fija cuadro de aranceles de visas y vistos de turismo otorgados en el extranjero</a>.</p>`;
}
// Agregamos lo siguiente a cualquiera de las nacionalidades:
descripcionPais.innerHTML += `<h4>Prorrogar un permiso de permanencia transitoria</h4>
                              <p class="p-justify">El permiso de permanencia transitoria puede prorrogarse por un período adicional de hasta 90 días.</p> 
                              <p class="p-justify">Si deseas extender tu estadía en Chile como titular de un permiso de permanencia transitoria, debes realizar el trámite de "Solicitud Prórroga de Permanencia Transitoria" a través del <a href="https://tramites.serviciomigraciones.cl" target="_blank">sitio web de trámites digitales del Servicio Nacional de Migraciones</a>, <strong>antes del vencimiento del permiso original</strong>.</p>
                              <p class="p-justify">La prórroga del permiso de permanencia transitoria tiene un costo de US$100.</p>
                              <ul>
                                <li><a href="https://serviciomigraciones.cl/permanenciatransitoria/prorrogadepermanenciatransitoria/" target="_blank">Requisitos para solicitar la prórroga de un Permiso de Permanencia Transitoria</a>.</li>
                                </ul>
                              <h4>Trabajar con un permiso de permanencia transitoria</h4>
                              <p class="p-justify">Quienes sean titulares de un Permiso de Permanencia Transitoria podrán solicitar un permiso de trabajo, ya sea antes o después de su ingreso a Chile.</p> 
                              <p class="p-justify">El permiso de trabajo podrá otorgarse siempre que se encuentre vigente el Permiso de Permanencia Transitoria.</p>
                              <ul>
                                <li><a href="https://serviciomigraciones.cl/permanenciatransitoria/permisodetrabajoconpermanenciatransitoria/" target="_blank">Requisitos para solicitar un permiso de trabajo como titular de un Permiso de Permanencia Transitoria</a>.</li>
                              </ul>
                              <h3>RESIDENCIA</h3>
                              <p class="p-justify">Si tu intención es residir y trabajar en Chile, tendrás que postular a alguna de las siguientes subcategorías de residencia temporal:</p>
                              <h4>Subcategorías de residencia temporal</h4>
                              <ul>
                                <li><a href="#" onclick="reunificacionFamiliar();">Permiso de reunificación familiar</a>.</li>
                                <li><a href="#" onclick="actividadesRemuneradas();">Permiso para extranjeros que desarrollan actividades lícitas remuneradas</a>.</li>
                                <li><a href="#" onclick="permisoEstudios();">Permiso para extranjeros que busquen establecerse en el país con el objetivo de estudiar en establecimientos educacionales reconocidos por el Estado</a>.</li>
                                <li><a href="#" onclick="trabajadoresTemporada();">Permiso para trabajadores de temporada</a>.</li>
                              </ul>`;
// Variable que toma el nombre del país seleccionado:
let nombrePais = buscarId.pais;
// Solo si el país seleccionado mantiene acuerdo con Chile se muestra la opción de permiso de residencia temporal por acuerdos internacionales:
if(acuerdosInternacionales.filter(a => a.pais === nombrePais).length > 0) {
    const encontroCoincidencia = acuerdosInternacionales.find(acuerdo => acuerdo.pais === nombrePais)
    console.log(encontroCoincidencia.acuerdo)
    descripcionPais.innerHTML += `<ul><li><a href="#" onclick="permisoAcuerdosInternacionales();">Permiso para personas acogidas a acuerdos internacionales</a>: ${encontroCoincidencia.acuerdo} <a href="${encontroCoincidencia.url}" target="_blank">(Haz clic aquí para ir al Acuerdo)</a>.</li></ul>`;
}
// Por último se agrega el resto de las opciones y los botones con las opciones Si - con vínculo - No - sin vinculo:
descripcionPais.innerHTML += `<ul><li><a href="#" onclick="permisoReligiosos();">Permiso para religiosos de cultos reconocidos oficialmente</a>.</li>
                                <li><a href="#" onclick="tratamientosMedicos();">Permiso para extranjeros que se encuentren bajo tratamientos médicos</a></li>
                                <li><a href="#" onclick="permisoJubilados();">Permiso para jubilados</a>.</li>
                                <li><a href="#" onclick="permisoRentistas();">Permiso para rentistas</a>.</li>
                                <li><a href="#" onclick="permisoExResidentes();">Permiso para ex titulares de residencia definitiva</a>.</li>
                                <li><a href="#" onclick="permisoInversionistas();">Permiso para inversionistas y personal relacionado</a>.</li>
                                <li><a href="#" onclick="multipleEntrada();">Permiso de negocios de múltiple entrada</a>.</li>
                              </ul>
                              <h4>Forma de solicitud</h4>
                              <p class="p-justify">¿Te encuentras en alguno de los siguientes casos?</p>
                              <ul>
                                <li>a) Soy cónyuge o conviviente civil de chileno o de residente definitivo en Chile.</li>
                                <li>b) Soy padre o madre de chileno o de residente definitivo en Chile.</li>
                                <li>c) Soy hijo de chileno o de residente definitivo en Chile, y tengo menos de 18 años.</li>
                                <li>d) Soy hijo de chileno o de residente definitivo en Chile, y poseo algún tipo de discapacidad.</li>
                                <li>e) Soy hijo de chileno o de residente definitivo en Chile, soy mayor de 18 años pero menor de 24, mi estado civil es de soltero, y me encuentro estudiando en un establecimiento educacional reconocido por el Estado de Chile.</li>
                                <li>f) Soy menor de 18 años y me encuentro bajo el cuidado personal o curaduría de chileno o de residente definitivo en Chile.</li>
                               </ul>
                               <div id="radiobtn">
                               <div id="radiobtn1"><input type="radio" name="tab" value="conVinculo" onclick="conVinculo();"> Si</div>
                               <div id="radiobtn2"><input type="radio" name="tab" value="sinVinculo" onclick="sinVinculo();"> No</div>
                               </div>  
                               <p id="resultado" class="p-justify"></div>`;
});

// Determina el número de países que requieren un permiso para ingresar a Chile:
function numeroDePaisesQueRequierenPermiso() {
    let totalReqVis = 0;
    paises.forEach((requieren) => {
    if(requieren.permiso == "si") {
        totalReqVis++;
    }
})
return totalReqVis;
}
// Función que calcula el costo del permiso de residencia temporal en pesos chilenos (CLP$)
const costo = (valor) => {
    return valor * 950; // CLP$866 = USD$1 
}
// Despliega caja de texto con el mensaje dirigido al extranjero que cuenta con vínculo con chileno o con residente definitivo:
function conVinculo(){
    let resultadoRadio = document.getElementById("resultado");
    resultadoRadio.style.backgroundColor = "#ededed";
    resultadoRadio.innerHTML = `<strong>Podrás solicitar un permiso de residencia temporal desde el extranjero o dentro de Chile</strong>
                                <p class="p-justify">Si tienes alguno de los vínculos mencionados anteriormente respecto de chileno o de residente definitivo en Chile, podrás postular a un permiso de residencia temporal ya sea desde el extranjero o dentro de Chile (si te encuentras en el país con un permiso de permanencia transitoria vigente):</p>
                                <ul>
                                <li>Si postulas desde el extranjero, podrás optar a cualquiera de las subcategorías de residencia temporal.</li>
                                <li>Si postulas dentro de Chile con un permiso de permanencia transitoria vigente, <strong>solo podrás postular a la subcategoría de residencia temporal por reunificación familiar</strong>.</li>
                                </ul>
                                <p class="p-justify">La postulación se realiza de manera digital a través del <a href="https://tramites.serviciomigraciones.cl" target="_blank">sitio web de trámites digitales del Servicio Nacional de Migraciones</a>.</p>
                                <ul>
                                <li>Si la postulación se realiza desde el extranjero, el trámite a realizar recibe el nombre de "Solicitud de Residencias Temporales para extranjeros fuera de Chile".</li>
                                <li>Si se postula a un permiso de residencia temporal por reunificación familiar dentro de Chile, el trámite a realizar recibe el nombre de "Solicitud de Residencias Temporales para extranjeros dentro de Chile".</li> 
                                </ul>
                                <p class="p-justify">Para solicitar un permiso de residencia temporal debes crear una cuenta en el sitio web del Servicio Nacional de Migraciones. <a href="https://immichile.cl/como-crear-una-cuenta-en-el-sitio-web-de-tramites-digitales-del-servicio-nacional-de-migraciones/" target="_blank">Haz clic aquí</a> para conocer descubrir como hacerlo.</p>`
}
// Despliega caja de texto con el mensaje dirigido al extranjero que NO cuenta con vínculo con chileno o con residente definitivo:
function sinVinculo(){
    let resultadoRadioBtn = document.getElementById("resultado");
    resultadoRadioBtn.style.backgroundColor = "#ededed";
    resultadoRadioBtn.innerHTML = `<strong>Deberás solicitar un permiso de residencia temporal desde el extranjero</strong>
                                   <p class="p-justify">Si no cuentas con vínculo con chileno o con residente definitivo, tendrás que postular a alguna de las subcategorías residencia temporal desde el extranjero realizando el trámite de "Solicitud de Residencias Temporales para extranjeros fuera de Chile"</em>. Lo anterior, por aplicación de los <a href="https://www.bcn.cl/leychile/navegar?idNorma=1158549" target="_blank">artículos 58 y 69 de la Ley N° 21.325 </a> (imposibilidad de postular dentro de Chile en caso de no poder acreditar vínculo con chileno o residente definitivo o no encontrarse dentro de los otros casos de excepción).</p>
                                   <p class="p-justify">La postulación desde el extranjero se realiza de manera digital a través del <a href="https://tramites.serviciomigraciones.cl" target="_blank">sitio web de trámites digitales del Servicio Nacional de Migraciones</a>.</p> 
                                   <p class="p-justify">Para solicitar un permiso de residencia temporal debes crear una cuenta en el sitio web del Servicio Nacional de Migraciones. <a href="https://immichile.cl/como-crear-una-cuenta-en-el-sitio-web-de-tramites-digitales-del-servicio-nacional-de-migraciones/" target="_blank">Haz clic aquí</a> para conocer descubrir como hacerlo.</p>`
}
// Uso de SPREAD y Math.max:
const precioResidencia = paises.map(function(elprecio) {
    return `${elprecio.costoResidencia}`;
})
console.log('El costo del permiso de residencia más caro asciende a $' + Math.max(...precioResidencia) + ' dólares de los Estados Unidos.');
// Desestructuración:
for(const {pais: p, emoji: e} of paises)
{
    console.log('Pais: ' + p + ' || Bandera: ' + e);
}