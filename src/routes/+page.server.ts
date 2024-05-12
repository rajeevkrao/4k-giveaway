import { addEntry, type Entry } from '$lib/server/database/user';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const entry = Object.fromEntries(formData.entries()) as Entry;

			entry.phone = entry.phone.replace(/\D/g, '');

			console.log({phone: entry.phone})

			const phoneRegex = /^[6-9]\d{9}$/;

			if(!phoneRegex.test(entry.phone) ) return {success: false, errorMessage: "Enter a valid number", values: entry}

			await addEntry(entry)

			return {
				success: true
			};
		} catch (err:any) {
			if(err.code === 11000){
				return {
					success: false,
					errorMessage: "You have already entered the giveaway",
				}
			}
			return {
				success: false,
				errorMessage: err.message ?? 'Something went wrong'
			};
		}
	}
} satisfies Actions;
