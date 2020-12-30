interface ISchema {
  $ref: string;
}

interface IResponseExample {
  data?: any;
  status?: number;
  message?: string;
}

interface IResponseValue {
  description?: string;
  schema?: ISchema;
  example?: IResponseExample;
}

interface IResponse {
  [key: number]: IResponseValue;
}

const defaultResponse: IResponse = {
  400: {
    description: 'Bad Request',
    schema: {
      $ref: '#/definitions/ValidationResponse',
    },
  },
  401: {
    description: 'Unauthorized access',
    example: {
      status: 401,
      message: 'Unauthorized Access',
    },
  },
  404: {
    description: 'Record does not exist',
    schema: {
      $ref: '#/definitions/ValidationResponse',
    },
  },
  500: {
    description: 'Internal Server Error',
    example: {
      status: 500,
      message: 'Internal Server Error',
    },
  },
};

export const metaResponse = {
  type: 'object',
  properties: {
    page: {
      type: 'number',
      format: 'int32',
      example: 1,
    },
  },
};

export const customResponse = (props = {}): IResponse => ({
  ...defaultResponse,
  ...props,
});

export default defaultResponse;
