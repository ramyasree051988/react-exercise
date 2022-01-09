/**
 * This function takes in a response from a API request and handles
 * the error object that is returned. Our current BE implementation
 * only allows us to return a 200 response which is why we need this.
 *
 * Here are some example objects that could be return from the API:
 * {
 *   error: {
 *     type: 'authorisation',
 *     messages: ['Unauthorised access'],
 *   },
 * },
 *
 * {
 *   error: {
 *     type: 'validation',
 *     messages: ['Invalid image', 'Invalid size']
 *   },
 * }
 *
 * {
 *   error: {
 *     type: 'general',
 *     messages: ['Error generating signed URL']
 *   },
 * }
 *
 * @param {object} response - This is the response.data from the API
 */
export function handleAPIErrors(response) {
  if (!response.error) {
    return response;
  }

  const { error } = response;
  /**
   * We only want validation error messages to reach the user, all other
   * error types we return a generic message.
   */
  const message = (() => {
    switch (error.type) {
      case 'authorisation': {
        return 'Whoops, something has gone wrong please try again later.';
      }
      case 'general':
        return 'Whoops, something has gone wrong please try again later.';
      case 'validation':
        return formatValidationErrors(error.messages);
      default:
        return 'Whoops, something has gone wrong please try again later.';
    }
  })();

  function formatValidationErrors(messages) {
    let validationMessage = 'The following errors have occurred;';

    messages.map((message, index) => {
      validationMessage += ` ${message}`;

      if (index === messages.length - 1) {
        validationMessage += '.';
      } else {
        validationMessage += ',';
      }
    });

    return validationMessage;
  }

  throw {
    apiError: error,
    message,
  };
}