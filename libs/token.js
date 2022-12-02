/**
 * * Get the Token if presents.
 *
 * @returns {string | undefined}
 */
export function getToken() {
  return window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
}
