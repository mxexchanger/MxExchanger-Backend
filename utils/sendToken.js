const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    res.cookie("token", token, {
        httpOnly: true,          // JavaScript se access nahi ho sakti
        secure: true,            // HTTPS ke liye
        sameSite: "none",        // Cross-site requests allow
        path: "/",               // Sab routes me available
        expires: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) // 4 days
    });

    res.status(statusCode).json({
        success: true,
        user,
        token
    });
};

export default sendToken;