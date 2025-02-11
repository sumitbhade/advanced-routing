import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  // Way 1
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // Way 1
    // return { isError: true, message: "Could not fetch data" };

    throw { message: "Could not fetch events" };
  } else {
    return response;
  }
}
