import instance from "../axios/AxiosInstance";

const GetTags = async () =>
    await instance.get(`tags?per_page=100`, {
        headers: {},
    });

export { GetTags };
