export const loginUser = async (email, password) => {
  const res = await fetch("/api/login", {
    body: JSON.stringify({ email, password }),
    method: "POST",
  });
  const data = await res.json();
  return data;
};
// ------------------------------------------------------------*
export const registerUser = async (payload) => {
  const res = await fetch("/api/register", {
    body: JSON.stringify(payload),
    method: "POST",
  });
  const data = await res.json();
  return data;
};

