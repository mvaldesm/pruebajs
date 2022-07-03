/* 

    Desafío - Segunda entrega
    Alumno: Marco Valdés

*/
    document.getElementById("numerodepaises").innerHTML = `Actualmente <span>${numeroDePaisesQueRequierenPermiso()}</span> pasaportes lo requieren`;
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
    if(pais == 0){
        document.getElementById('pais-seleccionado').style.display = "none";
    }
    // Si se selecciona un país hace visible el contenedor pais-seleccionado: 
    else {
        document.getElementById('pais-seleccionado').style.display = "flex";
    }
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
                                     </ul>`;
        }
        // Si el país seleccionado requiere permiso previo pero se encuentra acogido al Convenio Alianza Pacífico imprime lo siguiente:
        else if(cap === true) {
            descripcionPais.innerHTML = `<p class="p-justify">Si deseas viajar a Chile con pasaporte de ${buscarId.pais} <strong>requerirás</strong> de autorización previa o visa para ingresar al país, salvo que seas titular de residencia permanente vigente en Colombia, México o Perú, en cuyo caso estarás exento del requisito de autorización previa o visa (Convenio Alianza del Pacífico).</p>
                                         <p class="p-justify"><a onclick="alertaNivel1()" href="#">Haz clic aquí</a> para conocer los requisitos sanitarios de ingreso a Chile <em>(Plan Fronteras Protegidas)</em>.</p>
                                         <h3>TURISMO</h3>
                                         <p class="p-justify">Si viajas a Chile con fines de recreo o turismo <em>(sin ánimo de residencia)</em>, y no eres titular de residencia definitiva vigente en Colombia, México o Perú, tendrás que solicitar un <strong>Permiso de Permanencia Transitoria</strong> a través del <a href="https://tramites.minrel.gov.cl/Solicitudes/visa.aspx" target="_blank">sitio web de Trámites Consulares del Ministerio de Relaciones Exteriores de Chile</a>.</p>
                                         <ul>
                                            <li><a href="https://serviciosconsulares.cl/tramites/visa-de-permanencia-transitoria" target="_blank">Requisitos para solicitar un Permiso de Permanencia Transitoria</a>.</li>
                                            <li>Vigencia del permiso de permanencia transitoria simple (días): ${buscarId.estadiaSimple}.</li>
                                            <li>Costo del permiso de permanencia transitoria simple (US$): ${buscarId.costoSimple}.</li>
                                            <li>Vigencia del permiso de permanencia transitoria múltiple (días): ${buscarId.estadiaMultiple}.</li>
                                            <li>Costo del permiso de permanencia transitoria múltiple (US$): ${buscarId.costoMultiple}.</li>
                                         </ul>`;
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
                                         </ul>`;
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
                                         </ul>`;
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
                                         </ul>`;
        }
        // Si el país es Australia (id: 12), imprime lo siguiente:
        else if(pais == 12){
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
                                         </ul>`;
        }
       // Si el país es Venezuela (id: 196)
       else if (pais == 196){
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
                                            </ul>`;
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
                                        </ul>`;
        }
        // Por último, agregamos lo siguiente:
            descripcionPais.innerHTML += `<h4>Prorrogar un permiso de permanencia transitoria</h4>
                                          <p class="p-justify">El permiso de permanencia transitoria puede prorrogarse por un período adicional de hasta 90 días. Quienes deseen extender su estadía en Chile como titulares de un permiso de permanencia transitoria, deberán realizar el trámite de <strong>"Solicitud Prórroga de Permanencia Transitoria"</strong> a través del <a href="https://tramites.serviciomigraciones.cl" target="_blank">sitio web de trámites digitales del Servicio Nacional de Migraciones</a>, <strong>antes del vencimiento del permiso original</strong>.</p>
                                          <p class="p-justify">La prórroga del permiso de permanencia transitoria tiene un costo de US$100.</p>
                                          <ul>
                                          <li><a href="https://serviciomigraciones.cl/permanenciatransitoria/prorrogadepermanenciatransitoria/" target="_blank">Requisitos para solicitar la prórroga de un Permiso de Permanencia Transitoria</a>.</li>
                                          </ul>
                                          <h4>Trabajar con un permiso de permanencia transitoria</h4>
                                          <p class="p-justify">Quienes sean titulares de un Permiso de Permanencia Transitoria podrán solicitar un permiso de trabajo, ya sea antes o después de su ingreso a Chile. El permiso de trabajo podrá otorgarse siempre que se encuentre vigente el Permiso de Permanencia Transitoria.</p>
                                          <ul>
                                          <li><a href="https://serviciomigraciones.cl/permanenciatransitoria/permisodetrabajoconpermanenciatransitoria/" target="_blank">Requisitos para solicitar un permiso de trabajo como titular de un Permiso de Permanencia Transitoria</a>.</li>
                                          </ul>
                                          <h3>RESIDENCIA</h3>
                                          <p class="p-justify">Si tu intención es residir y trabajar en Chile, tendrás que postular a alguna de las siguientes subcategorías de residencia temporal:</p>
                                          <h4>Subcategorías de residencia temporal</h4>
                                          <ul>
                                            <li><a href="#" onclick="reunificacionFamiliar();">Permiso de reunificación familiar</a>.</li>
                                            <li><a href="#" onclick="actividadesRemuneradas();">Permiso para extranjeros que desarrollan actividades lícitas remuneradas</a>.</li>
                                            <li><a href="#" onclick="permisoEstudios();">Permiso para extranjeros que busquen establecerse en el país con el objetivo de estudiar
                                            en establecimientos educacionales reconocidos por el Estado</a>.</li>
                                            <li><a href="#" onclick="trabajadoresTemporada();">Permiso para trabajadores de temporada</a>.</li></ul>`;

        let nombrePais = buscarId.pais;
        if(acuerdosInternacionales.filter(a => a.pais === nombrePais).length > 0) {
            const encontroCoincidencia = acuerdosInternacionales.find(acuerdo => acuerdo.pais === nombrePais)
            console.log(encontroCoincidencia.acuerdo)
            descripcionPais.innerHTML += `<ul><li><a href="#" onclick="permisoAcuerdosInternacionales();">Permiso para personas acogidas a acuerdos internacionales</a>: ${encontroCoincidencia.acuerdo} <a href="${encontroCoincidencia.url}" target="_blank">(Haz clic aquí para ir al Acuerdo)</a>.</li></ul>`;
        }

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

// Número de países que requieren un permiso para ingresar a Chile:
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
    return valor * 866; // CLP$866 = USD$1 
}

// // Texto a mostrar si Chile se encuentra en Alerta Sanitaria Nivel 1:
const alertaNivel1 = () => {
    // alert("REQUISITOS SANITARIOS DE INGRESO A CHILE (ALERTA NIVEL 1):\n\n1) Declaración Jurada: Todas las personas mayores de 6 años de edad deben completar la Declaración Jurada a través de www.c19.cl hasta 48 horas antes de su embarque.\n2) Cuarentena o aislamiento: Sólo las personas que, al tiempo de ingresar a Chile correspondan a un caso confirmado de COVID-19, deberán cumplir con la medida de aislamiento por 7 días en una residencia sanitaria o en el lugar que la autoridad sanitaria determine.\n3) Test PCR negativo antes de abordar: Opcional.\n4) Test PCR al ingresar a Chile: Aleatorio.\n\nFuente: Resolución Exenta N° 495 del Ministerio de Salud - Plan Fronteras Protegidas.");
    Swal.fire({
        title: '<strong>REQUISITOS SANITARIOS DE INGRESO A CHILE EN <u>ALERTA NIVEL 1</u>:</strong>',
        icon: 'info',
        width: '80%',
        html:
          '<p class="p-justify"><b>1) Declaración Jurada:</b> Todas las personas mayores de 6 años de edad deben completar la Declaración Jurada a través del sitio web <a href="https://www.c19.cl" target="_blank">c19.cl</a> hasta 48 horas antes de su embarque.</p>' +
          '<p class="p-justify"><b>2) Cuarentena o aislamiento:</b> Sólo las personas que, al tiempo de ingresar a Chile correspondan a un caso confirmado de COVID-19, deberán cumplir con la medida de aislamiento por 7 días en una residencia sanitaria o en el lugar que la autoridad sanitaria determine.</p>' +
          '<p class="p-justify"><b>3) Test PCR negativo antes de abordar:</b> Recomendado (Opcional).</p>' +
          '<p class="p-justify"><b>4) Test PCR al ingresar a Chile:</b> Aleatorio.</p>' +
          '<p class="p-justify"><b>5) Homologación de vacunas:</b> No es requisito para ingresar a Chile, pero es necesaria para acceder al <a href="https://www.bcn.cl/leychile/navegar?idNorma=1174714" target="_blank">Pase de Movilidad</a> dentro del país.</p>' +
          '<p class="p-justify"><b>Fuente:</b> <a href="https://www.bcn.cl/leychile/navegar?idNorma=1174715&idParte=10326846" target="_blank">Resolución Exenta N° 495</a> del Ministerio de Salud que aprueba el <b>Plan Fronteras Protegidas</b>.</p>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> ¡OK!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        confirmButtonColor: '#1155cc',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })

}

function conVinculo(){
    let resultadoRadio = document.getElementById("resultado");
    resultadoRadio.style.backgroundColor = "#ededed";
    resultadoRadio.innerHTML = `La postulación se realiza de manera digital a través del <a href="https://tramites.serviciomigraciones.cl" target="_blank">sitio web de trámites digitales del Servicio Nacional de Migraciones</a>. Si tienes alguno de los vínculos mencionados anteriormente respecto de chileno o residente definitivo en Chile, podrás postular a un permiso de residencia temporal desde el extranjero o dentro de Chile con un permiso de permanencia transitoria vigente:
                                <ul>
                                <li>Solicitud desde el extranjero: Podrás postular a cualquiera de las subcategorías de residencia temporal <em>("Solicitud de Residencias Temporales para extranjeros fuera de Chile")</em>.</li>
                                <li>Solicitud dentro de Chile: Solo podrás postular a la subcategoría de residencia temporal por reunificación familiar <em>("Solicitud de Residencias Temporales para extranjeros dentro de Chile")</em>.</li>
                                </ul>
                                <p class="p-justify">Para solicitar un permiso de residencia temporal debes crear una cuenta en el sitio web del Servicio Nacional de Migraciones. <a href="https://immichile.cl/como-crear-una-cuenta-en-el-sitio-web-de-tramites-digitales-del-servicio-nacional-de-migraciones/" target="_blank">Haz clic aquí</a> para conocer descubrir como hacerlo.</p>`
}
function sinVinculo(){
    let resultadoRadioBtn = document.getElementById("resultado");
    resultadoRadioBtn.style.backgroundColor = "#ededed";
    resultadoRadioBtn.innerHTML = `La postulación se realiza de manera digital a través del <a href="https://tramites.serviciomigraciones.cl" target="_blank">sitio web de trámites digitales del Servicio Nacional de Migraciones</a>. Si no cuentas con vínculo con chileno o con residente definitivo, tendrás que postular a alguna de las subcategorías residencia temporal desde el extranjero <em>("Solicitud de Residencias Temporales para extranjeros fuera de Chile")</em>. No será posible solicitar un permiso de residencia temporal dentro de Chile (artículos 58 y 69 de la Ley N° 21.325).
    <p class="p-justify">Para solicitar un permiso de residencia temporal debes crear una cuenta en el sitio web del Servicio Nacional de Migraciones. <a href="https://immichile.cl/como-crear-una-cuenta-en-el-sitio-web-de-tramites-digitales-del-servicio-nacional-de-migraciones/" target="_blank">Haz clic aquí</a> para conocer descubrir como hacerlo.</p>`
}


