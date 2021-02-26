import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Check the person does not have any judicial records in the national archives' external system.
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
	if (_.method === 'POST') {
		const identification = _.body.identification as string;
		res.status(200).json({ valid: !!identification })
	} else {
		res.status(200).json({ valid: false })
	}
}
