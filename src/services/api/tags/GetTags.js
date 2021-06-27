import instance from "../axios/AxiosInstance";

const GetTags = async () =>
    await instance.get(`tags`, {
        headers: {},
    });

export { GetTags };
