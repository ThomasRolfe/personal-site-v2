import instance from "../axios/AxiosInstance";

const GetPortfolioPosts = async () =>
    await instance.get(`/portfolios`, {
        // headers: {},
    });

export { GetPortfolioPosts };
