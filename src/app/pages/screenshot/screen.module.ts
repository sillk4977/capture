import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routings } from "./routes";
import { ScreenShotComponent } from "./screen.component";
import { CustomCommonModule } from "../../common/common.module";
import { ScreenDisplay } from "./display/display.component";
import { MaskComponent } from "./display/mask.component";
import { Service } from "./display/service";

@NgModule({
  imports: [
    CommonModule,
    CustomCommonModule,
    routings,
  ],
  declarations: [
    ScreenShotComponent,
    ScreenDisplay,
    MaskComponent,
  ],
  providers: [
    Service,
  ],
})
export class ScreenModule {}