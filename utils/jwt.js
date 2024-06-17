import dotenv from "dotenv"
import jwt from "jsonwebtoken"
// import { redis } from "./redis.js";
dotenv.config()


const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE ||  5)
const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_RXPIRE ||  59)


export const accesstokenOption = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire* 60 *60 * 1000,
    httoOnly: true,
    sameSite:true,
}

export const refreshtokenOption = {
    expires: new Date(Date.now() + refreshTokenExpire*24 *60*60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httoOnly: true,
    sameSite:true,
}

export const sendToken = (user, statusCode, res) => {

    // const accessToken = user.SignAccessToken();
    // const refreshToken = user.SignRefreshToken();

    const accessToken = jwt.sign({id:user._id},process.env.ACCRSS_TOKEN ,{expiresIn:"3d"} )
    const refreshToken = jwt.sign({id:user._id},process.env.REFRESH_TOKEN ,{expiresIn:"3d"} )
    // redis.set(user._id, JSON.stringify(user))

    res.cookie('accessToken', accessToken, accesstokenOption);
    res.cookie('refreshToken', refreshToken, refreshtokenOption);

    res.status(statusCode).json({
        success: true,
        user,
        accessToken
    })


} 