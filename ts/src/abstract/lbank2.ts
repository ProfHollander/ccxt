// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    publicGetAccuracy (params?: {}): Promise<implicitReturnType>;
    publicGetUsdToCny (params?: {}): Promise<implicitReturnType>;
    publicGetWithdrawConfigs (params?: {}): Promise<implicitReturnType>;
    publicGetTimestamp (params?: {}): Promise<implicitReturnType>;
    publicGetTicker24hr (params?: {}): Promise<implicitReturnType>;
    publicGetTicker (params?: {}): Promise<implicitReturnType>;
    publicGetDepth (params?: {}): Promise<implicitReturnType>;
    publicGetIncrDepth (params?: {}): Promise<implicitReturnType>;
    publicGetTrades (params?: {}): Promise<implicitReturnType>;
    publicGetKline (params?: {}): Promise<implicitReturnType>;
    publicGetSupplementSystemPing (params?: {}): Promise<implicitReturnType>;
    publicGetSupplementIncrDepth (params?: {}): Promise<implicitReturnType>;
    publicGetSupplementTrades (params?: {}): Promise<implicitReturnType>;
    publicGetSupplementTickerPrice (params?: {}): Promise<implicitReturnType>;
    publicGetSupplementTickerBookTicker (params?: {}): Promise<implicitReturnType>;
    publicPostSupplementSystemStatus (params?: {}): Promise<implicitReturnType>;
    privatePostUserInfo (params?: {}): Promise<implicitReturnType>;
    privatePostSubscribeGetKey (params?: {}): Promise<implicitReturnType>;
    privatePostSubscribeRefreshKey (params?: {}): Promise<implicitReturnType>;
    privatePostSubscribeDestroyKey (params?: {}): Promise<implicitReturnType>;
    privatePostGetDepositAddress (params?: {}): Promise<implicitReturnType>;
    privatePostDepositHistory (params?: {}): Promise<implicitReturnType>;
    privatePostCreateOrder (params?: {}): Promise<implicitReturnType>;
    privatePostBatchCreateOrder (params?: {}): Promise<implicitReturnType>;
    privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
    privatePostCancelClientOrders (params?: {}): Promise<implicitReturnType>;
    privatePostOrdersInfo (params?: {}): Promise<implicitReturnType>;
    privatePostOrdersInfoHistory (params?: {}): Promise<implicitReturnType>;
    privatePostOrderTransactionDetail (params?: {}): Promise<implicitReturnType>;
    privatePostTransactionHistory (params?: {}): Promise<implicitReturnType>;
    privatePostOrdersInfoNoDeal (params?: {}): Promise<implicitReturnType>;
    privatePostWithdraw (params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawCancel (params?: {}): Promise<implicitReturnType>;
    privatePostWithdraws (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementUserInfo (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementWithdraw (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementDepositHistory (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementWithdraws (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementGetDepositAddress (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementAssetDetail (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementCustomerTradeFee (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementApiRestrictions (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementSystemPing (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementCreateOrderTest (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementCreateOrder (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementCancelOrder (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementCancelOrderBySymbol (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementOrdersInfo (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementOrdersInfoNoDeal (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementOrdersInfoHistory (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementUserInfoAccount (params?: {}): Promise<implicitReturnType>;
    privatePostSupplementTransactionHistory (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange