import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';
registerLicense("ORg4AjUWIQA/Gnt2V1hiQlZPf0BBQmFJfFBmQmlYdlRydEU3HVdTRHRcQlVjTX5bdkRmX3lfeHY=");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
