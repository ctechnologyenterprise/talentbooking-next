// lib -> users -> All JS function that I use across the project.
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// JWT Utilities -> needs '.env' , I'll do this later
const jwtSecretKey = "JWT";
// Bcrypt utilities
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

// Users list
let user =
{
  id: 0,
  email: "pcts@gmail.com",
  password: "$2a$12$Ejo.wa9mDIEyYaXOWdDepuwJy9pBkk2nZkO8qpHpSksLvbrl9yD96",
}

export function findUser(email) {
  return user.email === email
}

export function isUserExists(email) {
  return findUser(email) || false;
}

// ----------------------------------------------------*
export function login(email, password) {
  if (!email) {
    return {
      error: "WRONG_CREDENTIAL",
      message: `No email address entered.`,
    };
  }

  if (!password) {
    return {
      error: "WRONG_CREDENTIAL",
      message: `No password entered.`,
    };
  }

  if (!isUserExists(email)) {
    return {
      error: "USER_NOT_FOUND",
      message: `Wrong Email and password combination.`,
    };
  }

  const hashedPassword = hashPassword(password);
  if (!checkPassword(hashedPassword, user.password)) {
    return {
      error: "WRONG_CREDENTIAL",
      message: "Wrong Email and password combination.",
    };
  }

  // Create new token by email
  console.log(user);
  const token = jwt.sign({ email: user.email, id: user.id }, jwtSecretKey, {
    expiresIn: 3000, // 50min
  });

  return {
    payload: {
      token,
    },
  };
}
// ----------------------------------------------------------------
export function register({ password, email }) {
  if (!password || !email) {
    return errorMessage("WRONG_CREDENTIAL", `email, password and email is required.`);
  }

  // Ref: https://stackoverflow.com/a/46181
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    return errorMessage("WRONG_CREDENTIAL", `${email} is wrong.`);
  }

  if (isUserExists(email)) {
    return errorMessage(
      "DUPLICATE_USER",
      `${email} has already registered. Try another email(But never mind, don't do this.)`
    );
  }

  const hashedPassword = hashPassword(password);
  const lastUser = users[users.length - 1];
  console.log(lastUser);
  const id = lastUser ? lastUser.id + 1 : 0;
  console.log("users:before", users.length);
  users = users.concat([
    {
      password: hashedPassword,
      email,
      id,
    },
  ]);
  console.log("users:after", users.length);
  console.log("users", JSON.stringify(users, null, 2));

  return {
    isSuccessful: true,
    payload: {},
  };
}

export function whoAmI(email) {
  if (!email || !isUserExists(email)) {
    return {
      error: "USER_NOT_FOUND",
      message: `${email} is not defined, make sure the user is registered before.`,
    };
  }

  const user = findUser(email);
  return {
    isSuccessful: true,
    payload: {
      email: user.email,
      id: user.id,
      email: user.email,
    },
  };
}

function hashPassword(password) {
  return bcrypt.hashSync(password, salt);
}

function checkPassword(currentHashedPassword, hashedPassword) {
  return bcrypt.compare(currentHashedPassword, hashedPassword);
}

export function verifyToken(token) {
  return jwt.verify(token, jwtSecretKey);
}

// Fojan side note :
// The find() method returns the value of the first element in the
// provided array that satisfies the provided testing function.
//  If no values satisfy the testing function, undefined is returned.

// bcrypt.compare -> return a boolean

function errorMessage(error, message) {
  return {
    isSuccessful: false,
    error,
    message,
  };
}
