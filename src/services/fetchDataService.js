const ApiPoint = process.env.API_KEY;

const fetchData = async () => {
  try {
    const response = await fetch(ApiPoint + "/en/industry/public", {
      cache:"no-store",
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export default fetchData;
