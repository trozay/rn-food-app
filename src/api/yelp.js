import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer s2tZyiVTRLx_4McJZMwoYvIG2mXJp1tHVkfmrZeWUBxdjeWBrr-jvLYIkjFKGZ1Tn7CYunUOCyQ0jaR59joj4Q6VPdMPtwicBH-hqLPGrX7259urhoqkL-CGJ-Z3XXYx'
    }
});