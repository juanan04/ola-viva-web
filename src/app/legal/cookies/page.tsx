import LegalPage from "@/components/legal/LegalPage";

export async function generateMetadata() {
  return { title: "Política de cookies" };
}

export default async function CookiesPage() {
  const sections = [
    {
      heading: "¿Qué son las cookies?",
      body: "Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo cuando los visitas. Permiten que el sitio recuerde tus preferencias y mejore tu experiencia de navegación.",
    },
    {
      heading: "Cookies que utilizamos",
      body: [
        "Cookies técnicas (necesarias): imprescindibles para el funcionamiento del sitio. Incluyen la cookie de preferencia de idioma (NEXT_LOCALE). No requieren consentimiento.",
        "Cookies analíticas: nos permiten analizar el uso del sitio de forma anónima y agregada para mejorar nuestros contenidos y servicios. Solo se activan si das tu consentimiento.",
        "Cookies de terceros: si utilizamos servicios de terceros como Google Analytics o redes sociales, estos pueden instalar sus propias cookies. Consulta sus políticas individuales para más información.",
      ],
    },
    {
      heading: "Cookie de idioma (NEXT_LOCALE)",
      body: "Esta cookie técnica almacena tu preferencia de idioma (español o inglés) para que no tengas que seleccionarlo en cada visita. Expira al cerrar el navegador o al cambiar de idioma manualmente.",
    },
    {
      heading: "Cómo gestionar las cookies",
      body: [
        "Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se vaya a instalar una.",
        "Ten en cuenta que deshabilitar las cookies técnicas puede afectar al funcionamiento correcto del sitio.",
        "Instrucciones para los principales navegadores: Chrome (Configuración > Privacidad y seguridad > Cookies), Firefox (Preferencias > Privacidad), Safari (Preferencias > Privacidad), Edge (Configuración > Privacidad).",
      ],
    },
    {
      heading: "Duración de las cookies",
      body: [
        "Cookies de sesión: se eliminan automáticamente al cerrar el navegador.",
        "Cookies persistentes: permanecen en tu dispositivo durante el período indicado en cada cookie, o hasta que las elimines manualmente.",
      ],
    },
    {
      heading: "Actualizaciones de esta política",
      body: "Podemos actualizar esta política para reflejar cambios en las cookies que utilizamos o en la normativa aplicable. Te recomendamos revisarla periódicamente. La fecha de última actualización siempre aparece al inicio del documento.",
    },
  ];

  return (
    <LegalPage
      titleKey="Política de cookies"
      sections={sections}
      lastUpdated="Última actualización: marzo 2025"
    />
  );
}
