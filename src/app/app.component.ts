import { Component } from "@angular/core";
import { PrimaService } from "./services/prima.service";
import { FormControl, Validators } from "@angular/forms";
import { Prima } from "./interfaces";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	code = new FormControl<string>("", {
		nonNullable: true,
		validators: Validators.required,
	});

	primas: Prima[] = [];

	displayedColumns: (keyof Prima)[] = [
		"liquidacionPrima",
		"codigoProducto",
		"numeroPoliza",
		"codigoAsegurado",
		"tipoDocumento",
		"tipoRegistro",
		"numeroDocumento",
		"codigoCliente",
	];

	isFetching: boolean = false;

	constructor(private primaService: PrimaService) {}

	handleSubmit() {
		if (!this.code.valid) return;

		this.isFetching = true;
		this.primaService.getPrimas(this.code.value).subscribe((data) => {
			this.primas = data;
			this.isFetching = false;
		});
	}
}
