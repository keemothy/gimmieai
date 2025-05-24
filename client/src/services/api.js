// sending interactions to backend server to process into JSON file
// make interaction object that contains the type of interaction and its elementid
// use POST method to store the interaction

//  add another API to do some GET requests here to display on bar chart later
export const sendInteraction = async (type, elementId) => {
  const data = {
    type,
    elementId,
  };
  const jsonData = JSON.stringify(data);

  await fetch("/api/interactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonData,
  });
};

// getting the interactions from the backend and send to barchart component to make graphs
// console log any errors bc file had some missing values earlier
// call this func inside of barcharts.jsx only and display on analytics page
export const requestInteraction = async () => {
  try {
    const response = await fetch("/api/data");
    if (!response.ok) {
      throw new Error("Couldn't get data from /api/data");
    }

    const jsonData = await response.json();
    // console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
