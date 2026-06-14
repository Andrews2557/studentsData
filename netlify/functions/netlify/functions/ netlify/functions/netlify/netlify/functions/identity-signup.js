exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const email = data.user?.email || "";

  // ONLY allow school emails
  if (!email.endsWith("@schoolofstjude.co.tz")) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Only @schoolofstjude.co.tz emails are allowed."
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Signup allowed" })
  };
};
