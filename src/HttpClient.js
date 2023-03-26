
let httpClient = {}

/**
 * 
 * @param {*} path 
 * @param {*} params 
 * @param {*} options
 * 
 * @returns { status, data, message }
 */
// eslint-disable-next-line no-unused-expressions
httpClient.get = async (path, params, options) => {
  try {
    let requestOptions = Object.assign({
      headers: {
        "Content-Type": "application/json",
      },
    }, options);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/${path}` + new URLSearchParams(params),
      requestOptions
    );
    const data = await response.json();

    return {
      status: data.status,
      data: data.data
    }
  } catch (error) {
    return httpClient.handleCatch(error);
  }
// eslint-disable-next-line no-sequences
},

httpClient.post = async(path, formData, options) => {
  try {
    let requestOptions = Object.assign({
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }, options);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/${path}`, requestOptions)
    const data = await response.json();

    return {
      status: data.status,
      data: data.data
    }
  } catch (error) {
    return httpClient.handleCatch(error);
  }
},

httpClient.put = async (path, formData, options) => {
  let opts = options || {};
  opts.method = 'PUT';

  return await this.post(path, formData, opts);
},

httpClient.handleCatch = (error) =>  {
  return {
    status: 'error',
    data: null,
    message: error.message
  }
}

export default httpClient;