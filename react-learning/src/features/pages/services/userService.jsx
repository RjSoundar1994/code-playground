import api from "./AxiosInstance";

export const userService = {
    post: (payload, api) => api.post(api, payload),
    put: (payload, api) => api.put(api, payload),
    get: (payload, api) => api.post(api),
    delete: (payload, api) => api.post(api)
}