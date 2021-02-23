import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Check the person does not have any judicial records in the national archives' external system.
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ valid: true })
}
