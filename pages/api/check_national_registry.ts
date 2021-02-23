import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Random validation for national registry.
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
	const identification = _.body?.id || _.query?.id;
	const valid = identification ? +identification % 2 === 0 : false;
	res.status(200).json({ valid })
}
