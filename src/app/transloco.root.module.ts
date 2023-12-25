import { NgModule, isDevMode } from "@angular/core";
import { TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TranslocoModule, translocoConfig } from "@ngneat/transloco";
import { TranslocoHttpLoader } from "./transloco-loader";

@NgModule({
    exports: [TranslocoModule],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: ['en', 'pl'],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            }),
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    ],
})
export class TranslocoRootModule { }