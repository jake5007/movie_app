import axios from "axios";

const options = {
  params: {
    startYear: "2010",
    titleType: "movie",
    info: "base_info",
    endYear: "2023",
    limit: "20",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
  },
};

export const fetchData = async () => {
  const res = await axios.get(
    "https://moviesdatabase.p.rapidapi.com/titles",
    options
  );
  const data = await res.data;

  console.log(data);

  return data;
};
