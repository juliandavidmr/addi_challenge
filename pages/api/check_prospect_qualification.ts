import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Random validation for national registry.
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
	if (_.method === 'POST') {
		const identification = _.body.identification as string;
		res.status(200).json({ valid: identification.includes('2') })
	} else {
		res.status(200).json({ valid: false })
	}
}
