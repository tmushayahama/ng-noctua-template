import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material';
import { NoctuaPipesModule } from '@noctua/pipes/pipes.module';
import { NoctuaMaterialColorPickerComponent } from '@noctua/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        NoctuaMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatRippleModule,
        NoctuaPipesModule
    ],
    exports: [
        NoctuaMaterialColorPickerComponent
    ],
})
export class NoctuaMaterialColorPickerModule {
}
