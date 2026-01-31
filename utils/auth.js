import config from '../config/index.js'

const authMiddleware = (req, res, next) => {
	const token = req.headers['authorization']
	if (!token || token !== `Bearer ${config.API_TOKEN}`) {
		return res.status(403).json({ error: 'access_denied' })
	}
	next()
}

export default authMiddleware