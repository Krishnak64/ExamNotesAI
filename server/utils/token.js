import jwt from "jsonwebtoken"

export const getToken = async (userId) => {
try{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "17d"}) //-------- sign-> help to assign cookies based on userId ---------
    return token
} catch(error) {
    return resizeBy.status(500).json(`gen token error ${error}`)
  }
}

