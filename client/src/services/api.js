// sending interactions to backend server to process into JSON file
// make interaction object that contains the type of interaction and its elementid
// use POST method to store the interaction

// maybe add another API to do some GET requests here to display on bar chart later
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
