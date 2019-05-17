import {Md5} from 'ts-md5/dist/md5';

export class Utils {

    /**
     * Genera un hash md5 de acuerdo a los parametros pasados
     * @param params array de parametros
     */
    static generateHashMd5(...params): string {
        return Md5.hashStr(params.toString()).toString();
    }
}
