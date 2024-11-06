import { commonFunction } from "./apiCall";
import { baseUrl } from "./helper";


// login api
export const adminLogin = async (data) => {
    return await commonFunction("POST", `${baseUrl}/admin/login`, data)
}
