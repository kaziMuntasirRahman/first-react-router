import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const { id, name, address } = user;
  return (
    <div className="flex flex-col text-center border text-2xl px-[400px]">
      <h2>id: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Address: {`${address.street}, ${address.city}, ${address.zipcode}`}</h2>
      <h2>Details About user</h2>
    </div>
  );
};

export default UserDetails;