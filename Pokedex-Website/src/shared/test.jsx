export function HelloWorld() {
  const user = {
    name: "Jorge",
    age: 25,
    country: "Colombia",
    bool: true,
  };
  return (<>
  <h1>{user.name}</h1>
  </>
  );
}
