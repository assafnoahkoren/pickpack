import axios from "axios";
import { createMobxMutation } from "./createMobxMutation";
import { createMobxQuery } from "./createMobxQuery";

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
		},
		signIn: () => {
			type Args = {
				phoneNumber: string;
				code: string;
			}
			type Response = {
				isNewUser: boolean;
				accessToken: string;
			}
			return createMobxMutation({
				mutationFn: async (args: Args) => {
					const response = await axios.post<Response>(`${API_BASE_URL}/api/v1/auth/sign-in`, { 
						phoneNumber: args.phoneNumber,
						code: args.code
					});
					return response.data;
				}
			})
		},
		isAuthenticated: () => {
			return createMobxQuery({
				queryKey: ['auth', 'isAuthenticated'],
				queryFn: async () => {
					const response = await axios.get(`${API_BASE_URL}/api/v1/auth/is-authenticated`);
					return response.data;
				}
			})
		}
	}
}
