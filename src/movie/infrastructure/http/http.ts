const headers = {
	'Content-Type': 'application/json',
};

const get = async <T>(url: string) =>
	await fetch(url, {
		method: 'GET',
		headers,
	})
		.then((response) => response.json())
		.then(({ page, results }) => [...results, page] as T);
// .catch((err) => err);

export const http = { get };
