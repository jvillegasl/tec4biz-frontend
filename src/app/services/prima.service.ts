import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Prima } from "../interfaces";

@Injectable({
	providedIn: "root",
})
export class PrimaService {
	constructor(private http: HttpClient) {}

	getPrimas(code: string) {
		return this.http.get<Prima[]>(`http://localhost:5164/prima/${code}`);
	}
}
