import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LanguageData, Language } from '../models/language';
import { States } from '../models/countries';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';
import { UtilService } from './util.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = 'https://restcountries.eu/rest/v2/';
  private subject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private util: UtilService
  ) {

  }


  sendTranslation(dataTranslation: any) {
    this.subject.next({ translation: dataTranslation });
  }

  getTranslation(): Observable<any> {
    return this.subject.asObservable();
  }

  // set the current country code
  setAllCountriesData(countries: any) {
    this.localStorage.setItem('countries', countries);
  }

  // Get the currentCounty code
  getAllCountriesData() {
    const countries = this.localStorage.getItem('countries');
    return countries ? countries : [];
  }

  // set the current country code
  setCurrentCountryPrefix(code: string) {
    this.localStorage.setItem('country_code', code);
  }

  // Get the currentCounty code
  getCurrentCountyPrefix() {

    return this.localStorage.getItem('country_code');
  }

  // Get the current user country
  getAllCountry() {
    const countries = this.localStorage.getItem('all-countries');
    return countries ? countries : [];
  }

  // Set the current user country
  setAllCountry(countryData: any) {
    this.localStorage.setItem('all-countries',countryData);
  }

  // Get the current user country
  removeAllCountry() {
    this.localStorage.removeItem('all-countries');
  }

  // Get the current user country
  getCurrentUserCountry() {
    return this.localStorage.getItem('user-country');
  }

  // Set the current user country
  setCurrentUserCountry(countryData: any) {
    this.localStorage.setItem('user-country',countryData);
  }

  // get the current user country
  removeCurrentUserCountry() {
    this.localStorage.removeItem('user-country');
  }

  // Get the current user Language
  getCurrentUserLanguage() {
    return this.localStorage.getItem('user-language');
  }

  // Set the current user Language
  setCurrentUserLanguage(countryData: any) {
    this.localStorage.setItem('user-language', countryData);
  }

  // get the current user Language
  removeCurrentUserLanguage() {
    this.localStorage.removeItem('user-language');
  }

  // Get the current user Language translation
  getCurrentLanguageTranslation() {
    return this.localStorage.getItem('language-translation');
  }

  // Set the current user Language translation
  setCurrentLanguageTranslation(countryData: any) {
    this.localStorage.setItem('language-translation', countryData);
  }

  // get the current user Language translation
  removeCurrentLanguageTranslation() {
    this.localStorage.removeItem('language-translation');
  }

  // Get the current user Language translation
  getAllCurrentCountryLanguages() {
    return this.localStorage.getItem('all-country-languages');
  }

  // Set the current user Language translation
  setAllCurrentCountryLanguages(countryData: any) {
    this.localStorage.setItem('all-country-languages', countryData);
  }

  // get the current user Language translation
  removeAllCurrentCountryLanguages() {
    this.localStorage.removeItem('all-country-languages');
  }

  // Get the current user country Language
  getACurrentCountryLanguages() {
    return this.localStorage.getItem('current-country-languages');
  }

  // Set the current user country Language
  setCurrentCountryLanguages(languageData: any) {
    this.localStorage.setItem('current-country-languages', languageData);
  }

  // get the current user  country Language
  removeCurrentCountryLanguages() {
    this.localStorage.removeItem('current-country-languages');
  }

  // get the default country language
  getDefaultCountryLanguageData() {
    return this.localStorage.getItem('default-country-languages');
  }

  // Set the default country language
  setDefaultCountryLanguageData(languageData: any) {
    this.localStorage.setItem('default-country-languages', languageData);
  }

  // remove the default country language
  removeDefaultCountryLanguageData() {
    return this.localStorage.getItem('default-country-languages');
  }

    // Get all word counytries
    getwordCountriesData() {
      return this.localStorage.getItem('word-countries');
    }
  
    // Set all word countries
    setwordCountriesData(countries: any) {
      this.localStorage.setItem('word-countries', countries);
    }
  
    // Set all word countries
    removewordCountriesData() {
      this.localStorage.removeItem('word-countries');
    }

  // Get all country
  getAllCountriesInfos(refresher: boolean) {
    return new Promise((resolve) => {
      const countries = this.getAllCountriesData();
      if (refresher || countries.length === 0) {
        this.api.get('setting/v1/country').subscribe(data => {
          if (data && data.liste_country && data.liste_country.length > 0) {
            const countries = this.util.orderByPosition(data.liste_country);
            const countriesList = [];
            countries.forEach(country => {
              // filter by active  && country.settings.active === 1
              if (country && country.settings) {
                countriesList.push(country);
              }
            });
            this.setAllCountriesData(countriesList);
            resolve(countriesList);
          } else {
            resolve(this.getAllCountriesData());
          }
        }, error => {
          resolve(this.getAllCountriesData());
        });
      } else {
        resolve(this.getAllCountriesData());
      }
    });
  }


  // Get country information
  getLastVersion() {
    return this.api.get(`version/get`);
  }

  // check if app is the last version
  checkVersion(type: string) {
    return new Promise((resolve) => {
      this.getLastVersion().subscribe(reponse => {
        if (reponse && reponse.message === 'success') {
          switch (type) {
            case 'android':
               resolve({version: 'DOWN', data: reponse.version_android});
              break;
            case 'ios':
              resolve({version: 'DOWN', data: reponse.version_ios});
              break;
            default:
              resolve({version: 'OK' });
              break;
          }

        } else {
          resolve({ version: 'OK' });
        }
      }, error => {
        resolve({ version: 'OK' });
      });
    });
  }

  // Get country information
  getInfoCountry(countryId: any) {
    return this.api.get(`setting/v1/forAcountry/${countryId}`);
  }

  // Get current user position
  getPositionUser() {
    return this.http.get('https://pro.ip-api.com/json/?key=OTLs8gHCV0rJyYz');
  }


  // Get the currency country data informations of word
  getCurrentWordCountryInfo(refresher: boolean) {
    return new Promise((resolve) => {
      this.getPositionUser().subscribe((position: any) => {
        this.getWordCountries(refresher).then((countries: any) => {
          if (countries && countries.length > 0) {
            let currentCountryData = null;
            countries.forEach(country => {
              if (position.countryCode === country.code_country) {
                currentCountryData = country;
              }
            });
            resolve(currentCountryData);
          } else {
            resolve(null);
          }
        });
      }, error => {
        resolve(null);
      });
    });
  }

  // get all countries
  getAllcountriesData() {
    return new Observable((observer) => {
    this.http.get(`${this.baseUrl}all`).subscribe((countries: any) => {
        observer.next(countries);
      }, error => {
        this.http.get(`assets/json/countries.json`).subscribe((countries: any) => { observer.next(countries); });
      }); 
    });
  }

  // Get all the word countries
  getWordCountries(refresh: boolean) {
    return new Promise((resolve) => {
      const countries = this.getwordCountriesData();
      if (countries && countries.length === 0 || refresh) {
        this.getAllcountriesData().subscribe((countries: any) => {
          if (countries && countries.length > 0) {
            this.api.get('setting/v1/country').subscribe(data => {
              if (data && data.liste_country && data.liste_country.length > 0) {
                const states = [];
                countries.forEach(country => {
                  const countryLabel = `COUNTRY_${country.alpha2Code}`;
                  let countryId = 0;
                  let defaultCountry = 'no';
                  let active = 0;
                  data.liste_country.forEach(currentCountry => {
                    if (currentCountry.settings.active === 1 && currentCountry.settings.code_country === country.alpha2Code) {
                      countryId = currentCountry.settings.country_id;
                      active = 1;
                    }
                    if (currentCountry.settings.default_country === 'yes') {
                      defaultCountry = currentCountry.settings.default_country;
                    }
                  });

                  this.translate.get(countryLabel).subscribe(value => {
                    states.push({
                      country_id: countryId,
                      country_name: country.name,
                      active: active,
                      country_flag: country.flag,
                      country_prefixe: country.callingCodes[0],
                      code_country: country.alpha2Code,
                      default_country: defaultCountry,
                      country_label: value,
                      country_key: countryLabel
                    });
                  });
                });
                this.setwordCountriesData(states);
                resolve(states);
              } else {
                resolve(this.getwordCountriesData());
              }

            }, error => {
              resolve(this.getwordCountriesData());
            });

          } else {

            resolve(this.getwordCountriesData());
          }

        });
      } else {
        resolve(countries);
      }
    });
  }

  // Get all countries
  getAllCountries(refresher: boolean) {
    return new Promise((resolve) => {
      this.getAllCountriesInfos(refresher).then((countries: any) => {
        const countriesData: States[] = [];
        if (countries && countries.length > 0) {
          countries.forEach(country => {
            countriesData.push(country.settings);
          });
          this.setAllCountry(countriesData);
          resolve(countriesData);
        } else {
          const countriesList = this.getAllCountry();
          if (countriesList && countriesList.length > 0) {
            resolve(countriesList);
          } else {
            resolve([]);
          }
        }
      });
    });
  }

  // Get the default country
  getDefaultCountry(refresher: boolean) {
    return new Promise((resolve) => {
      this.getAllCountries(refresher).then((countries: any) => {
        if (countries && countries.length > 0) {
          countries.forEach(country => {
            if (country && country.default_country === 'yes') {
              this.setCurrentUserCountry(country);
              resolve(country);
            }
          });
        } else {
          resolve(this.getCurrentUserCountry());
        }
      });
    });
  }

  // Get the currency country data informations
  getCurrentCountryInfo(refresher: boolean) {
    return new Promise((resolve) => {
      this.getPositionUser().subscribe((position: any) => {
        this.getAllCountriesInfos(refresher).then((countries: any) => {
          if (countries && countries.length > 0) {
            let currentCountryData = null;
            countries.forEach(country => {
              if (position.countryCode === country.settings.code_country) {
                currentCountryData = country;
              }
            });
            if (currentCountryData) {
              this.setCurrentUserCountry(currentCountryData.settings);
              resolve(currentCountryData);
            } else {
              resolve(currentCountryData);
            }

          } else {
            resolve(this.getCurrentUserCountry());
          }
        });
      }, error => {
        resolve(this.getCurrentUserCountry());
      });
    });
  }

  // Get all languages
  getACountryLanguages(countryCode: string, refresher: boolean) {
    return new Promise((resolve) => {
      this.getAllCountriesInfos(refresher).then((countries: any) => {
        let languagesData: Language[] = [];
        if (countries && countries.length > 0) {
          countries.forEach(country => {
            if (country.settings.code_country === countryCode) {
              languagesData = country.langues_country;
            }
          });
          this.setAllCurrentCountryLanguages(languagesData);
          resolve(languagesData);
        } else {
          const languages = this.getAllCurrentCountryLanguages();
          if (languages && languages.length > 0) {
            resolve(languages);
          } else {
            resolve([]);
          }
        }
      });
    });
  }

  // Get the default country Languages
  getDefaultCountryLanguage(countryCode: string, refresher: boolean) {
    return new Promise((resolve) => {
      this.getACountryLanguages(countryCode, refresher).then((langues: any) => {
        if (langues && langues.length > 0) {
          langues.forEach(langueData => {
            if (langueData && langueData.langue && langueData.langue.default_langue === 'yes') {
              this.setDefaultCountryLanguageData(langueData);
              resolve(langueData);
            }
          });
        } else {
          const userLanguage = this.getDefaultCountryLanguageData();
          if (userLanguage) {
            resolve(userLanguage);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  // Get Languages data Translation
  getDataTranslate(language: Language[], lang: string) {
    let langueData: LanguageData[] = [];
    language.forEach(langue => {
      if (langue.langue.code_langue === lang) {
        langueData = langue.keywords;
      }
    });
    return langueData;
  }

  // Get the language data
  getLanguages(refresher: boolean) {
    return new Promise((resolve) => {
      // step 1 :  Get all session Languages
      const languagesData = this.getAllCurrentCountryLanguages();
      if (languagesData && languagesData.length > 0 && !refresher) {
        resolve(languagesData);
      } else {

        // step 2  Get the user country languages
        const userCountry = this.getCurrentUserCountry();
        if (userCountry && userCountry.code_country) {
          this.getACountryLanguages(userCountry.code_country, refresher).then((languages: any) => {
            if (languages) {
              this.setAllCurrentCountryLanguages(languages);
              resolve(languages);
            } else {
              resolve([]);
            }
          });
        } else {

          // step 3 the current country languages
          this.getCurrentCountryInfo(refresher).then((country: any) => {
            if (country && country.settings && country.settings.code_country) {
              this.getACountryLanguages(country.settings.code_country, refresher).then((languages: any) => {
                if (languages) {
                  this.setAllCurrentCountryLanguages(languages);
                  resolve(languages);
                } else {
                  resolve([]);
                }
              });
            } else {
              // step 4  Get the default country languages
              this.getDefaultCountry(refresher).then((countryDatas: any) => {
                if (countryDatas) {
                  this.getACountryLanguages(countryDatas.code_country, refresher).then((languages: any) => {
                    if (languages) {
                      this.setAllCurrentCountryLanguages(languages);
                      resolve(languages);
                    } else {
                      resolve([]);
                    }
                  });
                }
              });
            }

          });
        }

      }
    });
  }

  // Get the value of a keyword
  getValueTranslation(key: string, translationDta: LanguageData[], params?: string[]): string {
    const langueData: LanguageData[] = translationDta;
    let translation = '';
    if (langueData) {
      langueData.forEach(data => {
        if (data && data.keyword === key) {
          if (data && data.params && params && params.length > 0) {
            const tempTranslation = data.value;
            let formatParams: string[] = [];
            formatParams = data.params.split(';');
            formatParams.forEach(keyParam => {
              tempTranslation.replace(keyParam, params[formatParams.indexOf(keyParam)]);
            });
            translation = tempTranslation;
          } else {
            translation = data.value;
          }
        }
      });
    }

    return translation;
  }

  // Get the list of value of keywords
  getTranslationsData(keys: string[]): Observable<any> {
    const langueData: LanguageData[] = this.getCurrentLanguageTranslation();
    let i = 0;
    let found = false;
    const translation = [];

    return new Observable(subscriber => {

      keys.forEach(key => {
        found = false;
        i = 0;
        while (langueData && i < langueData.length && !found) {
          if (langueData[i] && langueData[i].keyword === key) {
            translation[key] = langueData[i].value;
          }
          i++;
        }
      });
      subscriber.next(translation);
    });
  }

  // Get the value of a keyword
  getTranslationData(key: string, params?: string[]): Observable<any> {
    const langueData: LanguageData[] = this.getCurrentLanguageTranslation();
    let i = 0;
    let found = false;
    let translation = {};
    return new Observable(subscriber => {
      found = false;
      while (langueData && i < langueData.length && !found) {
        if (langueData[i] && langueData[i].keyword === key) {
          if (langueData[i] && langueData[i].params && params && params.length > 0) {
            const tempTranslation = langueData[i].value;
            let formatParams: string[] = [];
            formatParams = langueData[i].params.split(';');
            formatParams.forEach(keyParam => {
              tempTranslation.replace(keyParam, params[formatParams.indexOf(keyParam)]);
            });
            translation = { [key]: tempTranslation };
          } else {
            translation = { [key]: langueData[i].value };
          }
        }
        i++;
      }

      subscriber.next(translation);

    });
  }

  // Set the current country of the user
  setUserCountry(countryId: number) {
    const countries = this.getAllCountriesData();
    countries.forEach(country => {
      if (country.settings.country_id === countryId) {
        this.setCurrentUserCountry(country.settings);
      }
    });
  }

  // Get current counries Languages
  getCountryLanguages(countryCode: string, refresher: boolean) {
    this.getACountryLanguages(countryCode, refresher).then((languages: any) => {
      if (languages) {
        this.setAllCurrentCountryLanguages(languages);
      }
    });
  }

  // get default country Language
  getDefaultcountrylanguage(country: any, refresher: boolean) {
    this.getDefaultCountryLanguage(country.code_country, refresher).then((languages: any) => {
      if (languages) {
        this.setCurrentUserLanguage(languages.langues);
        this.setCurrentLanguageTranslation(languages.keywords);
        this.sendTranslation(languages.keywords);
      }
    });
  }

  // Get the defaultf country, languages and Translation
  getDefaultCountryLanguagesAndTranslation(refresher: boolean) {
    this.getDefaultCountry(refresher).then((country: any) => {
      if (country && country.settings) {
        this.setCurrentUserCountry(country.settings);
        this.getCountryLanguages(country.settings.code_country, refresher);
        this.getDefaultcountrylanguage(country.settings, refresher);
      }
    });
  }


  // Get the current country, languages and Translation
  getCurrentCountryLanguagesAndTranslation(refresher: boolean) {
    const currentCountry = this.getCurrentUserCountry();
    if (currentCountry) {
      this.setCurrentUserCountry(currentCountry);
      this.getCountryLanguages(currentCountry.code_country, refresher);
      this.getDefaultcountrylanguage(currentCountry, refresher);
    } else {
      this.getCurrentCountryInfo(refresher).then((country: any) => {
        if (country) {
          this.setCurrentUserCountry(country.settings);
          this.getCountryLanguages(country.settings.code_country, refresher);
          this.getDefaultcountrylanguage(country.settings, refresher);
        } else {
          this.getDefaultCountryLanguagesAndTranslation(refresher);
        }
      });
    }
  }
}
