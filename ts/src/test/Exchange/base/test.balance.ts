
// @ts-nocheck
// ----------------------------------------------------------------------------

import assert from 'assert';
import testSharedMethods from './test.sharedMethods.js';
import Precise from '../../../base/Precise.js';

function testBalance (exchange, method, entry) {
    const format = {
        'free': {},
        'used': {},
        'total': {},
        'info': {},
    };
    const emptyNotAllowedFor = [ 'free', 'used', 'total' ];
    testSharedMethods.assertStructure (exchange, method, entry, format, emptyNotAllowedFor);
    const logText = testSharedMethods.logTemplate (exchange, method, entry);
    //
    const codes = Object.keys (entry['total']);
    for (let i = 0; i < codes.length; i++) {
        const code = codes[i];
        testSharedMethods.assertCurrencyCode (exchange, method, entry, code);
        const total = exchange.safeString (entry['total'], code);
        const free = exchange.safeString (entry['free'], code);
        const used = exchange.safeString (entry['used'], code);
        const totalDefined = total !== undefined;
        const freeDefined = free !== undefined;
        const usedDefined = used !== undefined;
        if (totalDefined && freeDefined && usedDefined) {
            const freeAndUsed = Precise.stringAdd (free, used);
            assert (Precise.stringEq (total, freeAndUsed), 'free and used do not sum to total' + logText);
        } else {
            assert (!totalDefined && freeDefined && usedDefined, 'value of "total" is missing from balance calculations' + logText);
            assert (totalDefined && !freeDefined && usedDefined, 'value of "free" is missing from balance calculations' + logText);
            assert (totalDefined && freeDefined && !usedDefined, 'value of "used" is missing from balance calculations' + logText);
        }
    }
}

export default testBalance;
