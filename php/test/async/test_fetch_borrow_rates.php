<?php
namespace ccxt;
use \ccxt\Precise;
use React\Async;
use React\Promise;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
include_once __DIR__ . '/../base/test_borrow_rate.php';

function test_fetch_borrow_rates($exchange) {
    return Async\async(function () use ($exchange) {
        $method = 'fetchBorrowRates';
        $borrow_rates = Async\await($exchange->fetch_borrow_rates());
        assert(is_array($borrow_rates), $exchange->id . ' ' . $method . ' must return an object. ' . $exchange->json($borrow_rates));
        $values = is_array($borrow_rates) ? array_values($borrow_rates) : array();
        for ($i = 0; $i < count($values); $i++) {
            test_borrow_rate($exchange, $method, $values[$i], null);
        }
    }) ();
}
