import "./styles/style.scss";

async function print() {
  // Here we are using dynamic import
  const { greet } = await import("./greet");
  const response = await greet("John Doe");
  console.log(res);
  console.log(response);
}

print();
