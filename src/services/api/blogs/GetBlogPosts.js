import instance from "../axios/AxiosInstance";

// Laravel sanctum returns a xsrf cookie as its response
const GetBlogPosts = async () =>
    await instance.get(`posts/?categories=1`, {
        headers: {},
    });

export { GetBlogPosts };
