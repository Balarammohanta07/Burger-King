document.getElementById("orderButton").addEventListener("click", () => {
  const selectedItems = Array.from(
    document.querySelectorAll(".food-item:checked")
  ).map((item) => item.value);

  if (selectedItems.length === 0) {
    alert("Please select at least one food item!");
    return;
  }

  const orderId = `Order ID: BK-${Math.floor(Math.random() * 1000)}`;
  document.getElementById("orderId").innerText = orderId;

  document.getElementById("foodImageContainer").innerHTML =
    "<p>Preparing your order...</p>";

  const prepareOrder = new Promise((resolve) => {
    const preparationTime = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve(selectedItems);
    }, preparationTime);
  });

  prepareOrder.then((items) => {

    document.getElementById("orderId").innerText += " - Order Completed!";

    document.getElementById("foodImageContainer").innerHTML = "";
    const foodImages = {
      Burger: "https://example.com/images/burger.jpg",
      Fries: "https://example.com/images/fries.jpg",
      Coke: "https://example.com/images/coke.jpg",
      "Ice Cream": "https://example.com/images/icecream.jpg",
    };

    items.forEach((item) => {
      const foodImage = document.createElement("img");
      foodImage.src = foodImages[item];
      foodImage.alt = item;
      foodImage.classList.add("food-image");
      document.getElementById("foodImageContainer").appendChild(foodImage);
    });
  });
});
