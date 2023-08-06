export const fetchData = async () => {
    try {
      const response = await fetch('./products.json')
      const data = await response.json()
      return data;

    } catch (err) {
      console.log(err);
    }
  }