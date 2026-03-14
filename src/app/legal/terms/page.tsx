import LegalPage from "@/components/legal/LegalPage";

export async function generateMetadata() {
  return { title: "Términos y condiciones" };
}

export default async function TermsPage() {
  const sections = [
    {
      heading: "1. Objeto",
      body: "Las presentes Condiciones Generales regulan la relación entre OLA VIVA y los usuarios que contraten o consulten sus servicios a través de este sitio web. Al acceder al sitio o reservar una plaza en cualquiera de nuestros retiros, aceptas estas condiciones en su totalidad.",
    },
    {
      heading: "2. Descripción del servicio",
      body: "OLA VIVA organiza retiros espirituales grupales en diferentes destinos nacionales e internacionales. El servicio incluye alojamiento, actividades guiadas, transporte interno y seguro de viaje, según se detalle en la descripción de cada retiro. Los vuelos de ida y vuelta, las comidas no especificadas y los gastos personales quedan fuera del precio salvo indicación contraria.",
    },
    {
      heading: "3. Reserva y pago",
      body: [
        "La reserva se formaliza mediante el pago del depósito indicado en cada retiro.",
        "El importe restante deberá abonarse con anterioridad a la fecha de inicio del retiro, según las instrucciones facilitadas por OLA VIVA.",
        "Hasta que el depósito no sea recibido y confirmado, la plaza no se considerará reservada.",
        "Los precios publicados están en euros e incluyen el IVA aplicable.",
      ],
    },
    {
      heading: "4. Cancelaciones por parte del participante",
      body: [
        "Con más de 30 días de antelación: devolución del 100 % del importe abonado.",
        "Entre 15 y 30 días de antelación: devolución del 50 % del importe abonado.",
        "Con menos de 15 días de antelación: no se realizará devolución.",
        "En todos los casos, OLA VIVA estudiará la posibilidad de aplicar el importe a otro retiro futuro.",
      ],
    },
    {
      heading: "5. Cancelaciones por parte de OLA VIVA",
      body: "En caso de cancelación del retiro por causas imputables a OLA VIVA, se procederá a la devolución íntegra de todos los importes abonados. OLA VIVA no se responsabiliza de los gastos derivados de vuelos u otros servicios contratados de manera independiente por el participante.",
    },
    {
      heading: "6. Modificaciones del programa",
      body: "OLA VIVA se reserva el derecho a modificar el itinerario, las actividades o el alojamiento por causas de fuerza mayor, meteorología adversa o cualquier otra circunstancia ajena a su voluntad, procurando siempre mantener la esencia y calidad del retiro.",
    },
    {
      heading: "7. Responsabilidad del participante",
      body: [
        "El participante declara encontrarse en condiciones físicas y mentales adecuadas para realizar las actividades programadas.",
        "El participante se compromete a respetar las normas de convivencia del grupo y las indicaciones de los monitores de OLA VIVA en todo momento.",
        "OLA VIVA no se hace responsable de daños o lesiones derivados de la inobservancia de estas normas.",
      ],
    },
    {
      heading: "8. Propiedad intelectual",
      body: "Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño) son propiedad de OLA VIVA o de sus licenciantes y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.",
    },
    {
      heading: "9. Legislación aplicable",
      body: "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del consumidor.",
    },
    {
      heading: "10. Contacto",
      body: "Para cualquier consulta relacionada con estas condiciones, puedes contactarnos a través del formulario disponible en nuestra página de Contacto.",
    },
  ];

  return (
    <LegalPage
      titleKey="Términos y condiciones"
      sections={sections}
      lastUpdated="Última actualización: marzo 2025"
    />
  );
}
