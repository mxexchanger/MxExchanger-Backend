const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // Same options will be used for set & clear
    const cookieOptions = {
        httpOnly: true,          // JS se access block
        secure: true,            // HTTPS required (prod me)
        sameSite: 'None',        // Cross-site allow
        path: '/',               // Har route ke liye
        expires: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 din
    };

    res
        .status(statusCode)
        .cookie('token', token, cookieOptions)
        .json({
            success: true,
            user,
            token
        });
};

export default sendToken;
