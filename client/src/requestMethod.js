import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWRlNmJkOWVlMjA0N2JmZDVlYzYzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDIzODM5MywiZXhwIjoxNjQwNDk3NTkzfQ.PNah0OmjVWb6t0iE0XGD-t0d0vRg9yiewYTqmg1rElo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});
