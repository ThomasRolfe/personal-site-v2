import instance from "../axios/AxiosInstance";

const GetBlogPosts = async () =>
    await instance.get(`blogs`, {
        headers: {},
    });

export { GetBlogPosts };
