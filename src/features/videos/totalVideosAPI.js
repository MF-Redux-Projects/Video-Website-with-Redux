import axiosInstance from "../../utils/axios";

export const totalVideosAPI = async () => {
    const response = await axiosInstance.get(`/videos`);
    return response.data;
}