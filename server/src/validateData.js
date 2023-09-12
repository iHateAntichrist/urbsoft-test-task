class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const validateData = (schema) => {
  const middleware = async (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);

      if (error) {
        throw new HttpError(400, error.message);
      }

      next();
    } catch (error) {
      next(error);
    }
  };

  return middleware;
};

export default validateData;
