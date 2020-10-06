export default async function ApiService(data) {
  const url = data.url;
  const method = data.method;
  const reqBody = data.reqBody ? data.reqBody : {};
  let reqObj = {};
  reqObj.method = method;

  reqObj.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (method === 'POST') {
    reqObj.body = reqBody ? JSON.stringify(reqBody) : null;
  }
  try {
    const res = await fetch(url, reqObj);
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
}
