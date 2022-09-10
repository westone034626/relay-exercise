import { RequestParameters } from "relay-runtime/lib/util/RelayConcreteNode";
import { Variables } from "relay-runtime/lib/util/RelayRuntimeTypes";

export const fetchGraphQL = async (
  request: RequestParameters,
  variables: Variables
) => {
  const sessionId = localStorage.getItem("todayChecksSessionId");
  const response = await fetch(process.env.REACT_APP_SERVER_URL as string, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "X-Parse-Application-Id": process.env.REACT_APP_PARSE_APP_ID as string,
      ...(sessionId && { "X-Parse-Session-Token": JSON.parse(sessionId) }),
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  const data = await response.json();

  return data;
};
