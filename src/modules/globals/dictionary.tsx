export const textDA = {
    general: {
        mail: "hello@gesicht.dk",
        phone: "+45 53 63 75 40",
        addressStreet: "Knabrostræde 15, st. th",
        addressCity: "1210 København K, DK",
        openingHours: [
            {
                day: "Mandag - torsdag:",
                hours: "11.00 - 20.00"
            },
            {
                day: "Fredag:",
                hours: "11.00 - 17.30"
            },
            {
                day: "Lørdag:",
                hours: "12.00 - 17.00"
            },
            {
                day: "Søndag:",
                hours: "12.00 - 17.00"
            }
        ],
        topbar: {
            license: "Registreret og godkendt hos Styrelsen for Patientsikkerhed",
        },
        navigation: [
            {
                name: "Forside",
                link: "/"
            },
            {
                name: "Behandlinger",
                link: "/behandlinger"
            },
            {
                name: "Priser",
                link: "/priser"
            },
            {
                name: "Om os",
                link: "/om"
            },
            {
                name: "Kontakt os",
                link: "/kontakt"
            },
            {
                name: "Book en tid",
                link: "/booking"
            }
        ],
        mobileNav: {
            findUs: "Find os"
        },
        footer: {
            links: [
                {
                    category: "Behandlinger",
                    links: [
                        {
                            name: "Læbeforstørrelse",
                            link: "/behandlinger/filler"
                        },
                        {
                            name: "Markering af kindben",
                            link: "/behandlinger/filler"
                        },
                        {
                            name: "Korrektioner",
                            link: "/behandlinger/filler"
                        },
                        {
                            name: "Rynkebehandling",
                            link: "/behandlinger/profhilo"
                        },
                        {
                            name: "Opstramning af hud",
                            link: "/behandlinger/profhilo"
                        }
                    ]
                },
                {
                    category: "Klinikken",
                    links: [
                        {
                            name: "Om Gesicht",
                            link: "/om",
                            blank: false
                        },
                        {
                            name: "Kontakt os",
                            link: "/kontakt",
                            blank: false
                        },
                        {
                            name: "Tilsynsrapport",
                            link: "/Tilsynsrapport2019.pdf",
                            blank: true
                        },
                        {
                            name: "Privatlivspolitik",
                            link: "/LIPSdatapolitik.pdf",
                            blank: true
                        }
                    ]
                },
            ],
            info: {
                title: "Find os",
                openingHours: "Åbningstider"
            }
        }
    },
    home: {
        hero: {
            title: "Velkommen til Gesicht",
            text: "Vi sætter prikken over i'et."
        },
        intro: {
            title: "Altid udført af autoriserede læger.",
            text: "Læs mere om klinikken og vores behandlere her"
        },
        treatments: {
            title: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde.",
            text: "Galleri",
            textHighlighted: "prikken",
            textAfter: " over i'et.",
            slider: [
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                }
            ],
            images: [
                {
                    src: "/gallery/gesicht_gallery-item.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-6.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-2.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-5.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-7.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-8.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-10.jpg",
                    alt: "",
                },
                {
                    src: "/gallery/gesicht_gallery-item-15.jpg",
                    alt: "",
                }
            ]
        },
        partner: {
            title: "I samarbejde med IBSA",
            text: [
                ["IBSA er nordens førende indenfor fillermidlet Aliaxin, som vi bruger til alle vores fillerbehandlinger.", "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes."]
            ],
            bullets: [
                {
                    icon: "",
                    text: "Varighed: 6-12 mdr."
                },
                {
                    icon: "",
                    text: "Behandlingstid: 30 min."
                },
                {
                    icon: "",
                    text: "Naturligt resultat"
                },
                {
                    icon: "",
                    text: "Konsultation er gratis"
                }
            ]
        }
    },
    prices: {
        hero: {
            title: "Priser"
        },
        intro: {
            titleBefore: "Bemærk, at der skal være foretaget forundersøgelse minimum ",
            titleSpan: "48 timer",
            titleAfter: " før en eventuel behandling.",
        },
        prices: [
            {
                type: "filler",
                amount: null,
                price: 0,
                name: "Forundersøgelse",
                description: "Skal foretages minimum 48 timer inden behandling"
            }, {
                type: "filler",
                amount: 0.5,
                price: "1.800,-",
                name: "Fillerbehandling 0.5 ml",
                description: "Aliaxin",
            }, {
                type: "filler",
                amount: 0.75,
                price: "2.400,-",
                name: "Fillerbehandling 0.75 ml",
                description: "Aliaxin",
            }, {
                type: "filler",
                amount: 1,
                price: "2.800,-",
                name: "Fillerbehandling 1 ml",
                description: "Aliaxin"
            }, {
                type: "filler",
                amount: 2,
                price: "5.000,-",
                name: "Fillerbehandling 2 ml",
                description: "Aliaxin",
            }, {
                type: "filler",
                name: "Tear trough",
                description: "Mørke rande under øjnene",
                amount: null,
                price: "3.000,-",
            }, {
                type: "profhilo",
                amount: null,
                price: 0,
                name: "Forundersøgelse",
                description: "Skal foretages minimum 48 timer inden behandling"
            }, {
                type: "profhilo",
                amount: 2,
                price: "3.500,-",
                name: "Profhilo 2 ml",
            }, {
                type: "profhilo",
                amount: 4,
                price: "7.000,-",
                name: "Profhilo 4 ml",
            }
        ],
        finance: {
            title: "Ønsker du finansiering med ratebetaling?",
            text: "Du kan dele din betaling op i maks. 6 månedlige betalinger. Den første rate betales straks efter behandlingen med dit Visa eller Mastercard, hvorefter resten af raterne vil trækkes automatisk.",
            textSecond: "Nemt og omkostningsfrit."
        },
        treatmentList: {
            title: "Bliv klogere på hvilke behandlinger vi tilbyder.",
            treatments: [
                {
                    name: "Læbeforstørrelse",
                    description: "Ønsker du mere symmetri, volume og fylde i læberne?",
                    link: "/"
                },
                {
                    name: "Rynkebehandling",
                    description: "Med Profhilo kan vi mindske alderstegn og synlige rynker.",
                    link: "/"
                },
                {
                    name: "Korrektion",
                    description: "Vi er eksperter i korrektion af tidligere behandlinger og arvæv.",
                    link: "/"
                },
                {
                    name: "Rynkebehandling",
                    description: "Med Profhilo kan vi mindske alderstegn og synlige rynker.",
                    link: "/"
                },
                {
                    name: "Korrektion",
                    description: "Vi er eksperter i korrektion af tidligere behandlinger og arvæv.",
                    link: "/"
                },
                {
                    name: "Læbeforstørrelse",
                    description: "Ønsker du mere symmetri, volume og fylde i læberne?",
                    link: "/"
                },
            ]
        }
    },
    treatments: {
        hero: {
            title: "Behandlinger"
        },
        intro: {
            title: "Vi tilbyder både fillerbehandlinger i mange former, og Profhilo til dig der ønsker udglatning og fylde tilbage til ansigtet.",
            secondTitle: "Dine ønsker i fokus",
            firstText: "Hos os bliver du altid mødt af venligt og kompetent personale, hvis fælles mission er at bringe dine behov som klient i fokus. Hos os findes ingen dumme spørgsmål. Alle behandlere er kvalificerede læger, uddannet og certificerede i behandling med ikke-permanente fillers i international standard.",
            secondText: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde. Klinikkens ansvarshavende læge er Peter James Bruhn. Hos os findes ingen dumme spørgsmål."
        },
        treatments: [
            {
                name: "Filler",
                description: "Fillerbehandling kan give mere fylde og øge konturen omkring bl.a. læber, kindben.",
                link: "/behandlinger/filler"
            },
            {
                name: "Profhilo",
                description: "Ønsker du mere fylde og ungdom tilbage til ansigt, hals og hænder?",
                link: "/behandlinger/profhilo"
            },
            // {
            //     name: "Læbeforstørrelse og konturering",
            //     description: "Fillerbehandling af læberne kan give mere fylde og øge konturen omkring læberne.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Korrektion og symmetri",
            //     description: "Med filler kan vi skabe symmetri i læber og ansigt, samt korigere tidligere fejlbehandlinger.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Udglatning af rynker og linjer",
            //     description: "Vi bruger Profhilo til at skabe fylde og opstramning til bl.a. ansigt, hals og hænder.",
            //     link: "/behandlinger/profhilo"
            // },
            // {
            //     name: "Markering af kindben",
            //     description: "Ønsker du mere fylde og form til kindbenene, kan vi med filler opnå dine ønsker.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Fylde til hængende hud og 'mormorarme'",
            //     description: "En Profhilobehandling kan glatte huden ud og stramme op omkring overarmene.",
            //     link: "/behandlinger/profhilo"
            // },
            // {
            //     name: "Korrektion og symmetri",
            //     description: "Med filler kan vi skabe symmetri i læber og ansigt, samt korigere tidligere fejlbehandlinger.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Markering af kindben",
            //     description: "Ønsker du mere fylde og form til kindbenene, kan vi med filler opnå dine ønsker.",
            //     link: "/behandlinger/filler"
            // },
        ],
    },
    filler: {
        hero: {
            title: "Filler"
        },
        intro: {
            teaser: "Vi bruger altid Aliaxin til vores fillerbehandlinger, der styrker den naturlige produktion af noget.",
            title: "Fillerbehandling er en ",
            secondTitle: "kunstform.",
            text: [
                {
                    text: "Hos Gesicht anvender vi ikke-permanente fillers, som består af hyaluronsyre. Hyaluronsyre er et stort molekyle, som findes i kroppens bindevæv, deriblandt huden. Hyaluronsyres funktion i huden er at binde vand og på den måde udfylde rummet mellem bindevævets øvrige strukturgivende molekyler, herunder kollagen og elastiske fibre. Hyaluronsyre er naturens måde at give huden fylde og mekanisk modstandskraft."
                },
                {
                    text: "Med alderen mindskes mængden af hyaluronsyre i huden. Dette skyldes til dels den helt naturlige og uundgåelige aldringsproces, men tabet af hyaluronsyre kan især forværres, hvis huden er blevet udsat for store mængder sol gennem livet. "
                },
                {
                    text: "Herudover forårsager tobaksrygning en reduceret mængde hyaluronsyre i huden. Dette resulterer i, at huden får mindre fylde og elasticitet, og der opstår rynker, furer og forandrede ansigtskonturer."
                },
            ]
        },
        treatments: [
            {
                name: "Læber",
                description: "Fillerbehandling af læberne kan give mere fylde og øge konturen omkring læberne.",
                link: "/behandlinger/filler"
            },
            {
                name: "Kindben",
                description: "Med filler kan vi skabe symmetri i læber og ansigt, samt korigere tidligere fejlbehandlinger.",
                link: "/behandlinger/filler"
            },
            {
                name: "Ozempic face",
                description: "Det er et mærkeligt ord der garanteret betyder noget.",
                link: "/behandlinger/filler"
            },
        ],
        info: {
            title: "Det endelige resultat kan forventes indenfor ",
            titlePink: "2 uger",
            titleAfter: ", indtil produktet har taget fuld form i ansigtet.",
            first: {
                title: "Bivirkninger",
                text: [
                    {
                        text: "Alvorlige bivirkninger til behandling med ikke-permanente filler er ekstremt sjældne, men der er set enkelte eksempler på allergisk reaktion på produktet; det er derfor vigtigt at informere lægen, hvis du tidligere har haft en allergisk reaktion på behandlingen. "
                    },
                    {
                        text: "Ved 1 ud af 10.000 behandlinger ses en lokal infektion omkring indstiksstedet, som skal behandles med antibiotika. Vi forebygger infektion ved at udføre proceduren sterilt, og du bør efter behandlingen være opmærksom på at holde området rent og tørt."
                    },
                ]
            },
            second: {
                title: "Efter behandlingen",
                text: [
                    {
                        text: "Effekten af behandling med ikke-permanenter filler kan ses med det samme. De første tre dage efter behandling må du forvente en smule hævelse omkring behandlingsstedet, og i visse tilfælde diskrete blå mærker."
                    },
                    {
                        text: "Du skal undgå at røre for meget ved området og at bære makeup indtil morgenen efter behandlingen. Undgå i øvrigt motion og andre anstrengende aktiviteter det første døgn, da dette kan forårsage blå mærker."
                    },
                    {
                        text: "Hvis der mod forventning opstår bivirkninger til behandlingen, eller hvis du er utilfreds med det kosmetiske resultat, er du selvfølgelig altid velkommen til at kontakte klinikken, så vi kan aftale en akut og gratis konsultation med en af vores læger. Hvis du mod forventning skulle blive særdeles skuffet over det kosmetiske resultat har vi mulighed for at behandle området med injektion af Hylase, som opløser filleren og dermed fjerner produktet helt. "
                    }
                ]
            }
        },
        questions: [
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
        ]
    },
    profhilo: {
        hero: {
            title: "Profhilo"
        },
        intro: {
            teaser: "Ved at bruge en skinbooster som Profhilo, kan vi effektivt genopfylde og udglatte huden.",
            title: "Alle har ret til ",
            secondTitle: "ung hud.",
            text: [
                {
                    text: "Med alderen mindskes mængden af hyaluronsyre i huden. Dette skyldes til dels den helt naturlige og uundgåelige aldringsproces, men tabet af hyaluronsyre kan især forværres, hvis huden er blevet udsat for store mængder sol gennem livet. "
                },
                {
                    text: "Både fillers og Profhilo består af hyaluronsyre. Profhilo adskiller sig fra de traditionelle fillers ved at produktet har en mere flydende konsistens, fordi hyaluronsyren i Profhilo ikke er krydsbundet. Dette bevirker, at Profhilo i modsætning til fillers vil fordele sig jævnt ud i huden og derved udglatte fine linier, rynker og give huden en generelt øget spændstighed."
                },
                {
                    text: "Profhilo har en af markedets højeste koncentrationer af hyaluronsyre, hvilket betyder, at en behandling med Profhilo tilfører huden en ganske høj mængde hyaluronsyre. Profhilo er som alle andre hyaloronsyreprodukter, som vi benytter i klinikken, af den ikke-permanente type, hvilket vil sige, at produktet nedbrydes helt med tiden."
                }
            ]
        },
        treatments: [
            {
                name: "Udglatning af rynker og linjer",
                description: "Vi bruger Profhilo til at skabe fylde og opstramme bl.a. ansigt, hals og hænder.",
                link: "/behandlinger/profhilo"
            },
            {
                name: "Fylde til hængende hud og 'mormorarme'",
                description: "En Profhilobehandling kan glatte huden ud og stramme op omkring overarmene.",
                link: "/behandlinger/profhilo"
            },
            {
                name: "Fylde til hængende hud og 'mormorarme'",
                description: "En Profhilobehandling kan glatte huden ud og stramme op omkring overarmene.",
                link: "/behandlinger/profhilo"
            },
        ],
        info: {
            title: "Med Profhilo kan vi udglatte ",
            titlePink: "rynker, furer og fine linjer",
            titleAfter: ", samt give en øget fyldighed og spændstighed til huden.",
            first: {
                title: "Bivirkninger",
                text: [
                    {
                        text: "De almindelige bivirkninger, som knytter sig til Profhilo, er: rødme, lette smerter ifm behandlingen og ømhed ved indstiksstedet. Sjældent ses hudinfektion eller misfarvning af huden, hvilket kan behandles i klinikken, hvis det mod forventning skulle opstå. Vi tilbyder ikke behandling med Profhilo til gravide eller ammende, da produktet ikke er testet på denne patientgruppe."
                    },
                    // {
                    //     text: "Ved 1 ud af 10.000 behandlinger ses en lokal infektion omkring indstiksstedet, som skal behandles med antibiotika. Vi forebygger infektion ved at udføre proceduren sterilt, og du bør efter behandlingen være opmærksom på at holde området rent og tørt."
                    // },
                ]
            },
            second: {
                title: "Hvordan foregår behandlingen?",
                text: [
                    {
                        text: "Ved hjælp af små indstik lægges små doser Profhilo lige under hudniveau, hvor det i løbet af 12-24 timer fordeler sig i underhuden. Profhilo er velegnet til behandling af ansigt, hals, overarme (”mormorarme”) og hænder. Ved opstart i Profhilobehandling udføres to behandlinger med en måneds mellemrum. Det optimale resultat kan ses en måned efter anden behandling. Herefter skal behandlingen vedligeholdes med en enkelt genopfyldningsbehandling hver 7. til 8. måned, afhængigt af dit individuelle behov. Behandlingen er særdeles velegnet til patienter, som oplever alderstegn i form af rynker, linjer, manglende fylde eller hængende hud."
                    },
                    {
                        text: "For at starte behandling med Profhilo skal du til en gratis og uforpligtende forundersøgelse hos en af vores registrerede kosmetiske læger minimum 48 timer inden behandlingen. Her taler vi nærmere om behandlingen, forventning til resultat, og om den optimale mængde Profhilo til lige netop dig. Hvis du tidligere har været til forundersøgelse hos Gesicht ifm fillerbehandling er denne også dækkende for Profhilobehandling, hvorfor du i dette tilfælde kan booke tid direkte til behandling."
                    }
                ]
            }
        },
        questions: [
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
        ]
    },
    about: {
        hero: {
            title: "Om os"
        },
        intro: {
            title: "Er du klar til at tage en snak om dine ønsker?",
            cta: "Book en tid her",
        },
        info: {
            title: "Vores faglige stolthed er din garanti, for en sikker og tryg behandling.",
            text: [
                {
                    text: "Hos os bliver du altid mødt af venligt og kompetent personale, hvis fælles mission er at bringe dine behov som klient i fokus. Hos os findes ingen dumme spørgsmål. Alle behandlere er kvalificerede læger, uddannet og certificerede i behandling med ikke-permanente fillers i international standard. "
                },
                {
                    text: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde. Klinikkens ansvarshavende læge er Peter James Bruhn."
                },
                {
                    text: "Hos os findes ingen dumme spørgsmål og du er altid velkommen til at "
                },
                {
                    text: "kontakte os "
                },
                {
                    text: "på tlf. eller mail."
                }
            ]
        },
        employees: {
            title: "Vores behandlere",
            text: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde.",
            employees: [
                {
                    name: "Peter James Bruhn",
                    title: "Ansvarshavende læge.",
                    image: "/employees/gesicht_peter-james-bruhn.jpg"
                }, {
                    name: "Vibeke Schaffalitzky de Muckadell",
                    title: "MD, ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }, {
                    name: "Dennis Bregner Zetner",
                    title: "MD, ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }, {
                    name: "Anders Funding La Cour",
                    title: "MD, ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }
            ]
        },
        extra: {
            text: "Klinikken er registreret som kosmetisk behandlingssted hos Styrelsen for Patientsikkerhed, og alle behandlende læger er registreret og godkendt til kosmetisk behandling med ikke-permanente fillers.",
            text2: "Gesicht er registreret og godkendt som behandlingssted hos Sundhedsstyrelsen med registreret ansvarshavende læge."
        }
    },
    contact: {
        hero: {
            title: "Kontakt os"
        },
        intro: {
            title: "Vi glæder os til at tage imod dig.",
            cta: "Derfor står vi altid til rådighed for henvendelser på tlf. eller mail.",
        },
        info: {
            titleOpeningHours: "Åbningstider",
            titleContact: "I hjertet af København"
        }
    },
    booking: {
        hero: {
            title: "Book en tid"
        },
        intro: {
            title: "Vi har god tid til dig",
            text: [
                {
                    text: "Vi sætter altid god tid af til hver enkelt forundersøgelse og behandling, så vi og du er sikre på, at du ikke risikerer at forlade klinikken igen med uforløste spørgsmål eller tvivl. "
                },
                {
                    text: "Gennem vores bookingsystem kan du bestille tid til forundersøgelse og behandling. Vælg først, hvilken type aftale, du ønsker, og vælg derefter dato og tidspunkt."
                }
            ],
            cta: "",
        },
        info: {
            titleBefore: "Bemærk, at der skal være foretaget forundersøgelse minimum ",
            titleHighlighted: "48 timer ",
            titleAfter: "før en eventuel behandling.",
            text:
            {
                text: "Hvis det er første gang, du bestiller tid hos os, skal du oprette en bruger. Hvis du har en bruger hos os, skal du blot logge ind og oprette en aftale. Bemærk, at aftaler kan aflyses indtil 24 timer før aftalen. Aftaler der aflyses mindre end 24 timer før aftalen opkræves et gebyr på 500 kr.",
                textSecond: "Husk at du altid er velkommen til at tage ",
                textLink: "kontakt til os ",
                textAfter: "enten på telefon eller mail, før en eventuel booking."
            }
        }
    },
}

export const textEN = {
    general: {
        mail: "hello@gesicht.dk",
        phone: "+45 53 63 75 40",
        addressStreet: "Knabrostræde 15, st. th",
        addressCity: "1210 København K, DK",
        openingHours: [
            {
                day: "Mandag - torsdag:",
                hours: "11.00 - 20.00"
            },
            {
                day: "Fredag:",
                hours: "11.00 - 17.30"
            },
            {
                day: "Lørdag:",
                hours: "12.00 - 17.00"
            },
            {
                day: "Søndag:",
                hours: "12.00 - 17.00"
            }
        ],
        topbar: {
            license: "Licensed and approved by Danish Patient Safety Authority",
        },
        navigation: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Treatments",
                link: "/behandlinger"
            },
            {
                name: "Prices",
                link: "/priser"
            },
            {
                name: "About us",
                link: "/om"
            },
            {
                name: "Contact us",
                link: "/kontakt"
            },
            {
                name: "Booking",
                link: "/booking"
            }
        ],
        mobileNav: {
            findUs: "Find us"
        },
        footer: {
            links: [
                {
                    category: "Treatments",
                    links: [
                        {
                            name: "Lip enhancement",
                            link: "/behandlinger/filler"
                        },
                        {
                            name: "Cheek filler",
                            link: "/behandlinger/filler"
                        },
                        {
                            name: "Corrections",
                            link: "/behandlinger/filler"
                        },
                        {
                            name: "Wrinkles and fine lines",
                            link: "/behandlinger/profhilo"
                        },
                        {
                            name: "Tightening of skin",
                            link: "/behandlinger/profhilo"
                        }
                    ]
                },
                {
                    category: "The Clinic",
                    links: [
                        {
                            name: "About Gesicht",
                            link: "/om",
                            blank: false
                        },
                        {
                            name: "Contact us",
                            link: "/kontakt",
                            blank: false
                        },
                        {
                            name: "Inspection report",
                            link: "./Tilsynsrapport2019.pdf",
                            blank: true
                        },
                        {
                            name: "Privacy policy",
                            link: "./LIPSdatapolitik.pdf",
                            blank: true
                        }
                    ]
                },
            ],
            info: {
                title: "Find us",
                openingHours: "Opening hours"
            }
        }
    },
    home: {
        hero: {
            title: "Welcome to Gesicht",
            text: "It's all in the details. "
        },
        intro: {
            title: "All treatments are done by authorized doctors.",
            text: "Read more about Gesicht"
        },
        treatments: {
            title: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde.",
            text: "Gallery",
            textHighlighted: "prikken",
            textAfter: " over i'et.",
            slider: [
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                },
                {
                    name: "Korrektioner",
                    description: "Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer."
                }
            ],
            images: [
                {
                    src: "",
                    alt: "",
                }
            ]
        },
        partner: {
            title: "I samarbejde med IBSA",
            text: [
                ["IBSA er nordens førende indenfor fillermidlet Aliaxin, som vi bruger til alle vores fillerbehandlinger.", "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes."]
            ],
            bullets: [
                {
                    icon: "",
                    text: "Varighed: 6-12 mdr."
                },
                {
                    icon: "",
                    text: "Behandlingstid: 30 min."
                },
                {
                    icon: "",
                    text: "Naturligt resultat"
                },
                {
                    icon: "",
                    text: "Konsultation er gratis"
                }
            ]
        }
    },
    prices: {
        hero: {
            title: "Prices"
        },
        intro: {
            titleBefore: "Please note that a preliminary consultation must have been carried out at least ",
            titleSpan: "48 hours",
            titleAfter: " before any treatment.",
        },
        prices: [
            {
                type: "filler",
                amount: null,
                price: 0,
                name: "Consultation",
                description: "Must be carried out at least 48 hours before."
            }, {
                type: "filler",
                amount: 0.5,
                price: "1.800 DKK",
                name: "Fillertreatment 0.5 ml",
                description: "Aliaxin",
            }, {
                type: "filler",
                amount: 0.75,
                price: "2.400 DKK",
                name: "Fillertreatment 0.75 ml",
                description: "Aliaxin",
            }, {
                type: "filler",
                amount: 1,
                price: "2.800 DKK",
                name: "Fillertreatment 1 ml",
                description: "Aliaxin"
            }, {
                type: "filler",
                amount: 2,
                price: "5.000 DKK",
                name: "Fillertreatment 2 ml",
                description: "Aliaxin",
            }, {
                type: "filler",
                name: "Tear trough",
                description: "For dark circles under eyes.",
                amount: null,
                price: "3.000 DKK",
            }, {
                type: "profhilo",
                amount: null,
                price: 0,
                name: "Consultation",
                description: "Must be carried out at least 48 hours before."
            }, {
                type: "profhilo",
                amount: 2,
                price: "3.500 DKK",
                name: "Profhilo 2 ml",
            }, {
                type: "profhilo",
                amount: 4,
                price: "7.000 DKK",
                name: "Profhilo 4 ml",
            }
        ],
        finance: {
            title: "Do you want to split up your payment?",
            text: "Du kan dele din betaling op i maks. 6 månedlige betalinger. Den første rate betales straks efter behandlingen med dit Visa eller Mastercard, hvorefter resten af raterne vil trækkes automatisk.",
            textSecond: "Nemt og omkostningsfrit."
        },
        treatmentList: {
            title: "Learn more about what treatments we offer.",
            treatments: [
                {
                    name: "Læbeforstørrelse",
                    description: "Ønsker du mere symmetri, volume og fylde i læberne?",
                    link: "/filler"
                },
                {
                    name: "Rynkebehandling",
                    description: "Med Profhilo kan vi mindske alderstegn og synlige rynker.",
                    link: "/profhilo"
                },
                {
                    name: "Korrektion",
                    description: "Vi er eksperter i korrektion af tidligere behandlinger og arvæv.",
                    link: "/filler"
                },
                {
                    name: "Rynkebehandling",
                    description: "Med Profhilo kan vi mindske alderstegn og synlige rynker.",
                    link: "/profhilo"
                },
                {
                    name: "Korrektion",
                    description: "Vi er eksperter i korrektion af tidligere behandlinger og arvæv.",
                    link: "/filler"
                },
                {
                    name: "Læbeforstørrelse",
                    description: "Ønsker du mere symmetri, volume og fylde i læberne?",
                    link: "/"
                },
            ]
        }
    },
    treatments: {
        hero: {
            title: "Treatments"
        },
        intro: {
            title: "Vi tilbyder både fillerbehandlinger i mange former, og Profhilo til dig der ønsker udglatning og fylde tilbage til ansigtet.",
            secondTitle: "Vi sætter prikken over i'et.",
            firstText: "Hos os bliver du altid mødt af venligt og kompetent personale, hvis fælles mission er at bringe dine behov som klient i fokus. Hos os findes ingen dumme spørgsmål. Alle behandlere er kvalificerede læger, uddannet og certificerede i behandling med ikke-permanente fillers i international standard.",
            secondText: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde. Klinikkens ansvarshavende læge er Peter James Bruhn. Hos os findes ingen dumme spørgsmål."
        },
        treatments: [
            {
                name: "Filler",
                description: "Fillerbehandling kan give mere fylde og øge konturen omkring bl.a. læber, kindben.",
                link: "/behandlinger/filler"
            },
            {
                name: "Profhilo",
                description: "Ønsker du mere fylde og ungdom tilbage til ansigt, hals og hænder?",
                link: "/behandlinger/profhilo"
            },
            // {
            //     name: "Læbeforstørrelse og konturering",
            //     description: "Fillerbehandling af læberne kan give mere fylde og øge konturen omkring læberne.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Korrektion og symmetri",
            //     description: "Med filler kan vi skabe symmetri i læber og ansigt, samt korigere tidligere fejlbehandlinger.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Udglatning af rynker og linjer",
            //     description: "Vi bruger Profhilo til at skabe fylde og opstramning til bl.a. ansigt, hals og hænder.",
            //     link: "/behandlinger/profhilo"
            // },
            // {
            //     name: "Markering af kindben",
            //     description: "Ønsker du mere fylde og form til kindbenene, kan vi med filler opnå dine ønsker.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Fylde til hængende hud og 'mormorarme'",
            //     description: "En Profhilobehandling kan glatte huden ud og stramme op omkring overarmene.",
            //     link: "/behandlinger/profhilo"
            // },
            // {
            //     name: "Korrektion og symmetri",
            //     description: "Med filler kan vi skabe symmetri i læber og ansigt, samt korigere tidligere fejlbehandlinger.",
            //     link: "/behandlinger/filler"
            // },
            // {
            //     name: "Markering af kindben",
            //     description: "Ønsker du mere fylde og form til kindbenene, kan vi med filler opnå dine ønsker.",
            //     link: "/behandlinger/filler"
            // },
        ],
    },
    filler: {
        hero: {
            title: "Fillers"
        },
        intro: {
            teaser: "Vi bruger altid Aliaxin til vores fillerbehandlinger, der styrker den naturlige produktion af noget.",
            title: "Working with fillers is a ",
            secondTitle: "form of art.",
            text: [
                {
                    text: "Hos Gesicht anvender vi ikke-permanente fillers, som består af hyaluronsyre. Hyaluronsyre er et stort molekyle, som findes i kroppens bindevæv, deriblandt huden. Hyaluronsyres funktion i huden er at binde vand og på den måde udfylde rummet mellem bindevævets øvrige strukturgivende molekyler, herunder kollagen og elastiske fibre. Hyaluronsyre er naturens måde at give huden fylde og mekanisk modstandskraft."
                },
                {
                    text: "Med alderen mindskes mængden af hyaluronsyre i huden. Dette skyldes til dels den helt naturlige og uundgåelige aldringsproces, men tabet af hyaluronsyre kan især forværres, hvis huden er blevet udsat for store mængder sol gennem livet. "
                },
                {
                    text: "Herudover forårsager tobaksrygning en reduceret mængde hyaluronsyre i huden. Dette resulterer i, at huden får mindre fylde og elasticitet, og der opstår rynker, furer og forandrede ansigtskonturer."
                },
            ]
        },
        treatments: [
            {
                name: "Lips",
                description: "Fillerbehandling af læberne kan give mere fylde og øge konturen omkring læberne.",
                link: "/behandlinger/filler"
            },
            {
                name: "Cheekbones",
                description: "Med filler kan vi skabe symmetri i læber og ansigt, samt korigere tidligere fejlbehandlinger.",
                link: "/behandlinger/filler"
            },
            {
                name: "Ozempic face",
                description: "Det er et mærkeligt ord der garanteret betyder noget.",
                link: "/behandlinger/filler"
            },
        ],
        info: {
            title: "Det endelige resultat kan forventes indenfor ",
            titlePink: "2 uger",
            titleAfter: ", indtil produktet har taget fuld form i ansigtet.",
            first: {
                title: "Bivirkninger",
                text: [
                    {
                        text: "Alvorlige bivirkninger til behandling med ikke-permanente filler er ekstremt sjældne, men der er set enkelte eksempler på allergisk reaktion på produktet; det er derfor vigtigt at informere lægen, hvis du tidligere har haft en allergisk reaktion på behandlingen. "
                    },
                    {
                        text: "Ved 1 ud af 10.000 behandlinger ses en lokal infektion omkring indstiksstedet, som skal behandles med antibiotika. Vi forebygger infektion ved at udføre proceduren sterilt, og du bør efter behandlingen være opmærksom på at holde området rent og tørt."
                    },
                ]
            },
            second: {
                title: "Efter behandlingen",
                text: [
                    {
                        text: "Effekten af behandling med ikke-permanenter filler kan ses med det samme. De første tre dage efter behandling må du forvente en smule hævelse omkring behandlingsstedet, og i visse tilfælde diskrete blå mærker."
                    },
                    {
                        text: "Du skal undgå at røre for meget ved området og at bære makeup indtil morgenen efter behandlingen. Undgå i øvrigt motion og andre anstrengende aktiviteter det første døgn, da dette kan forårsage blå mærker."
                    },
                    {
                        text: "Hvis der mod forventning opstår bivirkninger til behandlingen, eller hvis du er utilfreds med det kosmetiske resultat, er du selvfølgelig altid velkommen til at kontakte klinikken, så vi kan aftale en akut og gratis konsultation med en af vores læger. Hvis du mod forventning skulle blive særdeles skuffet over det kosmetiske resultat har vi mulighed for at behandle området med injektion af Hylase, som opløser filleren og dermed fjerner produktet helt. "
                    }
                ]
            }
        },
        questions: [
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
        ]
    },
    profhilo: {
        hero: {
            title: "Profhilo"
        },
        intro: {
            teaser: "Ved at bruge en skinbooster som Profhilo, kan vi effektivt genopfylde og udglatte huden.",
            title: "Everyone has the right to ",
            secondTitle: "young skin.",
            text: [
                {
                    text: "Med alderen mindskes mængden af hyaluronsyre i huden. Dette skyldes til dels den helt naturlige og uundgåelige aldringsproces, men tabet af hyaluronsyre kan især forværres, hvis huden er blevet udsat for store mængder sol gennem livet. "
                },
                {
                    text: "Både fillers og Profhilo består af hyaluronsyre. Profhilo adskiller sig fra de traditionelle fillers ved at produktet har en mere flydende konsistens, fordi hyaluronsyren i Profhilo ikke er krydsbundet. Dette bevirker, at Profhilo i modsætning til fillers vil fordele sig jævnt ud i huden og derved udglatte fine linier, rynker og give huden en generelt øget spændstighed."
                },
                {
                    text: "Profhilo har en af markedets højeste koncentrationer af hyaluronsyre, hvilket betyder, at en behandling med Profhilo tilfører huden en ganske høj mængde hyaluronsyre. Profhilo er som alle andre hyaloronsyreprodukter, som vi benytter i klinikken, af den ikke-permanente type, hvilket vil sige, at produktet nedbrydes helt med tiden."
                }
            ]
        },
        treatments: [
            {
                name: "Udglatning af rynker og linjer",
                description: "Vi bruger Profhilo til at skabe fylde og opstramning til bl.a. ansigt, hals og hænder.",
                link: "/behandlinger/profhilo"
            },
            {
                name: "Fylde til hængende hud og 'mormorarme'",
                description: "En Profhilobehandling kan glatte huden ud og stramme op omkring overarmene.",
                link: "/behandlinger/profhilo"
            },
            {
                name: "Fylde til hængende hud og 'mormorarme'",
                description: "En Profhilobehandling kan glatte huden ud og stramme op omkring overarmene.",
                link: "/behandlinger/profhilo"
            },
        ],
        info: {
            title: "Med Profhilo kan vi udglatte ",
            titlePink: "rynker, furer og fine linjer",
            titleAfter: ", samt give en øget fyldighed og spændstighed til huden.",
            first: {
                title: "Bivirkninger",
                text: [
                    {
                        text: "De almindelige bivirkninger, som knytter sig til Profhilo, er: rødme, lette smerter ifm behandlingen og ømhed ved indstiksstedet. Sjældent ses hudinfektion eller misfarvning af huden, hvilket kan behandles i klinikken, hvis det mod forventning skulle opstå. Vi tilbyder ikke behandling med Profhilo til gravide eller ammende, da produktet ikke er testet på denne patientgruppe."
                    },
                    // {
                    //     text: "Ved 1 ud af 10.000 behandlinger ses en lokal infektion omkring indstiksstedet, som skal behandles med antibiotika. Vi forebygger infektion ved at udføre proceduren sterilt, og du bør efter behandlingen være opmærksom på at holde området rent og tørt."
                    // },
                ]
            },
            second: {
                title: "Hvordan foregår behandlingen?",
                text: [
                    {
                        text: "Ved hjælp af små indstik lægges små doser Profhilo lige under hudniveau, hvor det i løbet af 12-24 timer fordeler sig i underhuden. Profhilo er velegnet til behandling af ansigt, hals, overarme (”mormorarme”) og hænder. Ved opstart i Profhilobehandling udføres to behandlinger med en måneds mellemrum. Det optimale resultat kan ses en måned efter anden behandling. Herefter skal behandlingen vedligeholdes med en enkelt genopfyldningsbehandling hver 7. til 8. måned, afhængigt af dit individuelle behov. Behandlingen er særdeles velegnet til patienter, som oplever alderstegn i form af rynker, linjer, manglende fylde eller hængende hud."
                    },
                    {
                        text: "For at starte behandling med Profhilo skal du til en gratis og uforpligtende forundersøgelse hos en af vores registrerede kosmetiske læger minimum 48 timer inden behandlingen. Her taler vi nærmere om behandlingen, forventning til resultat, og om den optimale mængde Profhilo til lige netop dig. Hvis du tidligere har været til forundersøgelse hos Gesicht ifm fillerbehandling er denne også dækkende for Profhilobehandling, hvorfor du i dette tilfælde kan booke tid direkte til behandling."
                    }
                ]
            }
        },
        questions: [
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
            {
                question: "Hvor lang tid holder behandlingen?",
                answer: "Svar her"
            },
        ]
    },
    about: {
        hero: {
            title: "About us"
        },
        intro: {
            title: "We believe in transparency and communication.",
            cta: "That's why we are always available for questions and contact.",
        },
        info: {
            title: "Vores faglige stolthed er din garanti, for en sikker og tryg behandling.",
            text: [
                {
                    text: "Hos os bliver du altid mødt af venligt og kompetent personale, hvis fælles mission er at bringe dine behov som klient i fokus. Hos os findes ingen dumme spørgsmål. Alle behandlere er kvalificerede læger, uddannet og certificerede i behandling med ikke-permanente fillers i international standard. "
                },
                {
                    text: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde. Klinikkens ansvarshavende læge er Peter James Bruhn."
                },
                {
                    text: "Hos os findes ingen dumme spørgsmål og du er altid velkommen til at "
                },
                {
                    text: "kontakte os "
                },
                {
                    text: "på tlf. eller mail."
                }
            ]
        },
        employees: {
            title: "Vores behandlere",
            text: "Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde.",
            employees: [
                {
                    name: "Peter James Bruhn",
                    title: "Ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }, {
                    name: "Vibeke Schaffalitzky de Muckadell",
                    title: "MD, ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }, {
                    name: "Dennis Bregner Zetner",
                    title: "MD, ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }, {
                    name: "Anders Funding La Cour",
                    title: "MD, ansvarshavende læge.",
                    image: "/employees/employee-example.jpg"
                }
            ]
        },
        extra: {
            text: "Klinikken er registreret som kosmetisk behandlingssted hos Styrelsen for Patientsikkerhed, og alle behandlende læger er registreret og godkendt til kosmetisk behandling med ikke-permanente fillers.",
            text2: "Gesicht er registreret og godkendt som behandlingssted hos Sundhedsstyrelsen med registreret ansvarshavende læge."
        }
    },
    contact: {
        hero: {
            title: "Contact us"
        },
        intro: {
            title: "We believe in transparency and clear communicatins.",
            cta: "That's why we are always available for questions and contact.",
        },
        info: {
            titleOpeningHours: "Opening hours",
            titleContact: "In the middle of Copenhagen"
        }
    },
    booking: {
        hero: {
            title: "Booking"
        },
        intro: {
            title: "We have the time for you",
            text: [
                {
                    text: "Vi sætter altid god tid af til hver enkelt forundersøgelse og behandling, så vi og du er sikre på, at du ikke risikerer at forlade klinikken igen med uforløste spørgsmål eller tvivl. "
                },
                {
                    text: "Gennem vores bookingsystem kan du bestille tid til forundersøgelse og behandling. Vælg først, hvilken type aftale, du ønsker, og vælg derefter dato og tidspunkt."
                }
            ],
            cta: "",
        },
        info: {
            titleBefore: "Bemærk, at der skal være foretaget forundersøgelse minimum ",
            titleHighlighted: "48 timer ",
            titleAfter: "før en eventuel behandling.",
            text:
            {
                text: "Hvis det er første gang, du bestiller tid hos os, skal du oprette en bruger. Hvis du har en bruger hos os, skal du blot logge ind og oprette en aftale. Bemærk, at aftaler kan aflyses indtil 24 timer før aftalen. Aftaler der aflyses mindre end 24 timer før aftalen opkræves et gebyr på 500 kr.",
                textSecond: "Husk at du altid er velkommen til at tage ",
                textLink: "kontakt til os ",
                textAfter: "enten på telefon eller mail, før en eventuel booking."
            }
        }
    },
}