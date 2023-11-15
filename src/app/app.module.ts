import { NgModule, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		FormsModule,
	],
	providers: [importProvidersFrom(HttpClientModule)],
	bootstrap: [AppComponent],
})
export class AppModule {}
