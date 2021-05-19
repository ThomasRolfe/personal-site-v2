import instance from "../axios/AxiosInstance";

// Laravel sanctum returns a xsrf cookie as its response
const GetPortfolioPosts = async () =>
    await instance.get(`posts/?categories=16`, {
        headers: {},
    });

export { GetPortfolioPosts };
