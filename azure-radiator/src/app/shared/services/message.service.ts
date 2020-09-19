import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private messaging: Ng2IzitoastService,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public setLanguage(language: string): void {
    this.translate.use(language);
  }

  public success(message: string): void {
    this.translate.get('Messaging.Success').subscribe(res => {
      this.messaging.success({ title: res, message: message });
    });
  }
}
