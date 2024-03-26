import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2UVhhQlVFfVtdXGFWfFN0QXNbdV1yflVAcC0sT3RfQFljSn9QdkdgW31Zc3FWQw==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
