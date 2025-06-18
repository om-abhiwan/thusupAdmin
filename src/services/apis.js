import { commonFunction } from "./apiCall";
import { baseUrl } from "./helper";

// login api
export const adminLogin = async (data) => {
    return await commonFunction("POST", `${baseUrl}/admin/login`, data)
}

export const userlist = async (headers) => {
    return await commonFunction("GET", `${baseUrl}/admin/userlist`, "", headers)
}

export const updateUser = async (data) => {
    return await commonFunction("POST", `${baseUrl}/admin/updateUser`, data)
}

export const performanceUser = async (data, headers) => {
    return await commonFunction("POST", `${baseUrl}/admin/getPerformance`, data, headers)
}

export const blockUser = async(data,headers)=>{
    return await commonFunction("POST", `${baseUrl}/admin/blockUser`, data, headers);
}

export const editUser = async(data,headers)=>{
    return await commonFunction("POST", `${baseUrl}/admin/editUser`, data, headers);
}