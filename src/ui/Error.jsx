import { useRouteError } from "react-router-dom";

export default function Error() {
  const errorDetails = useRouteError();
  console.log(errorDetails);
  return (
    <div>
      {errorDetails.data} {errorDetails.status} {errorDetails.statusText}
    </div>
  );
}
