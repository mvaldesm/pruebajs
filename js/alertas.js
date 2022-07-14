// Alerta Bienvenida:
function mensajeBienvenida(visitaAnterior) {
  return Swal.fire({
    icon: false,
    title: '¡Nos alegra verte de vuelta!',
    html: 'La última vez consultaste por ' + visitaAnterior.pais + ' ' + visitaAnterior.bandera + ', país que <b>' + visitaAnterior.permiso + ' requiere</b> de permiso previo o visa para ingresar a Chile.',
    confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> ¡OK!',
    confirmButtonColor: '#1155cc'
  })
}
// Alerta Nivel Sanitario en Chile:
const alertaNivel1 = () => {
  Swal.fire({
      title: '<strong>REQUISITOS SANITARIOS DE INGRESO A CHILE EN <u>ALERTA NIVEL 1</u>:</strong>',
      icon: 'info',
      width: '95%',
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
// Alerta permiso de reunificación familiar:
function reunificacionFamiliar() {
    Swal.fire({
        title: '<strong>Permiso de reunificación familiar</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrá acceder a un permiso de residencia temporal por reunificación familiar quien acredite tener alguno de los siguientes vínculos con chileno o con residente definitivo: a) Cónyuge o conviviente civil; b) Padre o madre; c) Hijo menor de 18 años; d) Hijo con discapacidad; e) Hijo soltero menor de 24 años estudiando en un establecimiento reconocido por el Estado; o, f) Menor de 18 años que se encuentre cuidado personal o curaduría.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-reunificacion-familiar/" target="_blank">Más información</a> ',
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
// Alerta permiso para extranjeros que desarrollan actividades lícitas remuneradas:
function actividadesRemuneradas() {
    Swal.fire({
        title: '<strong>Permiso para extranjeros que desarrollan actividades lícitas remuneradas</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso aquellos extranjeros que deseen establecerse en Chile por un tiempo limitado, a fin de desarrollar actividades lícitas remuneradas bajo vínculo de subordinación y dependencia, o por cuenta propia.</p>' +
          '<br><a href="https://immichile.cl/permiso-para-extranjeros-que-desarrollan-actividades-licitas-remuneradas-en-chile/" target="_blank">Más información</a> ',
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
// Alerta permiso para extranjeros que busquen establecerse en el país con el objetivo de estudiar en establecimientos educacionales reconocidos por el Estado:
function permisoEstudios() {
    Swal.fire({
        title: '<strong>Permiso para extranjeros que busquen establecerse en el país con el objetivo de estudiar en establecimientos educacionales reconocidos por el Estado</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso de residencia temporal aquellos extranjeros que tengan interés en establecerse en el país con el objetivo de estudiar en establecimientos educacionales reconocidos por el Estado.</p>' +
          '<br><a href="https://immichile.cl/permiso-para-extranjeros-que-busquen-establecerse-en-el-pais-con-el-objetivo-de-estudiar-en-establecimientos-educacionales-reconocidos-por-el-estado/" target="_blank">Más información</a> ',
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
// Alerta permiso para trabajadores de temporada
function trabajadoresTemporada() {
    Swal.fire({
        title: '<strong>Permiso para trabajadores de temporada</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Este permiso se otorgará a extranjeros que tengan intención de ingresar a Chile para desempeñar trabajos estacionales específicos por períodos limitados, únicos o interanuales, de conformidad con lo dispuesto en el artículo 162 de la ley N° 21.325, y en tanto exista disponibilidad de permisos conforme a la cantidad que se estime pertinente otorgar, todo en concordancia con la Política Nacional de Migración y Extranjería, con el objeto de atender las distintas necesidades sociales o económicas del país.</p>' +
          '<br><a href="https://serviciomigraciones.cl/residenciatemporal/trabajadoresdetemporada/" target="_blank">Más información</a> ',
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
// Alerta permiso para personas acogidas a acuerdos internacionales:
function permisoAcuerdosInternacionales() {
    Swal.fire({
        title: '<strong>Permiso para personas acogidas a acuerdos internacionales</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán optar a este permiso los nacionales o residentes, según proceda, de aquellos Estados partes de acuerdos internacionales celebrados por Chile y que se encuentren vigentes, en virtud de los cuales deba autorizarse a dichas personas a residir en el país. Los requisitos y efectos de los permisos en cuestión serán aquellos que se hayan establecido en el acuerdo o tratado que resulte aplicable al extranjero de que se trate. La misma regla se observará respecto de la posibilidad de solicitar el permiso desde el extranjero o en territorio nacional.</p>' +
          '<br><a href="https://immichile.cl/permiso-para-personas-acogidas-a-acuerdos-internacionales/" target="_blank">Más información</a> ',
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
// Alerta permiso para religiosos de cultos reconocidos oficialmente:
function permisoReligiosos() {
    Swal.fire({
        title: '<strong>Permiso para religiosos de cultos reconocidos oficialmente</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras que pertenezcan a alguna entidad religiosa constituida legalmente en Chile de conformidad con las reglas de la ley N° 19.638, y que necesiten permanecer en el país por razones vinculadas directamente con el ejercicio del culto de que se trate y del ejercicio de las facultades consideradas en el artículo 7° de dicho cuerpo legal.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-residencia-temporal-para-religiosos-de-cultos-reconocidos-oficialmente/" target="_blank">Más información</a> ',
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
// Alerta permiso para extranjeros que se encuentren bajo tratamientos médicos:
function tratamientosMedicos() {
    Swal.fire({
        title: '<strong>Permiso para extranjeros que se encuentren bajo tratamientos médicos</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras que se encuentren bajo tratamientos médicos que deban ser iniciados o continuados ante prestadores institucionales o privados de salud inscritos en los registros de la Superintendencia de Salud y con domicilio en Chile.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-residencia-temporal-para-extranjeros-que-se-encuentren-bajo-tratamientos-medicos/" target="_blank">Más información</a> ',
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
// Alerta permiso para extranjeros jubilados
function permisoJubilados() {
    Swal.fire({
        title: '<strong>Permiso para jubilados</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras que de conformidad con la normativa de su país de residencia hayan obtenido una pensión por jubilación, siempre que ésta permita satisfacer al menos sus necesidades básicas durante su estancia en el país, según los indicadores estimados por el Ministerio de Desarrollo Social y Familia.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-residencia-temporal-para-jubilados/" target="_blank">Más información</a> ',
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
// Alerta permiso para extranjeros rentistas
function permisoRentistas() {
    Swal.fire({
        title: '<strong>Permiso para rentistas</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras que cuenten con rentas constantes derivadas de la explotación de bienes raíces o activos financieros. En ambos supuestos, la cantidad debe percibirse de manera regular, y servir para satisfacer al menos las necesidades básicas del requirente durante su estancia en el país, según los indicadores estimados por el Ministerio de Desarrollo Social y Familia.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-residencia-temporal-para-rentistas/" target="_blank">Más información</a> ',
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
// Alerta permiso para ex titulares de residencia definitiva
function permisoExResidentes() {
    Swal.fire({
        title: '<strong>Permiso para ex titulares de residencia definitiva</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras que hayan sido en alguna oportunidad titulares de residencia definitiva, o de permanencia definitiva en el caso de aquellos obtenidos bajo el imperio del decreto ley N° 1.094, de 1975, y que les haya sido revocada tácitamente en los términos del artículo 83 de la ley N° 21.325, o del artículo 43 del decreto ley N° 1.094, de 1975.</p>' +
          '<br><a href="https://immichile.cl/permiso-para-ex-titulares-de-residencia-definitiva/" target="_blank">Más información</a> ',
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
// Alerta permiso para inversionistas y personal relacionado:
function permisoInversionistas(){
    Swal.fire({
        title: '<strong>Permiso para inversionistas y personal relacionado</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras, representantes legales y personas que desempeñen funciones gerenciales o de alta dirección en una empresa extranjera, que busquen invertir en Chile por un monto igual o superior a quinientos mil dólares de Estados Unidos de Norteamérica o su equivalente en otras monedas, siempre que dicha inversión tenga por objeto la producción de bienes o servicios.</p>' +
          '<br><p class="p-justify">Podrán igualmente solicitar este permiso aquellas personas extranjeras que desempeñen funciones gerenciales o de alta dirección y el personal técnico especialista, que sea contratado como trabajador dependiente o para prestar servicios en una empresa establecida en Chile, cuyo capital o patrimonio sea controlado directa o indirectamente por un inversionista extranjero que tenga al menos 10% del derecho a voto de las acciones de la sociedad o un porcentaje equivalente de participación en el capital social si no se tratare de una sociedad por acciones o en el patrimonio de la empresa.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-residencia-temporal-para-inversionistas-y-personal-relacionado/" target="_blank">Más información</a> ',
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
// Alerta permiso de negocios de múltiple entrada
function multipleEntrada() {
    Swal.fire({
        title: '<strong>Permiso de negocios de múltiple entrada</strong>',
        icon: 'info',
        width: '95%',
        html:
          '<p class="p-justify">Podrán solicitar este permiso las personas extranjeras que, con ocasión de gestiones ejecutivas o directivas relacionadas con negocios o inversiones que empresas mantengan en Chile, deban venir regularmente al país.</p>' +
          '<br><a href="https://immichile.cl/permiso-de-residencia-temporal-de-negocios-de-multiple-entrada/" target="_blank">Más información</a> ',
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

// Alerta precio dólar

function consultaDolar() {

  let diaConsulta = new Date();
  let year = diaConsulta.getFullYear();
  let month = diaConsulta.getMonth();
  let day = diaConsulta.getDate();
  let diaDelCeroalSeis = diaConsulta.getDay();
  
  // Si es sábado:
  if(diaDelCeroalSeis == 6){
      let viernes = day - 1;
      fetch(`https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/${year}/${month}/dias/${viernes}?apikey=b0c68a9c609c9a24f820d844973a39058ea443a7&formato=json`)
      .then(response => response.json())
      .then(data => { 
          const precio = data['Dolares'][0]['Valor'];
          Swal.fire({
            title: '1 dólar de los Estados Unidos de América equivale a ' + precio + ' pesos chilenos', 
            confirmButtonColor: '#1155cc'
          })
      })
      .catch(function(error) {
        Swal.fire({
          title: 'El precio del dólar no se encuentra disponible.', 
          confirmButtonColor: '#1155cc'
        })
      });
  } 
  // Si es domingo:
  else if(diaDelCeroalSeis == 0){
      let viernes = day - 2;
      fetch(`https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/${year}/${month}/dias/${viernes}?apikey=b0c68a9c609c9a24f820d844973a39058ea443a7&formato=json`)
      .then(response => response.json())
      .then(data => { 
      const precio = data['Dolares'][0]['Valor'];
      Swal.fire({
        title: '1 dólar de los Estados Unidos de América equivale a ' + precio + ' pesos chilenos', 
        confirmButtonColor: '#1155cc'
      })
    })
      .catch(function(error) {
        Swal.fire({
          title: 'El precio del dólar no se encuentra disponible.', 
          confirmButtonColor: '#1155cc'
        })
        });
  } 
  // Si es día de semana:
  else {
      fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=b0c68a9c609c9a24f820d844973a39058ea443a7&formato=json')
      .then(response => response.json())
      .then(data => {
          const precio = data['Dolares'][0]['Valor'];
          Swal.fire({
            title: '1 dólar de los Estados Unidos de América equivale a ' + precio + ' pesos chilenos', 
            confirmButtonColor: '#1155cc'
          })
      })
      .catch(function(error) {
        Swal.fire({
          title: 'El precio del dólar no se encuentra disponible.', 
          confirmButtonColor: '#1155cc'
        })
      });
  
  }
}