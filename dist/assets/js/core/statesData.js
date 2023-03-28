let coaPath = './assets/img/coas/';

let federalStates = [
    {
      uid:        "DE-BW",
      name:       "Baden-Württemberg", 
      short:      "BW",
      flag:       "bw-flag",
      location:        "bw-map",
      coatOfArms: "bw-coa",
      residents:  "11.1 Mio.",
      area:       "35.751 km²",
      capital:    "Stuttgart",
      borders:    ['Bayern', 'Hessen', 'Rheinland-Pfalz', 'Frankreich'],
      link:       "https://www.baden-wuerttemberg.de/de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-BY",
      name:       "Bayern", 
      short:      "BY",
      flag:       "by-flag",
      location:        "by-map",
      coatOfArms: "by-coa",
      residents:  "13.1 Mio.",
      area:       "70.548 km²",
      capital:    "München",
      borders:    ['Baden-Württemberg', 'Hessen', 'Thüringen', 'Tschechien', 'Österreich', 'Schweiz'],
      link:       "https://www.bayern.de/",
      newState:   false,
      comments:   []

    },
    {
      uid:        "DE-BE",
      name:       "Berlin", 
      short:      "BE",
      flag:       "be-flag",
      location:        "be-map",
      coatOfArms: "be-coa",
      residents:  "3.6 Mio.",
      area:       "891 km²",
      capital:    "Berlin",
      borders:    ['Brandenburg', 'Mecklenburg-Vorpommern', 'Sachsen', 'Sachsen-Anhalt', 'Polen'],
      link:       "https://www.berlin.de/",
      newState:   true,
      comments:   []
    },
    {
      uid:        "DE-BB",
      name:       "Brandenburg", 
      short:      "BB",
      flag:       "bb-flag",
      location:        "bb-map",
      coatOfArms: "bb-coa",
      residents:  "2.5 Mio.",
      area:       "29.478 km²",
      capital:    "Potsdam",
      borders:    ['Berlin', 'Mecklenburg-Vorpommern', 'Sachsen', 'Sachsen-Anhalt', 'Polen'],
      link:       "https://www.brandenburg.de/",
      newState:   true,
      comments:   []
    },
    {
      uid:        "DE-HB",
      name:       "Bremen", 
      short:      "HB",
      flag:       "hb-flag",
      location:        "hb-map",
      coatOfArms: "hb-coa",
      residents:  "0.7 Mio.",
      area:       "419 km²",
      capital:    "Bremen",
      borders:    ['Niedersachsen'],
      link:       "https://www.bremen.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-HH",
      name:       "Hamburg", 
      short:      "HH",
      flag:       "hh-flag",
      location:        "hh-map",
      coatOfArms: "hh-coa",
      residents:  "1.8 Mio.",
      area:       "755 km²",
      capital:    "Hamburg",
      borders:    ['Niedersachsen', 'Schleswig-Holstein'],
      link:       "https://www.hamburg.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-HE",
      name:       "Hessen", 
      short:      "HE",
      flag:       "he-flag",
      location:        "he-map",
      coatOfArms: "he-coa",
      residents:  "6.2 Mio.",
      area:       "21.114 km²",
      capital:    "Wiesbaden",
      borders:    ['Baden-Württemberg', 'Bayern', 'Nordrhein-Westfalen', 'Rheinland-Pfalz', 'Thüringen'],
      link:       "https://www.hessen.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-MV",
      name:       "Mecklenburg-Vorpommern", 
      short:      "MV",
      flag:       "mv-flag",
      location:        "mv-map",
      coatOfArms: "mv-coa",
      residents:  "1.6 Mio.",
      area:       "23.174 km²",
      capital:    "Schwerin",
      borders:    ['Brandenburg', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Polen', 'Schleswig-Holstein'],
      link:       "https://www.mecklenburg-vorpommern.de/",
      newState:   true,
      comments:   []
    },
    {
      uid:        "DE-NI",
      name:       "Niedersachsen", 
      short:      "NI",
      flag:       "ni-flag",
      location:        "ni-map",
      coatOfArms: "ni-coa",
      residents:  "7.9 Mio.",
      area:       "47.618 km²",
      capital:    "Hannover",
      borders:    ['Niedersachsen', 'Nordrhein-Westfalen', 'Schleswig-Holstein', 'Bremen', 'Hamburg'],
      link:       "https://www.niedersachsen.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-NW",
      name:       "Nordrhein-Westfalen", 
      short:      "NW",
      flag:       "nw-flag",
      location:        "nw-map",
      coatOfArms: "nw-coa",
      residents:  "18.3 Mio.",
      area:       "34.084 km²",
      capital:    "Düsseldorf",
      borders:    ['Baden-Württemberg', 'Hessen', 'Niedersachsen', 'Rheinland-Pfalz'],
      link:       "https://www.nrw.de/",
      newState:   false
    },
    {
      uid:        "DE-RP",
      name:       "Rheinland-Pfalz", 
      short:      "RP",
      flag:       "rp-flag",
      location:        "rp-map",
      coatOfArms: "rp-coa",
      residents:  "4.1 Mio.",
      area:       "19.846 km²",
      capital:    "Mainz",
      borders:    ['Baden-Württemberg', 'Hessen', 'Luxemburg', 'Nordrhein-Westfalen', 'Rheinland-Pfalz'],
      link:       "https://www.rlp.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-SL",
      name:       "Saarland", 
      short:      "SL",
      flag:       "sl-flag",
      location:        "sl-map",
      coatOfArms: "sl-coa",
      residents:  "0.9 Mio.",
      area:       "2.570 km²",
      capital:    "Saarbrücken",
      borders:    ['Frankreich', 'Rheinland-Pfalz', 'Baden-Württemberg'],
      link:       "https://www.saarland.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-SN",
      name:       "Sachsen", 
      short:      "SN",
      flag:       "sn-flag",
      location:        "sn-map",
      coatOfArms: "sn-coa",
      residents:  "4.1 Mio.",
      area:       "18.413 km²",
      capital:    "Dresden",
      borders:    ['Brandenburg', 'Böhmen', 'Niederschlesien', 'Sachsen-Anhalt', 'Thüringen'],
      link:       "https://www.sachsen.de/",
      newState:   true,
      comments:   []
    },
    {
      uid:        "DE-ST",
      name:       "Sachsen-Anhalt", 
      short:      "ST",
      flag:       "st-flag",
      location:        "st-map",
      coatOfArms: "st-coa",
      residents:  "2.2 Mio.",
      area:       "20.415 km²",
      capital:    "Magdeburg",
      borders:    ['Brandenburg', 'Niedersachsen', 'Polen', 'Sachsen', 'Thüringen'],
      link:       "https://www.sachsen-anhalt.de/",
      newState:   true,
      comments:   []
    },
    {
      uid:        "DE-SH",
      name:       "Schleswig-Holstein", 
      short:      "SH",
      flag:       "sh-flag",
      location:        "sh-map",
      coatOfArms: "sh-coa",
      residents:  "2.8 Mio.",
      area:       "15.770 km²",
      capital:    "Kiel",
      borders:    ['Dänemark', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Schleswig-Holstein'],
      link:       "https://www.schleswig-holstein.de/",
      newState:   false,
      comments:   []
    },
    {
      uid:        "DE-TH",
      name:       "Thüringen", 
      short:      "TH",
      flag:       "th-flag",
      location:        "th-map",
      coatOfArms: "th-coa",
      residents:  "2.2 Mio.",
      area:       "16.174 km²",
      capital:    "Erfurt",
      borders:    ['Bayern', 'Hessen', 'Niedersachsen', 'Sachsen', 'Sachsen-Anhalt'],
      link:       "https://www.thueringen.de/",
      newState:   true,
      comments:   []
    }
];