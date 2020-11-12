import {portfolio} from '../../store/portfolio.js';

const contents = JSON.stringify(portfolio.map(folio => {
	return {
		id: folio.id,
		slug: folio.slug,
		// slug: folio.slug
		// id: '1',
		url: folio.url,
		mode: folio.mode,
		img: folio.img,
		banner: folio.banner,
		mod: folio.mod,
		slug: folio.slug,
		alt: folio.alt,
		name: folio.name,
		desc: folio.desc,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}