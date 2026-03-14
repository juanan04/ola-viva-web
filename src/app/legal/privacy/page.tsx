import LegalPage from "@/components/legal/LegalPage";

export async function generateMetadata() {
  return { title: "Política de privacidad" };
}

export default async function PrivacyPage() {
  const sections = [
    {
      heading: "1. Responsable del tratamiento",
      body: "OLA VIVA es la entidad responsable del tratamiento de tus datos personales recabados a través de este sitio web. Puedes contactarnos a través del formulario disponible en la sección de Contacto.",
    },
    {
      heading: "2. Datos que recopilamos",
      body: [
        "Datos de identificación: nombre completo y dirección de correo electrónico.",
        "Datos de contacto: número de teléfono (opcional) y mensaje enviado a través del formulario.",
        "Datos de navegación: cookies técnicas y analíticas (ver Política de Cookies).",
        "Datos comerciales: destino de interés seleccionado en el formulario de contacto.",
      ],
    },
    {
      heading: "3. Finalidad del tratamiento",
      body: [
        "Gestionar y responder a las consultas recibidas a través del formulario de contacto.",
        "Informarte sobre nuestros retiros, actividades y novedades, siempre que hayas dado tu consentimiento.",
        "Gestionar la relación contractual derivada de la reserva de una plaza en nuestros retiros.",
        "Cumplir con las obligaciones legales aplicables.",
      ],
    },
    {
      heading: "4. Base jurídica",
      body: "El tratamiento de tus datos se basa en el consentimiento que otorgas al enviarnos un formulario, en la ejecución del contrato de reserva cuando corresponda, y en el cumplimiento de obligaciones legales. Puedes revocar tu consentimiento en cualquier momento.",
    },
    {
      heading: "5. Conservación de los datos",
      body: "Tus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y, una vez finalizada dicha finalidad, durante los plazos legalmente exigidos.",
    },
    {
      heading: "6. Destinatarios",
      body: "No cedemos tus datos a terceros, salvo obligación legal o cuando sea estrictamente necesario para prestarte el servicio (por ejemplo, proveedores de alojamiento o seguros de viaje vinculados al retiro contratado).",
    },
    {
      heading: "7. Tus derechos",
      body: [
        "Acceso: conocer qué datos personales tratamos sobre ti.",
        "Rectificación: corregir datos inexactos o incompletos.",
        "Supresión: solicitar la eliminación de tus datos cuando ya no sean necesarios.",
        "Oposición: oponerte al tratamiento de tus datos con fines de marketing.",
        "Portabilidad: recibir tus datos en formato estructurado y de uso común.",
        "Limitación: solicitar la limitación del tratamiento en determinadas circunstancias.",
      ],
    },
    {
      heading: "8. Ejercicio de derechos",
      body: "Puedes ejercer tus derechos enviándonos una solicitud a través del formulario de contacto, indicando claramente el derecho que deseas ejercer y adjuntando una copia de tu documento de identidad.",
    },
    {
      heading: "9. Seguridad",
      body: "OLA VIVA aplica medidas técnicas y organizativas apropiadas para proteger tus datos personales frente a pérdida, acceso no autorizado, divulgación, alteración o destrucción.",
    },
    {
      heading: "10. Modificaciones",
      body: "Nos reservamos el derecho a actualizar esta política para adaptarla a cambios legislativos o de funcionamiento. Te notificaremos cualquier cambio relevante a través de esta misma página.",
    },
  ];

  return (
    <LegalPage
      titleKey="Política de privacidad"
      sections={sections}
      lastUpdated="Última actualización: marzo 2025"
    />
  );
}
