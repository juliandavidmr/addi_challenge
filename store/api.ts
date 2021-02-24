import { request } from "universal-rxjs-ajax";

export const getUsers = () => request({ url: `/api/crm/users`, });

export const checkNationalRegistry = (identification: string) =>
	request({
		url: `/api/check_national_registry`,
		method: 'POST',
		body: { identification }
	});

export const checkJudicialRecords = (identification: string) =>
	request({
		url: `/api/check_judicial_records`,
		method: 'POST',
		body: { identification }
	});

export const checkProspectQualification = (identification: string) =>
	request({
		url: `/api/check_prospect_qualification`,
		method: 'POST',
		body: { identification }
	});
