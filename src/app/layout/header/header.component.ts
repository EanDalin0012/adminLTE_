import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/shared/utils/utils.static';
import { LANGUAGE } from 'src/app/shared/constants/common.const';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectLanguage: string;
  language: string;

  langData = { // Class
    en: { class: 'eng', text: 'English'},
    km: { class: 'khmer', text: 'ខ្មែរ'},
    zh: { class: 'china', text: '中文'},
  };

  langCode = this.translate.currentLang;
  constructor(
    private translate: TranslateService,
  ) {
    this.translate = translate;
  }

  ngOnInit() {
    this.langCode = Utils.getSecureStorage( 'langCode' ) || 'en';
    this.translate.use( this.langCode );
    this.getI18N();
  }

  onChooseLanguage() {
    this.selectLanguage = 'ui_drop_open';

  }


  onChangeLanguage(code: string) {
    this.langCode = code;
    this.translate.use( this.langCode );
    Utils.setSecureStorage('langCode', this.langCode );
  }

  getI18N(): string {
    if (this.langCode === LANGUAGE.I18N_EN) {
      this.language = 'English';
      return LANGUAGE.I18N_EN;
    } else if (this.langCode === LANGUAGE.I18N_KM) {
      this.language = 'ខ្មែរ';
      return LANGUAGE.I18N_KM;
    } else if (this.langCode === LANGUAGE.I18N_KO) {
      return LANGUAGE.I18N_KO;
    } else if (this.langCode === LANGUAGE.I18N_JA) {
      return LANGUAGE.I18N_JA;
    } else if (this.langCode === LANGUAGE.I18N_ZH) {
      this.language = '中文';
      return LANGUAGE.I18N_ZH;
    }
  }

}
