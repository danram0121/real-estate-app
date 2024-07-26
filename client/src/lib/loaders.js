import apiRequest from "./apiRequest"

export const listDetailPageLoader = async ({request,params})=> {
    const res = await apiRequest("/posts/"+params.id);
    return res.data;
}