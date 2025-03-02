import { bootstrapApplication } from '@angular/platform-browser';

import { HomepageComponent } from './Homepage/homepage.component';

bootstrapApplication(HomepageComponent)
  .catch((err) => console.error(err));
