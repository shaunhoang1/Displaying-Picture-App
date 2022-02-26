import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OZBuWiACB-WMa371oav9aWBXuGj8YmmcsBFHHwJuYe4",
  },
});
