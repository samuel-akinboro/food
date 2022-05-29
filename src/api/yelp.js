import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Axvfm1whFf2tvmMr-8Q7m1Lhfx3aJ_KBmxJ8M-zvU6aL4YQPb77koQU6eS-2BDDnRZy_r78LKFr9LR1GYAw21Sgwluol8z4GWqZqCdF9r-K2iMZkwYNxnamrjeiQYnYx'
  }
})