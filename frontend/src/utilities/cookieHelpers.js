/**
 * Convenience method for getting the cookie with our JWT token.
 * @param {string} name The name of the cookie our JWT token is in.
 * @returns The JWT token if the cookie exists. Empty string if it doesn't.
 */
 export const getCookieValue = (name) => {
  let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
  return result ? result.pop() : ""
}

/**
 * Hard coding our JWT token cookie name.
 */
export const token = 'babyfoodtracker_token';
