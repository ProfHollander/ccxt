import os
import sys

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.append(root)

# ----------------------------------------------------------------------------

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

# ----------------------------------------------------------------------------
# -*- coding: utf-8 -*-


from ccxt.test.base import test_funding_rate_history  # noqa E402
from ccxt.test.base import test_shared_methods  # noqa E402


async def test_fetch_funding_rate_history(exchange, symbol):
    method = 'fetchFundingRateHistory'
    funding_rates_history = await exchange.fetch_funding_rate_history(symbol)
    assert isinstance(funding_rates_history, list), exchange.id + ' ' + method + ' ' + symbol + ' must return an array, returned ' + exchange.json(funding_rates_history)
    for i in range(0, len(funding_rates_history)):
        test_funding_rate_history(exchange, method, funding_rates_history[i], symbol)
    test_shared_methods.assert_timestamp_order(exchange, method, symbol, funding_rates_history)
