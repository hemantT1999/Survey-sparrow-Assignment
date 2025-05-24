const auth = (req, res, next) => {
    // For development, let's skip auth check
    next();
};

export default auth;
