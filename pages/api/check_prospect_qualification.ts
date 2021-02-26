import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Random validation for national registry.
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
	if (_.method === 'POST') {
		const qualification = +(Math.random() * 100).toFixed(0);
		res.status(200).json({ qualification })
	} else {
		res.status(200).json({ valid: false })
	}
}
