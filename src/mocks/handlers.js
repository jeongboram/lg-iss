import { rest } from 'msw';
import regionData from './datas/region';
import countryData from './datas/countries';
import platformData from './datas/platforms';
import cpsData from './datas/cps';

//const todos = ['먹기', '자기', '놀기'];

export const handlers = [
	// Region
	rest.get('/region', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(regionData));
	}),

	rest.get('/countries', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(countryData));
	}),

	rest.get('/platforms', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(platformData));
	}),

	rest.get('/cps', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(cpsData));
	}),

	// Region Post
	// rest.post('/region', (req, res, ctx) => {
	// 	dropdata.push(req.body);
	// 	return res(ctx.status(201));
	// }),
];
