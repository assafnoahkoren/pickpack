import axios from "axios";
import { createMobxMutation } from "./createMobxMutation";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
	auth: {
		verifyPhoneNumber: () => {
			type Args = {
				phoneNumber: string
			}
			return createMobxMutation({
				mutationFn: async (args: Args) => {
					const response = await axios.post(`${API_BASE_URL}/api/v1/auth/verify-phone-number`, { 
						phoneNumber: args.phoneNumber
					});
					return response.data;
				}
			})
		}
	}
}
