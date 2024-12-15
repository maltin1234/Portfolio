export async function postProject(data) {
    
    try {
      console.log("post")
      const res = await fetch(`http://127.0.0.1:8000/api/todos/todos/`, {
        method: "POST", // Use uppercase for HTTP method for consistency
        headers: {
          "Content-Type": "application/json",
          "bearer-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzNjE4MDIxLCJpYXQiOjE3MzM2MTQ0MjEsImp0aSI6ImU3MzM5NmQ4MjAxZjRjYmZhODRhYjRkMjU2YjJlOTA5IiwidXNlcl9pZCI6MTF9.q2R0kXqttcLOolEqRoB9rDRiKvKWN2FX-N7HDKjhsp", // Replace with dynamic token if needed
        },
        body: JSON.stringify(data), // Pass the `data` parameter
      });
  
      if (!res.ok) {
        const message = `An error has occurred: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
  
      const todos = await res.json();
      return todos; // Return the parsed response
    } catch (err) {
      console.error("Error posting project:", err.message); // Log specific error
      throw err; // Re-throw the error if the calling function needs to handle it
    }
  }
  