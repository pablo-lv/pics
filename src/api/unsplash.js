import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID bLKnBbNl7LxtBqqSzvaO40IgO4ESnST-NhurKQVC7FQ"
    }
})
