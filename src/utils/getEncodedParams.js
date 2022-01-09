export function getEncodedParams(params = {}) {
    return Object.keys(params)
      .filter((key) => !['', undefined, null].includes(params[key]))
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
  }