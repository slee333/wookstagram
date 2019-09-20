import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../generated/prisma-client";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

// Verifying if user exists. id를 토큰과 함깨 서버에서 받은 다음 해석해서 이제 유저가 존재하는지 찾는다
const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id }); // Payload에서 받은 user와 일치하는 사람을 찾는다
    if (user !== null) {
        // 유저가 존재함. User를 return
      return done(null, user);
    } else {
      return done(null, false);
      //   or I can create a new account
    }
  } catch (error) {
    console.log(error);
    return done(null, false);
  }
};

/* this is a middleware to handle token and do all authentication
Session is false ~ session creates cookies. Android or iPhone use no cookies
Passport has all info.
토큰을 만들었고, 이제 authentication을 할 차례다. Passport는 jwt strategy를 사용중
이 상황에서 passport를 사용하게 되는데, passport.authenticate를 사용하면 verifyUser가 실행되고 (null, user) 가 return
그래서 이 return 된 user를 가지고 호작질해야한다
토큰을 받아서 > 해석하고 > 사용자를 찾고 > 사용자가 존재한다면 > req object에 user 추가 > GraphQL 함수 실행
로그인 되어있다면 모든 graphql 요청에 사용자 정보가 추가되어 요청된다!*/
export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (user) {
      req.user = user; // Attaching user to request object
    }
    next();
  })(req, res, next);

// Decrypting user token with jwtOptions
passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
