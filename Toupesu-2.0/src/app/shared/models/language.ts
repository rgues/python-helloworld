export interface LangueCode {
    country_id: number;
    langue_id: number;
    name: string;
    code_langue: string;
    nom_country_dans_la_langue: string;
    default_langue: string;
}

export interface LanguageData {
   keyword: string;
   value: string;
   params?: string;
}


export interface Language {
    langue: LangueCode;
    keywords: LanguageData[];
}
