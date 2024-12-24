import ErrorRepository from '../app';

const myErrors = new ErrorRepository (
    // eslint-disable-next-line object-curly-newline
    { code: 1000, description: 'Internal Server Error' },
    // eslint-disable-next-line object-curly-newline
    { code: 2858, description: 'Access Denied' },
    // eslint-disable-next-line object-curly-newline
    { code: 7777, description: 'Invalid request' },
);

// eslint-disable-next-line no-undef
test('Корректность ошибки', () => {
    const recieved = myErrors.translate(2858);
    const expected = 'Access Denied';

    // eslint-disable-next-line no-undef
    expect(recieved).toBe(expected);
});

// eslint-disable-next-line no-undef
test('Возвращение сообщения об ошибке', () => {
    const recieved = myErrors.translate(777);
    const expected = 'Unknown error';

    // eslint-disable-next-line no-undef
    expect(recieved).toBe(expected);
});