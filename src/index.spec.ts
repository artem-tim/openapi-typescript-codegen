import * as OpenAPI from '.';

describe('index', () => {
    it('parses v2 without issues', () => {
        OpenAPI.generate({
            input: './test/mock/v2/spec.json',
            output: './test/result/v2/',
            useOptions: true,
            useUnionTypes: true,
            write: false,
        });
    });

    it('parses v3 without issues', () => {
        OpenAPI.generate({
            input: './test/mock/v3/spec.json',
            output: './test/result/v3/',
            useOptions: true,
            useUnionTypes: true,
            write: false,
        });
    });
});
