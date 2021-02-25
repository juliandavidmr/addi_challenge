import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Random validation for national registry.
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
	const limit = +(_.query.limit as string) || 100;
	res.status(200).json({ data: list.slice(0, limit) })
}

const list = [
	{
		"id": 1,
		"first_name": "Ali",
		"last_name": "Gitthouse",
		"email": "agitthouse0@artisteer.com",
		"gender": "Male",
		"identification": "46-204-9111",
		"birthdate": "1992-03-14",
		"phone": "+573144763283"
	}, {
		"id": 2,
		"first_name": "Alf",
		"last_name": "Croson",
		"email": "acroson1@auda.org.au",
		"gender": "Non-binary",
		"identification": "79-994-9134",
		"birthdate": "1983-10-21"
	}, {
		"id": 3,
		"first_name": "Marin",
		"last_name": "Settle",
		"email": "msettle2@a8.net",
		"gender": "Genderqueer",
		"identification": "01-242-5009",
		"birthdate": "1988-02-29"
	}, {
		"id": 4,
		"first_name": "Keith",
		"last_name": "Brandino",
		"email": "kbrandino3@foxnews.com",
		"gender": "Female",
		"identification": "87-596-4946",
		"birthdate": "1984-09-18"
	}, {
		"id": 5,
		"first_name": "Sacha",
		"last_name": "Anthony",
		"email": "santhony4@jigsy.com",
		"gender": "Male",
		"identification": "06-328-4309",
		"birthdate": "1973-05-09"
	}, {
		"id": 6,
		"first_name": "Gayler",
		"last_name": "Ikin",
		"email": "gikin5@yolasite.com",
		"gender": "Female",
		"identification": "43-169-4108",
		"birthdate": "1979-04-11"
	}
]
