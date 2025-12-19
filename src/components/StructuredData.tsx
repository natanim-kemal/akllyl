import Script from "next/script";

export default function StructuredData() {
    const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Akllyl Newborn Photography",
        "description": "Professional newborn photography in Addis Ababa. Specializing in family photos. Book your session today!",
        "image": "https://akllyl.com/hero.jpg", // Replace with real URL later
        "@id": "https://akllyl.com",
        "url": "https://akllyl.com",
        "telephone": "+251930518080",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole Medanialem, Warka tower next to Sheger. 1st floor shop #18",
            "addressLocality": "Addis Ababa",
            "addressCountry": "ET"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.0000, // Approximate coordinates for Bole Addis Ababa
            "longitude": 38.7800
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/akllyl_newborn_studio",
            "https://web.facebook.com/people/Akllyl-Newborn-Photography/100064742713876/",
            "https://www.tiktok.com/@akllylnewbornstudio"
        ]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
    );
}
