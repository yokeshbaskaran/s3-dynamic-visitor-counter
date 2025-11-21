const API_URL = "https://m8k4ijx2z7.execute-api.ap-south-1.amazonaws.com/count";

function updateVisitorCount(value = null) {
  const count = value?.value ?? 0;
  document.getElementById("visitorCount").textContent = count;
  console.log("DB Data:", count);
}

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => updateVisitorCount(data))
  .catch((err) => {
    console.error(err);
    document.getElementById("visitorCount").textContent = "Error";
  });
