const displayUserData = async () => {
  const userContainer = document.querySelector("#userContainer");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const users = await response.json();
    let html = "";
    // console.log(users);
    users.forEach((user) => {
      html += `
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${user.email}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${user.username}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${user.phone}</h6>
                    <a href="#" class="card-link">${user.website}</a>
                </div>
            </div>
        </div>
      `;
    });

    userContainer.innerHTML = html;
  } catch (error) {
    console.log("An error occured:", error);
  }
};

const fetchButton = document.querySelector("#fetchButton");
fetchButton.addEventListener("click", displayUserData);
