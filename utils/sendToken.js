const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    const expires = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toUTCString();

    res.setHeader('Set-Cookie', `token=${token}; Expires=${expires}; HttpOnly; Secure; SameSite=None; Partitioned`);

    res.status(statusCode).json({
        success: true,
        user,
        token,
    });
};


export default sendToken