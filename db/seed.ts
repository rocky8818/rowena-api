import { User, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{
			id: '1',
			ident: 'cid_326',
			qr: '',
			username: 'admincid',
			password: '$argon2id$v=19$m=19456,t=2,p=1$VEyDW040N2JYilO78nzUCw$s/LTyJ++FACdEPP+OIKV1XDDJpu1MgLJJ1y1GZXfNFE',
		},
		{
			id: '2',
			ident: 'rental_666',
			qr: '',
			username: 'rental_zone',
			password: '$argon2id$v=19$m=19456,t=2,p=1$VEyDW040N2JYilO78nzUCw$s/LTyJ++FACdEPP+OIKV1XDDJpu1MgLJJ1y1GZXfNFE',
		},
	])
}
