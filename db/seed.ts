import { User, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{
			id: 1,
			username: 'admincid',
			ident: 'cid_326',
			password: '$argon2id$v=19$m=19456,t=2,p=1$VEyDW040N2JYilO78nzUCw$s/LTyJ++FACdEPP+OIKV1XDDJpu1MgLJJ1y1GZXfNFE',
			qr: '2@15muSDFgr6DnBpc7lOu/lQs4Ic4ZlQbiPjEuZUP8N4UhfGL0PoijBEBwzjiGv89fFuQhcbXaBFk/7zT/HnrU2YCbtQooV62gkWY=,nL9q3MPBulb9lKBGCXm8RnKC6ZK7Jel65rIUEe3O/yA=,ClAox5qYPxfN3KMHO75KIyMUCn4ECkydbZUTp1EB1j0=,us9Lw3VxIQatrEvOY+NmyWbQV8noiFMbJm0dqdCze4s='
		},
	])
}