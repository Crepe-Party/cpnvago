export default class Country { 
  constructor(data) {
    this.id = data.id
    this.country = data.country
    this.languages = data.languages
    this.default_language = data.default_language
    this.prefix = data.prefix
    this.default_currency = data.default_currency
  }

  getLanguages(langs){
    var data = [];
    this.languages.forEach(language => {
      langs.forEach(lang => {
        if(lang.id == language){
          data.push(lang);
        }
      });
    });
    return data;
  }
}