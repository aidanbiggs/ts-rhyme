import * as fs from 'fs';

export class TsRhyme {
    constructor(dictionaryLocation: string) {
        var s = fs.createReadStream(dictionaryLocation);
        console.log(s)
    }


}

