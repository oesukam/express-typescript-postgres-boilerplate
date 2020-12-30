export default {
  ErrorResponse: {
    type: 'object',
    required: ['status', 'message'],
    properties: {
      status: {
        type: 'integer',
        format: 'int32',
      },
      message: {
        type: 'string',
      },
    },
  },
  ValidationResponse: {
    type: 'object',
    required: ['status', 'message'],
    properties: {
      status: {
        type: 'integer',
        format: 'int32',
        example: 400,
      },
      message: {
        type: 'string',
        example: 'Error Message',
      },
      errors: {
        type: 'object',
        properties: {
          key1: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                example: 'key1',
              },
              message: {
                type: 'string',
                example: 'key1 is required',
              },
            },
          },
          key2: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                example: 'key2',
              },
              message: {
                type: 'string',
                example: 'key2 must be a string',
              },
            },
          },
        },
      },
    },
  },
};
