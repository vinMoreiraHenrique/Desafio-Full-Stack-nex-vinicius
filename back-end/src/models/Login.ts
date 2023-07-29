import User, { UserAttributes } from "../models/User";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

interface authUser {
  id?: number;
  email: string;
  password: string;
}

const authenticateUser = async ({ email, password }: authUser) => {
  const user: any = await User.findOne({ where: { email: email } });
  console.log(user.password, "oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
  
  if (!user) {
    throw new Error("Usuário ou senha incorretos email");
  }

  const passMatches = bcrypt.compareSync(password, user.password);
  console.log(passMatches, "passsssssssssssssssssssssssss")
  if (!passMatches) {
    throw new Error("Usuário ou senha incorretos senha");
  }
console.log()
  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user?.id,
    }
  );
  console.log({token:token}, "tokeeeeeeeeeeeeeeeeeeen")
  return { token: token };
};

export default authenticateUser;
