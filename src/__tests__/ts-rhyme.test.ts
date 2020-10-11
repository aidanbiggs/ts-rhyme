import {TsRhyme} from "../index";

test('My Greeter', () => {
    const instance = new TsRhyme('data/cmudict-0.7b.txt');
    console.log(instance);
    expect(true).toBe(true);
});
