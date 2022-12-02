import { register } from "@libs/users";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
  if (req.method !== "POST") {
    res.status(405).json({
      error: "METHOD_NOT_ALLOWED",
      message: `${req.method} is not allowed, please use the POST http method.`,
    });
    return;
  }

  const payload = JSON.parse(req.body);

  res.status(200).json(register(payload));
};
